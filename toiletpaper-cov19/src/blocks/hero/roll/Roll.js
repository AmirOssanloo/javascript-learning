import Sheet from './sheet/Sheet';
import { imageCache } from '#utils/imageCache';

function Roll(canvas) {
  this.sheet = new Sheet();
  this.container = canvas.parentElement;

  this.width = this.sheet.img.width;
  this.height = this.container.offsetHeight;
  this.dragging = false;
  this.originY = 0;
  this.offsetY = 0;
  this.offsetYMax = this.sheet.img.height;
  this.lastInputY = 0;
  this.originAngle = 0;
  this.speedY = 0;

  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.canvas.id = 'roll-canvas';
  this.canvas.style.cursor = 'grab';

  /* Initiate
  ============================================ */
  onWindowResize.bind(this)();
  this.update();

  /* Event listeners
  ============================================ */
  this.canvas.addEventListener('mousedown', onInputDown.bind(this));
  this.canvas.addEventListener('touchstart', onInputDown.bind(this));
  this.canvas.addEventListener('mousemove', onInputMove.bind(this));
  this.canvas.addEventListener('touchmove', onInputMove.bind(this));
  window.addEventListener('mouseup', onInputUp.bind(this));
  window.addEventListener('touchend', onInputUp.bind(this));
  window.addEventListener('resize', onWindowResize.bind(this));

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

    let InputY = 0;

    if (this.dragging) {
      if (e.clientY) InputY = e.clientY;
      else InputY = e.touches[0].clientY;

      let dy = InputY - this.lastInputY;

      if (dy <= 0) dy = 0;
      if (dy >= 8) dy = 8;

      this.speedY = dy;
      this.lastInputY = InputY;
    }
  };

  function onWindowResize(e) {
    this.width = this.sheet.img.width;
    this.height = this.container.offsetHeight;

    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.sheet.canvas.width = this.width;
    this.sheet.canvas.height = this.height;

    this.sheet.draw();
    this.draw();
  };

  return this;
};

Roll.prototype.draw = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

  const offsetRepeat = this.sheet.img.height;
  const offsetOverlap = 0;

  // Texture
  this.ctx.drawImage(this.sheet.canvas, 0, this.offsetY - offsetRepeat, this.sheet.canvas.width, this.sheet.canvas.height);
  this.ctx.drawImage(this.sheet.canvas, 0, this.offsetY - offsetOverlap, this.sheet.canvas.width, this.sheet.canvas.height);
  this.canvas.style.transform = `translate(0, ${this.originY}px)`;

  // Gradients
  const rollGradient = imageCache['roll_gradient'];
  this.ctx.drawImage(rollGradient, 0, 0);
};

Roll.prototype.update = function () {
  requestAnimationFrame(this.update.bind(this));

  // Roll sine wave
  const ampitude = 1.; 5
  this.originY = ampitude + Math.sin(this.originAngle) * ampitude;

  // Roll offset
  if (this.offsetY >= this.offsetYMax) {
    this.offsetY = 0;
  }

  this.offsetY += this.speedY;
  this.originAngle += (this.speedY * 0.05);

  if (!this.dragging) {
    this.speedY *= 0.94;
  }

  this.draw();
};

export default Roll;
