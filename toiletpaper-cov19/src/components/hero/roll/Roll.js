import Sheet from './sheet/Sheet';
// import Particles from './particles/Particles';
import { imageCache } from '#utils/imageCache';
// import { random } from '#utils/math';

function Roll(canvas, onIncrementSheet, onSetHasInteracted) {
  console.log(onSetHasInteracted);

  this.sheet = new Sheet();
  this.container = canvas.parentElement;
  this.onIncrementSheet = onIncrementSheet;
  this.onSetHasInteracted = onSetHasInteracted;

  this.width = this.sheet.img.width;
  this.height = this.container.offsetHeight;
  this.dragging = false;
  this.originY = 0;
  this.offsetY = 0;
  this.offsetYMax = this.sheet.img.height;
  this.inputX = 0;
  this.inputY = 0;
  this.lastInputX = 0;
  this.lastInputY = 0;
  this.originAngle = 0;
  this.speed = 0;
  this.speedMax = 24;
  this.friction = 0.97;

  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.canvas.id = 'roll-canvas';
  this.canvas.style.cursor = 'grab';

  // this.particles = new Particles(this.ctx);

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

    this.onSetHasInteracted(true);
    this.setInputPosition(e);
    this.dragging = true;
    this.canvas.style.cursor = 'grabbing';
    // this.particles.start();
  };

  function onInputUp(e) {
    e.preventDefault();

    this.dragging = false;
    this.canvas.style.cursor = 'grab';
    // this.particles.stop();
  };

  function onInputMove(e) {
    e.preventDefault();

    if (this.dragging) {
      this.setInputPosition(e);
    }
  };

  function onWindowResize(e) {
    this.width = this.sheet.img.width;
    this.height = this.container.offsetHeight;

    if (this.height < 400) {
      this.height = 400;
    }

    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.sheet.canvas.width = this.width;
    this.sheet.canvas.height = this.sheet.img.height * 3;

    this.sheet.draw();
    this.draw();
  };

  return this;
};

Roll.prototype.setInputPosition = function(e) {
  if (e.clientY && e.clientY) {
    this.inputX = e.clientX;
    this.inputY = e.clientY;
  } else {
    this.inputX = e.touches[0].clientX;
    this.inputY = e.touches[0].clientY;
  }
}

Roll.prototype.draw = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

  const offsetOverlap = 40;
  const offsetRepeat = (this.sheet.img.height * 3) + offsetOverlap;

  // Texture
  this.ctx.drawImage(this.sheet.canvas, 0, this.offsetY - offsetRepeat, this.sheet.canvas.width, this.sheet.canvas.height);
  this.ctx.drawImage(this.sheet.canvas, 0, this.offsetY - offsetOverlap, this.sheet.canvas.width, this.sheet.canvas.height);
  this.canvas.style.transform = `translate(0, ${this.originY}px)`;

  // Gradients
  const rollGradient = imageCache['roll_gradient'];
  this.ctx.drawImage(rollGradient, 0, 0);

};

Roll.prototype.update = function() {
  requestAnimationFrame(this.update.bind(this));

  // Roll sine wave
  const ampitude = 1;
  this.originY = ampitude + Math.sin(this.originAngle) * ampitude;

  // Roll offset
  if (this.offsetY >= this.offsetYMax * 3) {
    this.offsetY = 0;
    this.onIncrementSheet();
  }

  this.offsetY += this.speed;
  this.originAngle += (this.speed * 0.05);

  // Sheet movement
  if (this.dragging) {
    let dy = this.inputY - this.lastInputY;
    this.speed = dy;
    this.lastInputY = this.inputY;
  }

  if (this.speed <= 0) this.speed = 0;
  if (this.speed >= this.speedMax) this.speed = this.speedMax;

  if (!this.dragging) {
    this.speed *= this.friction;
  }

  this.draw();

  // Particles
  // let { x, y } = this.canvas.getBoundingClientRect();
  // this.particles.emitter.x = (this.inputX - x) + random(-15, 15);
  // this.particles.emitter.y = (this.inputY - y);

  // this.particles.update();
};

export default Roll;
