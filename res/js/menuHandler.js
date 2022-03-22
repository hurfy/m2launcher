const $ = require('jquery');
const {remote} = require('electron');
var win = remote.getCurrentWindow();

$('#hide').click(function(){
  win.minimize();
});

$('#close').click(function(){
  win.close();
});
