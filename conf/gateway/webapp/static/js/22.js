(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ 3025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _importTask_vue_vue_type_template_id_2c96cce0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3545);
/* harmony import */ var _importTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3089);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _importTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _importTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _importTask_vue_vue_type_style_index_0_id_2c96cce0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3330);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _importTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _importTask_vue_vue_type_template_id_2c96cce0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _importTask_vue_vue_type_template_id_2c96cce0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "2c96cce0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/globalSearch/tables/importTask.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 3089:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_importTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3090);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_importTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_importTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_importTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_importTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_importTask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 3090:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _queryParameter = __webpack_require__(6);

var _api = __webpack_require__(3);

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
var _default = {
  components: {
    ElRow: _row.default
  },

  data() {
    return {
      searchInput: '',
      startTime: '',
      endTime: '',
      tableData: {},
      parameter: '',
      currentPage: 1,
      collectorId: "_ALL_COLLECTER_JOBS_",
      pagesize: 8,
      prop: 'lastModifiedTime',
      orderDirection: 'DESC',
      dateValue: ''
    };
  },

  methods: {
    searchTable() {
      this.currentPage = 1;
      var parameter = this.buildParameters();
      this.getCollectorTasks(parameter);
    },

    handledateValue(val) {
      if (val == null) {
        this.dateValue = [];
      } else {
        this.dateValue = [val[0], val[1] + 86399000];
      }

      this.currentPage = 1;
      var parameter = this.buildParameters();
      this.getCollectorTasks(parameter);
    },

    buildParameters() {
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

      return parameter;
    },

    handleSizeChange: function (size) {
      this.pagesize = size;
      this.parameter = (0, _queryParameter.createParameter)().Build(this.buildParameters(this.pagesize, this.currentPage, this.startTime, this.endTime, this.searchInput));
      this.getCollectorTasks(this.parameter);
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      var parameter = this.buildParameters();
      this.getCollectorTasks(this.parameter);
    },
    //获取采集器任务列表
    getCollectorTasks: function (para) {
      if (!para) {
        para = this.parameter;
      }

      this.loading = true;
      (0, _api.getCollectorTaskList)(this.collectorId, para).then(res => {
        this.tableData = res;
        this.total = res.total;
        this.loading = false;
      }, err => {
        this.$message({
          message: err.response.message,
          type: 'error',
          duration: 1500
        });
      });
    },
    //table查询的列表
    searchListTable: function (parameter, type, startTime, endTime, searchInput, pagesize) {
      var that = this;
      that.currentPage = 1;
      if (pagesize) that.pagesize = pagesize;
      if (startTime) that.startTime = startTime;
      if (endTime) that.endTime = endTime;
      if (searchInput != undefined) that.searchInput = searchInput;
      that.parameter = that.buildParameters(that.pagesize, that.currentPage, that.startTime, that.endTime, that.searchInput);
      this.getCollectorTasks(that.parameter);
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
      that.getCollectorTasks(parameter);
    }

  },

  mounted() {
    var that = this;
    that.parameter = that.buildParameters(that.pagesize, that.currentPage, that.startTime, that.endTime, that.searchInput); // console.log(that.currentPage+'当前页页码')

    that.getCollectorTasks(that.parameter);
  }

};
exports.default = _default;

/***/ }),

