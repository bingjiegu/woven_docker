(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ 3022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataImport_vue_vue_type_template_id_bc7b50f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3542);
/* harmony import */ var _dataImport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3080);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _dataImport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _dataImport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _dataImport_vue_vue_type_style_index_0_id_bc7b50f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3327);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _dataImport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dataImport_vue_vue_type_template_id_bc7b50f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _dataImport_vue_vue_type_template_id_bc7b50f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "bc7b50f6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/globalSearch/tables/dataImport.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 3080:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dataImport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3081);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dataImport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dataImport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dataImport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dataImport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dataImport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 3081:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _searchDateData = _interopRequireDefault(__webpack_require__(34));

var _searchTableData = _interopRequireDefault(__webpack_require__(35));

var _datasetDialog = _interopRequireDefault(__webpack_require__(36));

var _object = _interopRequireDefault(__webpack_require__(99));

var _name = _interopRequireDefault(__webpack_require__(126));

var _dataSource = _interopRequireDefault(__webpack_require__(100));

var _api = __webpack_require__(3);

var _queryParameter = __webpack_require__(6);

var _taskStep = _interopRequireDefault(__webpack_require__(21));

var _bus = _interopRequireDefault(__webpack_require__(1153));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var parameter = (0, _queryParameter.queryObject)();
var _default = {
  components: {
    searchDateData: _searchDateData.default,
    searchTableData: _searchTableData.default,
    previewDataSet: _datasetDialog.default,
    previewObject: _object.default,
    previewTaskName: _name.default,
    previewDataSource: _dataSource.default
  },

  data() {
    return {
      dataStoreId: '',
      isShowDialog: false,
      cols: [],
      multipleSelection: [],
      option: "layout",
      tableData: {},
      show: false,
      currentPage: 1,
      pagesize: 8,
      loading: true,
      self: this,
      startTime: '',
      endTime: '',
      searchInput: '',
      parameter: "",
      form: '',
      dialogNewTaskJsonVisible: false,
      orderDirection: 'DESC',
      prop: 'lastModifiedTime',
      field: ''
    };
  },

  methods: {
    ShowDialog() {
      this.isShowDialog = false;
    },

    handleSizeChange: function (size) {
      this.pagesize = size;
      this.parameter = (0, _queryParameter.createParameter)().Build(this.buildParameters(this.pagesize, this.currentPage, this.startTime, this.endTime, this.searchInput));
      this.parameter.sortObject.field = this.prop;
      this.parameter.sortObject.orderDirection = this.orderDirection;
      this.getSynchronizationTasks(this.parameter, this.resType);
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      this.parameter = this.buildParameters(this.pagesize, this.currentPage, this.startTime, this.endTime, this.searchInput);
      this.parameter.sortObject.field = this.prop;
      this.parameter.sortObject.orderDirection = this.orderDirection;
      this.getSynchronizationTasks(this.parameter, this.resType);
    },
    handleSelectionChange: function handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    //新建任务
    newTask: function () {
      var that = this; //添加复制标识变量

      localStorage.taskEntity = JSON.stringify({
        isCopy: false
      });
      that.$router.push({
        path: '/task/add/WOVEN-SERVER/synchronization'
      });
    },
    //复制任务
    copyTask: function () {
      var that = this; //添加一个判断是不是复制的字段

      that.multipleSelection[0].isCopy = true; //获取row内容放入localStorage

      localStorage.taskEntity = JSON.stringify(this.multipleSelection[0]);
      that.$router.push({
        path: '/task/add/WOVEN-SERVER/synchronization'
      });
    },
    //table查询的列表
    searchListTable: function (parameter, type, startTime, endTime, searchInput, pagesize) {
      var that = this;
      that.currentPage = 1;
      if (pagesize) that.pagesize = pagesize;
      that.startTime = startTime;
      that.endTime = endTime;
      if (searchInput != undefined) that.searchInput = searchInput;
      var len = that.parameter.fieldList.length;
      var tmpField = that.parameter.fieldList.slice(0);

      for (var i = 0; i < len; i++) {
        if (startTime !== 'undefined' && tmpField[i].fieldName === 'lastModifiedTime' && (tmpField[i].comparatorOperator == "GREATER_THAN" || tmpField[i].comparatorOperator == "LESS_THAN")) {
          var l = that.parameter.fieldList.indexOf(tmpField[i]);

          if (l > -1) {
            that.parameter.fieldList.splice(l, 1);
          }
        } else if (searchInput != undefined && tmpField[i].fieldName === 'name') {
          var l = that.parameter.fieldList.indexOf(tmpField[i]);

          if (l > -1) {
            that.parameter.fieldList.splice(l, 1);
          }
        }
      }

      that.parameter = that.buildParameters(that.pagesize, that.currentPage, that.startTime, that.endTime, that.searchInput, this.parameter.fieldList);
      this.parameter = (0, _queryParameter.createParameter)().Sort(this.prop, this.orderDirection).Build(that.parameter, false);
      this.getSynchronizationTasks(that.parameter);
    },
    //			获取同步任务列表
    getSynchronizationTasks: function (para) {
      if (!para) {
        para = this.parameter;
      }

      this.loading = true;
      (0, _api.getSynchronizationTaskList)(para).then(res => {
        this.tableData = res;
        this.loading = false;
      }, err => {
        this.$message({
          message: err.response.message,
          type: 'error',
          duration: 1500
        });
      });
    },
    //			删除同步任务
    delTable: function delTable() {
      var that = this;
      var tbIds = [];
      this.multipleSelection.forEach(function (i, index) {
        var tdIds = i.id;
        tbIds.push(tdIds);
      });
      that.$confirm('真的要删除' + tbIds.length + '个数据导入任务?', '提示', {}).then(() => {
        (0, _api.deleteTasks)(tbIds).then(data => {
          that.getSynchronizationTasks(this.parameter);
          that.$message({
            message: '恭喜你，删除已成功！',
            type: 'success'
          });
        }, err => {
          this.$message({
            message: err.response.message,
            type: 'error',
            duration: 1500
          });
        });
      }).catch(() => {});
    },
    //			启用同步任务
    startTask: function () {
      if (this.multipleSelection) {
        var that = this;
        var tdIds = [];
        this.multipleSelection.forEach(function (i) {
          tdIds.push(i.id);
        });
        (0, _api.startTasks)(tdIds).then(data => {
          that.getSynchronizationTasks(this.parameter);
          that.$message({
            message: '恭喜你，任务已启用！',
            type: 'success'
          });
        }, err => {
          this.$message({
            message: err.response.message,
            type: 'error',
            duration: 1500
          });
        });
      }
    },
    //			停用同步任务
    stopTask: function () {
      if (this.multipleSelection) {
        var that = this;
        var tdIds = [];
        this.multipleSelection.forEach(function (i) {
          tdIds.push(i.id);
        });
        (0, _api.stopTasks)(tdIds).then(data => {
          that.getSynchronizationTasks(this.parameter);
          that.$message({
            message: '恭喜你，任务已停用！',
            type: 'success'
          });
        }, err => {
          this.$message({
            message: err.response.message,
            type: 'error',
            duration: 1500
          });
        });
      }
    },
    //			数据预览
    dataPreview: function (dataStoreId, tenantId) {
      this.$refs.dataset.dataPreview(dataStoreId, tenantId);
    },
    //			name查看任务详情
    nameDialog: function (id) {
      this.$refs.taskName.nameDialog(id);
    },
    //			datasource信息编辑
    datasourceDialog: function (dataStoreId) {
      this.dataStoreId = dataStoreId;
      this.isShowDialog = true;
    },
    //			object编辑
    objectDialog: function (id, table) {
      this.$refs.object.objectDialog(id, table);
    },
    //			列表排序
    getOrder: function (column) {
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
      that.parameter = (0, _queryParameter.createParameter)().Limit(this.pagesize).Sort(column.prop, this.orderDirection).Build();
      that.getSynchronizationTasks(that.parameter);
    }
  },

  mounted() {
    var that = this; //从路由上获取全局搜索框的值

    that.searchInput = that.$route.params.searchVal;
    that.parameter = that.buildParameters(that.pagesize, that.currentPage, that.startTime, that.endTime, that.searchInput);
    that.getSynchronizationTasks(that.parameter); //接受task提交之后的列表页刷新

    _taskStep.default.$on('refreshSynchronizationList', function () {
      that.getSynchronizationTasks();
    });
  },

  watch: {
    '$route'(to, from) {
      var that = this;
      that.parameter = that.buildParameters(that.pagesize, that.currentPage, that.startTime, that.endTime, that.searchInput); //如果是执行列表返回就刷新列表

      if (from.name == "执行列表") that.getSynchronizationTasks();
    }

  }
};
exports.default = _default;

