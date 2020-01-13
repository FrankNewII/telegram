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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;\n      var valB = pug_style(b[key]);\n      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n};\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '', padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    return val + '';\n  }\n};\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  var type = typeof val;\n  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + '=\\'' + val.replace(/'/g, '&#39;') + '\\'';\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n};\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse){\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n};\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html){\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34: escape = '&quot;'; break;\n      case 38: escape = '&amp;'; break;\n      case 60: escape = '&lt;'; break;\n      case 62: escape = '&gt;'; break;\n      default: continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n};\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str){\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || __webpack_require__(/*! fs */ 0).readFileSync(filename, 'utf8')\n  } catch (ex) {\n    pug_rethrow(err, null, lineno)\n  }\n  var context = 3\n    , lines = str.split('\\n')\n    , start = Math.max(lineno - context, 0)\n    , end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines.slice(start, end).map(function(line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? '  > ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'Pug') + ':' + lineno\n    + '\\n' + context + '\\n\\n' + err.message;\n  throw err;\n};\n\n\n//# sourceURL=webpack:///./node_modules/pug-runtime/index.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_common_build_component_ComponentsBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/common/build-component/ComponentsBuilder */ \"./src/js/common/build-component/ComponentsBuilder.js\");\n/* harmony import */ var _js_components_main_component_MainComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/components/main-component/MainComponent */ \"./src/js/components/main-component/MainComponent.js\");\n\n\n\nconst t = document.querySelector('main-component');\nconst fr = document.createDocumentFragment();\nfr.appendChild(t);\nconst t1 = performance.now();\n_js_common_build_component_ComponentsBuilder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].build(_js_components_main_component_MainComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], fr.querySelector('main-component'), null);\ndocument.body.appendChild(fr);\nconsole.log(t1 - performance.now());\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/common/DI.js":
/*!*****************************!*\
  !*** ./src/js/common/DI.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass DependencyInjector {\n    constructor() {\n        this.services = new Map();\n    }\n\n    add(service) {\n        this.services.set(service, {\n            klass: service,\n            instance: null\n        });\n    }\n\n    get(service) {\n        const inst = this.services.get(service);\n\n        if (!inst) throw new Error('Instance was not added to DI');\n\n        if (inst.instance) return inst.instance;\n\n        if (!inst.klass.dependencies) {\n            return inst.instance = new inst.klass;\n        } else {\n            const dependencies = [];\n\n            for(let i = 0; i < inst.klass.dependencies.length; i++) {\n                dependencies.push(this.get(inst.klass.dependencies[i]));\n            }\n\n            const instance = new inst.klass;\n            inst.instance = instance;\n\n            instance.inject.call(instance.inject, dependencies);\n\n            return instance;\n        }\n    }\n}\n\nconst DI = new DependencyInjector();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DI);\n\n\n//# sourceURL=webpack:///./src/js/common/DI.js?");

/***/ }),

/***/ "./src/js/common/Observable.js":
/*!*************************************!*\
  !*** ./src/js/common/Observable.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Observable; });\nclass Observable {\n    constructor(component, propertyName, componentPropertyName) {\n        this.listeners = [];\n        this.component = component;\n        this.propertyName = propertyName;\n        this.componentPropertyName = componentPropertyName;\n    }\n\n    add(component, fn) {\n        this.listeners.push([component, fn]);\n    }\n\n    remove(component) {\n        const idx = this.listeners.find(v => v[0] === component);\n\n        if (idx !== -1) {\n            this.listeners.splice(idx, 1);\n        }\n\n        if (!this.listeners.length) {\n            const v = this.component['_$' + this.propertyName];\n            delete this.component[this.propertyName];\n            delete this.component['$listeners' + this.propertyName];\n            this.component[this.propertyName] = v;\n        }\n    }\n\n    update() {\n        const propertyName = this.component['_$' + this.propertyName];\n        const self = this;\n        this.listeners.forEach( listener => listener[1].call(self, listener[0], propertyName, this.componentPropertyName));\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/common/Observable.js?");

/***/ }),

/***/ "./src/js/common/PrototypeComponent.js":
/*!*********************************************!*\
  !*** ./src/js/common/PrototypeComponent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PrototypeComponent; });\n/* harmony import */ var _Render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render */ \"./src/js/common/Render.js\");\n\n\nclass PrototypeComponent extends _Render__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    get $propertyChanged() {\n        return this._$propertyChanged;\n    }\n\n    set $propertyChanged(b) {\n        this._$propertyChanged = b;\n    }\n\n    get $outputs() {\n        return this.outputs;\n    }\n\n    get $inputs() {\n        return this.inputs\n    }\n\n    get $dependencies() {\n        return this.dependencies;\n    }\n\n    $init(tag, klass) {\n        this.$tag = tag;\n        this.$class = klass;\n        const fr = document.createDocumentFragment();\n        const children = tag.childNodes;\n\n        while (children.length) fr.appendChild(children[0]);\n\n        this.innerNodes = fr;\n        this._$previousParsedtemplate = null;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/common/PrototypeComponent.js?");

/***/ }),

/***/ "./src/js/common/Queue.js":
/*!********************************!*\
  !*** ./src/js/common/Queue.js ***!
  \********************************/
/*! exports provided: Queue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Queue\", function() { return Queue; });\nclass Queue {\n    constructor() {\n        this.queue = [];\n    }\n\n    add(i) {\n        this.queue.push(i);\n    }\n\n    get() {\n        return this.queue.shift();\n    }\n\n    hasItems() {\n        return !!this.queue.length;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/common/Queue.js?");

/***/ }),

/***/ "./src/js/common/Render.js":
/*!*********************************!*\
  !*** ./src/js/common/Render.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Render; });\n/* harmony import */ var _functions_makePropertyObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/makePropertyObservable */ \"./src/js/common/functions/makePropertyObservable.js\");\n/* harmony import */ var _build_component_ComponentsBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build-component/ComponentsBuilder */ \"./src/js/common/build-component/ComponentsBuilder.js\");\n\n\n\nfunction updateNode(template) {\n    return function (v) {\n        v.nodeValue = template.replace('[' + this.propertyName + ']', this.component[this.propertyName])\n    }\n}\n\nfunction updateStructural(node, place, parentInstance) {\n    const fragment = document.createDocumentFragment();\n    let parent = null;\n    return function (v) {\n        let n = null;\n        this.component[this.propertyName]\n            .forEach((v, i) => {\n                const newNode = node.cloneNode(true);\n                this.component.$getParsedTemplate(newNode, v, false);\n                _build_component_ComponentsBuilder__WEBPACK_IMPORTED_MODULE_1__[\"default\"].rebuild(parentInstance.$class, newNode, v, parentInstance);\n                newNode.dataset.forIndex = i;\n                n = newNode;\n                fragment.appendChild(newNode)\n            });\n\n        place.innerHTML = '';\n        place.appendChild(fragment);\n    }\n}\n\nfunction updateClasses(node, exp) {\n    let previousClass = null;\n    return function (v) {\n        const calc = doExp(exp, this.component);\n\n        if (previousClass !== calc) {\n            node.classList.remove(previousClass);\n            console.log(previousClass, calc, node);\n            calc && node.classList.add(calc);\n            previousClass = calc;\n        }\n    }\n}\n\nfunction updateAttribute(node, attrValue, attrName) {\n    return function (v) {\n        if (attrValue !== this.component[this.propertyName]) {\n            node.removeAttribute(doExp(attrName, this.component));\n            node.setAttribute(attrName, this.component[this.propertyName]);\n            attrValue = this.component[this.propertyName];\n        }\n    }\n}\n\n\nfunction doExp(exp, ctx) {\n    const fn = new Function('', 'return ' + exp.replace(/(?<=^([^\"']|(\"|')[^\"']*(\"|'))*)[a-zA-Z]+([0-9]?)/g, (v) => 'this.' + v));\n    return fn.call(ctx);\n}\nclass Render {\n    get $template() {\n        return this._$template;\n    }\n\n    set $template(template) {\n        this._$template = template;\n    }\n\n    $render() {\n        const div = document.createElement('div');\n\n        div.innerHTML = this.$insertComponents();\n\n        if (this.$options && this.$options.compareTemplateBeforeInsert) {\n            this.$getParsedTemplate(div);\n            const parsedTemplate = this._$checkStructuralDirectives(div);\n\n\n            if (parsedTemplate !== this._$previousParsedtemplate) {\n                this.$updateView(this._$previousParsedtemplate = parsedTemplate);\n            }\n\n        } else {\n            this._$checkStructuralDirectives(div);\n            this.$getParsedTemplate(div);\n            const parsedTemplate = div.childNodes[0];\n            this.$updateView(parsedTemplate);\n        }\n    }\n\n    $insertComponents(template = this.$template) {\n        return template;\n    }\n\n    $getParsedTemplate(container, data = this, doAddListeners = true) {\n        const children = container.childNodes;\n        const len = children.length;\n        for (let i = 0; i < len; i++) {\n            if (children[i].nodeType === 3) {\n\n                if (children[i].nodeValue.indexOf('[[insertComponent]]') !== -1) {\n                    this._$insertComponent(children[i]);\n                } else {\n                    this._$insertDataToTemplate(children[i], data, doAddListeners);\n                }\n\n            } else {\n                const ref = children[i].dataset.elementRef;\n                const klass = children[i].dataset.class;\n                const attr = children[i].dataset.attr;\n\n                if (ref) {\n                    this._$insertReferences(ref, children[i]);\n                }\n\n\n                if (klass) {\n                    if (data instanceof Render) {\n                        Object(_functions_makePropertyObservable__WEBPACK_IMPORTED_MODULE_0__[\"makePropertyObservable\"])(this, klass, children[i], updateClasses(children[i], klass), klass);\n                    }\n                    const exp = doExp(klass, data);\n\n                    if (exp) {\n                        if (typeof (exp) === 'object') {\n                            children[i].classList.add.apply(children[i].classList, exp.filter(v => v) );\n                        } else {\n                            children[i].classList.add( exp )\n                        }\n\n                    }\n                }\n\n                if (attr) {\n                    const attrs = attr.split('::');\n\n                    if (data instanceof Render) {\n                        Object(_functions_makePropertyObservable__WEBPACK_IMPORTED_MODULE_0__[\"makePropertyObservable\"])(this, attrs[1], children[i], updateAttribute(children[i], attrs[1], attrs[0]), klass);\n                    }\n\n                    children[i].setAttribute(attrs[0], data[attrs[1]]);\n                }\n\n                if (!this._$isStructural(children[i])) {\n                    this.$getParsedTemplate(children[i], data, doAddListeners);\n                }\n            }\n        }\n    }\n\n    $updateView(view) {\n        this.$tag.innerHTML = '';\n        this.$tag.appendChild(view);\n        this._$previousParsedtemplate = view;\n    }\n\n    _$checkStructuralDirectives(parentNode) {\n        const conditional = parentNode.querySelectorAll('[data-if]');\n\n        conditional.forEach( node => {\n            console.log(node.dataset.if);\n            const calc = doExp(node.dataset.if, this);\n            if (!calc) {\n                node.remove();\n            }\n        });\n\n        const cycles = parentNode.querySelectorAll('[data-for]'); // todo: increase time twice\n\n        cycles\n            .forEach(node => {\n                const propertyName = node.dataset.for;\n                let n = null;\n                this[propertyName]\n                    .forEach((v, i) => {\n                        const newNode = node.cloneNode(true);\n                        this.$getParsedTemplate(newNode, v, false);\n                        newNode.dataset.forIndex = i;\n                        node.before(newNode);\n                        n = newNode;\n                    });\n\n                Object(_functions_makePropertyObservable__WEBPACK_IMPORTED_MODULE_0__[\"makePropertyObservable\"])(this, propertyName, node, updateStructural(node, node.parentElement, this), propertyName);\n\n                node.parentElement.removeChild(node);\n            });\n    }\n\n    _$isStructural(node) {\n        return !!node.dataset.for;\n    }\n\n    _$addListenerToUpdateBlock(node, propertyName) {\n        Object(_functions_makePropertyObservable__WEBPACK_IMPORTED_MODULE_0__[\"makePropertyObservable\"])(this, propertyName, node, updateNode(node.nodeValue), propertyName);\n    }\n\n    _$insertComponent(node) {\n        const parent = node.parentElement;\n        node.remove();\n        parent.appendChild(this.innerNodes);\n    }\n\n    _$insertDataToTemplate(node, data, doAddListeners) {\n        node.nodeValue = node.nodeValue\n            .replace(/\\[(\\w)+\\]/g, v => {\n                const propertyName = v.substring(1, v.length - 1);\n\n                if (doAddListeners && this[propertyName] !== undefined) {\n                    this._$addListenerToUpdateBlock(node, propertyName);\n                }\n\n                return (data[propertyName] !== undefined) ? data[propertyName] : v;\n            });\n    }\n\n    _$insertReferences(referenceName, node) {\n        if (this.$references) {\n            if (this.$references[referenceName]) {\n\n                if (!this.$references[referenceName].push) {\n                    this.$references[referenceName] = [this.$references[referenceName]];\n                }\n\n                this.$references[referenceName].push(node);\n            } else {\n                this.$references[referenceName] = node;\n            }\n        } else {\n            this.$references = {};\n            this.$references[referenceName] = node;\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/common/Render.js?");

