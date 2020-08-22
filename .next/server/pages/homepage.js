module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "0zb8":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/LinearProgress");

/***/ }),

/***/ "1gBk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("bJC4");


/***/ }),

/***/ "30mr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "4DPt":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormGroup");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5id3":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableContainer");

/***/ }),

/***/ "7s44":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "Ai9N":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "BjFw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "D4mc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "DME6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "GYHf":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "LbRr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4151");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Ms0O");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("UVoM");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("EmCc");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4D1s");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("DME6");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("lOiU");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("7s44");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("4DPt");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("x54t");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("GYHf");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("0zb8");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));
function Header(props) {
  const {
    loading
  } = props;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_15__["useRouter"])();
  const classes = useStyles(); //const [loading, setLoading] = React.useState(true);

  const [auth, setAuth] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);
  const parseuser = js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.get('username');
  const open = Boolean(anchorEl);

  const handleChange = () => {
    setAuth();
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.remove('username');
    router.push('/signin');
  };

  return __jsx("div", {
    className: classes.root
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static"
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "dense"
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu"
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6___default.a, null)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h6",
    color: "inherit",
    className: classes.title
  }, "Task"), auth && __jsx("div", null, js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.get('username') ? js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.get('username').substring(0, parseuser.length) : '', __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-label": "account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    onClick: handleMenu,
    color: "inherit"
  }, __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_7___default.a, null)), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_12___default.a, {
    id: "menu-appbar",
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    keepMounted: true,
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: open,
    onClose: handleClose
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onClick: handleClose
  }, "Profile"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onClick: handleLogout
  }, "Log Out")))), !loading ? __jsx(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_13___default.a, {
    hidden: true,
    color: "secondary"
  }) : __jsx(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_13___default.a, {
    hidden: false,
    color: "secondary"
  })));
}

/***/ }),

/***/ "MbIc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "TWtx":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "UQSI":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "Uynj":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "YkC2":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ "ZUWB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Alert");

/***/ }),

/***/ "aYjl":
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "bJC4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ homepage; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: ./src/components/header.js
var header = __webpack_require__("LbRr");

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Snackbar"
var Snackbar_ = __webpack_require__("D4mc");
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// EXTERNAL MODULE: external "@material-ui/lab/Alert"
var Alert_ = __webpack_require__("ZUWB");
var Alert_default = /*#__PURE__*/__webpack_require__.n(Alert_);

// CONCATENATED MODULE: ./src/components/footer.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function Alert(props) {
  return __jsx(Alert_default.a, _extends({
    elevation: 6,
    variant: "filled"
  }, props));
}

const useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));
function CustomizedSnackbars(props) {
  const {
    opensnack,
    typesnack
  } = props;
  const classes = useStyles();
  const [open, setOpen] = external_react_default.a.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return __jsx("div", {
    className: classes.root
  }, __jsx(Snackbar_default.a, {
    open: opensnack,
    autoHideDuration: 3000,
    onClose: handleClose
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "success"
  }, typesnack)));
}
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__("aYjl");
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__("IbbU");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: ./src/common/config.js
var config = __webpack_require__("pJv6");

// CONCATENATED MODULE: ./src/components/addtask.js
var addtask_jsx = external_react_default.a.createElement;










