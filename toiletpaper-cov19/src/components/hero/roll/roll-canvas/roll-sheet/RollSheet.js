import imageCache from '#src/assets';

function RollSheet() {
  this.img = imageCache.getTag('sheet_texture');
  this.canvas = document.createElement('canvas');
  this.ctx = this.canvas.getContext('2d');
  this.sheets = 0;

  /* Initiate
  ============================================ */
  this.draw();

  return this;
};

RollSheet.prototype.draw = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

  for (var i = 0; i < this.sheets; i++) {
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

export default RollSheet;
