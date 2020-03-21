import Sheet from './sheet/Sheet';

function Roll(canvas) {
  this.sheet = new Sheet();
  this.container = canvas.parentElement;
  this.width = this.sheet.img.width;
  this.height = this.container.offsetHeight;

  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.canvas.id = 'roll-canvas';
  this.canvas.style.cursor = 'grab';

  /* Initiate
  ============================================ */
  onWindowResize.bind(this)();
  this.draw();

  /* Event listeners
  ============================================ */
  window.addEventListener('resize', onWindowResize.bind(this));

  /* Event handlers
  ============================================ */
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
  this.ctx.drawImage(this.sheet.canvas, 0, 0, this.canvas.width, this.canvas.height);
  console.log(this.sheet.canvas);
};

export default Roll;
