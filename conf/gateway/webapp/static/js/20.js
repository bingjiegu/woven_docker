(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ 3033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globalTaskCarry_vue_vue_type_template_id_5a24b4e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3553);
/* harmony import */ var _globalTaskCarry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3113);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _globalTaskCarry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _globalTaskCarry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _globalTaskCarry_vue_vue_type_style_index_0_id_5a24b4e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3338);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _globalTaskCarry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _globalTaskCarry_vue_vue_type_template_id_5a24b4e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _globalTaskCarry_vue_vue_type_template_id_5a24b4e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "5a24b4e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/globalSearch/tables/globalTaskCarry.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 3113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_globalTaskCarry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3114);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_globalTaskCarry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_globalTaskCarry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_globalTaskCarry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_globalTaskCarry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_globalTaskCarry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 3114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = __webpack_require__(3);

var _button = _interopRequireDefault(__webpack_require__(1154));

var _queryParameter = __webpack_require__(6);

var _row = _interopRequireDefault(__webpack_require__(30));

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
//var parameter={filter:"",limit:"8",offset:"0",query:"",sorts:"-lastModifiedTime"};
var parameter = {
  "fieldList": [],
  "sortObject": {
    "field": "lastModifiedTime",
    "orderDirection": "DESC"
  },
  "offset": 0,
  "limit": 8
};
var _default = {
  components: {
    ElRow: _row.default
  },

  data() {
    return {
      table: [],
      multipleSelection: [],
      dateValue: '',
      startTime: false,
      endTime: false,
      searchInput: '',
      show: false,
      currentPage: 1,
      pagesize: 8,
      parameter: '',
      orderDirection: 'DESC',
      prop: 'lastModifiedTime',
      loading: true
    };
  },

  methods: {
    handleSizeChange: function (size) {
      this.pagesize = size;
      var query = this.searchInput.length > 0 ? '%' + this.searchInput + '%' : '%';
      this.parameter = (0, _queryParameter.createParameter)('name', query, 'LIKE').Offset(0).Limit(this.pagesize).Build();
      this.parameter.sortObject.field = this.prop;
      this.parameter.sortObject.orderDirection = this.orderDirection;
      this.listTable(this.parameter);
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      this.parameter = this.buildParameters(this.pagesize, this.currentPage, this.startTime, this.endTime, this.searchInput);
      this.parameter.sortObject.field = this.prop;
      this.parameter.sortObject.orderDirection = this.orderDirection;
      this.listTable(this.parameter);
    },
    handleSelectionChange: function handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    buildParameters: function () {
      var limit = this.pagesize;
      var offset = (this.currentPage - 1) * this.pagesize;
      var query = this.searchInput.length > 0 ? '%' + this.searchInput + '%' : '%';
      var parameter = (0, _queryParameter.createParameter)().Limit(limit).Offset(offset).Build();

      if (query != '%') {
        parameter = (0, _queryParameter.createParameter)('name', query, "LIKE").Build(parameter);
      }

      if (this.dateValue) {
        if (this.dateValue != '' && this.dateValue.length != 0) {
          parameter = (0, _queryParameter.createParameter)('lastModifiedTime', Number(this.dateValue[0]), 'GREATER_THAN').And('lastModifiedTime', Number(this.dateValue[1]), 'LESS_THAN').Build(parameter);
        }
      }

      parameter.sortObject.field = this.prop;
      parameter.sortObject.orderDirection = this.orderDirection;
      return parameter;
    },
    handledateValue: function (val) {
      /*var startTime=this.$refs.startTime.innerText.replace("\"","").replace("\"","");
      var endTime=this.$refs.endTime.innerText.replace("\"","").replace("\"","");
      var dateTime=startTime.replace(".000","")+" TO "+endTime.replace(".000","");
      var parameter={filter:"lastModifiedTime=["+dateTime+"]",limit:"8",offset:"0",query:"",sorts:"-lastModifiedTime"};*/
      if (val == null) {
        this.dateValue = [];
      } else {
        this.dateValue = [val[0], val[1] + 86399000];
      }

      this.currentPage = 1;
      var parameter = this.buildParameters();
      this.listTable(parameter);
    },
    //根据任务状态过滤执行结果
    resultFormatter: function (row, column) {
      let resultName = row.flowStatus;

      switch (resultName) {
        case "FAILED":
          return "";
          break;

        case "SUCCEEDED":
          return "结果";
          break;
      }
    },
    //table list
    listTable: function listTable(parameter) {
      // GET /someUrl
      (0, _api.zdafgetDate)(parameter).then(data => {
        this.loading = false;
        this.table = data;
      }, err => {
        this.$message({
          message: err.response.message,
          type: 'error',
          duration: 1500
        });
      });
    },
    //查询
    searchTable: function searchTable() {
      this.currentPage = 1;
      var parameter = this.buildParameters();
      this.listTable(parameter);
    },
    //监听查询回车事件
    searchKeyup: function () {
      this.currentPage = 1;
      var parameter = this.buildParameters();
      this.listTable(parameter);
    },

    //列表排序
    getOrder(column) {
      var that = this;

      if (column.order === 'ascending') {
        this.orderDirection = 'ASC';
      } else {
        this.orderDirection = 'DESC';
      }

      this.prop = column.prop;

      if (column.prop === null) {
        this.prop = 'lastModifiedTime';
        return false;
      }

      this.currentPage = 1;
      var parameter = this.buildParameters();
      that.listTable(parameter);
    }

  },

  mounted() {
    /*if(this.$route.query.queryWord != undefined){
        this.searchInput = this.$route.query.queryWord;
        this.searchTable();
    }else{
        this.listTable(parameter)
    }*/
    this.listTable(parameter);
  }

};
exports.default = _default;