/***/ }),

/***/ "./src/js/common/build-component/CheckerProperties.js":
/*!************************************************************!*\
  !*** ./src/js/common/build-component/CheckerProperties.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CheckerProperties; });\n/* harmony import */ var _Emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emitter */ \"./src/js/common/build-component/Emitter.js\");\n/* harmony import */ var _functions_makePropertyObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/makePropertyObservable */ \"./src/js/common/functions/makePropertyObservable.js\");\n\n\n\nfunction updateChildrenProperties(c, v) {\n    c.inputs[this.componentPropertyName] = v;\n    if (c.changesProperties) {\n        c.changesProperties(this.componentPropertyName);\n    }\n}\n\nclass CheckerProperties extends _Emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    _parentsListenProperties(component, parent, listenProperties) {\n\n        Object.entries(listenProperties).forEach(([childrenProperty, parentProperty]) => {\n            Object(_functions_makePropertyObservable__WEBPACK_IMPORTED_MODULE_1__[\"makePropertyObservable\"])(parent, parentProperty, component, updateChildrenProperties, childrenProperty);\n        });\n    }\n\n    _parentsPropertiesData(instance, parent, listenProperties, defaultParams) {\n        const objectData = {};\n        Object.entries(listenProperties).forEach(([childrenProperty, parentProperty]) => objectData[childrenProperty] = parent[parentProperty]);\n        instance.inputs = Object.assign({}, defaultParams, objectData);\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/js/common/build-component/CheckerProperties.js?");

/***/ }),

/***/ "./src/js/common/build-component/ComponentsBuilder.js":
/*!************************************************************!*\
  !*** ./src/js/common/build-component/ComponentsBuilder.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DI */ \"./src/js/common/DI.js\");\n/* harmony import */ var _CheckerProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckerProperties */ \"./src/js/common/build-component/CheckerProperties.js\");\n/* harmony import */ var _PrototypeComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PrototypeComponent */ \"./src/js/common/PrototypeComponent.js\");\n/* harmony import */ var _Queue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Queue */ \"./src/js/common/Queue.js\");\n\n\n\n\n\nclass ComponentsBuilder extends _CheckerProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor() {\n        super();\n        this.queue = new _Queue__WEBPACK_IMPORTED_MODULE_3__[\"Queue\"]();\n        this.i = 0;\n    }\n\n    build(klass, tag, parent) {\n        if (tag.inited) return;\n        tag.inited = true;\n\n        if (!klass.name) throw new Error('PrototypeComponent must have property \"name\"');\n\n        if (!klass instanceof _PrototypeComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) throw new Error('PrototypeComponent should inherit PrototypeComponent or implement his interface');\n\n        const instance = new klass();\n\n        this._prepareDom(instance, klass, tag)\n            ._injectDependencies(klass, instance)\n            ._bindInputs(klass, tag, instance, parent)\n            ._bindOutputs(klass, parent, instance, tag);\n\n        if (instance.init) instance.init();\n        instance.$render(tag);\n        tag.component = instance;\n        if (klass.listenEvents) this.appendEventsListeners(tag, klass.listenEvents, instance);\n        if (klass.components) this._searchChildComponents(klass.components, instance, tag);\n        while(this.queue.hasItems()) {\n            const params = this.queue.get();\n            this.build.apply(this, params);\n            if (params[0].viewInited) instance.viewInited();\n        }\n        return instance;\n    }\n\n    rebuild(klass, tag, parent, parentClass, instance) {\n\n        if (klass.components) this._searchChildComponents(klass.components, parentClass, tag);\n        while(this.queue.hasItems()) {\n            const params = this.queue.get();\n            this.build.apply(this, params);\n            if (params[0].viewInited) instance.viewInited();\n        }\n        return instance;\n    }\n\n    _searchChildComponents(components, instance, tag) {\n        components.forEach(component => {\n            const tags = tag.querySelectorAll(component.name);\n\n            tags.forEach(t => this.queue.add([component, t, instance]));\n        });\n    }\n\n    _injectDependencies(klass, instance) {\n\n        if (klass.dependencies) {\n            const instances = [];\n\n            for (let i = 0; i < klass.dependencies.length; i++) {\n                instances.push(_DI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(klass.dependencies[i]));\n            }\n\n            instance.dependencies = instances;\n        }\n\n        return this;\n    }\n\n    _bindInputs(klass, tag, instance, parent, doAddListeners = true) {\n        if (klass.inputs && parent) {\n            const propertiesAliases = this.getBoundAttributes(tag, klass.inputs, false);\n            this._parentsPropertiesData(instance, parent, propertiesAliases, klass.inputs);\n            doAddListeners && this._parentsListenProperties(instance, parent, propertiesAliases);\n            instance._$properitesAliases = propertiesAliases;\n            instance._$parent = parent;\n        }\n\n        return this;\n    }\n\n    _bindOutputs(klass, parent, instance, tag) {\n        if (klass.outputs && parent) {\n            const propertiesAliases = this.getBoundAttributes(tag, klass.outputs);\n            this.parentsListenFunctions(instance, parent, propertiesAliases);\n        }\n    }\n\n    _prepareDom(instance, klass, tag) {\n        instance.$template = klass.template;\n        instance.$init(tag, klass);\n\n        return this;\n    }\n}\n\nconst components = new ComponentsBuilder();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (components);\n\n\n//# sourceURL=webpack:///./src/js/common/build-component/ComponentsBuilder.js?");

/***/ }),

/***/ "./src/js/common/build-component/Emitter.js":
/*!**************************************************!*\
  !*** ./src/js/common/build-component/Emitter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Emitter; });\n/* harmony import */ var _EventHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventHandler */ \"./src/js/common/build-component/EventHandler.js\");\n\n\nconst noop = () => console.log('Event');\nclass Emitter extends _EventHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n    parentsListenFunctions(component, parent, listenEvents) {\n        component.outputs = listenEvents;\n        Object.entries(listenEvents).forEach(([childrenOutput, parentListener]) => {\n\n            component.outputs[childrenOutput] = parentListener ? parent[parentListener].bind(parent) : noop;\n\n        });\n    }\n\n    getBoundAttributes(tag, listenProperties, outputs = true) {\n        const nameProperties = {};\n        Object.keys(listenProperties).forEach(k => {\n            const propertyName = tag.getAttribute( 'data-' + ( outputs ? 'output' : 'input' ) + '-' + k);\n            // todo: check speed with dataset\n            if (propertyName) nameProperties[k] = propertyName;\n\n        });\n        return nameProperties;\n    }\n\n}\n\n\n\n//# sourceURL=webpack:///./src/js/common/build-component/Emitter.js?");

/***/ }),

/***/ "./src/js/common/build-component/EventHandler.js":
/*!*******************************************************!*\
  !*** ./src/js/common/build-component/EventHandler.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventHandler; });\nclass EventHandler {\n    appendEventsListeners(tag, listenEvents, instance) {\n        Object.entries(listenEvents).forEach(([eventName, eventParams]) => {\n            tag.addEventListener(eventName, (event) => this.callMethod(event, eventParams, instance, eventName));\n        });\n    }\n\n    callMethod(event, testEventParams, instance, eventName) {\n        event.stopPropagation();\n        if (testEventParams.targets) {\n            const idx = testEventParams.targets.indexOf(event.target.getAttribute('data-element-ref'));\n            if (idx === -1) return;\n        }\n        if (testEventParams.method) instance[testEventParams.method](event);\n        else if (instance[eventName]) instance[eventName](event);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/common/build-component/EventHandler.js?");

/***/ }),

/***/ "./src/js/common/functions/addPropertyEventEmitter.js":
/*!************************************************************!*\
  !*** ./src/js/common/functions/addPropertyEventEmitter.js ***!
  \************************************************************/
