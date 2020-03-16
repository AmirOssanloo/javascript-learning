import * as THREE from 'three';
import sheetTexture from '../static/sheet_texture.png';

const imageCache = {};

function init() {
  function preloadImages(images, callback) {
    const imagesClone = [...images];
  
    if (imagesClone.length === 0) {
      return callback();
    }
  
    const obj = imagesClone.shift();
    const img = document.createElement('img');
    img.id = obj.id;
    img.src = obj.src;
  
    img.onload = e => {
      imageCache[e.target.id] = e.target;
      return preloadImages(imagesClone, callback);
    };
  }
  
  preloadImages([
    { id: 'sheet', src: sheetTexture }
  ], setup);
};

function setup() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  let dragging = false;
  let offset = 0;
  let speed = 0;

  // /* Create
  // ============================================ */
  const root = document.querySelector('#app-root');
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const sheet = new Sheet();

  canvas.width = width;
  canvas.height = height;

  function loop() {
    requestAnimationFrame(loop);
    
    draw();
    update();
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    var x = (width * 0.5) - 150;
    var y = height - 400;
    ctx.drawImage(sheet, 0, -offset, 300, 400, x, y, 300, 400);
    ctx.drawImage(sheet, 0, -offset + 400, 300, 400, x, y, 300, 400);

    if (offset >= 400) offset = 0;

    offset += speed;
  };

  function update() {

    if (!dragging && speed > 0) {
      speed -= 0.25;
    }

    if (speed < 0) speed = 0;

    sheet.offsetY += speed;
  }

  function Sheet() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.img = new Image();

    this.canvas.width = 300;
    this.canvas.height = 400;

    this.img = imageCache['sheet'];
    this.ctx.drawImage(this.img, 0, 0, 300, 400);

    return this.canvas;
  }
  
  /* Adjust
  ============================================ */

  /* Initiate
  ============================================ */
  root.appendChild(canvas);
  loop();

  /* Event listeners
  ============================================ */
  window.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mouseup', onMouseUp);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('resize', onWindowResize);

  /* Functions
  ============================================ */
  let lastMouseY = 0;

  function onMouseMove(e) {
    if (!dragging) return;

    let dy = e.clientY - lastMouseY;

    if (dy < 0) dy = 0; 
    if (dy > 6) dy = 6;
    speed = dy;

    lastMouseY = e.clientY;
  };

  function onMouseDown() {
    dragging = true;
  };

  function onMouseUp() {
    dragging = false;
  };

  function onWindowResize() {
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;
  }
}

window.addEventListener('DOMContentLoaded', init);