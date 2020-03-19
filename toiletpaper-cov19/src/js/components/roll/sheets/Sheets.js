import { imageCache } from '../../../utils/helpers';

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

Sheets.prototype.draw = function() {
  const sheetTexture = imageCache['sheet_texture'];
  const sheetWidth = sheetTexture.width;
  const sheetHeight = sheetTexture.height;
  const sheetCount = Math.ceil(this.canvas.height / sheetHeight);

  for (var i = 0; i < sheetCount; i++) {
    const sheetX = 0;
    const sheetY = sheetHeight * i;
    this.ctx.drawImage(sheetTexture, 0, 0, sheetWidth, sheetHeight, sheetX, sheetY, sheetWidth, sheetHeight);
  }
};

Sheets.prototype.onWindowResize = function() {
  this.canvas.width = this.sheetWidth;
  this.canvas.height = this.container.offsetHeight;
  this.draw();
};

export default Sheets;