/*! exports provided: addPropertyEventEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPropertyEventEmitter\", function() { return addPropertyEventEmitter; });\n/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ \"./src/js/common/Observable.js\");\n\n\nfunction addPropertyEventEmitter(component, propertyName, componentPropertyName) {\n    return component['$listeners' + propertyName] = new _Observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"](component, propertyName, componentPropertyName);\n}\n\n\n//# sourceURL=webpack:///./src/js/common/functions/addPropertyEventEmitter.js?");

/***/ }),

/***/ "./src/js/common/functions/createWave.js":
/*!***********************************************!*\
  !*** ./src/js/common/functions/createWave.js ***!
  \***********************************************/
/*! exports provided: createWave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createWave\", function() { return createWave; });\nfunction createWave(x, y, target) {\n    const div = document.createElement('div');\n    div.classList.add('wave');\n    div.style['transitionDuration'] = '.5s';\n    div.style.left = x + \"px\";\n    div.style.top = y + \"px\";\n    target.appendChild(div);\n\n    setTimeout(() => div.classList.add('rise'), 10);\n    setTimeout(() => div.remove(), 500);\n}\n\n\n//# sourceURL=webpack:///./src/js/common/functions/createWave.js?");

/***/ }),

/***/ "./src/js/common/functions/makePropertyObservable.js":
/*!***********************************************************!*\
  !*** ./src/js/common/functions/makePropertyObservable.js ***!
  \***********************************************************/
/*! exports provided: makePropertyObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makePropertyObservable\", function() { return makePropertyObservable; });\n/* harmony import */ var _addPropertyEventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPropertyEventEmitter */ \"./src/js/common/functions/addPropertyEventEmitter.js\");\n\n\nfunction makePropertyObservable(observableComponent, propertyName, observerComponent, listener, observerPropertyName) {\n    if (observableComponent['$listeners' + propertyName]) {\n        observableComponent['$listeners' + propertyName].add(observerComponent, listener);\n    } else {\n        const lastValue = observableComponent[propertyName];\n\n        Object.defineProperty(observableComponent, propertyName, {\n            get: () => observableComponent['_$' + propertyName],\n            set: newValue => {\n                observableComponent['_$' + propertyName] = newValue;\n                observableComponent['$listeners' + propertyName].update();\n            }\n        });\n\n        observableComponent['_$' + propertyName] = lastValue;\n\n        Object(_addPropertyEventEmitter__WEBPACK_IMPORTED_MODULE_0__[\"addPropertyEventEmitter\"])(observableComponent, propertyName, observerPropertyName).add(observerComponent, listener);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/common/functions/makePropertyObservable.js?");

/***/ }),

/***/ "./src/js/components/main-component/MainComponent.js":
/*!***********************************************************!*\
  !*** ./src/js/components/main-component/MainComponent.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainComponent; });\n/* harmony import */ var _services_Http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/Http */ \"./src/js/services/Http.js\");\n/* harmony import */ var _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/PrototypeComponent */ \"./src/js/common/PrototypeComponent.js\");\n/* harmony import */ var _main_component_pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-component.pug */ \"./src/js/components/main-component/main-component.pug\");\n/* harmony import */ var _main_component_pug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_component_pug__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_sing_in_SingIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sing-in/SingIn */ \"./src/js/components/main-component/components/sing-in/SingIn.js\");\n/* harmony import */ var _services_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Auth */ \"./src/js/services/Auth.js\");\n/* harmony import */ var _components_chat_ChatComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/chat/ChatComponent */ \"./src/js/components/main-component/components/chat/ChatComponent.js\");\n\n\n\n\n\n\n\nclass MainComponent extends _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n\n    static get components() {\n        return [_components_sing_in_SingIn__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _components_chat_ChatComponent__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n    }\n\n    static get name() {\n        return 'main-component';\n    }\n\n    static get dependencies() {\n        return [_services_Http__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _services_Auth__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n    }\n\n    static get template() {\n        return _main_component_pug__WEBPACK_IMPORTED_MODULE_2___default()();\n    }\n\n    init() {\n        //this.$tag.classList.add('logged');\n        this.checkState();\n    }\n\n    checkState() {\n        this.$tag.classList.add('logged');\n        /*if (this.$dependencies[1].isLoggined()) {\n            this.$tag.classList.add('logged');\n        } else {\n            this.$tag.classList.remove('logged');\n        }*/\n    }\n\n    setTelegramCreds() {\n        //console.log(this.$dependencies[0]);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/components/main-component/MainComponent.js?");

/***/ }),

/***/ "./src/js/components/main-component/components/chat/ChatComponent.js":
/*!***************************************************************************!*\
  !*** ./src/js/components/main-component/components/chat/ChatComponent.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ChatComponent; });\n/* harmony import */ var _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/PrototypeComponent */ \"./src/js/common/PrototypeComponent.js\");\n/* harmony import */ var _chat_component_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-component.pug */ \"./src/js/components/main-component/components/chat/chat-component.pug\");\n/* harmony import */ var _chat_component_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chat_component_pug__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/Messages */ \"./src/js/services/Messages.js\");\n/* harmony import */ var _components_chat_ChatBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/chat/ChatBody */ \"./src/js/components/main-component/components/chat/components/chat/ChatBody.js\");\n/* harmony import */ var _components_chats_component_ChatsComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/chats-component/ChatsComponent */ \"./src/js/components/main-component/components/chat/components/chats-component/ChatsComponent.js\");\n/* harmony import */ var _components_profile_ProfileComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile/ProfileComponent */ \"./src/js/components/main-component/components/chat/components/profile/ProfileComponent.js\");\n/* harmony import */ var _shared_button_component_ButtonComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/button-component/ButtonComponent */ \"./src/js/components/shared/button-component/ButtonComponent.js\");\n/* harmony import */ var _chats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chats */ \"./src/js/components/main-component/components/chat/chats.js\");\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users */ \"./src/js/components/main-component/components/chat/users.js\");\n\n\n\n\n\n\n\n\n\n\nclass ChatComponent extends _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    static get outputs() {\n        return {loggedOut: null};\n    }\n\n    static get components() {\n        return [_components_chat_ChatBody__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _components_chats_component_ChatsComponent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _components_profile_ProfileComponent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _shared_button_component_ButtonComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"]];\n    }\n\n    static get name() {\n        return 'chat-component';\n    }\n\n    static get dependencies() {\n        return [_services_Messages__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n    }\n\n    static get template() {\n        return _chat_component_pug__WEBPACK_IMPORTED_MODULE_1___default()();\n    }\n\n    init() {\n        this._chats = this.chats = _users__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\n\n        this._chats = this.chats = this.chats.concat(this.chats);\n        this._chats = this.chats = this.chats.concat(this.chats);\n        this._chats = this.chats = this.chats.concat(this.chats);\n        this._chats = this.chats = this.chats.concat(this.chats);\n\n        this.openChat = '';\n    }\n\n    toggleProfile() {\n        this.$tag.classList.toggle('profile-component');\n    }\n\n    loggedOut() {\n        this.$outputs.loggedOut();\n    }\n\n    selectChat(event) {\n        const i = event.path.find(n => n.dataset.forIndex !== undefined).dataset.forIndex;\n        if (this.chats[i] !== this.openChat) {\n            this.chats[i].chat = _chats__WEBPACK_IMPORTED_MODULE_7__[\"default\"].reverse().map(v => v);\n            this.openChat = this.chats[i];\n        }\n\n    }\n\n    searchChat(v) {\n        this.chats = this._chats.filter(c => c.name.toLowerCase().indexOf(v.toLowerCase()) !== -1);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/components/main-component/components/chat/ChatComponent.js?");

/***/ }),

/***/ "./src/js/components/main-component/components/chat/chat-component.pug":
/*!*****************************************************************************!*\
  !*** ./src/js/components/main-component/components/chat/chat-component.pug ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"chat-container\\\"\\u003E\\u003Cdiv class=\\\"chat\\\"\\u003E\\u003Cchats-component data-output-loggedOut=\\\"loggedOut\\\" data-output-selectChat=\\\"selectChat\\\" data-output-searchChat=\\\"searchChat\\\"\\u003E\\u003Cdiv class=\\\"buttons\\\" data-for=\\\"chats\\\"\\u003E\\u003Cbutton-component class=\\\"user-chat\\\" data-output-click=\\\"selectChat\\\"\\u003E\\u003Cdiv class=\\\"user\\\"\\u003E\\u003Cdiv class=\\\"photo\\\"\\u003E\\u003Cimg data-attr=\\\"src::photo\\\"\\u003E\\u003Cdiv class=\\\"isOnline\\\" data-class=\\\"online\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"message\\\"\\u003E\\u003Cdiv class=\\\"name\\\"\\u003E\\u003Cspan\\u003E\" + (pug.escape(null == (pug_interp = '[name]') ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"message-text\\\" data-class=\\\"typing &amp;&amp; &quot;typing&quot;\\\"\\u003E\\u003Cspan\\u003E\" + (pug.escape(null == (pug_interp = '[lastMessage]') ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"message-params\\\"\\u003E\\u003Cdiv class=\\\"time\\\"\\u003E\" + (pug.escape(null == (pug_interp = '[lastMassageTime]') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cspan class=\\\"unread\\\" data-class=\\\"[messages ? &quot;has-unread&quot; : &quot;&quot;, muted ? &quot;muted&quot; : &quot;&quot;]\\\"\\u003E\" + (pug.escape(null == (pug_interp = '[messages]') ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fbutton-component\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fchats-component\\u003E\\u003Cchat-body data-output-toggleProfile=\\\"toggleProfile\\\" data-input-user=\\\"openChat\\\"\\u003E\\u003C\\u002Fchat-body\\u003E\\u003Cprofile-component data-output-toggleProfile=\\\"toggleProfile\\\" data-input-user=\\\"openChat\\\"\\u003E\\u003C\\u002Fprofile-component\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/js/components/main-component/components/chat/chat-component.pug?");

/***/ }),

