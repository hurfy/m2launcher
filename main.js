const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1024,
    height: 650,
    icon: __dirname + "/res/img/m2logo.png",
    frame: false,
    resizable: false,
    movable: true,
    center: true,
    enableRemoteModule: true,
  });
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true,
    })
  );
  win.on("closed", () => {
    win = null;
  });
  win.openDevTools();
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
