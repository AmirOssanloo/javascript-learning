import Sheets from './sheets/Sheets';
import { imageCache } from '../../utils/helpers';

function Roll() {
  // this.sheets = new Sheets();
  // this.dragging = false;
  // this.speed = 0;
  // this.originY = 0;
  // this.originAngle = 0;
  // this.offsetY = 0;
  // this.offsetYMax = this.sheets.sheetHeight;
  // this.lastInputY = 0;
  // this.rolls = 0;

  // this.container = document.querySelector('#hero');
  // this.canvas = document.createElement('canvas');
  // this.ctx = this.canvas.getContext('2d');

  // this.canvas.width = this.sheets.sheetWidth;
  // this.canvas.height = this.container.offsetHeight;
  // this.canvas.id = 'roll-canvas';
  // this.canvas.style.cursor = 'grab';

  /* Initiate
  ============================================ */
  // this.onWindowResize();
  // this.draw();

  /* Event listeners
  ============================================ */
  this.canvas.addEventListener('mousedown', onInputDown.bind(this));
  this.canvas.addEventListener('mouseup', onInputUp.bind(this));
  this.canvas.addEventListener('mousemove', onInputMove.bind(this));
  this.canvas.addEventListener('touchstart', onInputDown.bind(this));
  this.canvas.addEventListener('touchend', onInputUp.bind(this));
  this.canvas.addEventListener('touchmove', onInputMove.bind(this));

  /* Event handlers
  ============================================ */
  function onInputDown(e) {
    e.preventDefault();

    this.dragging = true;
    this.canvas.style.cursor = 'grabbing';
  };

  function onInputUp(e) {
    e.preventDefault();

    this.dragging = false;
    this.canvas.style.cursor = 'grab';
  };

  function onInputMove(e) {
    e.preventDefault();

    let InputX = e.clientX;
    let InputY = e.clientY;

    if (e.clientX && e.clientY) {
      InputX = e.clientX;
      InputY = e.clientY;
    } else {
      InputX = e.touches[0].clientX;
      InputY = e.touches[0].clientY;
    }

    if (this.dragging) {
      ;
      let dy = InputY - this.lastInputY;

      if (dy <= 0) dy = 0;
      if (dy >= 8) dy = 8;

      this.speed = dy;
      this.lastInputY = InputY;
    }
  };

  return this;
};

Roll.prototype.draw = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

  const offsetRepeat = this.sheets.sheetHeight + 10;
  const offsetOverlap = 20;

  // Texture
  // this.ctx.drawImage(this.sheets.canvas, 0, 0, this.canvas.width, this.canvas.height, 0, this.originY + 1, this.canvas.width, this.canvas.height);
  this.ctx.drawImage(this.sheets.canvas, 0, this.offsetY - offsetRepeat, this.sheets.canvas.width, this.sheets.canvas.height);
  this.ctx.drawImage(this.sheets.canvas, 0, this.offsetY - offsetOverlap, this.sheets.canvas.width, this.sheets.canvas.height);
  this.canvas.style.transform = `translate(0, ${this.originY}px)`;

  // // Gradients
  const rollGradient = imageCache['roll_gradient'];
  this.ctx.drawImage(rollGradient, 0, 0);
};

Roll.prototype.update = function () {

  // Roll sine wave
  const ampitude = 1.; 5
  this.originY = ampitude + Math.sin(this.originAngle) * ampitude;

  // Roll offset
  if (this.offsetY >= this.offsetYMax) {
    this.offsetY = 0;
    this.rolls += 1;
  }

  this.offsetY += this.speed;
  this.originAngle += (this.speed * 0.05);

  if (!this.dragging) {
    this.speed *= 0.94;
  }

  this.draw();
};

// Roll.prototype.onWindowResize = function () {
//   this.canvas.width = this.sheets.sheetWidth;
//   this.canvas.height = this.container.offsetHeight;

//   this.sheets.onWindowResize();
//   this.draw();
// };

export default Roll;