/***/ "./src/js/components/main-component/components/chat/chats.js":
/*!*******************************************************************!*\
  !*** ./src/js/components/main-component/components/chat/chats.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst chats = [\n    {\n        message: 'Lorem ipsum dollor assd sds sdsds fdf d fd f dfdf fsds' +\n            'dsdsdfd dfdfd gkadkLsjdj sdleifjj KSJAdksa nsnjdkakl lLKLldjkjaskdjk' +\n            'sad sadasfaskjf :sasa asddsffsdds',\n        type: 'message',\n        from: 'them',\n        time: '0:21',\n        isRead: true\n    },\n    {\n        message: 'Lorem ipsum dollor assd sds sdsds fdf d fd f dfdf fsds',\n        type: 'message',\n        from: 'me',\n        time: '0:21',\n        isRead: false\n    },\n    {\n        message: 'Lorem ipsum dollor assd sds sdsds',\n        type: 'message',\n        from: 'them',\n        time: '0:21',\n        isRead: true\n    },\n    {\n        type: 'image',\n        imageUrl: '/images/pictures/einstein.jpg',\n        from: 'them',\n        time: '0:21',\n        isRead: true\n    },\n    {\n        message: 'Lorem ipsum dollor assd sds sdsds fdf d fd f dfdf fsds' +\n            'dsdsdfd dfdfd gkadkLsjdj sdleifjj KSJAdksa nsnjdkakl lLKLldjkjaskdjk' +\n            'sad sadasfaskjf :sasa asddsffsdds',\n        type: 'message',\n        from: 'them',\n        time: '0:21',\n        isRead: false\n    },\n    {\n        message: 'Lorem ipsum dollor assd sds sdsds fdf d fd f dfdf fsds' +\n            'dsdsdfd dfdfd gkadkLsjdj sdleifjj KSJAdksa nsnjdkakl lLKLldjkjaskdjk' +\n            'sad sadasfaskjf :sasa asddsffsdds',\n        type: 'message',\n        from: 'me',\n        time: '0:21',\n        isRead: false\n    }\n];\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (chats);\n\n\n//# sourceURL=webpack:///./src/js/components/main-component/components/chat/chats.js?");

/***/ }),

/***/ "./src/js/components/main-component/components/chat/components/chat/ChatBody.js":
/*!**************************************************************************************!*\
  !*** ./src/js/components/main-component/components/chat/components/chat/ChatBody.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ChatBody; });\n/* harmony import */ var _chat_body_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-body.pug */ \"./src/js/components/main-component/components/chat/components/chat/chat-body.pug\");\n/* harmony import */ var _chat_body_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chat_body_pug__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/PrototypeComponent */ \"./src/js/common/PrototypeComponent.js\");\n/* harmony import */ var _shared_button_component_ButtonComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/button-component/ButtonComponent */ \"./src/js/components/shared/button-component/ButtonComponent.js\");\n\n\n\n\nclass ChatBody extends _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n\n    static get outputs() {\n        return {toggleProfile: null};\n    }\n\n    static get inputs() {\n        return {\n            user: null\n        }\n    }\n    static get components() {\n        return [_shared_button_component_ButtonComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n    }\n\n    static get name() {\n        return 'chat-body';\n    }\n\n    static get dependencies() {\n        return [];\n    }\n\n    static get template() {\n        return _chat_body_pug__WEBPACK_IMPORTED_MODULE_0___default()();\n    }\n\n    static get listenEvents() {\n        return {\n            scroll: {\n                method: 'loadMessages',\n                targets: ['messages']\n            }\n        }\n    }\n\n    toggleProfile() {\n        this.$outputs.toggleProfile();\n    }\n\n    search() {\n        this.$tag.classList.toggle('show-search-input');\n    }\n\n    sendMessage() {\n\n    }\n\n    init() {\n        this.$tag.classList.add('no-selected-chat');\n        this.openChat = '';\n        this.name = '';\n        this.time = '';\n        this.isOnline = null;\n        this.photo = '';\n        this.messages = [];\n    }\n\n    reset() {\n        this.$references['messages'].scrollTop = 1000;\n    }\n\n    loadMessages() {\n\n    }\n\n    viewInited() {\n        this.reset();\n    }\n    changesProperties() {\n        this.$tag.classList.remove('no-selected-chat');\n        this.name = this.$inputs.user.name;\n        this.isOnline = this.$inputs.user.online;\n        this.photo = this.$inputs.user.photo;\n        this.messages = this.$inputs.user.chat;\n        this.time = this.$inputs.user.lastSeen;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/components/main-component/components/chat/components/chat/ChatBody.js?");

/***/ }),

/***/ "./src/js/components/main-component/components/chat/components/chat/chat-body.pug":
/*!****************************************************************************************!*\
  !*** ./src/js/components/main-component/components/chat/components/chat/chat-body.pug ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../../../../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"chats-container\\\"\\u003E\\u003Cdiv class=\\\"chat-menu\\\"\\u003E\\u003Cdiv class=\\\"photo-container\\\"\\u003E\\u003Cdiv class=\\\"photo\\\"\\u003E\\u003Cimg data-attr=\\\"src::photo\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"creds\\\"\\u003E\\u003Cdiv class=\\\"name\\\"\\u003E\" + (pug.escape(null == (pug_interp = '[name]') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"status\\\" data-class=\\\"isOnline\\\"\\u003E\\u003Cspan\\u003E\" + (pug.escape(null == (pug_interp = '[time]') ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"menu-container\\\"\\u003E\\u003Cdiv class=\\\"search\\\" data-element-ref=\\\"search\\\"\\u003E\\u003Cbutton-component class=\\\"rounded\\\" data-output-click=\\\"search\\\"\\u003E\\u003Cspan class=\\\"icon icon-search_svg\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fbutton-component\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"menu\\\" data-element-ref=\\\"menu\\\"\\u003E\\u003Cbutton-component class=\\\"rounded\\\" data-output-click=\\\"toggleProfile\\\"\\u003E\\u003Cspan class=\\\"icon icon-more_svg\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fbutton-component\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"messages\\\" data-element-ref=\\\"messages\\\"\\u003E\\u003Cdiv class=\\\"message\\\" data-for=\\\"messages\\\"\\u003E\\u003Cdiv class=\\\"message-body\\\" data-class=\\\"[from, type]\\\"\\u003E\\u003Cdiv class=\\\"bottom-shadow\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"side-shadow\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cspan class=\\\"picture\\\"\\u003E\\u003Cimg data-attr=\\\"src::imageUrl\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"message-text\\\"\\u003E\" + (pug.escape(null == (pug_interp = '[message]') ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"message-option\\\" data-class=\\\"isRead ? &quot;read&quot; : &quot;&quot;\\\"\\u003E\\u003Cspan\\u003E\" + (pug.escape(null == (pug_interp = '[time]') ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"icon\\\" data-class=\\\"isRead ? &quot;icon-1check_svg&quot; : &quot;icon-2checks_svg&quot;\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"enter-message-field\\\"\\u003E\\u003Cdiv class=\\\"message-container\\\"\\u003E\\u003Cdiv class=\\\"shadows-container\\\"\\u003E\\u003Cdiv class=\\\"bottom-shadow\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"side-shadow\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"smiles\\\"\\u003E\\u003Cbutton-component class=\\\"rounded\\\"\\u003E\\u003Cspan class=\\\"icon icon-smile_svg\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fbutton-component\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"textarea-container\\\"\\u003E\\u003Cdiv class=\\\"editor\\\" contenteditable=\\\"true\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"attach-file\\\"\\u003E\\u003Cbutton-component class=\\\"rounded\\\"\\u003E\\u003Cspan class=\\\"icon icon-attach_svg\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fbutton-component\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"control-panel-container\\\"\\u003E\\u003Cbutton-component class=\\\"blue rounded\\\"\\u003E\\u003Cspan class=\\\"icon icon-microphone_svg\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fbutton-component\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/js/components/main-component/components/chat/components/chat/chat-body.pug?");

/***/ }),

/***/ "./src/js/components/main-component/components/chat/components/chats-component/ChatsComponent.js":
/*!*******************************************************************************************************!*\
  !*** ./src/js/components/main-component/components/chat/components/chats-component/ChatsComponent.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ChatsComponent; });\n/* harmony import */ var _chats_component_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chats-component.pug */ \"./src/js/components/main-component/components/chat/components/chats-component/chats-component.pug\");\n/* harmony import */ var _chats_component_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chats_component_pug__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/PrototypeComponent */ \"./src/js/common/PrototypeComponent.js\");\n/* harmony import */ var _shared_button_component_ButtonComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/button-component/ButtonComponent */ \"./src/js/components/shared/button-component/ButtonComponent.js\");\n\n\n\n\nclass ChatsComponent extends _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n\n    static get outputs() {\n        return {loggedOut: null, selectChat: null, searchChat: null};\n    }\n\n    static get components() {\n        return [_shared_button_component_ButtonComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n    }\n\n    static get name() {\n        return 'chats-component';\n    }\n\n    static get dependencies() {\n        return [];\n    }\n\n    static get template() {\n        return _chats_component_pug__WEBPACK_IMPORTED_MODULE_0___default()();\n    }\n\n    static get listenEvents() {\n        return {\n            click: {\n                method: 'click',\n                targets: ['search', 'menu', 'chat', 'selectChat']\n            },\n            input: {\n                method: 'search',\n                targets: ['search']\n            }\n        }\n    }\n\n    click(event) {\n        if (event.target === this.$references['selectChat']) {\n            this.$outputs.selectChat(event.target.dataset.forIndex);\n        }\n    }\n\n    search(event) {\n        if (event.target === this.$references.search) {\n            this.$outputs.searchChat(event.target.value);\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/components/main-component/components/chat/components/chats-component/ChatsComponent.js?");

/***/ }),

/***/ "./src/js/components/main-component/components/chat/components/chats-component/chats-component.pug":
/*!*********************************************************************************************************!*\
  !*** ./src/js/components/main-component/components/chat/components/chats-component/chats-component.pug ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../../../../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"chats-container\\\"\\u003E\\u003Cdiv class=\\\"chats-options\\\"\\u003E\\u003Cdiv class=\\\"menu-toggler\\\"\\u003E\\u003Cbutton-component class=\\\"rounded\\\"\\u003E\\u003Cspan class=\\\"icon icon-menu_svg\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fbutton-component\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"input-container\\\"\\u003E\\u003Cspan class=\\\"icon icon-search_svg\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cinput data-element-ref=\\\"search\\\" placeholder=\\\"Search\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"chats\\\"\\u003E[[insertComponent]]\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/js/components/main-component/components/chat/components/chats-component/chats-component.pug?");

/***/ }),

