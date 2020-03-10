const fs = require('fs');
const https = require('https');
const readline = require('readline');
const { google } = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/drive'];
const TOKEN_PATH = 'token.json';
let TIMER_LOG = {};
let timer = 0;

fs.readFile('./src/credentials.json', (err, content) => {
  if (err) {
    return console.error(`Error loading credentials file: ${err}`);
  }

  authorize(JSON.parse(content), uploadFiles);
});

function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) {
      return getAccessToken(oAuth2Client, callback);
    }

    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });

  console.log(`Authorize this app by visiting this url: ${authUrl}`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();

    oAuth2Client.getToken(code, (err, token) => {
      if (err) {
        return console.error(`Error retrieving access token ${err}`);
      }

      oAuth2Client.setCredentials(token);
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) {
          return console.error(`Error writing to file ${err}`);
        }

        console.log(`Token stored to ${TOKEN_PATH}`);
      });

      callback(oAuth2Client);
    });
  });
}

function uploadFiles(auth) {
  fs.readdir('./static/', (err, files) => {
    if (err) {
      return console.error(`Unable to scan directory ${err}`);
    } 

    timer = Date.now();

    files.forEach(file => {
      uploadFile(auth, '1mb', file);
    });
  });
}

function createFolder() {
  const folderMetadata = {
    name: 'child5',
    mimeType: 'application/vnd.google-apps.folder',
};
}

function uploadFile(auth, path, filename) {
  const drive = google.drive({version: 'v3', auth});
  const fileMetadata = {
    name: filename,
    parents: path
  };

  const media = {
    mimeType: 'image/jpeg',
    body: fs.createReadStream(`./static/${filename}`)
  };

  drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: 'id'
  }, function (err, file) {
    if (err) {
      console.error(err);
    } else {
      console.log('File Id: ', file.data.id);

      TIMER_LOG = {
        ...TIMER_LOG,
        [file.data.id]: Date.now() - timer
      }

      fs.writeFile('timer-log.json', JSON.stringify(TIMER_LOG), (err) => {
        if (err) {
          return console.error(`Error writing to file ${err}`);
        }

        console.log(`Token stored to timer-log.json`);
      });
    }
  });
}

function listFiles(auth) {
  const drive = google.drive({ version: 'v3', auth });

  drive.files.list({
    pageSize: 10,
    fields: 'nextPageToken, files(id, name)'
  }, (err, res) => {
    if (err) {
      return console.error(`The API returned an error ${err}`);
    }

    const files = res.data.files;

    if (files.length) {
      console.log('Files:');

      files.map(file => {
        console.log(`${file.name} (${file.id})`);
      });
    } else {
      console.log('No files found.');
    }
  });
}