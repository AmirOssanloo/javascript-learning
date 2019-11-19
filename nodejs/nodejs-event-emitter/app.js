const Emitter = require('./Emitter');
const emitter = new Emitter();

emitter.on('click', () => {
  console.log('Something was clicked');
});

emitter.on('click', () => {
  console.log('Another thing was clicked');
});

emitter.emit('click');