/***/ "./src/js/components/main-component/components/chat/components/profile/ProfileComponent.js":
/*!*************************************************************************************************!*\
  !*** ./src/js/components/main-component/components/chat/components/profile/ProfileComponent.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProfileComponent; });\n/* harmony import */ var _profile_component_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-component.pug */ \"./src/js/components/main-component/components/chat/components/profile/profile-component.pug\");\n/* harmony import */ var _profile_component_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_profile_component_pug__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/PrototypeComponent */ \"./src/js/common/PrototypeComponent.js\");\n/* harmony import */ var _shared_button_component_ButtonComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/button-component/ButtonComponent */ \"./src/js/components/shared/button-component/ButtonComponent.js\");\n\n\n\n\nclass ProfileComponent extends _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n\n    static get outputs() {\n        return {toggleProfile: null};\n    }\n\n    static get inputs() {\n        return {user: null};\n    }\n\n    static get components() {\n        return [_shared_button_component_ButtonComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n    }\n\n    static get name() {\n        return 'profile-component';\n    }\n\n    static get dependencies() {\n        return [];\n    }\n\n    static get template() {\n        return _profile_component_pug__WEBPACK_IMPORTED_MODULE_0___default()();\n    }\n\n    static get listenEvents() {\n        return {\n            click: {\n                method: 'changeState',\n                targets: ['tabs']\n            },\n\n        }\n    }\n\n    changeState(event) {\n        console.log(event);\n        if (this.$references['tabs'] === event.target) {\n            console.log(new FormData(event.target));\n        }\n    }\n\n    closeProfile() {\n        this.$outputs.toggleProfile();\n    }\n\n    openAdditionalMenu() {\n\n    }\n\n    init() {\n        this.reset();\n        this.name = '';\n        this.photo = '';\n        this.bio = '';\n        this.username = '';\n        this.phone = '';\n        this.lastSeen = '';\n        this.isOnline = null;\n        this.shared = [{\n            type: 'image',\n            src: 'ass',\n            time: '0:25'\n        }, {\n            type: 'image',\n            src: 'ass',\n            time: '0:25'\n        }, {\n            type: 'image',\n            src: 'ass',\n            time: '0:25'\n        }, {\n            type: 'image',\n            src: 'ass',\n            time: '0:25'\n        }, {\n            type: 'image',\n            src: 'ass',\n            time: '0:25'\n        }, {\n            type: 'image',\n            src: 'ass',\n            time: '0:25'\n        }, {\n            type: 'image',\n            src: 'ass',\n            time: '0:25'\n        }, {\n            type: 'image',\n            src: 'ass',\n            time: '0:20'\n        }, {\n            type: 'image',\n            src: 'ass',\n            time: '0:20'\n        }];\n\n        this.shared = this.shared.concat(this.shared);\n        this.shared = this.shared.concat(this.shared);\n        this.shared = this.shared.concat(this.shared);\n        this.isEnabledNotification = true;\n    }\n\n    reset() {\n        this.sharedType = 'media';\n    }\n\n    viewInited() {\n\n    }\n\n    changesProperties() {\n\n        this.name = this.$inputs.user.name;\n        this.photo = this.$inputs.user.photo;\n        this.bio = this.$inputs.user.bio;\n        this.username = this.$inputs.user.username;\n        this.phone = this.$inputs.user.phoneNumber;\n        this.isOnline = this.$inputs.user.online;\n        this.lastSeen = this.$inputs.user.lastSeen;\n\n        this.photo = this.$inputs.user.photo;\n        this.photo = this.$inputs.user.photo;\n\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/components/main-component/components/chat/components/profile/ProfileComponent.js?");

/***/ }),

/***/ "./src/js/components/main-component/components/chat/components/profile/profile-component.pug":
/*!***************************************************************************************************!*\
  !*** ./src/js/components/main-component/components/chat/components/profile/profile-component.pug ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../../../../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"profile-container\\\"\\u003E\\u003Cdiv class=\\\"controls-container\\\"\\u003E\\u003Cdiv class=\\\"close-profile\\\"\\u003E\\u003Cbutton-component class=\\\"rounded\\\" data-output-click=\\\"closeProfile\\\"\\u003E\\u003Cspan class=\\\"icon icon-close_svg\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fbutton-component\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"label\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'Info') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"additional-menu\\\"\\u003E\\u003Cbutton-component class=\\\"rounded\\\" data-output-click=\\\"openAdditionalMenu\\\"\\u003E\\u003Cspan class=\\\"icon icon-more_svg\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fbutton-component\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"profile-panel\\\"\\u003E\\u003Cdiv class=\\\"user\\\"\\u003E\\u003Cdiv class=\\\"user-photo\\\"\\u003E\\u003Cimg data-attr=\\\"src::photo\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"name\\\"\\u003E\" + (pug.escape(null == (pug_interp = '[name]') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"status\\\" data-class=\\\"isOnline\\\"\\u003E\" + (pug.escape(null == (pug_interp = '[lastSeen]') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"info\\\"\\u003E\\u003Cdiv class=\\\"item\\\"\\u003E\\u003Cdiv class=\\\"icons\\\"\\u003E\\u003Cspan class=\\\"icon icon-info_svg\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"data\\\"\\u003E\\u003Cdiv class=\\\"value\\\"\\u003E\" + (pug.escape(null == (pug_interp = '[bio]') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"property\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'Bio') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"item\\\"\\u003E\\u003Cdiv class=\\\"icons\\\"\\u003E\\u003Cspan class=\\\"icon icon-channel_svg\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"data\\\"\\u003E\\u003Cdiv class=\\\"value\\\"\\u003E\" + (pug.escape(null == (pug_interp = '[username]') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"property\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'Username') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"item\\\"\\u003E\\u003Cdiv class=\\\"icons\\\"\\u003E\\u003Cspan class=\\\"icon icon-phone_svg\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"data\\\"\\u003E\\u003Cdiv class=\\\"value\\\"\\u003E\" + (pug.escape(null == (pug_interp = '[phone]') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"property\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'Phone') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"item\\\"\\u003E\\u003Cdiv class=\\\"icons\\\"\\u003E\\u003Cspan class=\\\"icon icon-checkbox_svg\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"data\\\"\\u003E\\u003Cdiv class=\\\"value\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'Notification') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"property\\\"\\u003E\" + (pug.escape(null == (pug_interp = '[isEnabledNotification]') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cform\\u003E\\u003Cdiv class=\\\"sharedType\\\" data-class=\\\"sharedType\\\"\\u003E\\u003Cinput type=\\\"radio\\\" id=\\\"media\\\" value=\\\"media\\\" name=\\\"sharedType\\\" data-element-ref=\\\"tabs\\\"\\u003E\\u003Clabel for=\\\"media\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'Media') ? \"\" : pug_interp)) + \"\\u003C\\u002Flabel\\u003E\\u003Cinput type=\\\"radio\\\" id=\\\"docs\\\" value=\\\"docs\\\" name=\\\"sharedType\\\" data-element-ref=\\\"tabs\\\"\\u003E\\u003Clabel for=\\\"docs\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'Docs') ? \"\" : pug_interp)) + \"\\u003C\\u002Flabel\\u003E\\u003Cinput type=\\\"radio\\\" id=\\\"links\\\" value=\\\"links\\\" name=\\\"sharedType\\\" data-element-ref=\\\"tabs\\\"\\u003E\\u003Clabel for=\\\"links\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'Links') ? \"\" : pug_interp)) + \"\\u003C\\u002Flabel\\u003E\\u003Cinput type=\\\"radio\\\" id=\\\"audio\\\" value=\\\"audio\\\" name=\\\"sharedType\\\" data-element-ref=\\\"tabs\\\"\\u003E\\u003Clabel for=\\\"audio\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'Audio') ? \"\" : pug_interp)) + \"\\u003C\\u002Flabel\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"shared\\\"\\u003E\\u003Cdiv class=\\\"sharedImage\\\" data-for=\\\"shared\\\"\\u003E\\u003Cimg src=\\\"[src]\\\"\\u003E\\u003Cdiv class=\\\"time\\\"\\u003E\" + (pug.escape(null == (pug_interp = '[time]') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fform\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/js/components/main-component/components/chat/components/profile/profile-component.pug?");

/***/ }),

/***/ "./src/js/components/main-component/components/chat/users.js":
/*!*******************************************************************!*\
  !*** ./src/js/components/main-component/components/chat/users.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst users = [{\n    name: 'Karen',\n    messages: 0,\n    writing: false,\n    lastMessage: 'Call me, now',\n    phoneNumber: '+1212332223',\n    lastMassageTime: '00:20',\n    pinned: true,\n    photo: '/images/photos/karen.jpg',\n    online: true,\n    username: 'doyouneedhelp',\n    bio: 'Doctor',\n    lastSeen: 'online',\n    muted: false\n}, {\n    name: 'Jack Russel',\n    messages: 0,\n    writing: false,\n    lastMessage: 'I`ll try',\n    lastMassageTime: '00:20',\n    phoneNumber: '+91119111911',\n    pinned: true,\n    username: 'bite-bite',\n    bio: 'The dog',\n    photo: '/images/photos/jack_russel.jpg',\n    lastSeen: 'last seen a long time ago',\n    online: false,\n    muted: false\n}, {\n    name: 'Celine Dion',\n    messages: 2,\n    writing: false,\n    lastMessage: 'To win',\n    lastMassageTime: '00:20',\n    phoneNumber: '+380123456789',\n    pinned: false,\n    photo: '/images/photos/celine_dion.jpeg',\n    online: false,\n    username: 'Celine',\n    bio: 'Singer',\n    lastSeen: 'last seen 12 minutes ago',\n    muted: false\n}, {\n    name: 'Bred Pitt',\n    messages: 2,\n    writing: false,\n    lastMessage: 'with missed',\n    lastMassageTime: '00:20',\n    phoneNumber: '+9876553231',\n    pinned: false,\n    photo: '/images/photos/bred_pitt.jpg',\n    online: false,\n    username: 'BredPitt',\n    bio: 'Actor',\n    lastSeen: 'last seen recently',\n    muted: true\n}, {\n    name: 'Sylvester Stallone',\n    messages: 2,\n    writing: false,\n    lastMessage: 'part of',\n    lastMassageTime: '00:20',\n    phoneNumber: '+8933223322',\n    pinned: false,\n    photo: '/images/photos/sylvester_stallone.jpg',\n    online: true,\n    lastSeen: 'Online',\n    username: 'Online',\n    bio: 'Actor',\n    muted: false\n}, {\n    name: 'Arnold Schwarzenegger',\n    typing: true,\n    messages: 2,\n    writing: false,\n    lastMessage: 'Hi',\n    lastMassageTime: '00:20',\n    username: 'Online',\n    bio: 'Actor',\n    phoneNumber: '+380123456789',\n    lastSeen: 'Never',\n    pinned: false,\n    photo: '/images/photos/arnold_schwarzenegger.jpg',\n    online: false,\n    muted: true\n}];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (users);\n\n\n//# sourceURL=webpack:///./src/js/components/main-component/components/chat/users.js?");

/***/ }),

