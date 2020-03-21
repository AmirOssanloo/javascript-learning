import { imageCache } from '#utils/imageCache';

function Sheet() {
  this.img = imageCache['sheet_texture'];
  this.canvas = document.createElement('canvas');
  this.ctx = this.canvas.getContext('2d');

  /* Initiate
  ============================================ */
  this.draw();

  return this;
};

Sheet.prototype.draw = function () {
  const sheets = Math.ceil(this.canvas.height / this.img.height);

  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

  for (var i = 0; i < sheets; i++) {
    const dx = this.img.width * 0;
    const dy = this.img.height * i;
    const { width, height } = this.img;

    this.ctx.drawImage(this.img, 0, 0, width, height, dx, dy, width, height);
  }
};

export default Sheet;
