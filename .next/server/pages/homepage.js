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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/homepage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/config.js":
/*!******************************!*\
  !*** ./src/common/config.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = 'http://localhost:4001'; //const baseUrl = 'http://192.168.100.19:3000';
//const baseUrl = 'https://my-json-server.typicode.com/pqcuong737/jsonfakeserver/task'

/* harmony default export */ __webpack_exports__["default"] = ({
  apiGetTaskUrl: `${baseUrl}/api/task`,
  apiGetTypeUrl: `${baseUrl}/api/type`,
  apiGetStatusUrl: `${baseUrl}/api/status`,
  apiGetAssigneeUrl: `${baseUrl}/api/assignee`,
  apiSignUpUrl: `${baseUrl}/api/register`,
  apiSignInUrl: `${baseUrl}/api/login`,
  apiMeUrl: `${baseUrl}/api/me`
});

/***/ }),

/***/ "./src/components/addtask.js":
/*!***********************************!*\
  !*** ./src/components/addtask.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddTask; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/config */ "./src/common/config.js");
var _jsxFileName = "D:\\Documents\\Work\\Test\\taskmanager\\src\\components\\addtask.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
const fetchURL = `${_common_config__WEBPACK_IMPORTED_MODULE_8__["default"].apiGetTaskUrl}`;
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
  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(fetchURL, {
    initialData: dataServer
  });
  const classes = useStyles();
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      task_name: '',
      task_type: 'Task',
      start_date: moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format('YYYY-MM-DD').toString(),
      end_date: moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format('YYYY-MM-DD').toString(),
      status: 'New',
      assignee: 'NguyenHao'
    },
    onSubmit: async (values, formikHelpers) => {
      Object(swr__WEBPACK_IMPORTED_MODULE_3__["mutate"])(fetchURL, [...data, values], false);
      setLoading(true);
      await axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(fetchURL, values);
      setLoading(false);
      setTypeSnack("Added Successfully");
      setOpenSnackBar(true);
      setTimeout(() => {
        setOpenSnackBar(false);
      }, 3000);
      Object(swr__WEBPACK_IMPORTED_MODULE_3__["trigger"])(fetchURL);
      console.log(dataDialog);
      formikHelpers.resetForm();
      console.log("homepage -> typeSnack", typeSnack);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    display: "flex",
    p: 1,
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    as: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a,
    name: "task_name",
    className: classes.input,
    id: "outlined-basic",
    size: "small",
    variant: "outlined",
    placeholder: "task_name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    as: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a,
    select: true,
    name: "task_type",
    className: classes.input,
    id: "outlined-basic",
    size: "small",
    variant: "outlined",
    placeholder: "task_type" //onChange={handleChangeComboType}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, dataType.map(option => __jsx("option", {
    key: option.id,
    value: option.tasktype_name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }, option.tasktype_name))), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    as: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a,
    type: "date",
    id: "outlined-basic",
    name: "start_date",
    className: classes.input,
    size: "small",
    defaultValue: moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()),
    variant: "outlined",
    placeholder: "start_date",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    as: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a,
    type: "date",
    id: "outlined-basic",
    name: "end_date",
    className: classes.input,
    size: "small",
    defaultValue: moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()),
    variant: "outlined",
    placeholder: "end_date",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    as: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a,
    select: true,
    name: "status",
    className: classes.input,
    id: "outlined-basic",
    size: "small",
    variant: "outlined",
    placeholder: "status" //onChange={handleChangeComboStatus}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, dataStatus && dataStatus.length && dataStatus.map((option, id) => __jsx("option", {
    key: id,
    value: option.status_name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, option.status_name))), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    as: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a,
    select: true,
    name: "assignee",
    className: classes.input,
    id: "outlined-basic",
    size: "small",
    variant: "outlined",
    placeholder: "assignee" //onChange={handleChangeComboAssignee}
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, dataAssignee.map((option, id) => __jsx("option", {
    key: id,
    value: option.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 25
    }
  }, option.username))), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.button,
    type: "submit",
    variant: "contained",
    size: "medium",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, "ADD")));
}

/***/ }),

/***/ "./src/components/edittask.js":
/*!************************************!*\
  !*** ./src/components/edittask.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddTask; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "@material-ui/core/DialogContentText");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/config */ "./src/common/config.js");