/***/ "./src/js/components/main-component/components/sing-in/SingIn.js":
/*!***********************************************************************!*\
  !*** ./src/js/components/main-component/components/sing-in/SingIn.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SingIn; });\n/* harmony import */ var _services_Http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/Http */ \"./src/js/services/Http.js\");\n/* harmony import */ var _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/PrototypeComponent */ \"./src/js/common/PrototypeComponent.js\");\n/* harmony import */ var _sing_in_pug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sing-in.pug */ \"./src/js/components/main-component/components/sing-in/sing-in.pug\");\n/* harmony import */ var _sing_in_pug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sing_in_pug__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_Auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/Auth */ \"./src/js/services/Auth.js\");\n/* harmony import */ var _components_sing_in_form_SingInForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sing-in-form/SingInForm */ \"./src/js/components/main-component/components/sing-in/components/sing-in-form/SingInForm.js\");\n/* harmony import */ var _components_code_form_CodeForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/code-form/CodeForm */ \"./src/js/components/main-component/components/sing-in/components/code-form/CodeForm.js\");\n/* harmony import */ var _components_create_account_form_CreateAccountForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/create-account-form/CreateAccountForm */ \"./src/js/components/main-component/components/sing-in/components/create-account-form/CreateAccountForm.js\");\n/* harmony import */ var _components_password_form_PasswordForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/password-form/PasswordForm */ \"./src/js/components/main-component/components/sing-in/components/password-form/PasswordForm.js\");\n\n\n\n\n\n\n\n\n\nclass SingIn extends _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n\n    static get inputs() {\n        return {bass: null};\n    }\n\n    static get outputs() {\n        return {loginned: null};\n    }\n\n    static get components() {\n        return [_components_sing_in_form_SingInForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _components_code_form_CodeForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _components_create_account_form_CreateAccountForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _components_password_form_PasswordForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"]];\n    }\n\n    static get name() {\n        return 'sing-in';\n    }\n\n    static get dependencies() {\n        return [_services_Http__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _services_Auth__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n    }\n\n    static get template() {\n        return _sing_in_pug__WEBPACK_IMPORTED_MODULE_2___default()();\n    }\n\n    init() {\n        this.phoneNumber = '';\n    }\n\n    clickHandler(event) {\n        console.log(event);\n    }\n\n    search(value) {\n        this.countries = this._countries.filter(v => value ? v.country.toLowerCase().indexOf(value.toLowerCase()) !== -1 : true);\n    }\n\n    submit() {\n        console.log(this.$references['inputPhoneNumber'].value);\n        this.$dependencies[1].login();\n        this.$outputs.loginned();\n    }\n\n    sentCode(phoneNumber) {\n        this.$tag.classList.add('code-form');\n        console.log(phoneNumber);\n        this.phoneNumber = phoneNumber;\n    }\n\n    isRegisteredUser() {\n        this.$tag.classList.remove('code-form');\n        this.$tag.classList.add('create-account-form');\n    }\n\n    enteredPassword() {\n        this.$tag.classList.remove('password-form');\n    }\n\n    createAccount() {\n        this.$tag.classList.remove('create-account-form');\n        this.$tag.classList.add('password-form');\n    }\n\n    openChat() {\n        this.$tag.classList.remove('password-form');\n        this.$outputs.loginned();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/components/main-component/components/sing-in/SingIn.js?");

/***/ }),

/***/ "./src/js/components/main-component/components/sing-in/components/code-form/CodeForm.js":
/*!**********************************************************************************************!*\
  !*** ./src/js/components/main-component/components/sing-in/components/code-form/CodeForm.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodeForm; });\n/* harmony import */ var _code_form_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-form.pug */ \"./src/js/components/main-component/components/sing-in/components/code-form/code-form.pug\");\n/* harmony import */ var _code_form_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_code_form_pug__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_inputs_wrapper_InputsWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/inputs-wrapper/InputsWrapper */ \"./src/js/components/shared/inputs-wrapper/InputsWrapper.js\");\n/* harmony import */ var _shared_autocomplete_component_AutocompleteComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/autocomplete-component/AutocompleteComponent */ \"./src/js/components/shared/autocomplete-component/AutocompleteComponent.js\");\n/* harmony import */ var _shared_button_component_ButtonComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/button-component/ButtonComponent */ \"./src/js/components/shared/button-component/ButtonComponent.js\");\n/* harmony import */ var _services_Http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/Http */ \"./src/js/services/Http.js\");\n/* harmony import */ var _services_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../services/Auth */ \"./src/js/services/Auth.js\");\n/* harmony import */ var _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../common/PrototypeComponent */ \"./src/js/common/PrototypeComponent.js\");\n\n\n\n\n\n\n\n\nclass CodeForm extends _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"] {\n\n    static get outputs() {\n        return {approved: null};\n    }\n\n    static get inputs() {\n        return {phoneNumber: null};\n    }\n\n    static get components() {\n        return [_shared_inputs_wrapper_InputsWrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _shared_autocomplete_component_AutocompleteComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _shared_button_component_ButtonComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n    }\n\n    static get name() {\n        return 'code-form';\n    }\n\n    static get dependencies() {\n        return [];\n    }\n\n    static get template() {\n        return _code_form_pug__WEBPACK_IMPORTED_MODULE_0___default()();\n    }\n\n    static get listenEvents() {\n        return {\n            input: {\n                method: 'checkCode',\n                targets: ['input']\n            }\n        }\n    }\n\n    init() {\n        this.phoneNumber = this.$inputs.phoneNumber;\n    }\n\n    changesProperties(input) {\n        if (input) {\n            this.phoneNumber = this.$inputs.phoneNumber\n        }\n    }\n\n    checkCode(event) {\n        console.log(event.target.value.length);\n        if (event.target.value.length === 3) {\n            this.$outputs.approved();\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/components/main-component/components/sing-in/components/code-form/CodeForm.js?");

/***/ }),

/***/ "./src/js/components/main-component/components/sing-in/components/code-form/code-form.pug":
/*!************************************************************************************************!*\
  !*** ./src/js/components/main-component/components/sing-in/components/code-form/code-form.pug ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../../../../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv\\u003E\\u003Cdiv class=\\\"telegram-logo\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"labels-container\\\"\\u003E\\u003Cimg class=\\\"image\\\" srcset=\\\"..\\u002Fimages\\u002FLogin_1@1x.png 1x, ..\\u002Fimages\\u002FLogin_1@2x.png 2x, ..\\u002Fimages\\u002FLogin_1@3x.png 3x\\\"\\u003E\\u003Cdiv class=\\\"header\\\"\\u003E\" + (pug.escape(null == (pug_interp = '[phoneNumber]') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"notice\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'We have sent you an SMS with code.') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cinputs-wrapper class=\\\"phone\\\"\\u003E\\u003Cinput class=\\\"select-country\\\" placeholder=\\\"Code\\\" data-element-ref=\\\"input\\\" autocomplete=\\\"no\\\"\\u003E\\u003C\\u002Finputs-wrapper\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/js/components/main-component/components/sing-in/components/code-form/code-form.pug?");

/***/ }),

/***/ "./src/js/components/main-component/components/sing-in/components/create-account-form/CreateAccountForm.js":
/*!*****************************************************************************************************************!*\
  !*** ./src/js/components/main-component/components/sing-in/components/create-account-form/CreateAccountForm.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CreateAccountForm; });\n/* harmony import */ var _create_account_form_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-account-form.pug */ \"./src/js/components/main-component/components/sing-in/components/create-account-form/create-account-form.pug\");\n/* harmony import */ var _create_account_form_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_create_account_form_pug__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_inputs_wrapper_InputsWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/inputs-wrapper/InputsWrapper */ \"./src/js/components/shared/inputs-wrapper/InputsWrapper.js\");\n/* harmony import */ var _shared_autocomplete_component_AutocompleteComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/autocomplete-component/AutocompleteComponent */ \"./src/js/components/shared/autocomplete-component/AutocompleteComponent.js\");\n/* harmony import */ var _shared_button_component_ButtonComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/button-component/ButtonComponent */ \"./src/js/components/shared/button-component/ButtonComponent.js\");\n/* harmony import */ var _services_Http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/Http */ \"./src/js/services/Http.js\");\n/* harmony import */ var _services_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../services/Auth */ \"./src/js/services/Auth.js\");\n/* harmony import */ var _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../common/PrototypeComponent */ \"./src/js/common/PrototypeComponent.js\");\n\n\n\n\n\n\n\n\nclass CreateAccountForm extends _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"] {\n\n    static get outputs() {\n        return {createAccount: null};\n    }\n\n    static get inputs() {\n        return {phoneNumber: null};\n    }\n\n    static get components() {\n        return [_shared_inputs_wrapper_InputsWrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _shared_autocomplete_component_AutocompleteComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _shared_button_component_ButtonComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n    }\n\n    static get name() {\n        return 'create-account-form';\n    }\n\n    static get dependencies() {\n        return [_services_Http__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _services_Auth__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n    }\n\n    static get template() {\n        return _create_account_form_pug__WEBPACK_IMPORTED_MODULE_0___default()();\n    }\n\n    init() {\n        this.countryPlaceholder = 'Country';\n        this.phoneCode = '';\n        this.selectedCountry = '';\n        this.buttonTitle = 'NEXT';\n    }\n\n    countryChanged(idx) {\n        this.phoneCode = this.countries[idx].phoneCode;\n        this.$references['inputPhoneNumber'].value = this.countries[idx].phoneCode;\n        this.selectedCountry = this.countries[idx].country;\n    }\n\n    checkCode(event) {\n        console.log(event.target.value.length);\n        if (event.target.value.length === 3) {\n            this.$outputs.approved();\n        }\n    }\n\n    search(value) {\n        this.countries = this._countries.filter(v => value ? v.country.toLowerCase().indexOf(value.toLowerCase()) !== -1 : true);\n    }\n\n    submit() {\n        console.log(this.$references['lastname'].value, this.$references['name'].value);\n        this.$outputs.createAccount();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/components/main-component/components/sing-in/components/create-account-form/CreateAccountForm.js?");

/***/ }),

/***/ "./src/js/components/main-component/components/sing-in/components/create-account-form/create-account-form.pug":
/*!********************************************************************************************************************!*\
  !*** ./src/js/components/main-component/components/sing-in/components/create-account-form/create-account-form.pug ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../../../../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv\\u003E\\u003Cdiv class=\\\"telegram-logo\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"labels-container\\\"\\u003E\\u003Cimg class=\\\"image\\\" srcset=\\\"..\\u002Fimages\\u002FLogin_1@1x.png 1x, ..\\u002Fimages\\u002FLogin_1@2x.png 2x, ..\\u002Fimages\\u002FLogin_1@3x.png 3x\\\"\\u003E\\u003Cdiv class=\\\"header\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'Your Name') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"notice\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'Enter your name and add a profile picture') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cinputs-wrapper class=\\\"name\\\"\\u003E\\u003Cinput placeholder=\\\"Name\\\" data-element-ref=\\\"name\\\" autocomplete=\\\"no\\\"\\u003E\\u003C\\u002Finputs-wrapper\\u003E\\u003Cinputs-wrapper class=\\\"surname\\\"\\u003E\\u003Cinput placeholder=\\\"Last Name (Optional)\\\" data-element-ref=\\\"lastname\\\" autocomplete=\\\"no\\\"\\u003E\\u003C\\u002Finputs-wrapper\\u003E\\u003Cbutton-component class=\\\"submit-form blue\\\" data-output-click=\\\"submit\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'NEXT') ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton-component\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/js/components/main-component/components/sing-in/components/create-account-form/create-account-form.pug?");

/***/ }),

