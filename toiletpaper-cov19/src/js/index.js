import { imageCache, preloadImages } from './utils/helpers';
import sheetTexture from '../static/sheet_texture.png';


function init() {
  const images = [
    { id: 'sheet_texture', src: sheetTexture }
  ];

  preloadImages(images, onReady);
};

function onReady() {
  let innerWidth = window.innerWidth;
  let innerHeight = window.innerHeight;

  const root = document.querySelector('#app-root');
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const sheets = new Sheets();

  canvas.width = 320;
  canvas.height = window.innerHeight;
  canvas.style.position = 'absolute';

  let rollOffsetX = 0;
  let rollOffsetY = 0;

  function draw() {
    const rollWidth = 300;
    const rollHeight = sheets.canvas.height;
    const rollX = (canvas.width - rollWidth) / 2;
    const rollY = 0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < 2; i++) {
      const rollOffsetRepeat = (i * 400);

      ctx.drawImage(
        sheets.canvas,
        -rollOffsetX,
        -rollOffsetY + rollOffsetRepeat,
        rollWidth,
        rollHeight,
        rollX,
        rollY,
        rollWidth,
        rollHeight
      );
    }

    if (rollOffsetY >= 400) rollOffsetY = 0;
    

    rollOffsetX += 0;
    rollOffsetY += 1;
  };
  
  function update() {
    requestAnimationFrame(update.bind(this));
    draw();
  };


  //
  root.appendChild(canvas);
  update();

  //
  window.addEventListener('resize', onResize);
  window.removeEventListener('DOMContentLoaded', init);

  //
  function onResize() {
    innerWidth = window.innerWidth;
    innerHeight = window.innerHeight;
    canvas.height = innerHeight;
    sheets.onResize();
  };
};

window.addEventListener('DOMContentLoaded', init);

//
function Sheets() {
  this.canvas = document.createElement('canvas');
  this.ctx = this.canvas.getContext('2d');

  this.canvas.width = 300;
  this.canvas.height = window.innerHeight;
  this.canvas.style.position = 'absolute';

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

Sheets.prototype.onResize = function() {
  if (window.innerHeight >= 400) {
    this.canvas.height = window.innerHeight;
  } else {
    this.canvas.height = 400;
  }
  

  this.draw();
};

//   let width = window.innerWidth;
//   let height = window.innerHeight;
//   let dragging = false;
//   let offset = 0;
//   let speed = 0;

//   // /* Create
//   // ============================================ */
//   const root = document.querySelector('#app-root');
//   const canvas = document.createElement('canvas');
//   const ctx = canvas.getContext('2d');
//   const sheet = new Sheet();

//   canvas.width = width;
//   canvas.height = height;

//   function loop() {
//     requestAnimationFrame(loop);
    
//     draw();
//     update();
//   }

//   function draw() {
//     ctx.clearRect(0, 0, width, height);

//     var x = (width * 0.5) - 150;
//     var y = height - 400;
//     ctx.drawImage(sheet, 0, -offset, 300, 400, x, y, 300, 400);
//     ctx.drawImage(sheet, 0, -offset + 400, 300, 400, x, y, 300, 400);

//     if (offset >= 400) offset = 0;

//     offset += speed;
//   };

//   function update() {

//     if (!dragging && speed > 0) {
//       speed -= 0.2;
//     }

//     if (speed < 0) speed = 0;

//     sheet.offsetY += speed;
//   }

//   function Sheet() {
//     this.canvas = document.createElement('canvas');
//     this.ctx = this.canvas.getContext('2d');
//     this.img = new Image();

//     this.canvas.width = 300;
//     this.canvas.height = 800;

//     this.img = imageCache['sheet'];
//     this.ctx.drawImage(this.img, 0, 0, 300, 400);
//     this.ctx.drawImage(this.img, 400, 0, 300, 400);

//     return this.canvas;
//   }
  
//   /* Adjust
//   ============================================ */

//   /* Initiate
//   ============================================ */
//   root.appendChild(canvas);
//   loop();

//   /* Event listeners
//   ============================================ */
//   window.addEventListener('mousedown', onMouseDown);
//   window.addEventListener('mouseup', onMouseUp);
//   window.addEventListener('mousemove', onMouseMove);
//   window.addEventListener('resize', onWindowResize);

//   /* Functions
//   ============================================ */
//   let lastMouseY = 0;

//   function onMouseMove(e) {
//     if (!dragging) return;

//     let dy = e.clientY - lastMouseY;

//     if (dy < 0) dy = 0; 
//     if (dy > 6) dy = 6;
//     speed = dy;

//     lastMouseY = e.clientY;
//   };

//   function onMouseDown() {
//     dragging = true;
//   };

//   function onMouseUp() {
//     dragging = false;
//   };

//   function onWindowResize() {
//     width = window.innerWidth;
//     height = window.innerHeight;

//     canvas.width = width;
//     canvas.height = height;
//   }
// }

