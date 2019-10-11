module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "6635":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_dragger_vue_vue_type_style_index_0_id_2cea4d46_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c380");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_dragger_vue_vue_type_style_index_0_id_2cea4d46_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_dragger_vue_vue_type_style_index_0_id_2cea4d46_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_dragger_vue_vue_type_style_index_0_id_2cea4d46_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c380":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9a584cc8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/card-dragger/src/card-dragger.vue?vue&type=template&id=2cea4d46&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.data)?_c('div',{style:({
      position:'relative',
      height:_vm.computeTop(_vm.data.length)+_vm.cardOutsideHeight+'px',
      width:_vm.cardOutsideWidth*_vm.colNum+'px'})},[_vm._l((_vm.data),function(item){return _c('div',{key:item.id,staticClass:"cardBorderBox",style:({ 
          top:_vm.computeTop(item.positionNum)+'px',
          left:_vm.computeLeft(item.positionNum)+'px'}),attrs:{"id":item.id}},[(item.selectState===false)?_c('div',{staticClass:"cardInsideBox",style:({ 
          width:_vm.cardInsideWidth+'px',
          height:_vm.cardInsideHeight+'px'})},[_c('div',{staticClass:"topWrapBox",on:{"mousedown":function($event){return _vm.touchStart($event,item.id)}}},[_vm._t("header",[_c('div',{staticClass:"topMenuBox"},[(item.name)?_c('div',{staticClass:"menuTitle"},[_vm._v(_vm._s(item.name))]):_c('div',{staticClass:"menuTitle"},[_vm._v(" 默认标题 ")])])],{"item":item})],2),(item.componentData)?_c(item.componentData,{tag:"component",attrs:{"animationState":_vm.animationState}}):_vm._t("content",[_c('div',{staticClass:"emptyContent"},[_vm._v("\n          卡片暂无内容\n        ")])],{"item":item})],2):_vm._e()])}),(_vm.selectMenuData!==null)?_c('div',{staticClass:"cardBorderBox moveBox"},[_c('div',{staticClass:"cardInsideBox",style:({ 
            width:_vm.cardInsideWidth+'px',
            height:_vm.cardInsideHeight+'px'})},[_c('div',{staticClass:"topWrapBox"},[_vm._t("header",[_c('div',{staticClass:"topMenuBox"},[(_vm.selectMenuData.name)?_c('div',{staticClass:"menuTitle"},[_vm._v(_vm._s(_vm.selectMenuData.name))]):_c('div',{staticClass:"menuTitle"},[_vm._v(" 默认标题 ")])])],{"item":_vm.selectMenuData})],2),(_vm.selectMenuData.componentData)?_c(_vm.selectMenuData.componentData,{tag:"component",attrs:{"animationState":_vm.animationState}}):_vm._t("content",[_c('div',{staticClass:"emptyContent"},[_vm._v("\n          卡片暂无内容\n        ")])],{"item":_vm.selectMenuData})],2)]):_vm._e()],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/card-dragger/src/card-dragger.vue?vue&type=template&id=2cea4d46&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/card-dragger/src/card-dragger.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var card_draggervue_type_script_lang_js_ = ({
  name: "cardDragger",
  props:{
    data:{
      type:Array
    },
    colNum:{
      type:Number,
      default:2
    },
    headerHide:{
      type:Boolean,
      default:false
    },
    cardOutsideWidth:{
      type:Number,
      default:590      
    },
    cardOutsideHeight:{
      type:Number,
      default:380      
    },
    cardInsideWidth:{
      type:Number,
      default:560      
    },
    cardInsideHeight:{
      type:Number,
      default:320      
    },
    detectDistance:{
      type:Number,
      default:50      
    }
    
  },
  data: () => ({
    animationState:true,
    selectDom: "",
    selectMenuData: null,
    mousedownTimer: null
  }),
  methods: {
    touchStart(event, selectId) {
      if (this.mousedownTimer) {
        return false;
      }
      //若触发了点击事件，则返回一个暴露出一个方法
      this.$emit('startDrag',event,selectId)

      let that = this;
      let DectetTimer = null;

      let originTop = document.body.scrollTop === 0 
                    ? document.documentElement.scrollTop : document.body.scrollTop;
      let scrolTop = originTop;
      //记录鼠标移动的距离
      let moveTop = 0;
      let moveLeft = 0;
      //起始组件位置
      let OriginObjPosition = {
        left: 0,
        top: 0,
        originNum: -1
      };
      // 起始鼠标信息
      let OriginMousePosition = {
        x: 0,
        y: 0
      };
      
      OriginMousePosition.x = event.screenX;
      OriginMousePosition.y = event.screenY;
      this.selectDom = document.getElementById(selectId);
      this.selectMenuData = this.data.find(item => {
        return item.id === selectId;
      });

      //选中之后，先将原来的进行隐藏，然后创建一个一模一样的显示出来
      this.$set(this.selectMenuData, "selectState", true);

      OriginObjPosition.left = parseInt(
        this.selectDom.style.left.slice(0, this.selectDom.style.left.length - 2)
      );
      OriginObjPosition.top = parseInt(
        this.selectDom.style.top.slice(0, this.selectDom.style.top.length - 2)
      );
      
      this.$nextTick(() => {
        document.querySelector(".moveBox").style.left = OriginObjPosition.left + "px";
        document.querySelector(".moveBox").style.top = OriginObjPosition.top + "px";
      });

      document.addEventListener("mousemove", mouseMoveListener);
      document.addEventListener("mouseup", mouseUpListener);
      document.addEventListener("scroll", mouseScroll);

      function throttle (func, delay) {
        return function() {
          if (!DectetTimer) {
            DectetTimer = setTimeout(()=>{
                func.apply(this, arguments);
                DectetTimer = null;
            }, delay);
          }
        }
      }

      function mouseMoveListener(event) {
        moveTop = OriginObjPosition.top + ( event.screenY - OriginMousePosition.y );
        moveLeft = OriginObjPosition.left + ( event.screenX - OriginMousePosition.x );

        document.querySelector(".moveBox").style.left = moveLeft + "px";
        document.querySelector(".moveBox").style.top = moveTop + (scrolTop - originTop) + "px";  //这里要加上滚动的高度

        throttle.call(this,throttleDetect,100).call(this,moveTop + (scrolTop - originTop),moveLeft)         
      }

      function throttleDetect(moveItemTop, moveItemLeft){
        for (let item of that.data) {
          if (item.id != that.selectMenuData.id) {
            positionDetect(item,that.selectMenuData,moveItemTop,moveItemLeft)
          }
        }
      }

      function positionDetect(newItem, originItem, moveItemTop, moveItemLeft) {
        let itemTop = that.computeTop(newItem.positionNum);
        let itemleft = that.computeLeft(newItem.positionNum);
        
        //定个最小值

        //从左右进行位置检测
        if (moveItemTop > itemTop - that.detectDistance && moveItemTop < itemTop + that.detectDistance) {
          if (
            (moveItemLeft > itemleft && moveItemLeft < itemleft + that.cardOutsideWidth / 2) ||
            (moveItemLeft + that.cardOutsideWidth > itemleft + that.cardOutsideWidth / 2 &&
              moveItemLeft + that.cardOutsideWidth < itemleft + that.cardOutsideWidth)
          ) {
            swicthPosition(newItem, originItem);
          }
        } 
        //从上下进行位置检测
        else if (moveItemLeft >= itemleft - that.detectDistance && moveItemLeft <= itemleft + that.detectDistance) {
          if (
            (moveItemTop + that.cardOutsideHeight > itemTop + that.cardOutsideHeight / 2 
             && moveItemTop + that.cardOutsideHeight < itemTop + that.cardOutsideHeight) ||
            (moveItemTop > itemTop && moveItemTop < itemTop + that.cardOutsideHeight / 2)
          ) {
            swicthPosition(newItem, originItem);
          }
        }
      }

      function swicthPosition(newItem, originItem) {
        let OldPositon = originItem.positionNum;
        let NewPositon = newItem.positionNum;
        
        that.$emit('swicthPosition',OldPositon,NewPositon,originItem)

        //位置号码从小移动到大
        if (NewPositon > OldPositon) {
          let changeArray = [];
          // 找出当前需要往前移动一个位置的组件
          for (let i = OldPositon + 1; i <= NewPositon; i++) {
            let pushData = that.data.find(item => {
              return item.positionNum === i;
            });
            changeArray.push(pushData);
          }

          for (let item of changeArray) {
            that.$set(item, "positionNum", item.positionNum - 1);
          }
          that.$set(originItem, "positionNum", NewPositon);
        }

        //位置号码从大移动到小
        if (NewPositon < OldPositon) {
          let changeArray = [];
          for (let i = OldPositon - 1; i >= NewPositon; i--) {
            let pushData = that.data.find(item => {
              return item.positionNum === i;
            });
            changeArray.push(pushData);
          }

          for (let item of changeArray) {
            that.$set(item, "positionNum", item.positionNum + 1);
          }
          that.$set(originItem, "positionNum", NewPositon);
        }
      }

      function mouseUpListener() {
        document.querySelector(".moveBox").style.transition = "all 0.3s";
        document.querySelector(".moveBox").style.top = that.computeTop(that.selectMenuData.positionNum) + "px";
        document.querySelector(".moveBox").style.left = that.computeLeft(that.selectMenuData.positionNum) + "px";
        that.$emit('finishDrag')
        
        that.$nextTick(() => {
          that.mousedownTimer = setTimeout(() => {
            /*用0.3秒来过渡
              时间到了的话就先隐藏拖动组件，再显示原来的组件
              mousedownTimer在一开始对点击事件进行了判断，若还在过渡则不能进行下一次点击
            */
            that.$set(that.selectMenuData, "selectState", false);
            that.selectMenuData = null;
            clearTimeout(that.mousedownTimer);
            that.mousedownTimer = null;
          }, 300);
        });

        document.removeEventListener("mousemove", mouseMoveListener);
        document.removeEventListener("mouseup", mouseUpListener);
        document.removeEventListener("scroll", mouseScroll);
      }

      function mouseScroll(event) {
        scrolTop =
          document.body.scrollTop === 0
            ? document.documentElement.scrollTop
            : document.body.scrollTop;

        document.querySelector(".moveBox").style.top = moveTop + scrolTop - originTop + "px";
      }
    },
    computeLeft(num) {
      return (num-1) % this.colNum * this.cardOutsideWidth;
    },
    computeTop(num) {
      return (Math.ceil(num / this.colNum) - 1) * this.cardOutsideHeight;
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.animationState = false
    })
  },
});

// CONCATENATED MODULE: ./packages/card-dragger/src/card-dragger.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_card_draggervue_type_script_lang_js_ = (card_draggervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/card-dragger/src/card-dragger.vue?vue&type=style&index=0&id=2cea4d46&scoped=true&lang=css&
var card_draggervue_type_style_index_0_id_2cea4d46_scoped_true_lang_css_ = __webpack_require__("6635");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/card-dragger/src/card-dragger.vue






/* normalize component */

var component = normalizeComponent(
  src_card_draggervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2cea4d46",
  null
  
)

/* harmony default export */ var card_dragger = (component.exports);
// CONCATENATED MODULE: ./packages/card-dragger/index.js

// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
card_dragger.install = function (Vue) {
  Vue.component(card_dragger.name, card_dragger)
}

// 默认导出组件
/* harmony default export */ var packages_card_dragger = (card_dragger);

// CONCATENATED MODULE: ./packages/index.js
// 导入颜色选择器组件


// 存储组件列表
const components = [
  packages_card_dragger
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  cardDragger: packages_card_dragger
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=vCardDragger.common.js.map