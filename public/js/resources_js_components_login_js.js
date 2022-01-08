"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_login_js"],{

/***/ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js ***!
  \***************************************************************************/
/***/ ((module) => {

function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=d.concat(e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=g.concat(h)}else c[b][f]=a[b][f];}else if("hook"==b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;


/***/ }),

/***/ "./resources/js/components/login.js":
/*!******************************************!*\
  !*** ./resources/js/components/login.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Login',
  data: function data() {
    return {
      login: null,
      password: null
    };
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("div", [h("input", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      "on": {
        "input": function input($event) {
          if ($event.target.composing) return;
          _this.login = $event.target.value;
        }
      },
      "attrs": {
        "name": "login",
        "type": "text"
      },
      "domProps": {
        "value": _this.login
      }
    }, {
      directives: [{
        name: "model",
        value: _this.login,
        modifiers: {}
      }]
    }])), h("input", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      "on": {
        "input": function input($event) {
          if ($event.target.composing) return;
          _this.password = $event.target.value;
        }
      },
      "attrs": {
        "name": "password",
        "type": "text"
      },
      "domProps": {
        "value": _this.password
      }
    }, {
      directives: [{
        name: "model",
        value: _this.password,
        modifiers: {}
      }]
    }])), h("input", {
      "attrs": {
        "type": "submit"
      },
      "on": {
        "click": this.store
      }
    })]);
  },
  methods: {
    store: function store() {
      axios.post('/api/auth/login', {
        login: this.login,
        password: this.password
      }).then(function (res) {
        console.log(res);
      });
    }
  }
});

/***/ })

}]);