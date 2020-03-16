import * as PIXI from 'pixi.js';
import forOwn from 'lodash/forOwn';
import * as lib from '../static/*.png';
import { getDevicePixelRatio } from './utils/helpers';

function init() {

  /* Aliases
  ============================================ */
  const {
    Application,
    Loader,
    Sprite
  } = PIXI;

  /* Constants
  ============================================ */
  const DPR = getDevicePixelRatio();

  /* Application
  ============================================ */

  const app = new Application({
    antialias: true,
    resolution: DPR
  });

  app.renderer.view.style.position = 'absolute';
  app.renderer.view.style.display = 'block';
  app.renderer.backgroundColor = 0x0a0a27;
  app.renderer.autoResize = true;

  /* Initiate
  ============================================ */
  document.body.appendChild(app.view);
  onResize();

  window.addEventListener('resize', onResize);
  window.removeEventListener('DOMContentLoaded', init);

  /* Event listeners
  ============================================ */
  function onResize() {
    app.renderer.resize(window.innerWidth / DPR, window.innerHeight / DPR);
  };
};

// =========================
// =========================


  // function onLoaderComplete() {
    // console.log(loader.resources, resources)
  // }

  // const lib = loader();
  // console.log(lib);

  // console.log(earth_atmosphere)
  // const dpr = window.devicePixelRatio || 1;
  // const app = new PIXI.Application({ 
  //   antialias: true,
  //   resolution: dpr
  // });
  
  // app.renderer.view.style.position = 'absolute';
  // app.renderer.view.style.display = 'block';
  // app.renderer.backgroundColor = 0x0a0a27;
  // app.renderer.autoResize = true;
  // app.renderer.resize(window.innerWidth / dpr, window.innerHeight / dpr);
  
  // document.body.appendChild(app.view);
  // window.addEventListener('resize', resize);
  // window.removeEventListener('DOMContentLoaded', init);

  // function resize() {
  //   // Resize the renderer
  //   app.renderer.resize(window.innerWidth / dpr, window.innerHeight / dpr);
  // }

  // //
  // console.log(PIXI)

  // const loader = new PIXI.Loader()
  //   .add(earth_atmosphere)
  //   .add('earth_base.png')
  //   .add('sun_atmosphere.png')
  //   .add('sun_base.png')
  //   .add('sun_inner.png')
  //   .load(onLoaderComplete);

  // function onLoaderComplete() {
  //   const lib = loader.resources;
  //   const sprite = new PIXI.Sprite(lib[earth_atmosphere].texture);
  //   // // sprite.scale(0.5, 0.5);

  //   sprite.anchor.set(0.5, 1);
  //   sprite.x = app.screen.width / 2;
  //   sprite.y = app.screen.height;

  //   // console.log(sprite);
  //   // console.log(loader);

  //   app.stage.addChild(sprite);
  //   app.renderer.render(app.stage);
  // }

// =========================
// =========================

// import PostList from './components/post-list/PostList';
// import InfiniteScroll from './components/infinite-scroll/InfiniteScroll';

// function init() {
//   const headerEl = document.querySelector('#header');
//   const mainEl = document.querySelector('#main');
//   const postsEl = document.querySelector('#posts');
//   const footerEl = document.querySelector('#footer');

  // const postList = new PostList(postsEl);
//   const infiniteScroll = new InfiniteScroll(mainEl, postsEl, done => {
//     postList.createManyPosts(3);
//     done();
//   });

//   window.removeEventListener('DOMContentLoaded', init);
// };

window.addEventListener('DOMContentLoaded', init);