/***/ "./src/js/components/main-component/components/sing-in/components/password-form/PasswordForm.js":
/*!******************************************************************************************************!*\
  !*** ./src/js/components/main-component/components/sing-in/components/password-form/PasswordForm.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PasswordForm; });\n/* harmony import */ var _password_form_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-form.pug */ \"./src/js/components/main-component/components/sing-in/components/password-form/password-form.pug\");\n/* harmony import */ var _password_form_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_password_form_pug__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_inputs_wrapper_InputsWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/inputs-wrapper/InputsWrapper */ \"./src/js/components/shared/inputs-wrapper/InputsWrapper.js\");\n/* harmony import */ var _shared_autocomplete_component_AutocompleteComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/autocomplete-component/AutocompleteComponent */ \"./src/js/components/shared/autocomplete-component/AutocompleteComponent.js\");\n/* harmony import */ var _shared_button_component_ButtonComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/button-component/ButtonComponent */ \"./src/js/components/shared/button-component/ButtonComponent.js\");\n/* harmony import */ var _services_Http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/Http */ \"./src/js/services/Http.js\");\n/* harmony import */ var _services_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../services/Auth */ \"./src/js/services/Auth.js\");\n/* harmony import */ var _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../common/PrototypeComponent */ \"./src/js/common/PrototypeComponent.js\");\n\n\n\n\n\n\n\n\nclass PasswordForm extends _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"] {\n\n    static get outputs() {\n        return {enteredPassword: null};\n    }\n\n    static get components() {\n        return [_shared_inputs_wrapper_InputsWrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _shared_button_component_ButtonComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n    }\n\n    static get listenEvents() {\n        return {\n            click: {\n                method: 'click',\n                targets: ['togglePasswordVisibility', 'submit']\n            }\n        }\n    }\n\n    static get name() {\n        return 'password-form';\n    }\n\n    static get dependencies() {\n        return [_services_Http__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _services_Auth__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n    }\n\n    static get template() {\n        return _password_form_pug__WEBPACK_IMPORTED_MODULE_0___default()();\n    }\n\n    init() {\n        this.countryPlaceholder = 'Country';\n        this.buttonTitle = 'NEXT';\n    }\n\n    click(ev) {\n        if (ev.target === this.$references['togglePasswordVisibility']) {\n            if (this.$references['password'].type === 'password') {\n                this.$references['password'].type = 'input';\n                this.$tag.classList.add('monkey-see');\n            } else {\n                this.$references['password'].type = 'password';\n                this.$tag.classList.remove('monkey-see');\n            }\n\n        }\n    }\n\n    submit(ev) {\n        this.$outputs.enteredPassword();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/components/main-component/components/sing-in/components/password-form/PasswordForm.js?");

/***/ }),

/***/ "./src/js/components/main-component/components/sing-in/components/password-form/password-form.pug":
/*!********************************************************************************************************!*\
  !*** ./src/js/components/main-component/components/sing-in/components/password-form/password-form.pug ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../../../../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv\\u003E\\u003Cdiv class=\\\"telegram-logo\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"labels-container\\\"\\u003E\\u003Cimg class=\\\"image\\\" srcset=\\\"..\\u002Fimages\\u002FLogin_1@1x.png 1x, ..\\u002Fimages\\u002FLogin_1@2x.png 2x, ..\\u002Fimages\\u002FLogin_1@3x.png 3x\\\"\\u003E\\u003Cdiv class=\\\"header\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'Enter a Password') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"notice\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'Account is protected with an additional password.') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cinputs-wrapper class=\\\"phone\\\"\\u003E\\u003Cdiv class=\\\"password-container\\\"\\u003E\\u003Cinput data-element-ref=\\\"password\\\" type=\\\"password\\\"\\u003E\\u003Cinput type=\\\"checkbox\\\" data-element-ref=\\\"togglePasswordVisibility\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Finputs-wrapper\\u003E\\u003Cbutton-component class=\\\"submit-form blue\\\" data-output-click=\\\"submit\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'START CHAT') ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton-component\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/js/components/main-component/components/sing-in/components/password-form/password-form.pug?");

/***/ }),

/***/ "./src/js/components/main-component/components/sing-in/components/sing-in-form/SingInForm.js":
/*!***************************************************************************************************!*\
  !*** ./src/js/components/main-component/components/sing-in/components/sing-in-form/SingInForm.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SingInForm; });\n/* harmony import */ var _sing_in_form_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sing-in-form.pug */ \"./src/js/components/main-component/components/sing-in/components/sing-in-form/sing-in-form.pug\");\n/* harmony import */ var _sing_in_form_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sing_in_form_pug__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_inputs_wrapper_InputsWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/inputs-wrapper/InputsWrapper */ \"./src/js/components/shared/inputs-wrapper/InputsWrapper.js\");\n/* harmony import */ var _shared_autocomplete_component_AutocompleteComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/autocomplete-component/AutocompleteComponent */ \"./src/js/components/shared/autocomplete-component/AutocompleteComponent.js\");\n/* harmony import */ var _shared_button_component_ButtonComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/button-component/ButtonComponent */ \"./src/js/components/shared/button-component/ButtonComponent.js\");\n/* harmony import */ var _services_Http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/Http */ \"./src/js/services/Http.js\");\n/* harmony import */ var _services_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../services/Auth */ \"./src/js/services/Auth.js\");\n/* harmony import */ var _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../common/PrototypeComponent */ \"./src/js/common/PrototypeComponent.js\");\n\n\n\n\n\n\n\n\nclass SingInForm extends _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_6__[\"default\"] {\n\n    static get outputs() {\n        return {sentCode: null};\n    }\n\n    static get components() {\n        return [_shared_inputs_wrapper_InputsWrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _shared_autocomplete_component_AutocompleteComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _shared_button_component_ButtonComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n    }\n\n    static get name() {\n        return 'sing-in-form';\n    }\n\n    static get dependencies() {\n        return [_services_Http__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _services_Auth__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n    }\n\n    static get template() {\n        return _sing_in_form_pug__WEBPACK_IMPORTED_MODULE_0___default()();\n    }\n\n    init() {\n        this.countryPlaceholder = 'Country';\n        this.phoneCode = '';\n        this.selectedCountry = '';\n        this.buttonTitle = 'NEXT';\n\n        this._countries = this.countries = [{\n            country: 'France',\n            code: 'fr',\n            phoneCode: '+1'\n        }, {\n            country: 'Germany',\n            code: 'fr',\n            phoneCode: '+2'\n        }, {\n            country: 'Ukraine',\n            code: 'fr',\n            phoneCode: '+3'\n        }, {\n            country: 'Russian',\n            code: 'fr',\n            phoneCode: '+4'\n        }, {\n            country: 'Italy',\n            code: 'fr',\n            phoneCode: '+5'\n        }, {\n            country: 'Georgia',\n            code: 'fr',\n            phoneCode: '+6'\n        }, {\n            country: 'Iraq',\n            code: 'fr',\n            phoneCode: '+7'\n        }, {\n            country: 'USA',\n            code: 'fr',\n            phoneCode: '+8'\n        }];\n    }\n\n    countryChanged(idx) {\n        this.phoneCode = this.countries[idx].phoneCode;\n        this.$references['inputPhoneNumber'].value = this.countries[idx].phoneCode;\n        this.selectedCountry = this.countries[idx].country;\n    }\n\n    clickHandler(event) {\n        console.log(event);\n    }\n\n    search(value) {\n        this.countries = this._countries.filter( v => value ? v.country.toLowerCase().indexOf(value.toLowerCase()) !== -1 : true );\n    }\n\n    submit() {\n        // /\n        // this.$dependencies[1].login();\n        this.$outputs.sentCode(this.$references['inputPhoneNumber'].value);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/components/main-component/components/sing-in/components/sing-in-form/SingInForm.js?");

/***/ }),

/***/ "./src/js/components/main-component/components/sing-in/components/sing-in-form/sing-in-form.pug":
/*!******************************************************************************************************!*\
  !*** ./src/js/components/main-component/components/sing-in/components/sing-in-form/sing-in-form.pug ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../../../../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv\\u003E\\u003Cdiv class=\\\"telegram-logo\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"labels-container\\\"\\u003E\\u003Cimg class=\\\"image\\\" srcset=\\\"..\\u002Fimages\\u002FLogin_1@1x.png 1x, ..\\u002Fimages\\u002FLogin_1@2x.png 2x, ..\\u002Fimages\\u002FLogin_1@3x.png 3x\\\"\\u003E\\u003Cdiv class=\\\"header\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'Sing in to Telegram') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"notice\\\"\\u003E\" + (pug.escape(null == (pug_interp = 'Please confirm your country and enter your phone number.') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cinputs-wrapper\\u003E\\u003Cautocomplete-component class=\\\"select-country\\\" data-input-placeholder=\\\"countryPlaceholder\\\" data-input-selectedLabel=\\\"selectedCountry\\\" data-output-changed=\\\"countryChanged\\\" data-output-search=\\\"search\\\"\\u003E\\u003Cdiv class=\\\"option\\\" data-for=\\\"countries\\\" data-element-ref=\\\"option\\\"\\u003E\\u003Cspan class=\\\"flag\\\"\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"title\\\"\\u003E\" + (pug.escape(null == (pug_interp = '[country]') ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\\"phone-code\\\"\\u003E\" + (pug.escape(null == (pug_interp = '[phoneCode]') ? \"\" : pug_interp)) + \"\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fautocomplete-component\\u003E\\u003C\\u002Finputs-wrapper\\u003E\\u003Cinputs-wrapper class=\\\"phone\\\"\\u003E\\u003Cinput class=\\\"select-country\\\" data-element-ref=\\\"inputPhoneNumber\\\"\\u003E\\u003C\\u002Finputs-wrapper\\u003E\\u003Cbutton-component class=\\\"submit-form blue\\\" data-output-click=\\\"submit\\\"\\u003ENEXT\\u003C\\u002Fbutton-component\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/js/components/main-component/components/sing-in/components/sing-in-form/sing-in-form.pug?");

/***/ }),

