const { app, BrowserWindow, ipcMain } = require('electron');

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

  ipcMain.on('hello-channel', (event, args) => {
    console.log('Received a message from Renderer Process');
    console.log(args);
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
