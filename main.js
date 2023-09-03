const { app, BrowserWindow, ipcMain } = require('electron');

let win = null;

const createWindow = () =>{
    win = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false, // can't change the size of window
        webPreferences: {
            nodeIntegration: true // access to node func. and node API
        }
    })

    win.loadFile("index.html");
};

app.whenReady().then(createWindow);

ipcMain.on('navigate-to-page2', () => {
    win.loadFile('page2.html') // Load the second page
});