const addtask_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center'
  },
  table: {
    minWidth: 650
  },
  caption: {
    display: 'flex'
  },
  input: {
    width: '100%',
    marginLeft: theme.spacing(1),
    flex: 1
  },
  button: {
    marginLeft: theme.spacing(1)
  },
  buttonAction: {
    marginLeft: theme.spacing(1)
  }
}));
const fetchURL = `${config["a" /* default */].apiGetTaskUrl}`;
function AddTask(props) {
  const {
    dataServer,
    dataType,
    dataStatus,
    dataAssignee,
    setLoading,
    setOpenSnackBar,
    setTypeSnack
  } = props;
  const {
    data
  } = external_swr_default()(fetchURL, {
    initialData: dataServer
  });
  const classes = addtask_useStyles();
  return addtask_jsx(external_formik_["Formik"], {
    initialValues: {
      task_name: '',
      task_type: 'Task',
      start_date: external_moment_default()(new Date()).format('YYYY-MM-DD').toString(),
      end_date: external_moment_default()(new Date()).format('YYYY-MM-DD').toString(),
      status: 'New',
      assignee: 'NguyenHao'
    },
    onSubmit: async (values, formikHelpers) => {
      Object(external_swr_["mutate"])(fetchURL, [...data, values], false);
      setLoading(true);
      await external_axios_default.a.post(fetchURL, values);
      setLoading(false);
      setTypeSnack("Added Successfully");
      setOpenSnackBar(true);
      setTimeout(() => {
        setOpenSnackBar(false);
      }, 3000);
      Object(external_swr_["trigger"])(fetchURL);
      console.log(dataDialog);
      formikHelpers.resetForm();
      console.log("homepage -> typeSnack", typeSnack);
    }
  }, addtask_jsx(external_formik_["Form"], {
    display: "flex",
    p: 1,
    className: classes.root,
    noValidate: true,
    autoComplete: "off"
  }, addtask_jsx(external_formik_["Field"], {
    as: TextField_default.a,
    name: "task_name",
    className: classes.input,
    id: "outlined-basic",
    size: "small",
    variant: "outlined",
    placeholder: "task_name"
  }), addtask_jsx(external_formik_["Field"], {
    as: TextField_default.a,
    select: true,
    name: "task_type",
    className: classes.input,
    id: "outlined-basic",
    size: "small",
    variant: "outlined",
    placeholder: "task_type" //onChange={handleChangeComboType}

  }, dataType.map(option => addtask_jsx("option", {
    key: option.id,
    value: option.tasktype_name
  }, option.tasktype_name))), addtask_jsx(external_formik_["Field"], {
    as: TextField_default.a,
    type: "date",
    id: "outlined-basic",
    name: "start_date",
    className: classes.input,
    size: "small",
    defaultValue: external_moment_default()(new Date()),
    variant: "outlined",
    placeholder: "start_date"
  }), addtask_jsx(external_formik_["Field"], {
    as: TextField_default.a,
    type: "date",
    id: "outlined-basic",
    name: "end_date",
    className: classes.input,
    size: "small",
    defaultValue: external_moment_default()(new Date()),
    variant: "outlined",
    placeholder: "end_date"
  }), addtask_jsx(external_formik_["Field"], {
    as: TextField_default.a,
    select: true,
    name: "status",
    className: classes.input,
    id: "outlined-basic",
    size: "small",
    variant: "outlined",
    placeholder: "status" //onChange={handleChangeComboStatus}

  }, dataStatus && dataStatus.length && dataStatus.map((option, id) => addtask_jsx("option", {
    key: id,
    value: option.status_name
  }, option.status_name))), addtask_jsx(external_formik_["Field"], {
    as: TextField_default.a,
    select: true,
    name: "assignee",
    className: classes.input,
    id: "outlined-basic",
    size: "small",
    variant: "outlined",
    placeholder: "assignee" //onChange={handleChangeComboAssignee}

  }, dataAssignee.map((option, id) => addtask_jsx("option", {
    key: id,
    value: option.username
  }, option.username))), addtask_jsx(Button_default.a, {
    className: classes.button,
    type: "submit",
    variant: "contained",
    size: "medium",
    color: "primary"
  }, "ADD")));
}
// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__("fEgT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/DialogActions"
var DialogActions_ = __webpack_require__("1gBk");
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__("iTUb");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContentText"
var DialogContentText_ = __webpack_require__("MbIc");

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__("0Jp5");

// CONCATENATED MODULE: ./src/components/edittask.js
var edittask_jsx = external_react_default.a.createElement;









 //dialog







