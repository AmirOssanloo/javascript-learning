import sheetTexture from '#static/images/sheet_texture.jpg';

function Sheets() {
  this.sheetWidth = 240;
  this.sheetHeight = 308;

  this.container = document.querySelector('#hero');
  this.canvas = document.createElement('canvas');
  this.ctx = this.canvas.getContext('2d');

  this.canvas.width = this.sheetWidth;
  this.canvas.height = this.container.offsetHeight;
  this.canvas.style.position = 'absolute';

  /* Initiate
  ============================================ */
  this.onWindowResize();
  this.draw();

  return this;
}

Sheets.prototype.draw = function () {
  const sheetCount = Math.ceil(this.canvas.height / this.sheetHeight);
  const sheetImg = new Image();
  sheetImg.src = sheetTexture;

  for (var i = 0; i < sheetCount; i++) {
    const sheetX = 0;
    const sheetY = this.sheetHeight * i;
    this.ctx.drawImage(sheetImg, 0, 0, this.sheetWidth, this.sheetHeight, sheetX, sheetY, this.sheetWidth, this.sheetHeight);
  }
};

Sheets.prototype.onWindowResize = function () {
  this.canvas.width = this.sheetWidth;
  this.canvas.height = this.container.offsetHeight;
  this.draw();
};

export default Sheets;
