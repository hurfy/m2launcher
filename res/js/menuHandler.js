const { remote } = require("electron");
var win = remote.getCurrentWindow();

document.getElementById("hide").onclick = function () {
  win.minimize();
};

document.getElementById("close").onclick = function () {
  win.close();
};