const edittask_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center'
  },
  table: {
    minWidth: 650
  },
  caption: {
    display: 'flex'
  },
  input: {
    width: '100%',
    marginLeft: theme.spacing(1),
    flex: 1
  },
  button: {
    marginLeft: theme.spacing(1)
  },
  buttonAction: {
    marginLeft: theme.spacing(1)
  }
}));
const edittask_fetchURL = `${config["a" /* default */].apiGetTaskUrl}`;
function edittask_AddTask(props) {
  const {
    dataServer,
    dataDialog,
    dataType,
    dataStatus,
    dataAssignee,
    handleCloseDialog
  } = props;
  const {
    data
  } = external_swr_default()(edittask_fetchURL, {
    initialData: dataServer
  });
  const classes = edittask_useStyles();
  return edittask_jsx(external_formik_["Formik"], {
    initialValues: {
      task_name: dataDialog.task_name,
      task_type: dataDialog.task_type,
      start_date: external_moment_default()(dataDialog.start_date).format('YYYY-MM-DD').toString(),
      end_date: external_moment_default()(dataDialog.end_date).format('YYYY-MM-DD').toString(),
      status: dataDialog.status,
      assignee: dataDialog.assignee
    },
    onSubmit: async (values, {
      setSubmitting
    }, formikHelpers) => {
      setTimeout(async () => {
        const editUrl = `${edittask_fetchURL}/${dataDialog.id}`; //const url = fetchURL;
        //mutate(url);

        await external_axios_default.a.patch(editUrl, values);
        setSubmitting(false);
        window.location.reload(); //trigger(url);
      }, 200);
    }
  }, ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  }) => edittask_jsx(external_formik_["Form"], {
    noValidate: true,
    autoComplete: "off"
  }, edittask_jsx(DialogContent_default.a, null, edittask_jsx(Grid_default.a, {
    container: true,
    spacing: 2
  }, edittask_jsx(Grid_default.a, {
    item: true,
    xs: 12,
    sm: 6
  }, edittask_jsx(external_formik_["Field"], {
    as: TextField_default.a,
    name: "task_name",
    className: classes.input,
    id: "outlined-basic",
    label: "task_name",
    size: "small",
    variant: "outlined",
    onChange: handleChange
  })), edittask_jsx(Grid_default.a, {
    item: true,
    xs: 12,
    sm: 6
  }, edittask_jsx(external_formik_["Field"], {
    as: TextField_default.a,
    select: true,
    name: "task_type",
    className: classes.input,
    id: "outlined-basic",
    label: "task_type",
    size: "small",
    variant: "outlined",
    placeholder: "task_type",
    onChange: handleChange
  }, dataType.map(option => edittask_jsx("option", {
    key: option.id,
    value: option.tasktype_name
  }, option.tasktype_name)))), edittask_jsx(Grid_default.a, {
    item: true,
    xs: 12,
    sm: 6
  }, edittask_jsx(external_formik_["Field"], {
    as: TextField_default.a,
    type: "date",
    id: "date",
    label: "task_name",
    name: "start_date",
    className: classes.input,
    size: "small",
    defaultValue: external_moment_default()(new Date()).format("YYYY-MM-DD"),
    variant: "outlined",
    InputLabelProps: {
      shrink: true
    },
    onChange: handleChange
  })), edittask_jsx(Grid_default.a, {
    item: true,
    xs: 12,
    sm: 6
  }, edittask_jsx(external_formik_["Field"], {
    as: TextField_default.a,
    type: "date",
    id: "date",
    label: "end_date",
    name: "end_date",
    className: classes.input,
    size: "small",
    defaultValue: external_moment_default()(new Date()).format("YYYY-MM-DD"),
    variant: "outlined",
    InputLabelProps: {
      shrink: true
    },
    onChange: handleChange
  })), edittask_jsx(Grid_default.a, {
    item: true,
    xs: 12,
    sm: 6
  }, edittask_jsx(external_formik_["Field"], {
    as: TextField_default.a,
    select: true,
    name: "status",
    className: classes.input,
    id: "outlined-basic",
    label: "task_name",
    size: "small",
    variant: "outlined",
    placeholder: "status",
    defaultValue: dataDialog.status_name,
    onChange: handleChange
  }, dataStatus.map((option, id) => edittask_jsx("option", {
    key: id,
    value: option.status_name
  }, option.status_name)))), edittask_jsx(Grid_default.a, {
    item: true,
    xs: 12,
    sm: 6
  }, edittask_jsx(external_formik_["Field"], {
    as: TextField_default.a,
    select: true,
    name: "assignee",
    className: classes.input,
    id: "outlined-basic",
    label: "assignee",
    size: "small",
    variant: "outlined",
    placeholder: "assignee",
    onChange: handleChange
  }, dataAssignee.map((option, id) => edittask_jsx("option", {
    key: id,
    value: option.username
  }, option.username)))))), edittask_jsx(DialogActions_default.a, null, edittask_jsx(Button_default.a, {
    onClick: handleCloseDialog,
    disabled: isSubmitting,
    color: "secondary"
  }, "Cancel"), edittask_jsx(Button_default.a, {
    className: classes.button,
    type: "submit",
    variant: "contained",
    onClick: handleCloseDialog,
    color: "primary",
    autoFocus: true
  }, "Save"))));
}
// EXTERNAL MODULE: external "@material-ui/core/TableHead"
var TableHead_ = __webpack_require__("TWtx");
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_);

