(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ 3292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_permissionAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3293);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_permissionAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_permissionAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_permissionAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_permissionAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_permissionAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 3293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _infoFrom = _interopRequireDefault(__webpack_require__(95));

//
//
//
//
//
//
var _default = {
  components: {
    infoFrom: _infoFrom.default
  },
  props: {
    entity: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      permissionAssignmentConfig: {},
      checkboxData: [],
      checkboxMap: {}
    };
  },

  created() {
    // 权限分配配置
    this.permissionAssignmentConfig = {
      ref: 'permissionAssignmentMethods',
      size: 'small',
      lableWidth: '120px',
      validate: {
        'rolesId': [{
          type: 'array',
          required: true,
          message: '至少选择一个角色',
          trigger: 'change'
        }]
      },
      rule: [{
        label: '角色',
        type: 'infoCheckbox',
        model: 'rolesId',
        checkbox: () => {
          return this.checkboxData;
        },
        methods: val => {
          console.log(this.entity);
          console.log(val);
          this.$set(this.entity, 'rolesId', val);
        }
      }],
      operation: [{
        label: '确定',
        type: 'primary',
        method: (vue, ref) => {
          if (this.globalRuleForm(vue, ref)) {
            this.$emit('updateUser', this.checkboxMap);
            this.$emit('closeDialog');
          }
        }
      }, {
        label: '取消',
        type: 'primary',
        method: (vue, ref) => {
          this.$emit('closeDialog');
        }
      }]
    }; // 请求 角色列表

    this.roleList();
  },

  methods: {
    roleList() {
      this.serverApi({
        interface: 'roleList',
        success: response => {
          for (let value of response) {
            this.checkboxData.push(value.name);
            this.checkboxMap[value.name] = value.id;
          }
        }
      });
    }

  }
};
exports.default = _default;

/***/ }),

/***/ 3539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _permissionAssignment_vue_vue_type_template_id_8ccf38ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3571);
/* harmony import */ var _permissionAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3292);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _permissionAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _permissionAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _permissionAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _permissionAssignment_vue_vue_type_template_id_8ccf38ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _permissionAssignment_vue_vue_type_template_id_8ccf38ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "8ccf38ac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/rightsManagement/userManagement/user/permissionAssignment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 3571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/rightsManagement/userManagement/user/permissionAssignment.vue?vue&type=template&id=8ccf38ac&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("info-from", {
    attrs: { config: _vm.permissionAssignmentConfig, modelData: _vm.entity }
  })
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/views/rightsManagement/userManagement/user/permissionAssignment.vue?vue&type=template&id=8ccf38ac&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);
//# sourceMappingURL=37.js.map