/***/ "./src/js/components/main-component/components/sing-in/sing-in.pug":
/*!*************************************************************************!*\
  !*** ./src/js/components/main-component/components/sing-in/sing-in.pug ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"sing-in-container\\\"\\u003E\\u003Csing-in-form data-output-sentCode=\\\"sentCode\\\"\\u003E\\u003C\\u002Fsing-in-form\\u003E\\u003Ccode-form data-output-approved=\\\"isRegisteredUser\\\" data-input-phoneNumber=\\\"phoneNumber\\\"\\u003E\\u003C\\u002Fcode-form\\u003E\\u003Ccreate-account-form data-output-createAccount=\\\"createAccount\\\"\\u003E\\u003C\\u002Fcreate-account-form\\u003E\\u003Cpassword-form data-output-enteredPassword=\\\"openChat\\\"\\u003E\\u003C\\u002Fpassword-form\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/js/components/main-component/components/sing-in/sing-in.pug?");

/***/ }),

/***/ "./src/js/components/main-component/main-component.pug":
/*!*************************************************************!*\
  !*** ./src/js/components/main-component/main-component.pug ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"main-component\\\"\\u003E\\u003Csing-in data-output-loginned=\\\"checkState\\\"\\u003E\\u003C\\u002Fsing-in\\u003E\\u003Cchat-component data-output-loggedOut=\\\"checkState\\\"\\u003E\\u003C\\u002Fchat-component\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/js/components/main-component/main-component.pug?");

/***/ }),

/***/ "./src/js/components/shared/autocomplete-component/AutocompleteComponent.js":
/*!**********************************************************************************!*\
  !*** ./src/js/components/shared/autocomplete-component/AutocompleteComponent.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AutocompleteComponent; });\n/* harmony import */ var _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/PrototypeComponent */ \"./src/js/common/PrototypeComponent.js\");\n/* harmony import */ var _autocomplete_component_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autocomplete-component.pug */ \"./src/js/components/shared/autocomplete-component/autocomplete-component.pug\");\n/* harmony import */ var _autocomplete_component_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_autocomplete_component_pug__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass AutocompleteComponent extends _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    static get inputs() {\n        return {\n            placeholder: '',\n            selectedLabel: ''\n        }\n    }\n\n    static get listenEvents() {\n        return {\n            focusin: {\n                method: 'focus'\n            },\n            focusout: {\n                method: 'blur'\n            },\n            click: {\n                method: 'select',\n                targets: ['option']\n            },\n            input: {\n                method: 'inputChanged',\n                targets: ['input']\n            }\n        }\n    }\n\n    static get outputs() {\n        return {changed: null, search: null};\n    }\n\n    static get name() {\n        return 'autocomplete-component';\n    }\n\n    static get template() {\n        return _autocomplete_component_pug__WEBPACK_IMPORTED_MODULE_1___default()();\n    }\n\n    init() {\n        this.selectedLabel = '';\n    }\n    viewInited() {\n        this.input = this.$tag.querySelector('input');\n        this.$references.input.setAttribute('placeholder', this.inputs.placeholder);\n    }\n    focus(ev) {\n        this.$outputs.search('');\n        this.$tag.classList.add('active');\n        this.$references.input.value = '';\n    }\n\n    blur() {\n        this.$tag.classList.remove('active');\n        if (this._selectedLabel) {\n            this.selectedLabel = this._selectedLabel;\n        }\n    }\n\n    select(event) {\n        const id = event.target.dataset.forIndex;\n        this.$outputs.changed(id);\n    }\n\n    inputChanged(ev) {\n        this.$outputs.search(ev.target.value);\n    }\n\n    changesProperties(propertyName) {\n        if (propertyName === 'selectedLabel') {\n            this.selectedLabel = this.$inputs.selectedLabel;\n            this.$references.input.value = this.$inputs.selectedLabel;\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/components/shared/autocomplete-component/AutocompleteComponent.js?");

/***/ }),

/***/ "./src/js/components/shared/autocomplete-component/autocomplete-component.pug":
/*!************************************************************************************!*\
  !*** ./src/js/components/shared/autocomplete-component/autocomplete-component.pug ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"container\\\"\\u003E\\u003Cinput data-element-ref=\\\"input\\\" autocomplete=\\\"no\\\"\\u003E\\u003Cdiv class=\\\"options-container\\\"\\u003E[[insertComponent]]\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/js/components/shared/autocomplete-component/autocomplete-component.pug?");

/***/ }),

/***/ "./src/js/components/shared/button-component/ButtonComponent.js":
/*!**********************************************************************!*\
  !*** ./src/js/components/shared/button-component/ButtonComponent.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ButtonComponent; });\n/* harmony import */ var _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/PrototypeComponent */ \"./src/js/common/PrototypeComponent.js\");\n/* harmony import */ var _button_component_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-component.pug */ \"./src/js/components/shared/button-component/button-component.pug\");\n/* harmony import */ var _button_component_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_component_pug__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_functions_createWave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/functions/createWave */ \"./src/js/common/functions/createWave.js\");\n\n\n\n\nclass ButtonComponent extends _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    static get listenEvents() {\n        return {\n            click: {}\n        }\n    }\n\n    static get name() {\n        return 'button-component';\n    }\n\n    static get outputs() {\n        return {\n            click: null\n        }\n    }\n\n    static get template() {\n        return _button_component_pug__WEBPACK_IMPORTED_MODULE_1___default()();\n    }\n\n    init() {\n    }\n\n    click(eve) {\n        Object(_common_functions_createWave__WEBPACK_IMPORTED_MODULE_2__[\"createWave\"])(eve.offsetX, eve.offsetY, this.$references['waveContainer']);\n        this.$outputs.click(event);\n    }\n\n}\n\n\n//# sourceURL=webpack:///./src/js/components/shared/button-component/ButtonComponent.js?");

/***/ }),

/***/ "./src/js/components/shared/button-component/button-component.pug":
/*!************************************************************************!*\
  !*** ./src/js/components/shared/button-component/button-component.pug ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"button-container\\\" data-element-ref=\\\"waveContainer\\\"\\u003E\\u003Cspan\\u003E[[insertComponent]]\\u003C\\u002Fspan\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/js/components/shared/button-component/button-component.pug?");

/***/ }),

/***/ "./src/js/components/shared/inputs-wrapper/InputsWrapper.js":
/*!******************************************************************!*\
  !*** ./src/js/components/shared/inputs-wrapper/InputsWrapper.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputsWrapper; });\n/* harmony import */ var _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/PrototypeComponent */ \"./src/js/common/PrototypeComponent.js\");\n/* harmony import */ var _inputs_wrapper_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputs-wrapper.pug */ \"./src/js/components/shared/inputs-wrapper/inputs-wrapper.pug\");\n/* harmony import */ var _inputs_wrapper_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inputs_wrapper_pug__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass InputsWrapper extends _common_PrototypeComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\n    static get inputs() {\n        return {label: '', class: null};\n    }\n\n    static get listenEvents() {\n        return {\n            focusin: {\n                method: 'focus'\n            },\n            focusout: {\n                method: 'blur'\n            }\n        }\n    }\n\n    static get components() {\n        return [];\n    }\n\n    static get name() {\n        return 'inputs-wrapper';\n    }\n\n    static get template() {\n        return _inputs_wrapper_pug__WEBPACK_IMPORTED_MODULE_1___default()();\n    }\n\n    init() {\n        this.label = this.$inputs.label;\n    }\n\n    focus(ev) {\n        this.$tag.classList.add('active');\n    }\n\n    blur() {\n        this.$tag.classList.remove('active');\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/components/shared/inputs-wrapper/InputsWrapper.js?");

/***/ }),

/***/ "./src/js/components/shared/inputs-wrapper/inputs-wrapper.pug":
/*!********************************************************************!*\
  !*** ./src/js/components/shared/inputs-wrapper/inputs-wrapper.pug ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"wrapper\\\"\\u003E\\u003Cdiv class=\\\"label\\\"\\u003E\" + (pug.escape(null == (pug_interp = '[label]') ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E[[insertComponent]]\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./src/js/components/shared/inputs-wrapper/inputs-wrapper.pug?");

/***/ }),

/***/ "./src/js/services/Auth.js":
/*!*********************************!*\
  !*** ./src/js/services/Auth.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Auth; });\n/* harmony import */ var _common_DI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/DI */ \"./src/js/common/DI.js\");\n\n\nclass Auth {\n    constructor() {\n\n    }\n\n    isLoggined() {\n        return this.log = false;\n    }\n\n    login(creds) {\n        this.log = true;\n    }\n\n    logout() {\n\n    }\n}\n\n_common_DI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(Auth);\n\n\n\n//# sourceURL=webpack:///./src/js/services/Auth.js?");

/***/ }),

/***/ "./src/js/services/Http.js":
/*!*********************************!*\
  !*** ./src/js/services/Http.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Http; });\n/* harmony import */ var _common_DI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/DI */ \"./src/js/common/DI.js\");\n\n\nclass Http {\n\n}\n\n_common_DI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(Http);\n\n\n\n//# sourceURL=webpack:///./src/js/services/Http.js?");

/***/ }),

/***/ "./src/js/services/Messages.js":
/*!*************************************!*\
  !*** ./src/js/services/Messages.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Auth; });\n/* harmony import */ var _common_DI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/DI */ \"./src/js/common/DI.js\");\n\n\nclass Auth {\n    constructor() {\n\n    }\n\n    isLoggined() {\n        return this.log;\n    }\n\n    login(creds) {\n        this.log = true;\n    }\n\n    logout() {\n\n    }\n}\n\n_common_DI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(Auth);\n\n\n\n//# sourceURL=webpack:///./src/js/services/Messages.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/styles/index.scss?");

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })

/******/ });