/***/ }),

/***/ 3082:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 3327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dataImport_vue_vue_type_style_index_0_id_bc7b50f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3082);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dataImport_vue_vue_type_style_index_0_id_bc7b50f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dataImport_vue_vue_type_style_index_0_id_bc7b50f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dataImport_vue_vue_type_style_index_0_id_bc7b50f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 3542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/globalSearch/tables/dataImport.vue?vue&type=template&id=bc7b50f6&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _c(
      "div",
      [
        _c("el-row", { staticClass: "btnClass" }, [
          _c(
            "div",
            { staticClass: "seach-left" },
            [
              _c("search-table-data", {
                ref: "refSearchTable",
                attrs: {
                  pagesize: _vm.pagesize,
                  startTime: _vm.startTime,
                  endTime: _vm.endTime
                },
                on: { searchKey: _vm.searchListTable }
              }),
              _vm._v(" "),
              _c("search-date-data", {
                ref: "refSearchDate",
                attrs: { pagesize: _vm.pagesize, searchInput: _vm.searchInput },
                on: { searchDate: _vm.searchListTable }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
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
                data: _vm.tableData.content,
                "tooltip-effect": "dark",
                id: "bm-com-global-search-dataImport-table",
                height: "calc(100vh - 200px)"
              },
              on: {
                "selection-change": _vm.handleSelectionChange,
                "sort-change": _vm.getOrder
              }
            },
            [
              _c("el-table-column", {
                attrs: {
                  label: "名称",
                  prop: "name",
                  "min-width": "100",
                  align: "center",
                  sortable: "custom"
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  label: "数据源",
                  prop: "dataSource",
                  "min-width": "90",
                  align: "center",
                  sortable: "custom"
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  label: "同步对象",
                  prop: "object",
                  "min-width": "100",
                  align: "center",
                  sortable: "custom"
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  label: "数据集",
                  prop: "dataStore",
                  "min-width": "90",
                  align: "center",
                  sortable: "custom"
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  label: "周期情况",
                  prop: "trigger",
                  "min-width": "100",
                  align: "center",
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
                  "min-width": "100",
                  align: "center",
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
                  align: "center",
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
                  label: "最后读入",
                  prop: "lastReadIn",
                  "min-width": "100",
                  align: "center",
                  sortable: "custom"
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  label: "最后写出",
                  prop: "lastWriteOut",
                  "min-width": "100",
                  align: "center",
                  sortable: "custom"
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  label: "最近变更",
                  prop: "lastChange",
                  "min-width": "100",
                  align: "center",
                  sortable: "custom"
                }
              }),
              _vm._v(" "),
              _c("el-table-column", {
                attrs: {
                  label: "最后执行状态",
                  prop: "lastExecuteStatus",
                  "min-width": "130",
                  align: "center",
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
                          : scope.row.lastExecuteStatus == -2
                          ? _c("div", [_vm._v("终止")])
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
                  "min-width": "130",
                  formatter: _vm.dateFormat,
                  align: "center",
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
        _vm._v(" "),
        _c("router-view")
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/globalSearch/tables/dataImport.vue?vue&type=template&id=bc7b50f6&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);
//# sourceMappingURL=14.js.map