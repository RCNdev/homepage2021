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
})({"components/ActionBanner/actionBanner.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionBanner = void 0;
const actionBanner = {
  props: {
    btnText1: String,
    btnText2: String,
    btnText3: String,
    articles: String
  },
  data: function data() {
    return {
      current: '&#35;FairPayForNursing',
      active: false
    };
  },
  computed: {
    articleArray() {
      return JSON.parse(this.articles);
    }

  },
  template:
  /*html*/
  "\n        <div class=\"action-banner__container\">\n            <VideoViewer id=\"action-banner-video\">\n                <template #opener>\n                    <a class=\"video-viewer__video-link\" href=\"#media\"> \n                        <slot v-if=\"current == '&#35;FairPayForNursing'\" name=\"image1\"></slot>\n                        <slot v-if=\"current == 'Covid-19'\" name=\"image2\"></slot>\n                        <slot v-if=\"current == 'Nursing Support Workers&apos; Day'\" name=\"image3\"></slot>\n                    </a>\n                </template>\n                <slot v-if=\"current === '&#35;FairPayForNursing'\" name=\"video1\"></slot>\n                <slot v-if=\"current === 'Covid-19'\" name=\"video2\"></slot>\n                <slot v-if=\"current === 'Nursing Support Workers&apos; Day'\" name=\"video3\"></slot>\n            </VideoViewer>\n\n            <div class=\"action-banner__contents\">\n                <button\n                    class=\"action-banner__accordion-btn\"\n                    :class=\"{ 'is-active': current === '&#35;FairPayForNursing'}\"\n                    :disabled=\"current === '&#35;FairPayForNursing'\"\n                    @click=\"current = '&#35;FairPayForNursing'\"\n                >\n                    {{ articleArray[0].label }}\n                </button>\n                <slot name=\"accordion-section1\" v-if=\"current === '&#35;FairPayForNursing'\"></slot>\n                    \n                <button\n                    class=\"action-banner__accordion-btn\"\n                    :class=\"{ 'is-active': current === 'Covid-19'}\"\n                    :disabled=\"current === 'Covid-19'\"\n                    @click=\"current = 'Covid-19'\"\n                >\n                    {{ articleArray[1].label }}\n                </button>\n                <slot name=\"accordion-section2\" v-if=\"current === 'Covid-19'\"></slot>\n                    \n                <button\n                    class=\"action-banner__accordion-btn\"\n                    :class=\"{ 'is-active': current === 'Nursing Support Workers&apos; Day'}\"\n                    :disabled=\"current === 'Nursing Support Workers&apos; Day'\"\n                    @click=\"current = 'Nursing Support Workers&apos; Day'\"\n                >\n                    {{ articleArray[2].label }}\n                </button>\n                <slot\n                    name=\"accordion-section3\" v-if=\"current === 'Nursing Support Workers&apos; Day'\"></slot>\n            </div>\n\n            <nav class=\"action-banner__tabs-bar\">\n                <button\n                    class=\"action-banner__tab btn\"\n                    :class=\"{ 'is-active': current === '&#35;FairPayForNursing'}\"\n                    :disabled=\"current === '&#35;FairPayForNursing'\"\n                    @click=\"current = '&#35;FairPayForNursing'\"\n                >\n                    {{ articleArray[0].label }}\n                </button>\n                <button\n                    class=\"action-banner__tab btn\"\n                    :class=\"{ 'is-active': current === 'Covid-19'}\"\n                    :disabled=\"current === 'Covid-19'\"\n                    @click=\"current = 'Covid-19'\"\n                >\n                    {{ articleArray[1].label }}\n                </button>\n                <button\n                    class=\"action-banner__tab btn\"\n                    :class=\"{ 'is-active': current === 'Nursing Support Workers&apos; Day'}\"\n                    :disabled=\"current === 'Nursing Support Workers&apos; Day'\"\n                    @click=\"current = 'Nursing Support Workers&apos; Day'\"\n                >\n                    {{ articleArray[2].label }}\n                </button>\n            </nav>\n        </div>\n    "
};
exports.actionBanner = actionBanner;
},{}],"components/TopContent/topContent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchSuggestion = void 0;
const searchSuggestion = {
  data() {
    return {
      keyword: '',
      results: [],
      response: [{
        "Url": "https://local.rcn.org.uk/get-help/rcn-advice/accidents-at-work-and-personal-injury",
        "Title": "Accidents at work and personal injury"
      }, {
        "Url": "https://local.rcn.org.uk/get-involved/forums/advanced-nurse-practitioner-forum",
        "Title": "Advanced Nurse Practitioner Forum"
      }, {
        "Url": "https://local.rcn.org.uk/library/subject-guides/advanced-nursing-practice",
        "Title": "Advanced Nursing Practice"
      }, {
        "Url": "https://local.rcn.org.uk/get-help/rcn-advice/aesthetic-practice",
        "Title": "Aesthetic practice"
      }, {
        "Url": "https://local.rcn.org.uk/get-help/rcn-advice/agency-workers",
        "Title": "Agency workers"
      }],
      timer: undefined,
      available: true,
      loading: false
    };
  },

  props: {
    suggestionsEndpoint: {
      type: String,
      required: true
    },
    suggestionsAmount: {
      type: String,
      default: '5'
    },
    searchValue: {
      type: String,
      default: ''
    },
    suggestionsText: {
      type: String,
      required: true
    },
    fullResultsText: {
      type: String,
      required: true
    }
  },
  watch: {
    searchValue() {
      // Suggested Search is an enhancement - only for browsers that support the fecth API
      if (typeof fetch != 'function' || !this.available || this.searchValue.length < 3) {
        this.keyword = '';
        this.results = [];
        this.loading = false;
        return;
      } // Not using v-model because of android virtual keyboard limitations


      this.keyword = this.searchValue;
      this.loading = true;
      this.throttledFetch();
    }

  },
  computed: {
    amount() {
      return isNaN(+this.suggestionsAmount) ? 5 : +this.suggestionsAmount;
    }

  },
  methods: {
    throttledFetch() {
      // clear any previous throttle timer
      clearTimeout(this.timer); // reset throttle timer after each input

      this.timer = setTimeout(() => {
        this.fetchJSON();
      }, 500);
    },

    async fetchJSON() {
      try {
        /* TODO: replace '/results.json' with the real endpoint */
        // const response = await fetch(`${this.suggestionsEndpoint}?Keyword=${this.keyword}`);
        // update results unless keyword has been removed since fetch was initiated
        this.results = this.keyword && this.response;
      } catch (_unused) {
        // prevent further requests if the first one fails
        this.available = false;
      }

      this.loading = false;
    }

  },
  template:
  /*html*/
  "<div class=\"search-suggestions\">\n            <div class=\"search-suggestions__panel\">\n                <div :class=\"loading && 'search-suggestions__loading-bar'\"></div>\n                \n                <small class=\"search-suggestions__title\" v-if=\"results.length\">{{ suggestionsText }}</small>\n\n                <ol class=\"search-suggestions__list\">\n                    <li class=\"search-suggestions__item\" v-for=\"result in results\">\n                        <a class=\"search-suggestions__link\" :href=\"result.Url\">{{ result.Title }}</a>\n                    </li>\n                </ol>\n\n                <button class=\"search-suggestions__button btn is-fullwidth button button--fullwidth button--gray\" v-if=\"results.length\">{{ fullResultsText }}</button>\n            </div>\n        </div>"
};
exports.searchSuggestion = searchSuggestion;
},{}],"components/VideoViewer/videoViewer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoViewer = void 0;
const videoViewer = {
  props: {
    id: String,
    parent: String
  },

  data() {
    return {
      open: false
    };
  },

  methods: {
    close() {
      this.open = false;
      this.$refs[this.id].scrollIntoView({
        behavior: "auto"
      });
    }

  },
  template:
  /*html*/
  "\n        <div class=\"video-viewer\" :ref=\"id\">\n            <span @click=\"open = true\">\n                <slot name=\"opener\"></slot>\n            </span>\n            <div v-if=\"open\" class=\"video-viewer__backdrop\" id=\"media\" @click=\"close\">\n                <div class=\"video-viewer__video\">\n                    <slot></slot>\n                </div>\n                <a class=\"video-viewer__close\" :href=\"id\" @click.prevent=\"close\">\n                    &times;\n                </a>\n            </div>\n        </div>\n    "
};
exports.videoViewer = videoViewer;
},{}],"components/WhatsOn/whatsOn.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whatsOn = void 0;
const whatsOn = {
  methods: {
    scrollLeft() {
      const el = this.$refs.scrollable;

      if (el.scrollTo) {
        return el.scrollTo({
          top: 0,
          left: el.scrollLeft - el.offsetWidth * 2 / 3,
          behavior: 'smooth'
        });
      }

      return this.$refs.scrollable.scrollLeft += 320;
    },

    scrollRight() {
      const el = this.$refs.scrollable;
      const width = el.offsetWidth;
      this.scrolled = true;

      if (el.scrollTo) {
        return el.scrollTo({
          top: 0,
          left: el.scrollLeft + el.offsetWidth * 2 / 3,
          behavior: 'smooth'
        });
      }

      return this.$refs.scrollable.scrollLeft += 320;
    }

  },
  template:
  /*html*/
  "\n        <div class=\"whats-on__scroll\" ref=\"scrollable\">\n            <slot></slot>\n            <button class=\"whats-on__scroll-left btn is-red\" @click=\"scrollLeft\">&lt;</button>\n            <button class=\"whats-on__scroll-right btn is-red\" @click=\"scrollRight\">&gt;</button>\n        </div>\n    "
};
exports.whatsOn = whatsOn;
},{}],"app.js":[function(require,module,exports) {
"use strict";

var _actionBanner = require("./components/ActionBanner/actionBanner");

var _topContent = require("./components/TopContent/topContent");

var _videoViewer = require("./components/VideoViewer/videoViewer");

var _whatsOn = require("./components/WhatsOn/whatsOn");

Vue.component('ActionBanner', _actionBanner.actionBanner);
Vue.component('SearchSuggestion', _topContent.searchSuggestion);
Vue.component('VideoViewer', _videoViewer.videoViewer);
Vue.component('WhatsOn', _whatsOn.whatsOn);
new Vue({
  el: '#app',

  data() {
    return {
      searchValue: ''
    };
  }

});
},{"./components/ActionBanner/actionBanner":"components/ActionBanner/actionBanner.js","./components/TopContent/topContent":"components/TopContent/topContent.js","./components/VideoViewer/videoViewer":"components/VideoViewer/videoViewer.js","./components/WhatsOn/whatsOn":"components/WhatsOn/whatsOn.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54445" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map