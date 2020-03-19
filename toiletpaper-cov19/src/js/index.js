import Roll from './components/roll/Roll';
import Sheets from './components/roll/sheets/Sheets';
import { preloadImages } from './utils/helpers';
import sheetTexture from '../static/sheet_texture.jpg';
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
  const rollContainer = document.querySelector('#roll-container');
  const roll = new Roll();

  /* Initiate
  ============================================ */
  rollContainer.appendChild(roll.canvas);
  update();

  /* Functions
  ============================================ */
  function update() {
    requestAnimationFrame(update.bind(this));
    roll.update();
  };

  /* Event listeners
  ============================================ */
  window.removeEventListener('DOMContentLoaded', init);
  window.addEventListener('resize', onWindowResize);

  /* Event handlers
  ============================================ */
  function onWindowResize() {
    roll.onWindowResize();
  }
};

window.addEventListener('DOMContentLoaded', init);