// EXTERNAL MODULE: external "@material-ui/core/TableRow"
var TableRow_ = __webpack_require__("iDDF");
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_);

// EXTERNAL MODULE: external "@material-ui/core/TableCell"
var TableCell_ = __webpack_require__("Ai9N");
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);

// CONCATENATED MODULE: ./src/components/tablehead.js

var tablehead_jsx = external_react_default.a.createElement;



function HeadTable() {
  return tablehead_jsx(TableHead_default.a, null, tablehead_jsx(TableRow_default.a, null, tablehead_jsx(TableCell_default.a, null, "Task\xA0name"), tablehead_jsx(TableCell_default.a, {
    align: "center"
  }, "Type"), tablehead_jsx(TableCell_default.a, {
    align: "center"
  }, "Date\xA0start"), tablehead_jsx(TableCell_default.a, {
    align: "center"
  }, "Date\xA0end"), tablehead_jsx(TableCell_default.a, {
    align: "center"
  }, "Status"), tablehead_jsx(TableCell_default.a, {
    align: "center"
  }, "Assignee"), tablehead_jsx(TableCell_default.a, {
    align: "center"
  }, "Action")));
}
// EXTERNAL MODULE: external "@material-ui/icons/Delete"
var Delete_ = __webpack_require__("ng1p");
var Delete_default = /*#__PURE__*/__webpack_require__.n(Delete_);

// EXTERNAL MODULE: external "@material-ui/icons/Edit"
var Edit_ = __webpack_require__("YkC2");
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit_);

// EXTERNAL MODULE: external "@material-ui/core/Table"
var Table_ = __webpack_require__("BjFw");
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);

// EXTERNAL MODULE: external "@material-ui/core/TableBody"
var TableBody_ = __webpack_require__("30mr");
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_);

// EXTERNAL MODULE: external "@material-ui/core/TableContainer"
var TableContainer_ = __webpack_require__("5id3");
var TableContainer_default = /*#__PURE__*/__webpack_require__.n(TableContainer_);

// CONCATENATED MODULE: ./src/components/tablebody.js
var tablebody_jsx = external_react_default.a.createElement;


























