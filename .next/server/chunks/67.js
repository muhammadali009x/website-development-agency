"use strict";
exports.id = 67;
exports.ids = [67];
exports.modules = {

/***/ 1067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/ImageView.js



const ImgViews = ({ close , src  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: ` popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const [img, setImg] = (0,external_react_.useState)(false);
    const [imgValue, setImgValue] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("assets/images")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: img && /*#__PURE__*/ jsx_runtime_.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const components_ImageView = (ImageView);

// EXTERNAL MODULE: external "react-player"
var external_react_player_ = __webpack_require__(8924);
var external_react_player_default = /*#__PURE__*/__webpack_require__.n(external_react_player_);
;// CONCATENATED MODULE: ./src/components/VideoPopup.js




const VideoPopup_ = ({ close , videoID  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close(),
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_player_default()), {
                                        url: videoID,
                                        playing: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const VideoPopup = ()=>{
    const [video, setVideo] = (0,external_react_.useState)(false);
    const [videoValue, setVideoValue] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("https://www.youtube.com")) {
                    a.addEventListener("click", (e)=>{
                        e.preventDefault();
                        setVideoValue(a.href);
                        setVideo(true);
                    });
                }
            });
        }, 1000);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: video && /*#__PURE__*/ jsx_runtime_.jsx(VideoPopup_, {
            close: ()=>setVideo(false),
            videoID: videoValue
        })
    });
};
/* harmony default export */ const components_VideoPopup = (VideoPopup);

;// CONCATENATED MODULE: ./src/utils.js
// animation
const animation = ()=>{
    if (false) {}
    new WOW.WOW().init();
};
// Sticky nav
const stickyNav = ()=>{
    window.addEventListener("scroll", ()=>{
        let offset = window.scrollY;
        const sticky = document.querySelectorAll(".main-header");
        for(let i = 0; i < sticky.length; i++){
            const stick = sticky[i];
            if (stick) {
                if (offset > 10) {
                    stick.classList.add("fixed-header");
                } else {
                    stick.classList.remove("fixed-header");
                }
            }
        }
    });
};
const sidebarClick = ()=>{
    const buttons = document.querySelectorAll(".menu-sidebar button");
    const backDrop = document.querySelector(".form-back-drop");
    const crossIcon = document.querySelector(".cross-icon");
    buttons.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            document.querySelector("body").classList.add("side-content-visible");
        });
    });
    backDrop.addEventListener("click", ()=>{
        document.querySelector("body").classList.remove("side-content-visible");
    });
    crossIcon.addEventListener("click", ()=>{
        document.querySelector("body").classList.remove("side-content-visible");
    });
};
const scrollTopFun = ()=>{
    let scrollUp = document.querySelector(".scroll-top"), lastScrollTop = 0;
    window.addEventListener("scroll", ()=>{
        let st = window.scrollY;
        if (st > 110) {
            scrollUp.style.display = "block";
        } else {
            scrollUp.style.display = "none";
        }
    });
};

;// CONCATENATED MODULE: ./src/layout/ScrollTop.js



const ScrollTop = ()=>{
    (0,external_react_.useEffect)(()=>{
        scrollTopFun();
    }, []);
    const scrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "scroll-top scroll-to-target",
        onClick: ()=>scrollTop(),
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "fas fa-angle-double-up"
        })
    });
};
/* harmony default export */ const layout_ScrollTop = (ScrollTop);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/layout/footer/DefaultFooter.js


const DefaultFooter = ({ dark  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "main-footer rel z-1",
        style: {
            backgroundImage: "url(assets/images/footer/footer-bg-shape.png)"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container container-1290",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-top pt-80 pb-60",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-logo mb-20 wow fadeInRight delay-0-2s animated",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        legacyBehavior: true,
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: dark ? "assets/images/logos/footer-logo-white.png" : "assets/images/logos/footer-logo.png",
                                                alt: "Logo"
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-8 text-lg-end",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "social-style-four mb-20 wow fadeInLeft delay-0-2s animated",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-f"
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Facebook"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Twitter"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-dribbble"
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Dribbble"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-behance"
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Behance"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-8",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-left-content pt-80",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "lets-work mb-50 wow fadeInUp delay-0-2s animated",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/footer/lets-work.png",
                                                alt: "Let's Work Man"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Let’s Work Together"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-contact-info wow fadeInUp delay-0-3s animated",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "theme-btn style-three",
                                                href: "mailto:support@gmail.com",
                                                children: [
                                                    "support@gmail.com ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "far fa-arrow-right"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "theme-btn style-three phone-number",
                                                href: "callto:+000(123)45688",
                                                children: [
                                                    "+000 (123) 456 88 ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "far fa-arrow-right"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-right-content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "footer-title wow fadeInUp delay-0-2s animated",
                                        children: "Quick Links"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-widget widget_nav_menu",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-style-two wow fadeInUp delay-0-3s animated",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            legacyBehavior: true,
                                                            href: "about",
                                                            children: "Home"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            legacyBehavior: true,
                                                            href: "services",
                                                            children: "Popular Services"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            legacyBehavior: true,
                                                            href: "team",
                                                            children: "Team Member"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            legacyBehavior: true,
                                                            href: "blog",
                                                            children: "Latest News"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            legacyBehavior: true,
                                                            href: "contact",
                                                            children: "Contact Us?"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-style-two wow fadeInUp delay-0-4s animated",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            legacyBehavior: true,
                                                            href: "index",
                                                            children: "UI/UX Design"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            legacyBehavior: true,
                                                            href: "index2",
                                                            children: "Development"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            legacyBehavior: true,
                                                            href: "index3",
                                                            children: "Marketing"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            legacyBehavior: true,
                                                            href: "contact",
                                                            children: "Need a Career"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            legacyBehavior: true,
                                                            href: "faqs",
                                                            children: "Faqs ?"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-bottom",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-8 col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-bottom-menu pt-40 pb-35 rpb-0 wow fadeInRight delay-0-2s animated",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "/about",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "About"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "services",
                                                    children: "Services"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "/faqs",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "FAQs"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "services",
                                                    children: "How IT Works"
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-4 col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "copyright-text text-lg-end pt-40 pb-35 rpt-10 wow fadeInLeft delay-0-2s animated",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "Copyright @2023,",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                legacyBehavior: true,
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Ygency"
                                                })
                                            }),
                                            " ",
                                            "All Rights Reserved"
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const footer_DefaultFooter = (DefaultFooter);

;// CONCATENATED MODULE: ./src/layout/footer/Footer2.js


const Footer2 = ({ dark  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "main-footer footer-two pt-100 pb-50 rpb-20 rel z-1",
        style: {
            backgroundImage: "url(assets/images/footer/footer-bg-shape.png)"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container container-1290",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row gp-100 pb-20 align-items-center justify-content-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-6 col-lg-7",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "footer-left-title mb-35 wow fadeInLeft delay-0-2s",
                            children: "Get Ready to Build Your Website"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5 col-sm-7 col-6 col-small wow fadeInRight delay-0-2s",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "footer-right-btn mb-35 text-lg-end",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                legacyBehavior: true,
                                href: "/contact",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: "explore-more text-start",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fas fa-arrow-right"
                                        }),
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "Send Us Message"
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3 col-6 col-small order-lg-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer-widget footer-text wow fadeInUp delay-0-4s",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "footer-title",
                                    children: "Get In Touch"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "55 Main Street, 2nd block Malborne, Australia"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "mailto:support@gmail.com",
                                            children: "support@gmail.com"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "callto:+000(123)45688",
                                            children: "+000 (123) 456 88"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3 order-lg-4 col-sm-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer-widget footer-links wow fadeInUp delay-0-6s",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                    className: "footer-title",
                                    children: "Links"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget widget_nav_menu",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "list-style-two",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        legacyBehavior: true,
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Home"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        legacyBehavior: true,
                                                        href: "/about",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "About"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        legacyBehavior: true,
                                                        href: "/services",
                                                        children: "Services"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        legacyBehavior: true,
                                                        href: "/contact",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Career ?"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        legacyBehavior: true,
                                                        href: "/faqs",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "FAQs"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "list-style-two",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        legacyBehavior: true,
                                                        href: "/about",
                                                        children: "Setting"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        legacyBehavior: true,
                                                        href: "/about",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Privacy Policy"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        legacyBehavior: true,
                                                        href: "/contact",
                                                        children: "Contact Us"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-5 me-auto order-lg-2 align-self-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "footer-widget newsletter-widget wow fadeInUp delay-0-2s",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    className: "footer-newsletter",
                                    action: "#",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "email",
                                            placeholder: "Email Address",
                                            required: true
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fas fa-arrow-right"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Copyright @2023,",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            legacyBehavior: true,
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: "Ygency"
                                            })
                                        }),
                                        " ",
                                        "All Rights Reserved"
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const footer_Footer2 = (Footer2);

;// CONCATENATED MODULE: ./src/layout/footer/Footer3.js


const Footer3 = ({ dark  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "main-footer footer-three rel bgs-cover z-1",
        style: {
            backgroundImage: "url(assets/images/footer/footer-bg-shape-two.png)"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container container-1290",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer-top-two pt-95 pb-55",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-logo mb-20 wow fadeInRight delay-0-2s",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        legacyBehavior: true,
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: dark ? "assets/images/logos/footer-logo-white.png" : "assets/images/logos/footer-logo.png",
                                                alt: "Logo"
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-8 text-lg-end",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "social-style-four mb-20 wow fadeInLeft delay-0-2s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: "Facebook"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: "Twitter"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: "Dribbble"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: "Behance"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row justify-content-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3 col-7 col-small",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget footer-text wow fadeInUp delay-0-2s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "footer-title",
                                        children: "Get In Touch"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "text",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "55 Main Street, 2nd block Malborne, Australia"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "mailto:support@gmail.com",
                                                children: "support@gmail.com"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "callto:+000(123)45688",
                                                children: "+000 (123) 456 88"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3 col-5 col-small",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget footer-links wow fadeInUp delay-0-4s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "footer-title",
                                        children: "Menu"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "footer-widget widget_nav_menu",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "list-style-two",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        legacyBehavior: true,
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Home"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        legacyBehavior: true,
                                                        href: "/about",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "About"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        legacyBehavior: true,
                                                        href: "/services",
                                                        children: "Services"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        legacyBehavior: true,
                                                        href: "/contact",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Career ?"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        legacyBehavior: true,
                                                        href: "/faqs",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "FAQs"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-5",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget newsletter-widget wow fadeInUp delay-0-6s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "footer-title",
                                        children: "Newsletter"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        className: "footer-newsletter",
                                        action: "#",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "email",
                                                placeholder: "Email Address",
                                                required: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "submit",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-arrow-right"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "policy",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                id: "privacy-policy",
                                                type: "checkbox"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                htmlFor: "privacy-policy",
                                                children: [
                                                    "I agree to the",
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        legacyBehavior: true,
                                                        href: "/about",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: "Privacy Policy"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "copyright-area text-center pt-10 pb-80 wow fadeInUp delay-0-2s",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Copyright @2023,",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                legacyBehavior: true,
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Ygency"
                                })
                            }),
                            " ",
                            "All Rights Reserved"
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const footer_Footer3 = (Footer3);

;// CONCATENATED MODULE: ./src/layout/footer/Footer4.js


const Footer4 = ({ dark  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "main-footer footer-four pt-100 rel bgs-cover z-1",
        style: {
            backgroundImage: "url(assets/images/footer/footer-bg-shape-three.png)"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container container-1290 pb-40",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row justify-content-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-5",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget footer-about wow fadeInUp delay-0-2s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-title mb-30",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            children: "Awards Winning Web Developer"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "social-style-four",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Home"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "/about",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "About"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "/services",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Services"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: "Career ?"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "/faqs",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "FAQs"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xl-2 col-lg-3 col-sm-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget footer-links wow fadeInUp delay-0-4s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "footer-title",
                                        children: "Follow Me"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "footer-widget widget_nav_menu",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "list-style-two",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Facebook"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Twitter"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Instagram"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "LinkedIn"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-sm-8",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget newsletter-widget wow fadeInUp delay-0-6s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "footer-title",
                                        children: "Newsletter"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        className: "footer-newsletter",
                                        action: "#",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "email",
                                                placeholder: "Email Address",
                                                required: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "submit",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-arrow-right"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "footer-logo pt-15",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            legacyBehavior: true,
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: dark ? "assets/images/logos/footer-logo-white.png" : "assets/images/logos/footer-logo.png",
                                                    alt: "Logo"
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "copyright-area text-center pt-25 pb-15 wow fadeInUp delay-0-2s",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Copyright @2023,",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                legacyBehavior: true,
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Ygency"
                                })
                            }),
                            " ",
                            "All Rights Reserved"
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const footer_Footer4 = (Footer4);

;// CONCATENATED MODULE: ./src/layout/footer/Footer5.js


const Footer5 = ({ dark  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "main-footer footer-five pt-100",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container container-1290 pb-40",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row justify-content-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget footer-about wow fadeInUp delay-0-2s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "footer-logo mb-25",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: dark ? "assets/images/logos/footer-logo-white.png" : "assets/images/logos/footer-logo.png",
                                                alt: "Logo"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium totam reme"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xl-3 col-lg-4 col-md-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footer-widget footer-info wow fadeInUp delay-0-4s",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "list-style-two",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-envelope"
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "mailto:support@gmail.com",
                                                    children: "support@gmail.com"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-phone"
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "callto:+000(123)45688",
                                                    children: "+000 (123) 456 88"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-clock"
                                                }),
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Monday - Friday, 10am - 5pm"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget newsletter-widget wow fadeInUp delay-0-6s",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        className: "footer-newsletter",
                                        action: "#",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "email",
                                                placeholder: "Email Address",
                                                required: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "submit",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-arrow-right"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "policy",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                id: "privacy-policy",
                                                type: "checkbox"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                                htmlFor: "privacy-policy",
                                                children: [
                                                    "I agree to the ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/about",
                                                        children: "Privacy Policy"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "copyright-area pt-25 pb-15",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-copyright-text wow fadeInUp delay-0-2s",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "Copyright @2023, ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: "Ygency"
                                            }),
                                            " All Rights Reserved"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-bottom-menu text-lg-end wow fadeInRight delay-0-2s",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: "Home"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/about",
                                                    children: "About"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "services",
                                                    children: "Services"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/about",
                                                    children: "Career ?"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "faqs",
                                                    children: "Faqs"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const footer_Footer5 = (Footer5);

;// CONCATENATED MODULE: ./src/layout/footer/Footer6.js


const Footer6 = ({ dark  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "main-footer footer-six pt-80",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row gap-80 justify-content-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xl-3 col-lg-4 col-md-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget newsletter-widget wow fadeInUp delay-0-2s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "footer-logo mb-20",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: dark ? "assets/images/logos/footer-logo-white.png" : "assets/images/logos/footer-logo.png",
                                                alt: "Logo"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text mb-25",
                                        children: "Ut enim ad minima veniam nostrum exercitationem ullam corporise"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                        className: "footer-newsletter",
                                        action: "#",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "email",
                                                placeholder: "Email Address",
                                                required: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "submit",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-long-arrow-right"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xl-2 col-lg-2 col-md-3 col-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget footer-links wow fadeInUp delay-0-3s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "footer-title",
                                        children: "Products"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "footer-widget widget_nav_menu",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "list-style-two",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Spectra"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "MemberPress"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "WPforms"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "AIOSEO"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Wordfence"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xl-2 col-lg-2 col-md-3 col-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget footer-links wow fadeInUp delay-0-4s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "footer-title",
                                        children: "Resources"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "footer-widget widget_nav_menu",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "list-style-two",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "About Us"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "My account"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Themes"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Contact Us"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Checkout"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xl-2 col-lg-3 col-sm-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget footer-links wow fadeInUp delay-0-5s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "footer-title",
                                        children: "Supports"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "footer-widget widget_nav_menu",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "list-style-two",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Terms of Services"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Support Ticket"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Refund Policy"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Privacy Policy"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Video Tutorials"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-xl-3 col-lg-4 col-sm-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget footer-info wow fadeInUp delay-0-6s",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "footer-title",
                                        children: "Contact"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "list-style-two",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "far fa-map-marker-alt"
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Baird House, 15-17 St Cross StLondon EC1N 8UW"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "far fa-envelope"
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "mailto:support@gmail.com",
                                                        children: "support@gmail.com"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "far fa-phone"
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "callto:+000(123)45688",
                                                        children: "+000 (123) 456 88"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "copyright-area rel mt-25 pt-35 pb-25",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "footer-copyright-text wow fadeInUp delay-0-2s",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "Copyright @2023, ",
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: "Ygency"
                                                }),
                                                " All Rights Reserved"
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "footer-bottom-social text-lg-end wow fadeInRight delay-0-2s",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "social-style-two",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-facebook-f"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-twitter"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-instagram"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-pinterest-p"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "scroll-top scroll-to-target",
                            "data-target": "html",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "far fa-chevron-double-up"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const footer_Footer6 = (Footer6);

;// CONCATENATED MODULE: ./src/layout/footer/Footer.js







const Footer = ({ footer , dark  })=>{
    switch(footer){
        case 1:
            return /*#__PURE__*/ jsx_runtime_.jsx(footer_DefaultFooter, {
                dark: dark
            });
        case 2:
            return /*#__PURE__*/ jsx_runtime_.jsx(footer_Footer2, {
                dark: dark
            });
        case 3:
            return /*#__PURE__*/ jsx_runtime_.jsx(footer_Footer3, {
                dark: dark
            });
        case 4:
            return /*#__PURE__*/ jsx_runtime_.jsx(footer_Footer4, {
                dark: dark
            });
        case 5:
            return /*#__PURE__*/ jsx_runtime_.jsx(footer_Footer5, {
                dark: dark
            });
        case 6:
            return /*#__PURE__*/ jsx_runtime_.jsx(footer_Footer6, {
                dark: dark
            });
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(footer_DefaultFooter, {
                dark: dark
            });
    }
};
/* harmony default export */ const footer_Footer = (Footer);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./src/layout/header/Menu.js



const Menu = ({ singleMenu  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: singleMenu ? /*#__PURE__*/ jsx_runtime_.jsx(SingleMenu, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(DaskTopMenu, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(MobileMenu, {})
            ]
        })
    });
};
/* harmony default export */ const header_Menu = (Menu);
const DaskTopMenu = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "navigation d-none d-lg-flex desktop-menu",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "Home"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "dropdown",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        children: "MultiPage"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "/",
                                                    children: "Web Design"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index2",
                                                    children: "Web Development"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index3",
                                                    children: "Creative Design Studio"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index4",
                                                    children: "Web Developer"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index5",
                                                    children: "Marketing Agency"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index6",
                                                    children: "Creative Agency"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "dropdown-btn",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "far fa-plus"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "dropdown",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        children: "OnePage"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index1-onepage",
                                                    children: "Web Design"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index2-onepage",
                                                    children: "Web Development"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index3-onepage",
                                                    children: "Creative Design Studio"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index4-onepage",
                                                    children: "Web Developer"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index5-onepage",
                                                    children: "Marketing Agency"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index6-onepage",
                                                    children: "Creative Agency"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "dropdown-btn",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "far fa-plus"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "far fa-plus"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    legacyBehavior: true,
                    href: "about",
                    children: "About Us"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "pages"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "faqs",
                                    children: "faqs"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "dropdown",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        children: "Products"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "shop",
                                                    children: "our Products"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "product-details",
                                                    children: "Product Details"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "dropdown-btn",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "far fa-plus"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "dropdown",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        children: "Team"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "team",
                                                    children: "Team Members"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "team-details",
                                                    children: "Team Details"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "dropdown-btn",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "far fa-plus"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "contact",
                                    children: "Contact us"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "pricing",
                                    children: "Pricing Plan"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "404",
                                    children: "404 error"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "far fa-plus"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "Services"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "services",
                                    children: "Our Services"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "service-details",
                                    children: "Service Details One"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "service-details2",
                                    children: "Service Details Two"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "far fa-plus"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "Projects"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "projects",
                                    children: "Project Grid"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "project-list",
                                    children: "Project List"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "project-details",
                                    children: "Project Details"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "far fa-plus"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "blog"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "blog",
                                    children: "blog Grid"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "blog-standard",
                                    children: "blog standard"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "blog-details",
                                    children: "blog details"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "far fa-plus"
                        })
                    })
                ]
            })
        ]
    });
};
const MobileMenu = ()=>{
    const [activeMenu, setActiveMenu] = (0,external_react_.useState)("");
    const [multiMenu, setMultiMenu] = (0,external_react_.useState)("");
    const activeMenuSet = (value)=>setActiveMenu(activeMenu === value ? "" : value), activeLi = (value)=>value === activeMenu ? {
            display: "block"
        } : {
            display: "none"
        };
    const multiMenuSet = (value)=>setMultiMenu(multiMenu === value ? "" : value), multiMenuActiveLi = (value)=>value === multiMenu ? {
            display: "block"
        } : {
            display: "none"
        };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "navigation d-block d-lg-none mobile-menu",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "Home"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        style: activeLi("home"),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "dropdown",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        children: "MultiPage"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        style: multiMenuActiveLi("multiPage"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "/",
                                                    children: "Web Design"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index2",
                                                    children: "Web Development"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index3",
                                                    children: "Creative Design Studio"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index4",
                                                    children: "Web Developer"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index5",
                                                    children: "Marketing Agency"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index6",
                                                    children: "Creative Agency"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "dropdown-btn",
                                        onClick: ()=>multiMenuSet("multiPage"),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "far fa-plus"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "dropdown",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        children: "OnePage"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        style: multiMenuActiveLi("OnePage"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index1-onepage",
                                                    children: "Web Design"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index2-onepage",
                                                    children: "Web Development"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index3-onepage",
                                                    children: "Creative Design Studio"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index4-onepage",
                                                    children: "Web Developer"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index5-onepage",
                                                    children: "Marketing Agency"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "index6-onepage",
                                                    children: "Creative Agency"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "dropdown-btn",
                                        onClick: ()=>multiMenuSet("OnePage"),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "far fa-plus"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        onClick: ()=>activeMenuSet("home"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "far fa-plus"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    legacyBehavior: true,
                    href: "about",
                    children: "About Us"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "pages"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        style: activeLi("pages"),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "faqs",
                                    children: "faqs"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "dropdown",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        children: "Products"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        style: multiMenuActiveLi("Products"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "shop",
                                                    children: "our Products"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "product-details",
                                                    children: "Product Details"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "dropdown-btn",
                                        onClick: ()=>multiMenuSet("Products"),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "far fa-plus"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: "dropdown",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        children: "Team"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        style: multiMenuActiveLi("Team"),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "team",
                                                    children: "Team Members"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    legacyBehavior: true,
                                                    href: "team-details",
                                                    children: "Team Details"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "dropdown-btn",
                                        onClick: ()=>multiMenuSet("Team"),
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "far fa-plus"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "contact",
                                    children: "Contact us"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "pricing",
                                    children: "Pricing Plan"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "404",
                                    children: "404 error"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        onClick: ()=>activeMenuSet("pages"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "far fa-plus"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "Services"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        style: activeLi("Services"),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "services",
                                    children: "Our Services"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "service-details",
                                    children: "Service Details One"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "service-details2",
                                    children: "Service Details Two"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        onClick: ()=>activeMenuSet("Services"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "far fa-plus"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "Projects"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        style: activeLi("Projects"),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "projects",
                                    children: "Project Grid"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "project-list",
                                    children: "Project List"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "project-details",
                                    children: "Project Details"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        onClick: ()=>activeMenuSet("Projects"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "far fa-plus"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "blog"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        style: activeLi("blog"),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "blog",
                                    children: "blog Grid"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "blog-standard",
                                    children: "blog standard"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "blog-details",
                                    children: "blog details"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        onClick: ()=>activeMenuSet("blog"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "far fa-plus"
                        })
                    })
                ]
            })
        ]
    });
};
const SingleMenu = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "navigation onepage clearfix",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#home",
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#about",
                    children: "about"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#services",
                    children: "services"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#projects",
                    children: "project"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#pricing",
                    children: "pricing"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#news",
                    children: "news"
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/layout/header/Nav.js




const Nav = ({ singleMenu  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "main-menu navbar-expand-lg",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Accordion, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "navbar-header py-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mobile-logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                legacyBehavior: true,
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/logos/logo.png",
                                        alt: "Logo",
                                        title: "Logo"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Accordion.Toggle, {
                            as: "button",
                            className: "navbar-toggle",
                            eventKey: "navbar-collapse",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon-bar"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon-bar"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon-bar"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Accordion.Collapse, {
                    eventKey: "navbar-collapse",
                    className: "navbar-collapse clearfix",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(header_Menu, {
                        singleMenu: singleMenu
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const header_Nav = (Nav);

;// CONCATENATED MODULE: ./src/layout/header/NavSearch.js


const NavSearch = ()=>{
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "nav-search py-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "far fa-search",
                onClick: ()=>setToggle(!toggle)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                action: "#",
                onSubmit: (e)=>{
                    e.preventDefault();
                    setToggle(false);
                },
                className: toggle ? "" : "hide",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        placeholder: "Search",
                        className: "searchbox",
                        required: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        className: "searchbutton far fa-search"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const header_NavSearch = (NavSearch);

;// CONCATENATED MODULE: ./src/layout/header/DefaultHeader.js




const DefaultHeader = ({ singleMenu , dark  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "main-header menu-absolute",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "header-upper",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container container-1620 clearfix",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "header-inner rpy-10 rel d-flex align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo-outer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: dark ? "assets/images/logos/logo-white.png" : "assets/images/logos/logo.png",
                                            alt: "Logo",
                                            title: "Logo"
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "nav-outer ms-lg-auto clearfix",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(header_Nav, {
                                singleMenu: singleMenu
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(header_NavSearch, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "menu-btns",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "menu-sidebar",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/icons/toggler.svg",
                                        alt: "Toggler"
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const header_DefaultHeader = (DefaultHeader);

;// CONCATENATED MODULE: ./src/layout/header/Header2.js




const Header2 = ({ singleMenu , dark  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "main-header menu-absolute",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "header-upper",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container container-1620 clearfix",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "header-inner rpy-10 rel d-flex align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo-outer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: dark ? "assets/images/logos/logo-white.png" : "assets/images/logos/logo.png",
                                            alt: "Logo",
                                            title: "Logo"
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "nav-outer ms-lg-auto clearfix",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(header_Nav, {
                                singleMenu: singleMenu
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(header_NavSearch, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "menu-btns ms-lg-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    legacyBehavior: true,
                                    href: "/",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: "theme-btn style-two me-4",
                                        children: [
                                            "Let’s Talk ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "far fa-arrow-right"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "menu-sidebar",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "bg-transparent",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "assets/images/icons/toggler-white.svg",
                                            alt: "Toggler"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const header_Header2 = (Header2);

;// CONCATENATED MODULE: ./src/layout/header/Header5.js




const Header5 = ({ singleMenu , dark  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "main-header menu-absolute header-two",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-top bgc-primary",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container container-1620",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-7",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "top-left",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-map-marker-alt"
                                                }),
                                                " 963 main Street, Melbourne, Australia"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-clock"
                                                }),
                                                " Monday - Friday, 10am - 5pm"
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-5",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "top-right",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "lang-select",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                                name: "language",
                                                id: "language",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: "English",
                                                        children: "English"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: "Arabic",
                                                        children: "Arabic"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: "Bangla",
                                                        children: "Bangla"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                        value: "Hindi",
                                                        children: "Hindi"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "social-style-two",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-twitter"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-facebook-f"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-instagram"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fab fa-pinterest-p"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-upper",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container container-1620 clearfix",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "header-inner rpy-10 rel d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-outer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        legacyBehavior: true,
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: dark ? "assets/images/logos/logo-white.png" : "assets/images/logos/logo.png",
                                                alt: "Logo",
                                                title: "Logo"
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "nav-outer mx-lg-auto clearfix",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(header_Nav, {
                                    singleMenu: singleMenu
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(header_NavSearch, {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "menu-btns",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "far fa-shopping-basket"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "call-anytime",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fas fa-comments-alt"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Call Anytime"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "callto:985236425288",
                                                        children: "98 523 642 5288"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "menu-sidebar",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/icons/toggler-white.svg",
                                                alt: "Toggler"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const header_Header5 = (Header5);

;// CONCATENATED MODULE: ./src/layout/header/Header.js






const Header = ({ header , singleMenu , dark  })=>{
    (0,external_react_.useEffect)(()=>{
        stickyNav();
    }, []);
    switch(header){
        case 1:
            return /*#__PURE__*/ jsx_runtime_.jsx(header_DefaultHeader, {
                singleMenu: singleMenu,
                dark: dark
            });
        case 2:
            return /*#__PURE__*/ jsx_runtime_.jsx(header_Header2, {
                singleMenu: singleMenu,
                dark: dark
            });
        case 5:
            return /*#__PURE__*/ jsx_runtime_.jsx(header_Header5, {
                singleMenu: singleMenu,
                dark: dark
            });
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(header_DefaultHeader, {
                singleMenu: singleMenu,
                dark: dark
            });
    }
};
/* harmony default export */ const header_Header = (Header);

;// CONCATENATED MODULE: ./src/layout/header/SideBar.js


const SideBar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "form-back-drop"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "hidden-bar",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "inner-box text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "cross-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "fa fa-times"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "title",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "Get Appointment"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "appointment-form",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                onSubmit: (e)=>{
                                    e.preventDefault();
                                    document.querySelector("body").classList.remove("side-content-visible");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            name: "text",
                                            placeholder: "Name",
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "email",
                                            name: "email",
                                            placeholder: "Email Address",
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                            placeholder: "Message",
                                            rows: 5
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            className: "theme-btn",
                                            children: "Submit now"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "social-style-one",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-twitter"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-facebook-f"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-instagram"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: "fab fa-pinterest-p"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const header_SideBar = (SideBar);

;// CONCATENATED MODULE: ./src/layout/Layout.js









const Layout = ({ children , header , footer , singleMenu , dark  })=>{
    (0,external_react_.useEffect)(()=>{
        animation();
        sidebarClick();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_VideoPopup, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_ImageView, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "page-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header_Header, {
                        header: header,
                        singleMenu: singleMenu,
                        dark: dark
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(header_SideBar, {}),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(footer_Footer, {
                        footer: footer,
                        dark: dark
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_ScrollTop, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ })

};
;