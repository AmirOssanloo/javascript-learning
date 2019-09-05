const { app, BrowserWindow, dialog } = require('electron');
const fs = require('fs');

let win;

const createWin = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');
  win.webContents.openDevTools();

  win.on('close', () => {
    win = null;
  });
};

app.on('ready', () => {
  createWin();

  let options = {
    title: 'Custom title bar',
    defaultPath: 'D:\\electron-app',
    buttonLabel: 'Custom button',
    filters: [],
    properties: ['openDirectory']
  };

  dialog
    .showOpenDialog(win, options)
    .then(res => {
      console.log(res);
      fs.mkdirSync(
        `${res.filePaths}/Electron-made`,
        { recursive: true },
        err => {
          console.log(err);
        }
      );
    })
    .catch(err => {
      console.log(err);
    });
});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (win === null) {
    createWin();
  }
});