const tablebody_fetchURL = `${config["a" /* default */].apiGetTaskUrl}`;
const tablebody_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center'
  },
  table: {
    minWidth: 650
  },
  caption: {
    display: 'flex'
  },
  input: {
    width: '100%',
    marginLeft: theme.spacing(1),
    flex: 1
  },
  button: {
    marginLeft: theme.spacing(1)
  },
  buttonAction: {
    marginLeft: theme.spacing(1)
  }
}));
function BodyTable(props) {
  const {
    data,
    dataServer,
    dataDialog,
    dataType,
    dataStatus,
    dataAssignee,
    openDialog,
    handleCloseDialog,
    handleOpenDialog,
    setLoading,
    setOpenSnackBar,
    setTypeSnack
  } = props;
  const classes = tablebody_useStyles();
  return tablebody_jsx(TableBody_default.a, null, data && Array.isArray(data) && data.map(row => tablebody_jsx(TableRow_default.a, {
    key: row.id
  }, tablebody_jsx(TableCell_default.a, {
    component: "th",
    scope: "row"
  }, row.task_name), tablebody_jsx(TableCell_default.a, {
    align: "center"
  }, row.task_type), tablebody_jsx(TableCell_default.a, {
    align: "center"
  }, external_moment_default()(row.start_date).format("YYYY-MM-DD")), tablebody_jsx(TableCell_default.a, {
    align: "center"
  }, external_moment_default()(row.end_date).format("YYYY-MM-DD")), tablebody_jsx(TableCell_default.a, {
    align: "center"
  }, row.status), tablebody_jsx(TableCell_default.a, {
    align: "center"
  }, row.assignee), tablebody_jsx(TableCell_default.a, {
    align: "center"
  }, tablebody_jsx(Dialog_default.a, {
    open: openDialog,
    onClose: handleCloseDialog,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, tablebody_jsx(edittask_AddTask, {
    dataServer: dataServer,
    dataDialog: dataDialog,
    dataType: dataType,
    dataStatus: dataStatus,
    dataAssignee: dataAssignee,
    handleOpenDialog: handleOpenDialog,
    handleCloseDialog: handleCloseDialog
  })), tablebody_jsx(Button_default.a, {
    className: classes.buttonAction,
    size: "small",
    color: "secondary",
    startIcon: tablebody_jsx(Edit_default.a, null),
    onClick: () => handleOpenDialog(row)
  }, "Edit"), tablebody_jsx(Button_default.a, {
    className: classes.buttonAction,
    size: "small",
    color: "secondary",
    startIcon: tablebody_jsx(Delete_default.a, null),
    onClick: async () => {
      const deleteUrl = tablebody_fetchURL + "/" + row.id;
      const url = tablebody_fetchURL;
      Object(external_swr_["mutate"])(url, data.filter(c => c.id !== row.id), false);
      setLoading(true);
      await external_axios_default.a.delete(deleteUrl);
      setLoading(false);
      setOpenSnackBar(true);
      setTypeSnack('Deleted Successfully');
      Object(external_swr_["trigger"])(url);
      setTimeout(() => {
        setOpenSnackBar(false);
      }, 3000);
    }
  }, "Delete")))));
}
// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Menu"
var Menu_ = __webpack_require__("GYHf");

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__("x54t");

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");

// EXTERNAL MODULE: external "@material-ui/icons/MoreVert"
var MoreVert_ = __webpack_require__("UQSI");

// EXTERNAL MODULE: external "@material-ui/core/LinearProgress"
var LinearProgress_ = __webpack_require__("0zb8");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./src/pages/homepage.js
var homepage_jsx = external_react_default.a.createElement;



 //Component






 //Table























const homepage_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center'
  },
  table: {
    minWidth: 650
  },
  caption: {
    display: 'flex'
  },
  input: {
    width: '100%',
    marginLeft: theme.spacing(1),
    flex: 1
  },
  button: {
    marginLeft: theme.spacing(1)
  },
  buttonAction: {
    marginLeft: theme.spacing(1)
  }
}));
const ITEM_HEIGHT = 48;
const homepage_fetchURL = `${config["a" /* default */].apiGetTaskUrl}`;
const fetchType = `${config["a" /* default */].apiGetTypeUrl}`;
const fetchStatus = `${config["a" /* default */].apiGetStatusUrl}`;
const fetchAssignee = `${config["a" /* default */].apiGetAssigneeUrl}`; //const fetchURL = "https://my-json-server.typicode.com/pqcuong737/jsonfakeserver/task";