/***/ 3091:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 3330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_importTask_vue_vue_type_style_index_0_id_2c96cce0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3091);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_importTask_vue_vue_type_style_index_0_id_2c96cce0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_importTask_vue_vue_type_style_index_0_id_2c96cce0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_importTask_vue_vue_type_style_index_0_id_2c96cce0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 3545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/globalSearch/tables/importTask.vue?vue&type=template&id=2c96cce0&scoped=true&
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
          { staticClass: "seach-left" },
          [
            _c(
              "el-input",
              {
                staticClass: "input-with-search",
                attrs: { placeholder: "请输入名称" },
                nativeOn: {
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.searchTable($event)
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
                "range-separator": "至",
                "start-placeholder": "开始日期",
                "value-format": "timestamp",
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
      [
        _c(
          "el-row",
          { staticClass: "rf-swap" },
          [
            _c(
              "el-table",
              {
                staticStyle: { width: "100%" },
                attrs: {
                  data: _vm.tableData.content,
                  "tooltip-effect": "dark",
                  height: "calc(100vh - 200px)"
                },
                on: { "sort-change": _vm.getOrder }
              },
              [
                _c("el-table-column", {
                  attrs: { label: "名称", prop: "name", sortable: "custom" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(scope) {
                        return [
                          _c("span", [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t" +
                                _vm._s(scope.row.name) +
                                "\n\t\t\t\t\t\t\t"
                            )
                          ])
                        ]
                      }
                    }
                  ])
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: {
                    label: "数据源",
                    prop: "dataSource",
                    "min-width": "90",
                    sortable: "custom"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(scope) {
                        return [
                          _c("span", [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t" +
                                _vm._s(scope.row.dataSource) +
                                "\n\t\t\t\t\t\t\t"
                            )
                          ])
                        ]
                      }
                    }
                  ])
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: {
                    label: "同步对象",
                    prop: "object",
                    width: "150",
                    sortable: "custom"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(scope) {
                        return [
                          JSON.parse(scope.row.taskJson).dataSource.type ==
                          "JDBC"
                            ? _c(
                                "span",
                                {
                                  staticStyle: { "padding-left": "-15px" },
                                  on: {
                                    click: function($event) {
                                      return _vm.objectDialog(
                                        scope.row.dataSourceId,
                                        scope.row.object,
                                        scope.row.collecterId
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t" +
                                      _vm._s(scope.row.object) +
                                      "\n\t\t\t\t\t\t\t"
                                  )
                                ]
                              )
                            : _c("span", [_vm._v(_vm._s(scope.row.object))])
                        ]
                      }
                    }
                  ])
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: {
                    label: "数据集",
                    prop: "dataStore",
                    sortable: "custom",
                    "min-width": "90"
                  }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: {
                    label: "周期情况",
                    prop: "trigger",
                    width: "100",
                    sortable: "custom"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(scope) {
                        return [
                          scope.row.trigger == ""
                            ? _c("span", [_vm._v("单次执行")])
                            : _c("span", [_vm._v("周期执行")])
                        ]
                      }
                    }
                  ])
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: {
                    label: "创建时间",
                    prop: "createTime",
                    width: "180",
                    formatter: _vm.dateFormat,
                    sortable: "custom"
                  }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: {
                    label: "状态",
                    prop: "status",
                    width: "80",
                    sortable: "custom"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(scope) {
                        return [
                          scope.row.status == 0
                            ? _c("div", { staticClass: "status-div-create" }, [
                                _vm._v("已创建")
                              ])
                            : scope.row.status == 1
                            ? _c("div", { staticClass: "status-div-deploy" }, [
                                _vm._v("已部署")
                              ])
                            : scope.row.status == 2
                            ? _c("div", { staticClass: "status-div-stop" }, [
                                _vm._v("已停止")
                              ])
                            : scope.row.status == -1
                            ? _c("div", { staticClass: "status-div-error" }, [
                                _vm._v("错 误")
                              ])
                            : _c("div", [_vm._v("未知")])
                        ]
                      }
                    }
                  ])
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: {
                    label: "最后执行时间",
                    prop: "lastExecuteTime",
                    width: "180",
                    formatter: _vm.dateFormat,
                    sortable: "custom"
                  }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: {
                    label: "最后执行状态",
                    prop: "lastExecuteStatus",
                    width: "130",
                    sortable: "custom"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(scope) {
                        return [
                          scope.row.lastExecuteStatus == 0
                            ? _c("div", [_vm._v("创建")])
                            : scope.row.lastExecuteStatus == 1
                            ? _c("div", [_vm._v("运行中")])
                            : scope.row.lastExecuteStatus == 2
                            ? _c("div", [_vm._v("完成")])
                            : scope.row.lastExecuteStatus == -1
                            ? _c("div", [_vm._v("失败")])
                            : _c("div", [_vm._v("未知")])
                        ]
                      }
                    }
                  ])
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: {
                    label: "最后读入",
                    prop: "lastReadIn",
                    width: "100",
                    sortable: "custom"
                  }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: {
                    label: "最后写出",
                    prop: "lastWriteOut",
                    width: "100",
                    sortable: "custom"
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
                total: _vm.tableData.totalElements
              },
              on: {
                "size-change": _vm.handleSizeChange,
                "current-change": _vm.handleCurrentChange
              }
            })
          ],
          1
        )
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/globalSearch/tables/importTask.vue?vue&type=template&id=2c96cce0&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);
//# sourceMappingURL=22.js.map