var _jsxFileName = "D:\\Documents\\Work\\Test\\taskmanager\\src\\components\\edittask.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









 //dialog







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
const fetchURL = `${_common_config__WEBPACK_IMPORTED_MODULE_14__["default"].apiGetTaskUrl}`;
function AddTask(props) {
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
  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(fetchURL, {
    initialData: dataServer
  });
  const classes = useStyles();
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      task_name: dataDialog.task_name,
      task_type: dataDialog.task_type,
      start_date: moment__WEBPACK_IMPORTED_MODULE_4___default()(dataDialog.start_date).format('YYYY-MM-DD').toString(),
      end_date: moment__WEBPACK_IMPORTED_MODULE_4___default()(dataDialog.end_date).format('YYYY-MM-DD').toString(),
      status: dataDialog.status,
      assignee: dataDialog.assignee
    },
    onSubmit: async (values, {
      setSubmitting
    }, formikHelpers) => {
      setTimeout(async () => {
        const editUrl = `${fetchURL}/${dataDialog.id}`; //const url = fetchURL;
        //mutate(url);

        await axios__WEBPACK_IMPORTED_MODULE_5___default.a.patch(editUrl, values);
        setSubmitting(false);
        window.location.reload(); //trigger(url);
      }, 200);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  }) => __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    noValidate: true,
    autoComplete: "off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 33
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    as: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a,
    name: "task_name",
    className: classes.input,
    id: "outlined-basic",
    label: "task_name",
    size: "small",
    variant: "outlined",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 37
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    as: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a,
    select: true,
    name: "task_type",
    className: classes.input,
    id: "outlined-basic",
    label: "task_type",
    size: "small",
    variant: "outlined",
    placeholder: "task_type",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 37
    }
  }, dataType.map(option => __jsx("option", {
    key: option.id,
    value: option.tasktype_name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 45
    }
  }, option.tasktype_name)))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 33
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    as: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a,
    type: "date",
    id: "date",
    label: "task_name",
    name: "start_date",
    className: classes.input,
    size: "small",
    defaultValue: moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format("YYYY-MM-DD"),
    variant: "outlined",
    InputLabelProps: {
      shrink: true
    },
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 37
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 33
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    as: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a,
    type: "date",
    id: "date",
    label: "end_date",
    name: "end_date",
    className: classes.input,
    size: "small",
    defaultValue: moment__WEBPACK_IMPORTED_MODULE_4___default()(new Date()).format("YYYY-MM-DD"),
    variant: "outlined",
    InputLabelProps: {
      shrink: true
    },
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 37
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 33
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    as: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a,
    select: true,
    name: "status",
    className: classes.input,
    id: "outlined-basic",
    label: "task_name",
    size: "small",
    variant: "outlined",
    placeholder: "status",
    defaultValue: dataDialog.status_name,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 37
    }
  }, dataStatus.map((option, id) => __jsx("option", {
    key: id,
    value: option.status_name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 45
    }
  }, option.status_name)))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 33
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    as: _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a,
    select: true,
    name: "assignee",
    className: classes.input,
    id: "outlined-basic",
    label: "assignee",
    size: "small",
    variant: "outlined",
    placeholder: "assignee",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 37
    }
  }, dataAssignee.map((option, id) => __jsx("option", {
    key: id,
    value: option.username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 45
    }
  }, option.username)))))), __jsx(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: handleCloseDialog,
    disabled: isSubmitting,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 29
    }
  }, "Cancel"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.button,
    type: "submit",
    variant: "contained",
    onClick: handleCloseDialog,
    color: "primary",
    autoFocus: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 29
    }
  }, "Save"))));
}

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomizedSnackbars; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Alert */ "@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Documents\\Work\\Test\\taskmanager\\src\\components\\footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    elevation: 6,
    variant: "filled"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 12
    }
  }));
}

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    open: opensnack,
    autoHideDuration: 3000,
    onClose: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, typesnack)));
}

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "@material-ui/core/FormGroup");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "@material-ui/core/LinearProgress");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "D:\\Documents\\Work\\Test\\taskmanager\\src\\components\\header.js";
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
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "dense",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h6",
    color: "inherit",
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, "Task"), auth && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.get('username') ? js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.get('username').substring(0, parseuser.length) : '', __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-label": "account of current user",
    "aria-controls": "menu-appbar",
    "aria-haspopup": "true",
    onClick: handleMenu,
    color: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  })), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_12___default.a, {
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
    onClose: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }, "Profile"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default.a, {
    onClick: handleLogout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  }, "Log Out")))), !loading ? __jsx(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_13___default.a, {
    hidden: true,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 31
    }
  }) : __jsx(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_13___default.a, {
    hidden: false,
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 83
    }
  })));
}

/***/ }),

/***/ "./src/components/tablebody.js":
/*!*************************************!*\
  !*** ./src/components/tablebody.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BodyTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_edittask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/edittask */ "./src/components/edittask.js");
/* harmony import */ var _components_tablehead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/tablehead */ "./src/components/tablehead.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Edit */ "@material-ui/icons/Edit");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "@material-ui/core/DialogContentText");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "@material-ui/core/TableContainer");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../common/config */ "./src/common/config.js");
var _jsxFileName = "D:\\Documents\\Work\\Test\\taskmanager\\src\\components\\tablebody.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


























const fetchURL = `${_common_config__WEBPACK_IMPORTED_MODULE_24__["default"].apiGetTaskUrl}`;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
  const classes = useStyles();
  return __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_19___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, data && Array.isArray(data) && data.map(row => __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_23___default.a, {
    key: row.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default.a, {
    component: "th",
    scope: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, row.task_name), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default.a, {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, row.task_type), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default.a, {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, moment__WEBPACK_IMPORTED_MODULE_4___default()(row.start_date).format("YYYY-MM-DD")), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default.a, {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, moment__WEBPACK_IMPORTED_MODULE_4___default()(row.end_date).format("YYYY-MM-DD")), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default.a, {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, row.status), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default.a, {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, row.assignee), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default.a, {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_13___default.a, {
    open: openDialog,
    onClose: handleCloseDialog,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, __jsx(_components_edittask__WEBPACK_IMPORTED_MODULE_6__["default"], {
    dataServer: dataServer,
    dataDialog: dataDialog,
    dataType: dataType,
    dataStatus: dataStatus,
    dataAssignee: dataAssignee,
    handleOpenDialog: handleOpenDialog,
    handleCloseDialog: handleCloseDialog,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 29
    }
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.buttonAction,
    size: "small",
    color: "secondary",
    startIcon: __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_12___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 40
      }
    }),
    onClick: () => handleOpenDialog(row),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, "Edit"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.buttonAction,
    size: "small",
    color: "secondary",
    startIcon: __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 40
      }
    }),
    onClick: async () => {
      const deleteUrl = fetchURL + "/" + row.id;
      const url = fetchURL;
      Object(swr__WEBPACK_IMPORTED_MODULE_3__["mutate"])(url, data.filter(c => c.id !== row.id), false);
      setLoading(true);
      await axios__WEBPACK_IMPORTED_MODULE_5___default.a.delete(deleteUrl);
      setLoading(false);
      setOpenSnackBar(true);
      setTypeSnack('Deleted Successfully');
      Object(swr__WEBPACK_IMPORTED_MODULE_3__["trigger"])(url);
      setTimeout(() => {
        setOpenSnackBar(false);
      }, 3000);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, "Delete")))));
}

