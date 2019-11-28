const SerialPort = require('serialport');
const port = new SerialPort('/dev/tty.MindWaveMobile-SerialPo-15', { baudRate: 9600 });

// device turned on
port.write('turn on', function (err) {
  if (err) return console.log('Error on write: ', err.message);
  console.log('message written');
});

// data from headset.
let streamBuffer = null;

// Read from stream
port.on('data', function (data) {
  streamBuffer = Buffer.from(data);
});

// Read data each 2 seconds
setInterval(() => {
  const bufferToJSON = JSON.stringify(streamBuffer);
  const dataObj = JSON.parse(bufferToJSON);
  console.log('blink state: ', dataObj.data[5]);
  console.log('relaxed state:', dataObj.data[6]);
  console.log('focus state:', dataObj.data[7]);
}, 2000);

// Open errors will be emitted as an error event
port.on('error', function (err) {
  console.log('Error: ', err.message);
})
