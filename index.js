const { app, Menu, BrowserWindow } = require('electron');
const twig = require('electron-twig');

const menu_template = [
  {
    label: "Settings",
    submenu: [
      { label: "Connect",
        click () { alert('you will connect !') }
      }
    ]
  },
  {
    label: "Fullscreen mode",
    role: "togglefullscreen"
  }
];

const menu = Menu.buildFromTemplate(menu_template);
Menu.setApplicationMenu(menu);

function createWindow(){

  win = new BrowserWindow({width: 800, height: 600});

  win.loadFile('views/index.html.twig');
  win.webContents.openDevTools();

  win.maximize()

  win.on('closed', () => {
    win = null;
  });

}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
});

app.on('activate', () => {
  if(win == null){
    createWindow();
  }
});