/***/ }),

/***/ "./src/components/tablehead.js":
/*!*************************************!*\
  !*** ./src/components/tablehead.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeadTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Documents\\Work\\Test\\taskmanager\\src\\components\\tablehead.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function HeadTable() {
  return __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Task\xA0name"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "Type"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, "Date\xA0start"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "Date\xA0end"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, "Status"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "Assignee"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default.a, {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "Action")));
}

/***/ }),

/***/ "./src/pages/homepage.js":
/*!*******************************!*\
  !*** ./src/pages/homepage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return homepage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_addtask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/addtask */ "./src/components/addtask.js");
/* harmony import */ var _components_edittask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/edittask */ "./src/components/edittask.js");
/* harmony import */ var _components_tablehead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/tablehead */ "./src/components/tablehead.js");
/* harmony import */ var _components_tablebody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/tablebody */ "./src/components/tablebody.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "@material-ui/core/TableContainer");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/Edit */ "@material-ui/icons/Edit");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "@material-ui/core/LinearProgress");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../common/config */ "./src/common/config.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_30__);
var _jsxFileName = "D:\\Documents\\Work\\Test\\taskmanager\\src\\pages\\homepage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 //Component






 //Table























const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
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
const fetchURL = `${_common_config__WEBPACK_IMPORTED_MODULE_29__["default"].apiGetTaskUrl}`;
const fetchType = `${_common_config__WEBPACK_IMPORTED_MODULE_29__["default"].apiGetTypeUrl}`;
const fetchStatus = `${_common_config__WEBPACK_IMPORTED_MODULE_29__["default"].apiGetStatusUrl}`;
const fetchAssignee = `${_common_config__WEBPACK_IMPORTED_MODULE_29__["default"].apiGetAssigneeUrl}`; //const fetchURL = "https://my-json-server.typicode.com/pqcuong737/jsonfakeserver/task";

function homepage(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_30__["useRouter"])();
  const {
    dataServer,
    dataType,
    dataStatus,
    dataAssignee
  } = props;
  const {
    data
  } = swr__WEBPACK_IMPORTED_MODULE_28___default()(fetchURL, {
    initialData: dataServer
  });
  const classes = useStyles();
  const {
    0: taskList,
    1: setTaskList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: dataDialog,
    1: setDataDialog
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: onsubmit,
    1: setsubmit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: anchorEl,
    1: setAnchorEl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: openDialog,
    1: setOpenDialog
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: openSnackBar,
    1: setOpenSnackBar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: typeSnack,
    1: setTypeSnack
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
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

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_12___default.a, {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.table,
    "aria-label": "simple table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }, __jsx("caption", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, __jsx(_components_addtask__WEBPACK_IMPORTED_MODULE_5__["default"], {
    dataServer: dataServer,
    dataType: dataType,
    dataStatus: dataStatus,
    dataAssignee: dataAssignee,
    setLoading: setLoading,
    setOpenSnackBar: setOpenSnackBar,
    setTypeSnack: setTypeSnack,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 29
    }
  })), __jsx(_components_tablehead__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }), __jsx(_components_tablebody__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    setTypeSnack: setTypeSnack,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 25
    }
  }))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    opensnack: openSnackBar,
    typesnack: typeSnack,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  })));
}