function homepage(props) {
  const router = Object(router_["useRouter"])();
  const {
    dataServer,
    dataType,
    dataStatus,
    dataAssignee
  } = props;
  const {
    data
  } = external_swr_default()(homepage_fetchURL, {
    initialData: dataServer
  });
  const classes = homepage_useStyles();
  const {
    0: taskList,
    1: setTaskList
  } = Object(external_react_["useState"])([]);
  const {
    0: dataDialog,
    1: setDataDialog
  } = Object(external_react_["useState"])([]);
  const {
    0: onsubmit,
    1: setsubmit
  } = Object(external_react_["useState"])(false);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: anchorEl,
    1: setAnchorEl
  } = Object(external_react_["useState"])(null);
  const {
    0: openDialog,
    1: setOpenDialog
  } = Object(external_react_["useState"])(false);
  const {
    0: openSnackBar,
    1: setOpenSnackBar
  } = Object(external_react_["useState"])(false);
  const {
    0: typeSnack,
    1: setTypeSnack
  } = Object(external_react_["useState"])('');
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenDialog = data => {
    console.log("handleOpenDialog -> data", data);
    setOpenDialog(true);
    setDataDialog(data);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return homepage_jsx("div", null, homepage_jsx(Container_default.a, null, homepage_jsx(header["a" /* default */], {
    loading: loading
  }), homepage_jsx(TableContainer_default.a, {
    component: Paper_default.a
  }, homepage_jsx(Table_default.a, {
    className: classes.table,
    "aria-label": "simple table"
  }, homepage_jsx("caption", null, homepage_jsx(AddTask, {
    dataServer: dataServer,
    dataType: dataType,
    dataStatus: dataStatus,
    dataAssignee: dataAssignee,
    setLoading: setLoading,
    setOpenSnackBar: setOpenSnackBar,
    setTypeSnack: setTypeSnack
  })), homepage_jsx(HeadTable, null), homepage_jsx(BodyTable, {
    data: data,
    dataServer: dataServer,
    dataDialog: dataDialog,
    dataType: dataType,
    dataStatus: dataStatus,
    dataAssignee: dataAssignee,
    openDialog: openDialog,
    handleCloseDialog: handleCloseDialog,
    handleOpenDialog: handleOpenDialog,
    setLoading: setLoading,
    setOpenSnackBar: setOpenSnackBar,
    setTypeSnack: setTypeSnack
  }))), homepage_jsx(CustomizedSnackbars, {
    opensnack: openSnackBar,
    typesnack: typeSnack
  })));
}

homepage.getInitialProps = async ctx => {
  const res = await external_axios_default.a.get(`${config["a" /* default */].apiGetTaskUrl}`);
  const res1 = await external_axios_default.a.get(`${config["a" /* default */].apiGetTypeUrl}`);
  const res2 = await external_axios_default.a.get(`${config["a" /* default */].apiGetStatusUrl}`);
  const res3 = await external_axios_default.a.get(`${config["a" /* default */].apiGetAssigneeUrl}`);
  return {
    dataServer: res.data,
    dataType: res1.data,
    dataStatus: res2.data,
    dataAssignee: res3.data
  };
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "iDDF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "lOiU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "ng1p":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "pJv6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const baseUrl = 'http://localhost:4001'; //const baseUrl = 'http://192.168.100.19:3000';
//const baseUrl = 'https://my-json-server.typicode.com/pqcuong737/jsonfakeserver/task'

/* harmony default export */ __webpack_exports__["a"] = ({
  apiGetTaskUrl: `${baseUrl}/api/task`,
  apiGetTypeUrl: `${baseUrl}/api/type`,
  apiGetStatusUrl: `${baseUrl}/api/status`,
  apiGetAssigneeUrl: `${baseUrl}/api/assignee`,
  apiSignUpUrl: `${baseUrl}/api/register`,
  apiSignInUrl: `${baseUrl}/api/login`,
  apiMeUrl: `${baseUrl}/api/me`
});

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });