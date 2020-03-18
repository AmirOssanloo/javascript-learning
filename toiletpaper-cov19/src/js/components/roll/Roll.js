import Sheets from './sheets/Sheets';
import { imageCache } from '../../utils/helpers';

function Roll() {
  this.sheets = new Sheets();
  this.dragging = false;
  this.speed = 0;
  this.offsetY = 0;
  this.offsetYMax = this.sheets.sheetHeight;
  this.lastMouseY = 0;
  this.rolls = 0;
  
  this.container = document.querySelector('#hero');
  this.canvas = document.createElement('canvas');
  this.ctx = this.canvas.getContext('2d');
  
  this.canvas.width = this.sheets.sheetWidth;
  this.canvas.height = this.container.offsetHeight;
  this.canvas.id = 'roll-canvas';
  this.canvas.style.cursor = 'grab';

  /* Initiate
  ============================================ */
  this.onWindowResize();
  this.draw();

  /* Event listeners
  ============================================ */
  this.canvas.addEventListener('mousedown', onMouseDown.bind(this));
  this.canvas.addEventListener('mouseup', onMouseUp.bind(this));
  this.canvas.addEventListener('mousemove', onMouseMove.bind(this));

  /* Event handlers
  ============================================ */
  function onMouseDown() {
    this.dragging = true;
    this.canvas.style.cursor = 'grabbing';
  };
  
  function onMouseUp() {
    this.dragging = false;
    this.canvas.style.cursor = 'grab';
  };
  
  function onMouseMove(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    if (mouseX > 0 && mouseX < this.canvas.width) {
      console.log('inside')
    }

    if (this.dragging) {;
      let dy = mouseY - this.lastMouseY;
    
      if (dy <= 0) dy = 0;
      if (dy >= 8) dy = 8;
      
      this.speed = dy;
      this.lastMouseY = mouseY;
    }
  };

  return this;
};

Roll.prototype.draw = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

  for (var i = 0; i < 2; i++) {
    const offsetRepeat = (i * 400);

    // Texture
    // this.ctx.drawImage(this.sheets.canvas, 50 * i, offsetRepeat, this.canvas.width, this.canvas.height, 0, 0, this.canvas.width, this.canvas.height);
    // this.ctx.drawImage(this.sheets.canvas, 0, -this.offsetY + offsetRepeat, this.canvas.width, this.canvas.height, 0, 0, this.canvas.width, this.canvas.height);
    // this.ctx.globalCompositeOperation = 'destination-in';
    
    // // Mask
    // this.ctx.fillStyle = '#00ffff';
    // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    // this.ctx.globalCompositeOperation = 'source-over';

    // // Gradients
    // const rollGradient = imageCache['roll_gradient'];
    // this.ctx.drawImage(rollGradient, 0, 0);
  }
};

Roll.prototype.update = function() {
  this.draw();

  if (this.offsetY >= this.offsetYMax) {
    this.offsetY = 0;
    this.rolls += 1;
  }

  this.offsetY += this.speed;

  if (!this.dragging) {
    this.speed *= 0.94;
  }
};

Roll.prototype.onWindowResize = function() {
  this.canvas.width = this.sheets.sheetWidth;
  this.canvas.height = this.container.offsetHeight;
  // if (window.innerHeight >= 760) {
  //   this.canvas.height = window.innerHeight - 110;
  // }
  
  // this.sheets.onWindowResize();
};

export default Roll;