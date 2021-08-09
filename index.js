const { app, BrowserWindow } = require('electron');
const format = require('./format')

function createWindow() {
    const win = new BrowserWindow({
        width: 550,
        height: 750
    })
win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow();
})