homepage.getInitialProps = async ctx => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_27___default.a.get(`${_common_config__WEBPACK_IMPORTED_MODULE_29__["default"].apiGetTaskUrl}`);
  const res1 = await axios__WEBPACK_IMPORTED_MODULE_27___default.a.get(`${_common_config__WEBPACK_IMPORTED_MODULE_29__["default"].apiGetTypeUrl}`);
  const res2 = await axios__WEBPACK_IMPORTED_MODULE_27___default.a.get(`${_common_config__WEBPACK_IMPORTED_MODULE_29__["default"].apiGetStatusUrl}`);
  const res3 = await axios__WEBPACK_IMPORTED_MODULE_27___default.a.get(`${_common_config__WEBPACK_IMPORTED_MODULE_29__["default"].apiGetAssigneeUrl}`);
  return {
    dataServer: res.data,
    dataType: res1.data,
    dataStatus: res2.data,
    dataAssignee: res3.data
  };
};

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/FormGroup":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormGroup" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormGroup");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/LinearProgress":
/*!***************************************************!*\
  !*** external "@material-ui/core/LinearProgress" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/LinearProgress");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "@material-ui/core/Switch":
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "@material-ui/core/TableContainer":
/*!***************************************************!*\
  !*** external "@material-ui/core/TableContainer" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableContainer");

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),

/***/ "@material-ui/lab/Alert":
/*!*****************************************!*\
  !*** external "@material-ui/lab/Alert" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Alert");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWRkdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lZGl0dGFzay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYmxlYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJsZWhlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2hvbWVwYWdlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtR3JvdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1N3aXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0VkaXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9sYWIvQWxlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvcm1pa1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIiJdLCJuYW1lcyI6WyJiYXNlVXJsIiwiYXBpR2V0VGFza1VybCIsImFwaUdldFR5cGVVcmwiLCJhcGlHZXRTdGF0dXNVcmwiLCJhcGlHZXRBc3NpZ25lZVVybCIsImFwaVNpZ25VcFVybCIsImFwaVNpZ25JblVybCIsImFwaU1lVXJsIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsInBhZGRpbmciLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInRhYmxlIiwibWluV2lkdGgiLCJjYXB0aW9uIiwiaW5wdXQiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIiwiZmxleCIsImJ1dHRvbiIsImJ1dHRvbkFjdGlvbiIsImZldGNoVVJMIiwiY29uZmlnIiwiQWRkVGFzayIsInByb3BzIiwiZGF0YVNlcnZlciIsImRhdGFUeXBlIiwiZGF0YVN0YXR1cyIsImRhdGFBc3NpZ25lZSIsInNldExvYWRpbmciLCJzZXRPcGVuU25hY2tCYXIiLCJzZXRUeXBlU25hY2siLCJkYXRhIiwidXNlU1dSIiwiaW5pdGlhbERhdGEiLCJjbGFzc2VzIiwidGFza19uYW1lIiwidGFza190eXBlIiwic3RhcnRfZGF0ZSIsIm1vbWVudCIsIkRhdGUiLCJmb3JtYXQiLCJ0b1N0cmluZyIsImVuZF9kYXRlIiwic3RhdHVzIiwiYXNzaWduZWUiLCJ2YWx1ZXMiLCJmb3JtaWtIZWxwZXJzIiwibXV0YXRlIiwiYXhpb3MiLCJwb3N0Iiwic2V0VGltZW91dCIsInRyaWdnZXIiLCJjb25zb2xlIiwibG9nIiwiZGF0YURpYWxvZyIsInJlc2V0Rm9ybSIsInR5cGVTbmFjayIsIlRleHRGaWVsZCIsIm1hcCIsIm9wdGlvbiIsImlkIiwidGFza3R5cGVfbmFtZSIsImxlbmd0aCIsInN0YXR1c19uYW1lIiwidXNlcm5hbWUiLCJoYW5kbGVDbG9zZURpYWxvZyIsInNldFN1Ym1pdHRpbmciLCJlZGl0VXJsIiwicGF0Y2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImVycm9ycyIsInRvdWNoZWQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwiaGFuZGxlU3VibWl0IiwiaXNTdWJtaXR0aW5nIiwic2hyaW5rIiwiQWxlcnQiLCJtYXJnaW5Ub3AiLCJDdXN0b21pemVkU25hY2tiYXJzIiwib3BlbnNuYWNrIiwidHlwZXNuYWNrIiwib3BlbiIsInNldE9wZW4iLCJSZWFjdCIsInVzZVN0YXRlIiwiaGFuZGxlQ2xvc2UiLCJldmVudCIsInJlYXNvbiIsImZsZXhHcm93IiwidGl0bGUiLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJIZWFkZXIiLCJsb2FkaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXV0aCIsInNldEF1dGgiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwicGFyc2V1c2VyIiwiQ29va2llIiwiZ2V0IiwiQm9vbGVhbiIsImhhbmRsZU1lbnUiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlIiwicHVzaCIsInN1YnN0cmluZyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIkJvZHlUYWJsZSIsIm9wZW5EaWFsb2ciLCJoYW5kbGVPcGVuRGlhbG9nIiwiQXJyYXkiLCJpc0FycmF5Iiwicm93IiwiZGVsZXRlVXJsIiwidXJsIiwiZmlsdGVyIiwiYyIsImRlbGV0ZSIsIkhlYWRUYWJsZSIsIklURU1fSEVJR0hUIiwiZmV0Y2hUeXBlIiwiZmV0Y2hTdGF0dXMiLCJmZXRjaEFzc2lnbmVlIiwiaG9tZXBhZ2UiLCJ0YXNrTGlzdCIsInNldFRhc2tMaXN0Iiwic2V0RGF0YURpYWxvZyIsIm9uc3VibWl0Iiwic2V0c3VibWl0Iiwic2V0T3BlbkRpYWxvZyIsIm9wZW5TbmFja0JhciIsImhhbmRsZUNsaWNrIiwiUGFwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJyZXMiLCJyZXMxIiwicmVzMiIsInJlczMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlD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Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoicGFnZXMvaG9tZXBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9ob21lcGFnZS5qc1wiKTtcbiIsImNvbnN0IGJhc2VVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo0MDAxJztcclxuLy9jb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly8xOTIuMTY4LjEwMC4xOTozMDAwJztcclxuLy9jb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vbXktanNvbi1zZXJ2ZXIudHlwaWNvZGUuY29tL3BxY3Vvbmc3MzcvanNvbmZha2VzZXJ2ZXIvdGFzaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgICAgXHJcbiAgICBhcGlHZXRUYXNrVXJsOiBgJHtiYXNlVXJsfS9hcGkvdGFza2AsXHJcbiAgICBhcGlHZXRUeXBlVXJsOiBgJHtiYXNlVXJsfS9hcGkvdHlwZWAsXHJcbiAgICBhcGlHZXRTdGF0dXNVcmw6IGAke2Jhc2VVcmx9L2FwaS9zdGF0dXNgLFxyXG4gICAgYXBpR2V0QXNzaWduZWVVcmw6IGAke2Jhc2VVcmx9L2FwaS9hc3NpZ25lZWAsXHJcbiAgICBhcGlTaWduVXBVcmw6IGAke2Jhc2VVcmx9L2FwaS9yZWdpc3RlcmAsXHJcbiAgICBhcGlTaWduSW5Vcmw6IGAke2Jhc2VVcmx9L2FwaS9sb2dpbmAsXHJcbiAgICBhcGlNZVVybDogYCR7YmFzZVVybH0vYXBpL21lYCxcclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCwgRm9ybSwgRXJyb3JNZXNzYWdlIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgdXNlU1dSLCB7IG11dGF0ZSwgdHJpZ2dlciB9IGZyb20gJ3N3cic7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29tbW9uL2NvbmZpZydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHBhZGRpbmc6ICcycHggNHB4JyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgdGFibGU6IHtcclxuICAgICAgICBtaW5XaWR0aDogNjUwLFxyXG4gICAgfSxcclxuICAgIGNhcHRpb246IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICB9LFxyXG4gICAgaW5wdXQ6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgZmxleDogMSxcclxuICAgIH0sXHJcbiAgICBidXR0b246IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbkFjdGlvbjoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBmZXRjaFVSTCA9IGAke2NvbmZpZy5hcGlHZXRUYXNrVXJsfWA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRUYXNrKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IGRhdGFTZXJ2ZXIsIGRhdGFUeXBlLCBkYXRhU3RhdHVzLCBkYXRhQXNzaWduZWUsIHNldExvYWRpbmcsIHNldE9wZW5TbmFja0Jhciwgc2V0VHlwZVNuYWNrIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKGZldGNoVVJMLCB7IGluaXRpYWxEYXRhOiBkYXRhU2VydmVyIH0pO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgIHRhc2tfbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICB0YXNrX3R5cGU6ICdUYXNrJyxcclxuICAgICAgICAgICAgICAgIHN0YXJ0X2RhdGU6IG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ1lZWVktTU0tREQnKS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgZW5kX2RhdGU6IG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ1lZWVktTU0tREQnKS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnTmV3JyxcclxuICAgICAgICAgICAgICAgIGFzc2lnbmVlOiAnTmd1eWVuSGFvJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIGZvcm1pa0hlbHBlcnMpID0+IHtcclxuICAgICAgICAgICAgICAgIG11dGF0ZShmZXRjaFVSTCwgWy4uLmRhdGEsIHZhbHVlc10sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5wb3N0KGZldGNoVVJMLCB2YWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUeXBlU25hY2soXCJBZGRlZCBTdWNjZXNzZnVsbHlcIik7XHJcbiAgICAgICAgICAgICAgICBzZXRPcGVuU25hY2tCYXIodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRPcGVuU25hY2tCYXIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKGZldGNoVVJMKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFEaWFsb2cpO1xyXG4gICAgICAgICAgICAgICAgZm9ybWlrSGVscGVycy5yZXNldEZvcm0oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaG9tZXBhZ2UgLT4gdHlwZVNuYWNrXCIsIHR5cGVTbmFjaylcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb3JtIGRpc3BsYXk9XCJmbGV4XCIgcD17MX0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICAgICAgICA8RmllbGQgYXM9e1RleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGFza19uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidGFza19uYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCBhcz17VGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0YXNrX3R5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0YXNrX3R5cGVcIlxyXG4gICAgICAgICAgICAgICAgLy9vbkNoYW5nZT17aGFuZGxlQ2hhbmdlQ29tYm9UeXBlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhVHlwZS5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17b3B0aW9uLmlkfSB2YWx1ZT17b3B0aW9uLnRhc2t0eXBlX25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi50YXNrdHlwZV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8RmllbGQgYXM9e1RleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXJ0X2RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bW9tZW50KG5ldyBEYXRlKCkpfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzdGFydF9kYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCBhcz17VGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW5kX2RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bW9tZW50KG5ldyBEYXRlKCkpfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbmRfZGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGQgYXM9e1RleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgIC8vb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUNvbWJvU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhU3RhdHVzICYmIGRhdGFTdGF0dXMubGVuZ3RoICYmIGRhdGFTdGF0dXMubWFwKChvcHRpb24sIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpZH0gdmFsdWU9e29wdGlvbi5zdGF0dXNfbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLnN0YXR1c19uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8RmllbGQgYXM9e1RleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYXNzaWduZWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhc3NpZ25lZVwiXHJcbiAgICAgICAgICAgICAgICAvL29uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VDb21ib0Fzc2lnbmVlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhQXNzaWduZWUubWFwKChvcHRpb24sIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpZH0gdmFsdWU9e29wdGlvbi51c2VybmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgc2l6ZT1cIm1lZGl1bVwiIGNvbG9yPVwicHJpbWFyeVwiID5cclxuICAgICAgICAgICAgICAgICAgICBBRERcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0Zvcm1paz5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCwgRm9ybSwgRXJyb3JNZXNzYWdlIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgdXNlU1dSLCB7IG11dGF0ZSwgdHJpZ2dlciB9IGZyb20gJ3N3cic7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuXHJcbi8vZGlhbG9nXHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHQnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb21tb24vY29uZmlnJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgcGFkZGluZzogJzJweCA0cHgnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICB0YWJsZToge1xyXG4gICAgICAgIG1pbldpZHRoOiA2NTAsXHJcbiAgICB9LFxyXG4gICAgY2FwdGlvbjoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgICBmbGV4OiAxLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uQWN0aW9uOiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IGZldGNoVVJMID0gYCR7Y29uZmlnLmFwaUdldFRhc2tVcmx9YDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFRhc2socHJvcHMpIHtcclxuICAgIGNvbnN0IHsgZGF0YVNlcnZlciwgZGF0YURpYWxvZywgZGF0YVR5cGUsIGRhdGFTdGF0dXMsIGRhdGFBc3NpZ25lZSwgaGFuZGxlQ2xvc2VEaWFsb2cgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoZmV0Y2hVUkwsIHsgaW5pdGlhbERhdGE6IGRhdGFTZXJ2ZXIgfSk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgdGFza19uYW1lOiBkYXRhRGlhbG9nLnRhc2tfbmFtZSxcclxuICAgICAgICAgICAgICAgIHRhc2tfdHlwZTogZGF0YURpYWxvZy50YXNrX3R5cGUsXHJcbiAgICAgICAgICAgICAgICBzdGFydF9kYXRlOiBtb21lbnQoZGF0YURpYWxvZy5zdGFydF9kYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgZW5kX2RhdGU6IG1vbWVudChkYXRhRGlhbG9nLmVuZF9kYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBkYXRhRGlhbG9nLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIGFzc2lnbmVlOiBkYXRhRGlhbG9nLmFzc2lnbmVlLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nIH0sIGZvcm1pa0hlbHBlcnMpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRVcmwgPSBgJHtmZXRjaFVSTH0vJHtkYXRhRGlhbG9nLmlkfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zdCB1cmwgPSBmZXRjaFVSTDtcclxuICAgICAgICAgICAgICAgICAgICAvL211dGF0ZSh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBhdGNoKGVkaXRVcmwsIHZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdHJpZ2dlcih1cmwpO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgICAgICAgICAgdG91Y2hlZCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgICAgICAgIGhhbmRsZUJsdXIsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmcsXHJcbiAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8IEZvcm0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzPXtUZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGFza19uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0YXNrX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXM9e1RleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRhc2tfdHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidGFza190eXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0YXNrX3R5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGFUeXBlLm1hcCgob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbi5pZH0gdmFsdWU9e29wdGlvbi50YXNrdHlwZV9uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi50YXNrdHlwZV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBhcz17VGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwidGFza19uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGFydF9kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e21vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNocmluazogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgYXM9e1RleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImVuZF9kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbmRfZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXttb21lbnQobmV3IERhdGUoKSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaHJpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzPXtUZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInRhc2tfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YURpYWxvZy5zdGF0dXNfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhU3RhdHVzLm1hcCgob3B0aW9uLCBpZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpZH0gdmFsdWU9e29wdGlvbi5zdGF0dXNfbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24uc3RhdHVzX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIGFzPXtUZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhc3NpZ25lZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiYXNzaWduZWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImFzc2lnbmVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhQXNzaWduZWUubWFwKChvcHRpb24sIGlkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2lkfSB2YWx1ZT17b3B0aW9uLnVzZXJuYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbi51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VEaWFsb2d9IGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xvc2VEaWFsb2d9IGNvbG9yPVwicHJpbWFyeVwiIGF1dG9Gb2N1cz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgIDwvRm9ybWlrPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJztcclxuaW1wb3J0IE11aUFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xyXG5cclxuZnVuY3Rpb24gQWxlcnQocHJvcHMpIHtcclxuICAgIHJldHVybiA8TXVpQWxlcnQgZWxldmF0aW9uPXs2fSB2YXJpYW50PVwiZmlsbGVkXCIgey4uLnByb3BzfSAvPjtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAnJiA+ICogKyAqJzoge1xyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWl6ZWRTbmFja2JhcnMocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgb3BlbnNuYWNrICwgdHlwZXNuYWNrfSA9IHByb3BzXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQsIHJlYXNvbikgPT4ge1xyXG4gICAgICAgIGlmIChyZWFzb24gPT09ICdjbGlja2F3YXknKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgIDxTbmFja2JhciBvcGVuPXtvcGVuc25hY2t9IGF1dG9IaWRlRHVyYXRpb249ezMwMDB9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgIDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gc2V2ZXJpdHk9XCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3R5cGVzbmFja31cclxuICAgICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgIDwvU25hY2tiYXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IEFjY291bnRDaXJjbGUgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGUnO1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xyXG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgQ29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gICAgbWVudUJ1dHRvbjoge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCB7bG9hZGluZ30gPSBwcm9wcztcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICAvL2NvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgcGFyc2V1c2VyID0gQ29va2llLmdldCgndXNlcm5hbWUnKTtcclxuICAgIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QXV0aCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVNZW51ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgICAgICAgQ29va2llLnJlbW92ZSgndXNlcm5hbWUnKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL3NpZ25pbicpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhciB2YXJpYW50PVwiZGVuc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn0gY29sb3I9XCJpbmhlcml0XCIgYXJpYS1sYWJlbD1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tcclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2F1dGggJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtDb29raWUuZ2V0KCd1c2VybmFtZScpID8gQ29va2llLmdldCgndXNlcm5hbWUnKS5zdWJzdHJpbmcoMCwgcGFyc2V1c2VyLmxlbmd0aCkgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhY2NvdW50IG9mIGN1cnJlbnQgdXNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibWVudS1hcHBiYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTWVudX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50Q2lyY2xlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWVudS1hcHBiYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Qcm9maWxlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZyBPdXQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgIHsoIWxvYWRpbmcpID8gPExpbmVhclByb2dyZXNzIGhpZGRlbj17dHJ1ZX0gY29sb3I9XCJzZWNvbmRhcnlcIi8+IDogPExpbmVhclByb2dyZXNzIGhpZGRlbj17ZmFsc2V9IGNvbG9yPVwic2Vjb25kYXJ5XCIvPiB9XHJcbiAgICAgICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybWlrLCBGaWVsZCwgRm9ybSwgRXJyb3JNZXNzYWdlIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgdXNlU1dSLCB7IG11dGF0ZSwgdHJpZ2dlciB9IGZyb20gJ3N3cic7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBFZGl0VGFzayBmcm9tICcuLi9jb21wb25lbnRzL2VkaXR0YXNrJ1xyXG5pbXBvcnQgSGVhZFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvdGFibGVoZWFkJ1xyXG5cclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FZGl0JztcclxuXHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XHJcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHQnO1xyXG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xyXG5cclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29tbW9uL2NvbmZpZydcclxuXHJcbmNvbnN0IGZldGNoVVJMID0gYCR7Y29uZmlnLmFwaUdldFRhc2tVcmx9YDtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIHBhZGRpbmc6ICcycHggNHB4JyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgdGFibGU6IHtcclxuICAgICAgICBtaW5XaWR0aDogNjUwLFxyXG4gICAgfSxcclxuICAgIGNhcHRpb246IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICB9LFxyXG4gICAgaW5wdXQ6IHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgZmxleDogMSxcclxuICAgIH0sXHJcbiAgICBidXR0b246IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbkFjdGlvbjoge1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2R5VGFibGUocHJvcHMpIHtcclxuICAgIGNvbnN0IHtkYXRhLCBkYXRhU2VydmVyLCBkYXRhRGlhbG9nLCBkYXRhVHlwZSwgZGF0YVN0YXR1cywgZGF0YUFzc2lnbmVlLCBvcGVuRGlhbG9nLCBoYW5kbGVDbG9zZURpYWxvZywgaGFuZGxlT3BlbkRpYWxvZywgc2V0TG9hZGluZywgc2V0T3BlblNuYWNrQmFyLCBzZXRUeXBlU25hY2sgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAge2RhdGEgJiYgQXJyYXkuaXNBcnJheShkYXRhKSAmJiBkYXRhLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyb3cuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cm93LnRhc2tfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+e3Jvdy50YXNrX3R5cGV9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPnttb21lbnQocm93LnN0YXJ0X2RhdGUpLmZvcm1hdChcIllZWVktTU0tRERcIil9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPnttb21lbnQocm93LmVuZF9kYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj57cm93LnN0YXR1c308L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+e3Jvdy5hc3NpZ25lZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW5EaWFsb2d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZURpYWxvZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImFsZXJ0LWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYWxlcnQtZGlhbG9nLWRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRUYXNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNlcnZlcj17ZGF0YVNlcnZlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhRGlhbG9nPXtkYXRhRGlhbG9nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlPXtkYXRhVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU3RhdHVzPXtkYXRhU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFBc3NpZ25lZT17ZGF0YUFzc2lnbmVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU9wZW5EaWFsb2c9e2hhbmRsZU9wZW5EaWFsb2d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2VEaWFsb2c9e2hhbmRsZUNsb3NlRGlhbG9nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkFjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEljb249ezxFZGl0SWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5EaWFsb2cocm93KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkFjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEljb249ezxEZWxldGVJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVVybCA9IGZldGNoVVJMICsgXCIvXCIgKyByb3cuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZmV0Y2hVUkw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRlKHVybCwgZGF0YS5maWx0ZXIoYyA9PiBjLmlkICE9PSByb3cuaWQpLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5kZWxldGUoZGVsZXRlVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcGVuU25hY2tCYXIodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VHlwZVNuYWNrKCdEZWxldGVkIFN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXIodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3BlblNuYWNrQmFyKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRUYWJsZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5UYXNrJm5ic3A7bmFtZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPlR5cGU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5EYXRlJm5ic3A7c3RhcnQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5EYXRlJm5ic3A7ZW5kPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+U3RhdHVzPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+QXNzaWduZWU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj5BY3Rpb248L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5cclxuLy9Db21wb25lbnRcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcclxuaW1wb3J0IEFkZFRhc2sgZnJvbSAnLi4vY29tcG9uZW50cy9hZGR0YXNrJ1xyXG5pbXBvcnQgRWRpdFRhc2sgZnJvbSAnLi4vY29tcG9uZW50cy9lZGl0dGFzaydcclxuaW1wb3J0IEhlYWRUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL3RhYmxlaGVhZCdcclxuaW1wb3J0IEJvZHlUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL3RhYmxlYm9keSdcclxuXHJcbi8vVGFibGVcclxuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuXHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZpZWxkLCBGb3JtLCBFcnJvck1lc3NhZ2UgfSBmcm9tIFwiZm9ybWlrXCI7IFxyXG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EZWxldGUnO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0VkaXQnO1xyXG5pbXBvcnQgTW9yZVZlcnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb3JlVmVydCc7XHJcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHVzZVNXUiwgeyBtdXRhdGUsIHRyaWdnZXIgfSBmcm9tICdzd3InO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb21tb24vY29uZmlnJ1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBwYWRkaW5nOiAnMnB4IDRweCcsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIHRhYmxlOiB7XHJcbiAgICAgICAgbWluV2lkdGg6IDY1MCxcclxuICAgIH0sXHJcbiAgICBjYXB0aW9uOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgfSxcclxuICAgIGlucHV0OiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICAgIGZsZXg6IDEsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgICBidXR0b25BY3Rpb246IHtcclxuICAgICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgSVRFTV9IRUlHSFQgPSA0ODtcclxuXHJcbmNvbnN0IGZldGNoVVJMID0gYCR7Y29uZmlnLmFwaUdldFRhc2tVcmx9YDtcclxuY29uc3QgZmV0Y2hUeXBlID0gYCR7Y29uZmlnLmFwaUdldFR5cGVVcmx9YDtcclxuY29uc3QgZmV0Y2hTdGF0dXMgPSBgJHtjb25maWcuYXBpR2V0U3RhdHVzVXJsfWA7XHJcbmNvbnN0IGZldGNoQXNzaWduZWUgPSBgJHtjb25maWcuYXBpR2V0QXNzaWduZWVVcmx9YDtcclxuXHJcbi8vY29uc3QgZmV0Y2hVUkwgPSBcImh0dHBzOi8vbXktanNvbi1zZXJ2ZXIudHlwaWNvZGUuY29tL3BxY3Vvbmc3MzcvanNvbmZha2VzZXJ2ZXIvdGFza1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZXBhZ2UocHJvcHMpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBkYXRhU2VydmVyLCBkYXRhVHlwZSwgZGF0YVN0YXR1cywgZGF0YUFzc2lnbmVlIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKGZldGNoVVJMLCB7IGluaXRpYWxEYXRhOiBkYXRhU2VydmVyIH0pO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIGNvbnN0IFt0YXNrTGlzdCwgc2V0VGFza0xpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2RhdGFEaWFsb2csIHNldERhdGFEaWFsb2ddID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW29uc3VibWl0LCBzZXRzdWJtaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtvcGVuRGlhbG9nLCBzZXRPcGVuRGlhbG9nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtvcGVuU25hY2tCYXIsIHNldE9wZW5TbmFja0Jhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdHlwZVNuYWNrLCBzZXRUeXBlU25hY2tdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT3BlbkRpYWxvZyA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGVPcGVuRGlhbG9nIC0+IGRhdGFcIiwgZGF0YSlcclxuICAgICAgICBzZXRPcGVuRGlhbG9nKHRydWUpO1xyXG4gICAgICAgIHNldERhdGFEaWFsb2coZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VEaWFsb2cgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbkRpYWxvZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyID5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgbG9hZGluZz17bG9hZGluZ30gLz5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwic2ltcGxlIHRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZFRhc2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU2VydmVyPXtkYXRhU2VydmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlPXtkYXRhVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU3RhdHVzPXtkYXRhU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFBc3NpZ25lZT17ZGF0YUFzc2lnbmVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmc9e3NldExvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3BlblNuYWNrQmFyPXtzZXRPcGVuU25hY2tCYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VHlwZVNuYWNrPXtzZXRUeXBlU25hY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY2FwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRUYWJsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9keVRhYmxlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU2VydmVyPXtkYXRhU2VydmVyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFEaWFsb2c9e2RhdGFEaWFsb2d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZT17ZGF0YVR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU3RhdHVzPXtkYXRhU3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUFzc2lnbmVlPXtkYXRhQXNzaWduZWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuRGlhbG9nPXtvcGVuRGlhbG9nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2VEaWFsb2c9e2hhbmRsZUNsb3NlRGlhbG9nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlT3BlbkRpYWxvZz17aGFuZGxlT3BlbkRpYWxvZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmc9e3NldExvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcGVuU25hY2tCYXI9e3NldE9wZW5TbmFja0Jhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFR5cGVTbmFjaz17c2V0VHlwZVNuYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEZvb3RlciBvcGVuc25hY2s9e29wZW5TbmFja0Jhcn0gdHlwZXNuYWNrPXt0eXBlU25hY2t9IC8+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5cclxuaG9tZXBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtjb25maWcuYXBpR2V0VGFza1VybH1gKVxyXG4gICAgY29uc3QgcmVzMSA9IGF3YWl0IGF4aW9zLmdldChgJHtjb25maWcuYXBpR2V0VHlwZVVybH1gKVxyXG4gICAgY29uc3QgcmVzMiA9IGF3YWl0IGF4aW9zLmdldChgJHtjb25maWcuYXBpR2V0U3RhdHVzVXJsfWApXHJcbiAgICBjb25zdCByZXMzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2NvbmZpZy5hcGlHZXRBc3NpZ25lZVVybH1gKVxyXG4gICAgcmV0dXJuIHsgZGF0YVNlcnZlcjogcmVzLmRhdGEsIGRhdGFUeXBlOiByZXMxLmRhdGEsIGRhdGFTdGF0dXM6IHJlczIuZGF0YSwgZGF0YUFzc2lnbmVlOiByZXMzLmRhdGEgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50VGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==