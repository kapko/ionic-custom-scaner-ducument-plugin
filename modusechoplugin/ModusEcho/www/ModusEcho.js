var exec = require('cordova/exec');

exports.echo = function(arg0, success, error) {
  exec(success, error, "ModusEcho", "echo", [arg0]);
};

// exports.getAlert = function(val) {
//  return alert(val);
// }
