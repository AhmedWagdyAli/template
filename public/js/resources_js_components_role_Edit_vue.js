"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_role_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/role/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/role/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      role: '',
      permissions: [],
      selected: [],
      per: []
    };
  },
  mounted: function mounted() {
    this.showRole();
    this.getPermissions();
  },
  computed: {
    activeUsers: function activeUsers() {
      return this.permissions.filter(function (mission) {
        return mission;
      });
    }
  },
  methods: {
    showRole: function showRole() {
      var _this = this;

      this.axios.get("/api/role/".concat(this.$route.params.id)).then(function (response) {
        var _response$data = response.data,
            role = _response$data.role,
            selected = _response$data.selected;
        _this.role = role;
        _this.selected = selected;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getPermissions: function getPermissions() {
      var _this2 = this;

      this.axios.get('/api/permissions').then(function (response) {
        _this2.permissions = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    check: function check() {
      this.permissions.map(function (mission) {
        this.selected.map(function (per) {
          if (mission.id == per.id) {
            return true;
          } else {
            return false;
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/role/Edit.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/role/Edit.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_57d83ce8_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=57d83ce8&lang=true& */ "./resources/js/components/role/Edit.vue?vue&type=template&id=57d83ce8&lang=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/role/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_57d83ce8_lang_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_57d83ce8_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/role/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/role/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/role/Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/role/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/role/Edit.vue?vue&type=template&id=57d83ce8&lang=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/role/Edit.vue?vue&type=template&id=57d83ce8&lang=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_57d83ce8_lang_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_57d83ce8_lang_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_57d83ce8_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=57d83ce8&lang=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/role/Edit.vue?vue&type=template&id=57d83ce8&lang=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/role/Edit.vue?vue&type=template&id=57d83ce8&lang=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/role/Edit.vue?vue&type=template&id=57d83ce8&lang=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.create.apply(null, arguments)
              }
            }
          },
          [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "" } }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.role.name,
                    expression: "role.name"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  placeholder: "",
                  "aria-describedby": "helpId"
                },
                domProps: { value: _vm.role.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.role, "name", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _vm._l(_vm.activeUsers, function(mission, key, index) {
              return _c("div", { key: key, staticClass: "container" }, [
                _vm.check
                  ? _c("div", { staticClass: "col-md-3" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: mission[key],
                            expression: "mission[key]"
                          }
                        ],
                        attrs: { type: "checkbox" },
                        domProps: {
                          checked: Array.isArray(mission[key])
                            ? _vm._i(mission[key], null) > -1
                            : mission[key]
                        },
                        on: {
                          change: function($event) {
                            var $$a = mission[key],
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(mission, key, $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    mission,
                                    key,
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(mission, key, $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(_vm._s(mission.name) + " \n                    ")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.check
                  ? _c("div", { staticClass: "col-md-3" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: mission[key],
                            expression: "mission[key]"
                          }
                        ],
                        attrs: { type: "checkbox", checked: "" },
                        domProps: {
                          checked: Array.isArray(mission[key])
                            ? _vm._i(mission[key], null) > -1
                            : mission[key]
                        },
                        on: {
                          change: function($event) {
                            var $$a = mission[key],
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(mission, key, $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    mission,
                                    key,
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(mission, key, $$c)
                            }
                          }
                        }
                      }),
                      _vm._v(_vm._s(mission.name) + " \n                    ")
                    ])
                  : _vm._e()
              ])
            }),
            _vm._v(" "),
            _vm._m(0)
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("update")]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);