/***/ }),

/***/ 3115:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 3338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_globalTaskCarry_vue_vue_type_style_index_0_id_5a24b4e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3115);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_globalTaskCarry_vue_vue_type_style_index_0_id_5a24b4e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_globalTaskCarry_vue_vue_type_style_index_0_id_5a24b4e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_globalTaskCarry_vue_vue_type_style_index_0_id_5a24b4e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 3553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/globalSearch/tables/globalTaskCarry.vue?vue&type=template&id=5a24b4e6&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c("el-row", { staticClass: "btnClass" }, [
        _c(
          "div",
          { staticClass: "btn-left" },
          [
            _c(
              "el-input",
              {
                staticClass: "input-with-search",
                attrs: { placeholder: "请输入执行任务名称" },
                nativeOn: {
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.searchKeyup($event)
                  }
                },
                model: {
                  value: _vm.searchInput,
                  callback: function($$v) {
                    _vm.searchInput = $$v
                  },
                  expression: "searchInput"
                }
              },
              [
                _c("el-button", {
                  attrs: {
                    slot: "append",
                    icon: "icon iconfont icon-ir-search"
                  },
                  on: { click: _vm.searchTable },
                  slot: "append"
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("el-date-picker", {
              attrs: {
                type: "daterange",
                "value-format": "timestamp",
                "range-separator": "至",
                "start-placeholder": "开始日期",
                "end-placeholder": "结束日期"
              },
              on: { change: _vm.handledateValue },
              model: {
                value: _vm.dateValue,
                callback: function($$v) {
                  _vm.dateValue = $$v
                },
                expression: "dateValue"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "el-row",
        { staticClass: "rf-swap" },
        [
          _c(
            "el-table",
            {
              directives: [
                {
                  name: "loading",
                  rawName: "v-loading",
                  value: _vm.loading,
                  expression: "loading"
                }
              ],
              staticStyle: { width: "100%" },
              attrs: {
                data: _vm.table.content,
                id: "bm-com-global-search-table-table",
                "tooltip-effect": "dark",
                height: "calc(100vh - 200px)"
              },
              on: {
                "sort-change": _vm.getOrder,
                "selection-change": _vm.handleSelectionChange
              }
            },
            [
              _vm.show
                ? _c("el-table-column", {
                    attrs: { prop: "id", label: "ID", width: "50" }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: { prop: "modelName", label: "模板", sortable: "custom" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c("span", { staticClass: "seeName" }, [
                          _vm._v(_vm._s(scope.row.modelName))
                        ])
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "name",
                  label: "执行任务名",
                  sortable: "custom"
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c("span", { staticClass: "seeName" }, [
                          _vm._v(_vm._s(scope.row.name))
                        ])
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "flowStatus",
                  label: "任务状态",
                  sortable: "custom",
                  width: "100"
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  label: "执行结果",
                  width: "100",
                  formatter: _vm.resultFormatter
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "processDataId",
                  label: "输入数据",
                  sortable: "custom"
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "sliceTime",
                  label: "数据时间片",
                  sortable: "custom"
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "executionId",
                  label: "执行任务ID",
                  sortable: "custom"
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c("span", { staticClass: "seeName" }, [
                          _vm._v(_vm._s(scope.row.executionId))
                        ])
                      ]
                    }
                  }
                ])
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "qualityRank",
                  label: "数据质量等级",
                  sortable: "custom",
                  width: "150"
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "badRatio",
                  label: "坏数据占比",
                  sortable: "custom",
                  width: "120"
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  prop: "lastModifiedTime",
                  label: "修改时间",
                  sortable: "custom",
                  width: "180",
                  formatter: _vm.dateFormat
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("el-pagination", {
            attrs: {
              "current-page": _vm.currentPage,
              "page-sizes": [8, 16, 50, 100],
              "page-size": _vm.pagesize,
              layout: "total, sizes, prev, pager, next, jumper",
              total: _vm.table.totalElements
            },
            on: {
              "size-change": _vm.handleSizeChange,
              "current-change": _vm.handleCurrentChange
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("router-view")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/globalSearch/tables/globalTaskCarry.vue?vue&type=template&id=5a24b4e6&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);
//# sourceMappingURL=20.js.map