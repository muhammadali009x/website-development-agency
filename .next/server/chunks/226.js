"use strict";
exports.id = 226;
exports.ids = [226];
exports.modules = {

/***/ 2226:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ sliderProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_1__]);
swiper__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_1__.Mousewheel,
    swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_1__.EffectFade,
    swiper__WEBPACK_IMPORTED_MODULE_1__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_1__.Grid,
    swiper__WEBPACK_IMPORTED_MODULE_1__.EffectCreative,
    swiper__WEBPACK_IMPORTED_MODULE_1__.Virtual
]);
function Arrow({ className , extraClass , onClick , icon  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `${className}  ${extraClass}`,
        onClick: onClick,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            className: icon
        })
    });
}
const sliderProps = {
    mainSlider: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 400,
        arrows: false,
        dots: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 5000
    },
    galleryFiveActive: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 15,
        speed: 500,
        rewind: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: ".work-gallery-dots",
            clickable: true
        },
        navigation: {
            nextEl: ".work-gallery-next",
            prevEl: ".work-gallery-prev"
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 15
            }
        }
    },
    testimonialsThreeActive: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        speed: 400,
        dots: true,
        arrows: false,
        focusOnSelect: true,
        autoplay: false,
        autoplaySpeed: 5000,
        appendDots: (dots)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    children: dots.map((item, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: item.props.children
                        }, index);
                    })
                })
            });
        },
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    },
    testimonialsTwoActive: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 400,
        arrows: true,
        dots: true,
        focusOnSelect: true,
        autoplay: false,
        autoplaySpeed: 5000,
        prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
            extraClass: "prev-arrow",
            icon: "fal fa-chevron-left"
        }),
        nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
            extraClass: "next-arrow",
            icon: "fal fa-chevron-right"
        }),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    },
    testimonialsThreeActiveSwiper: {
        loop: true,
        spaceBetween: 30,
        speed: 500,
        rewind: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: ".testimonial-three-dots .slick-dots",
            clickable: true
        },
        navigation: {
            nextEl: ".testimonial-three-next",
            prevEl: ".testimonial-three-prev"
        }
    },
    testimonialsActiveSwiper: {
        loop: true,
        spaceBetween: 30,
        speed: 500,
        rewind: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: ".testimonial-dots .slick-dots",
            clickable: true
        },
        navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev"
        }
    },
    projectSliderActiveSwiper: {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        speed: 500,
        rewind: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".project-next",
            prevEl: ".project-prev"
        },
        breakpoints: {
            1200: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    },
    workGallerySliderActiveSwiper: {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        speed: 500,
        rewind: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".work-gallery-next",
            prevEl: ".work-gallery-prev"
        },
        pagination: {
            el: ".work-gallery-dots .slick-dots",
            clickable: true
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;