var child_process = require('child_process');
var os = require('os');
var path = require('path');

function plugin(context) {
  context.spawn.commands['edge'] = function(command, args, options) {
    return spawn(args, options);
  };
}

module.exports = plugin;

function spawn(args, options) {
  var command = path.resolve(__dirname, '..', 'node_modules', 'edge-diagnostics-adapter', 'dist', os.arch(), 'EdgeDiagnosticsAdapter.exe');

  args = [
    '--launch',
  ].concat(args);

  return child_process.spawn(command, args, options);
}

module.exports.spawn = spawn;
