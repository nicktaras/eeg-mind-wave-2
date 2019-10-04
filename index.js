var SerialPort = require('serialport');
var port = new SerialPort('/dev/tty.MindWaveMobile-SerialPo-15', {
  baudRate: 9600
});

port.write('main screen turn on', function (err) {
  if (err) {
    return console.log('Error on write: ', err.message);
  }
  console.log('message written');
});

port.on('data', function (data) {
  console.log('Data:', data);
});

// Open errors will be emitted as an error event
port.on('error', function (err) {
  console.log('Error: ', err.message);
})
