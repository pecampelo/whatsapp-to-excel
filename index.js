const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 450
    })
win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow();
})


