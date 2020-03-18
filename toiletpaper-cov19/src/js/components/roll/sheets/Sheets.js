import { imageCache } from '../../../utils/helpers';

function Sheets() {
  this.sheetWidth = 240;
  this.sheetHeight = 308;

  this.canvas = document.createElement('canvas');
  this.ctx = this.canvas.getContext('2d');

  this.canvas.width = this.sheetWidth;
  this.canvas.height = window.innerHeight;
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
  const sheetCount = Math.ceil(window.innerHeight / sheetHeight);

  for (var i = 0; i < sheetCount; i++) {
    const sheetX = (this.canvas.width - sheetWidth) / 2;
    const sheetY = sheetHeight * i;

    this.ctx.drawImage(
      sheetTexture,
      0,
      0,
      sheetWidth,
      sheetHeight,
      sheetX,
      sheetY,
      sheetWidth,
      sheetHeight
    );
  }
};

Sheets.prototype.onWindowResize = function() {
  if (window.innerHeight >= 760) {
    this.canvas.height = window.innerHeight;
  }

  this.draw();
};

export default Sheets;