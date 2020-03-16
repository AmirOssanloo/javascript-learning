import * as PIXI from 'pixi.js';
import forOwn from 'lodash/forOwn';

function ResourceLoader() {
  this.loader = new PIXI.Loader();
}

ResourceLoader.prototype.loadResources = function(obj) {
  forOwn(obj, (value, key) => {
    this.loader.add(key)
  });

  this.loader.load();
};

ResourceLoader.prototype.load = function(callback) {
  this.loader.load((loader, resources) => {
    console.log(this.loader.resources);
    // callback(loader, resources);
  });
};

export default ResourceLoader;