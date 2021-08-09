const { app, BrowserWindow } = require('electron');

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

const contacts = document.getElementById('contacts');
const excel = document.getElementById('excel')
function getExcel() {
    return (excel !== 'undefined') ? excel : excel = new File(['foo'], "foo.xls", {type: 'application/vnd.ms-excel'})       
}
const indicator = document.getElementById('indicator');
const indicatorPhone = document.getElementById('indicatorPhone');
const commentary = document.getElementById('commentary');

module.exports = {
    getExcel
}


