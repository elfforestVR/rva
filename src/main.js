const {app, BrowserWindow, Menu, dialog} = require('electron')
const path = require('path')
const fs = require('fs');

try {
  require('electron-reloader')(module
);}catch{}

let mainWindow;

const MENU_BAR = [
  {
    label: "File",
    submenu: [
      {
        label: "New File",
        accelerator: "Ctrl+N",
        click() {
          NewFile();
        }
      },
      {
        label: "Save File",
        accelerator: "Ctrl+S",
        click: async () => {
          await mainWindow.webContents.send("saveFile");
        }
      },
      {
        label: "open file",
        accelerator: "Ctrl+O",
        click() {
          OpenFile();
        }
      },
      {
        label: "exit",
        accelerator: "Ctrl+X",
        click() {
          // OpenFile();
          app.exit();
        }
      }
    ]

  }


]

const MENU = Menu.buildFromTemplate(MENU_BAR);
Menu.setApplicationMenu(MENU);


function createWindow () {
  // Create the browser window.
  const MAIN_WINDOWS = new BrowserWindow({
    width: 800,
    height: 600,
    y: 0,
    x: 0,

    frame: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    }
  })

  // and load the index.html of the app.
  MAIN_WINDOWS.loadFile('./src/index..html')
  // влючить режим отлатки
  MAIN_WINDOWS.webContents.openDevTools();
}

//
//
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

//
//

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
