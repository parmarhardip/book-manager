/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/BlockSettings.js":
/*!*****************************************!*\
  !*** ./src/components/BlockSettings.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_detail_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/detail.context */ "./src/context/detail.context.js");
/* harmony import */ var _context_settings_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/settings.context */ "./src/context/settings.context.js");






const BlockSettings = () => {
  const {
    settings,
    updateSettings
  } = (0,_context_settings_context__WEBPACK_IMPORTED_MODULE_5__.useSettings)();
  const details = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_detail_context__WEBPACK_IMPORTED_MODULE_4__.detailContext);
  const {
    totalPages
  } = details;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'book-manager'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Search', 'book-manager'),
    value: settings.search,
    onChange: value => updateSettings({
      settings: {
        ...settings,
        search: value
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Order', 'book-manager'),
    options: [{
      value: 'desc',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Descending', 'book-manager')
    }, {
      value: 'asc',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Ascending', 'book-manager')
    }],
    onChange: value => updateSettings({
      settings: {
        ...settings,
        order: value
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Order By', 'book-manager'),
    options: [{
      value: 'date',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Date', 'book-manager')
    }, {
      value: 'id',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('ID', 'book-manager')
    }, {
      value: 'title',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title', 'book-manager')
    }, {
      value: 'slug',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slug', 'book-manager')
    }, {
      value: 'modified',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Last Modified', 'book-manager')
    }],
    onChange: value => updateSettings({
      settings: {
        ...settings,
        orderBy: value
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Book per page', 'book-manager'),
    type: "number",
    value: settings.perPage,
    onChange: value => updateSettings({
      settings: {
        ...settings,
        perPage: value
      }
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Current Page', 'book-manager'),
    value: settings.currentPage,
    options: Array.from({
      length: totalPages
    }, (v, i) => ({
      value: i + 1,
      label: i + 1
    })),
    onChange: value => updateSettings({
      settings: {
        ...settings,
        currentPage: value
      }
    })
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockSettings);

/***/ }),

/***/ "./src/components/BlockStyles.js":
/*!***************************************!*\
  !*** ./src/components/BlockStyles.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_styles_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/styles.context */ "./src/context/styles.context.js");




const BlockStyles = () => {
  const {
    styles,
    updateStyles
  } = (0,_context_styles_context__WEBPACK_IMPORTED_MODULE_3__.useStyles)();
  const {
    layout
  } = styles;
  const handleLayoutChange = newLayout => {
    updateStyles({
      styles: {
        layout: newLayout ? 'grid' : 'list'
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    icon: "list-view",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('List Layout', 'book-manager'),
    onClick: () => handleLayoutChange(false),
    isPressed: layout === 'list'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
    icon: "grid-view",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Grid Layout', 'book-manager'),
    onClick: () => handleLayoutChange(true),
    isPressed: layout === 'grid'
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockStyles);

/***/ }),

/***/ "./src/components/Item.js":
/*!********************************!*\
  !*** ./src/components/Item.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Item = props => {
  const {
    item
  } = props;
  const title = item.title.rendered;
  const featuredImg = item.featured_image ? item.featured_image : 'https://via.placeholder.com/150';
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "item is-collapsed"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "item-container "
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "item-cover"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "avatar"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: featuredImg
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "item-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "subhead-1 activator",
    href: "javascript:void(0);"
  }, title))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);

/***/ }),

/***/ "./src/components/Items.js":
/*!*********************************!*\
  !*** ./src/components/Items.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_detail_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/detail.context */ "./src/context/detail.context.js");
/* harmony import */ var _context_styles_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/styles.context */ "./src/context/styles.context.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Item */ "./src/components/Item.js");







const Items = () => {
  const details = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_detail_context__WEBPACK_IMPORTED_MODULE_4__.detailContext);
  console.log(details);
  const {
    items,
    isLoading,
    totalItems
  } = details;
  if (isLoading) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "sample-block-item-block-loading"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Loading...', 'book-manager'));
  }
  const hasItems = items && items.length > 0;
  if (!hasItems) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "sample-block-item-block-loading"
    }, totalItems > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, null) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No item found.', 'book-manager'));
  }
  const contextStyle = (0,_context_styles_context__WEBPACK_IMPORTED_MODULE_5__.getStyles)();
  const {
    layout
  } = contextStyle;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gridlist-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `gridlist ${layout === 'grid' ? 'gridview' : 'listview'}`
  }, items.map((item, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Item__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      item: item
    });
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Items);

/***/ }),

/***/ "./src/context/detail.context.js":
/*!***************************************!*\
  !*** ./src/context/detail.context.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailProvider: () => (/* binding */ DetailProvider),
/* harmony export */   detailContext: () => (/* binding */ detailContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _settings_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.context */ "./src/context/settings.context.js");




const detailContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)({
  isLoading: true,
  items: [],
  totalPages: 1,
  totalItems: 0,
  setDetails: () => {}
});
const DetailProvider = ({
  children,
  setAttributes,
  attributes
}) => {
  const settings = (0,_settings_context__WEBPACK_IMPORTED_MODULE_3__.getSettings)();
  const [details, updateDetails] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    isLoading: true,
    items: [],
    totalPages: 1,
    totalItems: 0,
    setDetails: value => {
      updateDetails(prevState => {
        return {
          ...prevState,
          ...value
        };
      });
    }
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const queryParams = {
      per_page: settings.perPage,
      page: settings.currentPage,
      orderby: settings.orderBy,
      order: settings.order
    };
    if ('' !== settings.type) {
      queryParams.type = settings.type;
    }
    if ('' !== settings.search) {
      queryParams.search = settings.search;
    }
    console.log(queryParams);
    console.log(settings);
    const url = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.addQueryArgs)('/wp-json/wp/v2/book', queryParams);
    fetch(url, {
      headers: {
        'X-WP-Nonce': bookManager.nonce
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.headers.get('X-WP-TotalPages')) {
        updateDetails(prevState => ({
          ...prevState,
          totalPages: parseInt(response.headers.get('X-WP-TotalPages'))
        }));
      }
      if (response.headers.get('X-WP-Total')) {
        updateDetails(prevState => ({
          ...prevState,
          totalItems: parseInt(response.headers.get('X-WP-Total'))
        }));
      }
      return response.json();
    }).then(data => {
      updateDetails(prevState => {
        return {
          ...prevState,
          items: data,
          isLoading: false
        };
      });

      // Update the block's attributes with fetched data
    }).catch(error => {
      console.error(error);
      updateDetails(prevState => {
        return {
          ...prevState,
          items: [],
          isLoading: false
        };
      });

      // Update the block's attributes with fetched data
      setAttributes({
        ...attributes,
        items: []
      });
    });
  }, [settings]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(detailContext.Provider, {
    value: details
  }, children);
};

/***/ }),

/***/ "./src/context/settings.context.js":
/*!*****************************************!*\
  !*** ./src/context/settings.context.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsProvider: () => (/* binding */ SettingsProvider),
/* harmony export */   getSettings: () => (/* binding */ getSettings),
/* harmony export */   useSettings: () => (/* binding */ useSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const SettingsContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useSettings = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(SettingsContext);
const getSettings = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(SettingsContext).getSettings();
const SettingsProvider = ({
  children,
  initialSettings,
  setAttributes
}) => {
  const [settings, setSettings] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(initialSettings);
  const updateSettings = newSettings => {
    setSettings(prevSettings => ({
      ...prevSettings,
      ...newSettings.settings
    }));
    setAttributes({
      settings: {
        ...settings,
        ...newSettings.settings
      }
    });
  };
  const getSettings = () => {
    return settings;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SettingsContext.Provider, {
    value: {
      settings,
      updateSettings,
      getSettings
    }
  }, children);
};

/***/ }),

/***/ "./src/context/styles.context.js":
/*!***************************************!*\
  !*** ./src/context/styles.context.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StylesProvider: () => (/* binding */ StylesProvider),
/* harmony export */   getStyles: () => (/* binding */ getStyles),
/* harmony export */   useStyles: () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const StylesContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useStyles = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(StylesContext);
const getStyles = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useContext)(StylesContext).getStyles();
const StylesProvider = ({
  children,
  initialStyles,
  setAttributes
}) => {
  const [styles, setStyles] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(initialStyles);
  const updateStyles = newStyles => {
    setStyles(prevStyles => ({
      ...prevStyles,
      ...newStyles.styles
    }));
    setAttributes({
      styles: {
        ...styles,
        ...newStyles.styles
      }
    });
  };
  const getStyles = () => {
    return styles;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StylesContext.Provider, {
    value: {
      styles,
      updateStyles,
      getStyles
    }
  }, children);
};

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _context_settings_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context/settings.context */ "./src/context/settings.context.js");
/* harmony import */ var _context_styles_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context/styles.context */ "./src/context/styles.context.js");
/* harmony import */ var _context_detail_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context/detail.context */ "./src/context/detail.context.js");
/* harmony import */ var _components_BlockSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/BlockSettings */ "./src/components/BlockSettings.js");
/* harmony import */ var _components_BlockStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/BlockStyles */ "./src/components/BlockStyles.js");
/* harmony import */ var _components_Items__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Items */ "./src/components/Items.js");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */








/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    layout
  } = attributes.styles;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'sample-block-groups-blocks ' + (layout === 'grid' ? 'sample-block-groups-blocks--grid' : 'sample-block-groups-blocks--list')
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_settings_context__WEBPACK_IMPORTED_MODULE_4__.SettingsProvider, {
    initialSettings: attributes.settings,
    setAttributes: setAttributes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_styles_context__WEBPACK_IMPORTED_MODULE_5__.StylesProvider, {
    initialStyles: attributes.styles,
    setAttributes: setAttributes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context_detail_context__WEBPACK_IMPORTED_MODULE_6__.DetailProvider, {
    setAttributes: setAttributes,
    attributes: attributes
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockSettings__WEBPACK_IMPORTED_MODULE_7__["default"], null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockStyles__WEBPACK_IMPORTED_MODULE_8__["default"], null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Items__WEBPACK_IMPORTED_MODULE_9__["default"], null)))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

module.exports = window["wp"]["url"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"book-manager/book","version":"0.1.0","title":"Book Manager","category":"widgets","icon":"book","description":"A block to manage books","example":{},"attributes":{"styles":{"type":"object","default":{"layout":"grid"}},"settings":{"type":"object","default":{"search":"","perPage":10,"currentPage":1,"order":"desc","orderBy":"date"}}},"supports":{"html":false},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbook_manager"] = self["webpackChunkbook_manager"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map