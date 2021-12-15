"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_user_List_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/user/List.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/user/List.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      users: [],
      search: ''
    };
  },
  mounted: function mounted() {
    this.getUsers();
  },
  computed: {
    headers: function headers() {
      return [{
        text: 'name',
        value: 'name'
      }, {
        text: 'email',
        value: 'email'
      }, {
        text: 'actions',
        value: 'actions'
      }];
    }
  },
  methods: {
    getUsers: function getUsers() {
      var _this = this;

      this.axios.get('/api/admin/user').then(function (response) {
        _this.users = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    deleteUser: function deleteUser(id) {
      var _this2 = this;

      this.axios["delete"]("/api/admin/user/".concat(id)).then(function (response) {
        _this2.getUsers();
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (!window.Laravel.isLoggedin) {
      return next('admin/login');
    }

    next();
  }
});

/***/ }),

/***/ "./resources/js/components/admin/user/List.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/admin/user/List.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _List_vue_vue_type_template_id_d29e1572_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=d29e1572&lang=true& */ "./resources/js/components/admin/user/List.vue?vue&type=template&id=d29e1572&lang=true&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/user/List.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_d29e1572_lang_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _List_vue_vue_type_template_id_d29e1572_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/user/List.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/user/List.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/admin/user/List.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/user/List.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/user/List.vue?vue&type=template&id=d29e1572&lang=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/admin/user/List.vue?vue&type=template&id=d29e1572&lang=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_d29e1572_lang_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_d29e1572_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_d29e1572_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=template&id=d29e1572&lang=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/user/List.vue?vue&type=template&id=d29e1572&lang=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/user/List.vue?vue&type=template&id=d29e1572&lang=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/user/List.vue?vue&type=template&id=d29e1572&lang=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-app", [
    _c(
      "div",
      [
        _vm.success
          ? _c("v-alert", { attrs: { type: "success" } }, [
              _vm._v(_vm._s(_vm.success))
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("h2", { attrs: { align: "center" } }, [
          _c("i", {
            staticClass: "fa fa-users",
            attrs: { "aria-hidden": "true" }
          }),
          _vm._v(" Users")
        ]),
        _vm._v(" "),
        _c("v-text-field", {
          attrs: { label: "search", "single-line": "", "hide-details": "" },
          model: {
            value: _vm.search,
            callback: function($$v) {
              _vm.search = $$v
            },
            expression: "search"
          }
        }),
        _vm._v(" "),
        _c("v-data-table", {
          attrs: {
            items: _vm.users,
            headers: _vm.headers,
            "sort-by": "email",
            "sort-desc": true,
            search: _vm.search
          },
          scopedSlots: _vm._u([
            {
              key: "item.email",
              fn: function(ref) {
                var item = ref.item
                return [
                  _vm._v("\n\n            " + _vm._s(item.email) + "\n        ")
                ]
              }
            },
            {
              key: "item.actions",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c(
                    "td",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "primary",
                            elevation: "2",
                            outlined: "",
                            small: "",
                            to: "/admin/user/" + item.id
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-eye",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(" Watch ")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "success",
                            elevation: "2",
                            outlined: "",
                            small: "",
                            to: "/admin/user/" + item.id + "/edit"
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-pencil",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(" Edit ")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "red",
                            elevation: "2",
                            outlined: "",
                            small: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.deleteUser(item.id)
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-trash",
                            attrs: { "aria-hidden": "true" }
                          }),
                          _vm._v(" Delete ")
                        ]
                      )
                    ],
                    1
                  )
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);