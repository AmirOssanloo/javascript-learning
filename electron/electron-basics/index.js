const { app, BrowserWindow, dialog } = require('electron');

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
});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (win === null) {
    createWin();
  }
});
