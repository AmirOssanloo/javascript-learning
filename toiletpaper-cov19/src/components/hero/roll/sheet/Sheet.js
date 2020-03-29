import imageCache from '#src/assets';

function Sheet() {
  this.img = imageCache.getTag('sheet_texture');
  this.canvas = document.createElement('canvas');
  this.ctx = this.canvas.getContext('2d');

  /* Initiate
  ============================================ */
  this.draw();

  return this;
};

Sheet.prototype.draw = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  const sheets = Math.ceil(this.canvas.height / this.img.height);

  for (var i = 0; i < sheets; i++) {
    const dx = this.img.width * 0;
    const dy = this.img.height * i;
    const { width, height } = this.img;

    this.ctx.drawImage(this.img, 0, 0, width, height, dx, dy, width, height);
  }

  // this.ctx.save();
  // this.ctx.globalAlpha = 0.85;
  // this.ctx.globalCompositeOperation = "luminosity";
  // this.ctx.font = '18px Lato';
  // this.ctx.fillText('They see you rollin', 40, 150);
  // this.ctx.restore();
};

export default Sheet;
