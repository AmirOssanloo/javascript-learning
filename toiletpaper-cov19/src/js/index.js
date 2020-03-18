import Roll from './components/roll/Roll';
import Wall from './components/wall/Wall';
import { preloadImages } from './utils/helpers';
import sheetTexture from '../static/sheet_texture.png';
import rollGradient from '../static/roll_gradient.png';

function init() {
  const images = [
    { id: 'sheet_texture', src: sheetTexture },
    { id: 'roll_gradient', src: rollGradient },
  ];

  preloadImages(images, onReady);
};

function onReady() {
  const appRoot = document.querySelector('#app-root');
  const wallContainer = document.querySelector('#wall-container');
  const wall = new Wall();
  // const roll = new Roll();

  /* Initiate
  ============================================ */
  wallContainer.appendChild(wall.canvas);
  // appRoot.appendChild(roll.canvas);
  update();

  /* Functions
  ============================================ */
  function update() {
    requestAnimationFrame(update.bind(this));
    // roll.update();
  };

  /* Event listeners
  ============================================ */
  window.removeEventListener('DOMContentLoaded', init);
  window.addEventListener('resize', onWindowResize);

  /* Event handlers
  ============================================ */
  function onWindowResize() {
    wall.onWindowResize();
    // roll.onWindowResize();
  }
};

window.addEventListener('DOMContentLoaded', init);