// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/utils/math.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = exports.clamp = exports.lerp = exports.norm = exports.random = void 0;

const random = (lower, upper, integer) => {
  lower = lower === undefined ? 0 : lower;
  upper = upper === undefined ? 1 : upper;
  let random = integer ? lower + Math.floor(Math.random() * (upper - lower + 1)) : lower + Math.random() * (upper - lower);
  return random;
};

exports.random = random;

const norm = (number, lower, upper, limit) => {
  number = (number - lower) / (upper - lower);
  number = limit ? clamp(number, 0, 1) : number;
  return number;
};

exports.norm = norm;

const lerp = (number, lower, upper, limit) => {
  number = (upper - lower) * number + lower;
  number = limit ? clamp(number, lower, upper) : number;
  return number;
};

exports.lerp = lerp;

const clamp = (number, lower, upper) => {
  number = number <= upper ? number : upper;
  number = number >= lower ? number : lower;
  return number;
};

exports.clamp = clamp;

const map = (number, sourceLower, sourceUpper, targetLower, targetUpper, clamp) => {
  number = norm(number, sourceLower, sourceUpper, clamp);
  number = lerp(number, targetLower, targetUpper, clamp);
  return number;
};

exports.map = map;
},{}],"js/components/post-list/post/Post.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _math = require("../../../utils/math");

function Post(id) {
  this.id = id;
  this.container = document.createElement('div');
  this.container.className = 'post';
  this.header = document.createElement('div');
  this.header.className = 'post__header';
  this.container.appendChild(this.header);
  this.main = document.createElement('div');
  this.main.className = 'post__main';
  this.container.appendChild(this.main);
  this.footer = document.createElement('div');
  this.footer.className = 'post__footer';
  this.container.appendChild(this.footer);
  this.img = new Image();
  this.main.appendChild(this.img);
  this.createPostImage();
  return this.container;
}

;

Post.prototype.createPostImage = async function () {
  const objectURL = await this.fetchPostObjectURL();
  this.img.src = objectURL;
};

Post.prototype.fetchPostObjectURL = function () {
  const self = this;
  const id = this.id;
  const result = fetch(`https://picsum.photos/id/${id}/400/430`).then(res => handleErrors(res)).then(res => res.blob()).then(res => window.URL.createObjectURL(res)).catch(err => console.error(err));

  function handleErrors(res) {
    if (res.status === 404) {
      fetchNewRandomImage();
      return Promise.reject(`Resource at ID ${id} could not be found.`);
    }

    return res;
  }

  ;

  function fetchNewRandomImage() {
    self.id = (0, _math.random)(0, 1000, true);
    self.createPostImage();
  }

  ;
  return result;
};

var _default = Post;
exports.default = _default;
},{"../../../utils/math":"js/utils/math.js"}],"js/components/post-list/PostList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Post = _interopRequireDefault(require("./post/Post"));

var _math = require("../../utils/math");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PostList(element) {
  this.element = element;
  this.createManyPosts(3);
}

;

PostList.prototype.createManyPosts = function (amount) {
  for (var i = 0; i < amount; i++) {
    this.createSinglePost();
  }
};

PostList.prototype.createSinglePost = function () {
  const id = (0, _math.random)(0, 1000, true);
  const post = new _Post.default(id);
  this.element.appendChild(post);
};

var _default = PostList;
exports.default = _default;
},{"./post/Post":"js/components/post-list/post/Post.js","../../utils/math":"js/utils/math.js"}],"js/components/infinite-scroll/InfiniteScroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function InfiniteScroll(container, content, callback) {
  this.container = container;
  this.content = content;
  this.callback = callback;
  this.busy = false;
  this.container.addEventListener('scroll', this.onScroll.bind(this));
}

;

InfiniteScroll.prototype.onScroll = function () {
  const scrollTop = this.container.scrollTop;
  const offsetHeight = this.container.offsetHeight;
  const clientHeight = this.content.clientHeight;
  const shouldTrigger = scrollTop + offsetHeight >= clientHeight;

  if (this.busy) {
    return;
  }

  if (shouldTrigger) {
    this.busy = true;
    setTimeout(() => {
      this.callback(this.onComplete.bind(this));
    }, 500);
  }
};

InfiniteScroll.prototype.onComplete = function () {
  this.busy = false;
  this.onScroll();
};

var _default = InfiniteScroll;
exports.default = _default;
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _PostList = _interopRequireDefault(require("./components/post-list/PostList"));

var _InfiniteScroll = _interopRequireDefault(require("./components/infinite-scroll/InfiniteScroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init() {
  const headerEl = document.querySelector('#header');
  const mainEl = document.querySelector('#main');
  const postsEl = document.querySelector('#posts');
  const footerEl = document.querySelector('#footer');
  const postList = new _PostList.default(postsEl);
  const infiniteScroll = new _InfiniteScroll.default(mainEl, postsEl, done => {
    postList.createManyPosts(3);
    done();
  });
  window.removeEventListener('DOMContentLoaded', init);
}

;
window.addEventListener('DOMContentLoaded', init);
},{"./components/post-list/PostList":"js/components/post-list/PostList.js","./components/infinite-scroll/InfiniteScroll":"js/components/infinite-scroll/InfiniteScroll.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59361" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map