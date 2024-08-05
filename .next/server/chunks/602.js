"use strict";
exports.id = 602;
exports.ids = [602];
exports.modules = {

/***/ 5602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_TeamSkills)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-circular-progressbar"
var external_react_circular_progressbar_ = __webpack_require__(1400);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__(609);
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);
// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__(6882);
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);
;// CONCATENATED MODULE: ./src/components/Counter.js



const Counter = ({ end , decimals , extraClass  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_countup_default()), {
        end: end ? end : 100,
        duration: 3,
        decimals: decimals ? decimals : 0,
        children: ({ countUpRef , start  })=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_visibility_sensor_default()), {
                onChange: start,
                delayedCall: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: `count-text ${extraClass}`,
                    "data-from": "0",
                    "data-to": end,
                    ref: countUpRef,
                    children: "count"
                })
            })
    });
};
/* harmony default export */ const components_Counter = (Counter);

;// CONCATENATED MODULE: ./src/components/TeamSkills.js



const TeamSkills = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row pt-35 justify-content-between",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-xl-3 col-sm-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "circle-progress-item",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "progress-content one",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    width: "120px",
                                    margin: "0 auto"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_circular_progressbar_.CircularProgressbar, {
                                    width: 120,
                                    value: 89,
                                    strokeWidth: 20,
                                    styles: (0,external_react_circular_progressbar_.buildStyles)({
                                        pathColor: "#55E6A5",
                                        trailColor: "#fff"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                children: "Web Design"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Counter, {
                                end: 89,
                                extraClass: "percent"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-xl-3 col-sm-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "circle-progress-item",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "progress-content two",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    width: "120px",
                                    margin: "0 auto"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_circular_progressbar_.CircularProgressbar, {
                                    width: 120,
                                    value: 93,
                                    strokeWidth: 20,
                                    styles: (0,external_react_circular_progressbar_.buildStyles)({
                                        pathColor: "#55E6A5",
                                        trailColor: "#fff"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                children: "Development"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Counter, {
                                end: 93,
                                extraClass: "percent"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-xl-3 col-sm-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "circle-progress-item",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "progress-content three",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    width: "120px",
                                    margin: "0 auto"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_circular_progressbar_.CircularProgressbar, {
                                    width: 120,
                                    value: 75,
                                    strokeWidth: 20,
                                    styles: (0,external_react_circular_progressbar_.buildStyles)({
                                        pathColor: "#55E6A5",
                                        trailColor: "#fff"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                children: "Marketing"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Counter, {
                                end: 75,
                                extraClass: "percent"
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_TeamSkills = (TeamSkills);


/***/ })

};
;