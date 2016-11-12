var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
// editor.getSession().setMode("ace/mode/javascript");
var EditSession = require("ace/edit_session").EditSession;
var js = new EditSession("some js code");
var css = new EditSession(["some","css","code here"]);
editor.setSession(js);