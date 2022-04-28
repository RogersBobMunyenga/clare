/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {
  
  if (document.getElementById('sort_by') !== null) {
  document.querySelector('#sort_by').addEventListener('change', function(e) {
    var url = new URL(window.location.href);
    url.searchParams.set('sort_by', e.currentTarget.value);
    window.location.href = url.href;
  });
}

AOS.init({
  duration: 800,
  easing: 'slide'
});

(function ($) {
  "use strict";

  var isMobile = {
    Android: function Android() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function BlackBerry() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function iOS() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function Opera() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function Windows() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function any() {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
  };
  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

  var fullHeight = function fullHeight() {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });
  };

  fullHeight(); // loader

  var loader = function loader() {
    setTimeout(function () {
      if ($('#ftco-loader').length > 0) {
        $('#ftco-loader').removeClass('show');
      }
    }, 1);
  };

  loader(); // Scrollax

  $.Scrollax();

  var carousel = function carousel() {
    $('.product-slider').owlCarousel({
      autoplay: true,
      loop: true,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      dots: true,
      navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
    $('.carousel-testimony').owlCarousel({
      autoplay: true,
      loop: true,
      items: 1,
      margin: 0,
      stagePadding: 0,
      nav: false,
      navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  };

  carousel();
  $('nav .dropdown').hover(function () {
    var $this = $(this); // 	 timer;
    // clearTimeout(timer);

    $this.addClass('show');
    $this.find('> a').attr('aria-expanded', true); // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');

    $this.find('.dropdown-menu').addClass('show');
  }, function () {
    var $this = $(this); // timer;
    // timer = setTimeout(function(){

    $this.removeClass('show');
    $this.find('> a').attr('aria-expanded', false); // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');

    $this.find('.dropdown-menu').removeClass('show'); // }, 100);
  });
  $('#dropdown04').on('show.bs.dropdown', function () {
    console.log('show');
  }); // scroll

  var scrollWindow = function scrollWindow() {
    $(window).scroll(function () {
      var $w = $(this),
          st = $w.scrollTop(),
          navbar = $('.ftco_navbar'),
          sd = $('.js-scroll-wrap');

      if (st > 150) {
        if (!navbar.hasClass('scrolled')) {
          navbar.addClass('scrolled');
        }
      }

      if (st < 150) {
        if (navbar.hasClass('scrolled')) {
          navbar.removeClass('scrolled sleep');
        }
      }

      if (st > 350) {
        if (!navbar.hasClass('awake')) {
          navbar.addClass('awake');
        }

        if (sd.length > 0) {
          sd.addClass('sleep');
        }
      }

      if (st < 350) {
        if (navbar.hasClass('awake')) {
          navbar.removeClass('awake');
          navbar.addClass('sleep');
        }

        if (sd.length > 0) {
          sd.removeClass('sleep');
        }
      }
    });
  };

  scrollWindow();

  var counter = function counter() {
    $('#section-counter').waypoint(function (direction) {
      if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
        $('.number').each(function () {
          var $this = $(this),
              num = $this.data('number');
          console.log(num);
          $this.animateNumber({
            number: num,
            numberStep: comma_separator_number_step
          }, 7000);
        });
      }
    }, {
      offset: '95%'
    });
  };

  counter();

  var contentWayPoint = function contentWayPoint() {
    var i = 0;
    $('.ftco-animate').waypoint(function (direction) {
      if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
        i++;
        $(this.element).addClass('item-animate');
        setTimeout(function () {
          $('body .ftco-animate.item-animate').each(function (k) {
            var el = $(this);
            setTimeout(function () {
              var effect = el.data('animate-effect');

              if (effect === 'fadeIn') {
                el.addClass('fadeIn ftco-animated');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft ftco-animated');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight ftco-animated');
              } else {
                el.addClass('fadeInUp ftco-animated');
              }

              el.removeClass('item-animate');
            }, k * 50, 'easeInOutExpo');
          });
        }, 100);
      }
    }, {
      offset: '95%'
    });
  };

  contentWayPoint(); // navigation

  var OnePageNav = function OnePageNav() {
    $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function (e) {
      e.preventDefault();
      var hash = this.hash,
          navToggler = $('.navbar-toggler');
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, 'easeInOutExpo', function () {
        window.location.hash = hash;
      });

      if (navToggler.is(':visible')) {
        navToggler.click();
      }
    });
    $('body').on('activate.bs.scrollspy', function () {
      console.log('nice');
    });
  };

  OnePageNav(); // magnific popup

  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom',
    // class to remove default margin from left and right side
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image

    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS

    }
  });
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  var goHere = function goHere() {
    $('.mouse-icon').on('click', function (event) {
      event.preventDefault();
      $('html,body').animate({
        scrollTop: $('.goto-here').offset().top
      }, 500, 'easeInOutExpo');
      return false;
    });
  };
  
  $('.carousel').carousel()

$('.single-product-images').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  customPaging : function(slider, i) {
    var thumb = $(slider.$slides[i]).data('thumb');
    return `<a><img class="img-fluid" src=${thumb} /></a>`;
  },
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

function getVariantFromOptions() {
  let variantArr = []
  $(".product-category select").map(function(i, el) {
    variant = {value: $(el).val(), index: $(el).data('index')};
    variantArr.push(variant)
  });
  return variantArr;
}

function updateHistoryState(variant) {
  if (!history.replaceState || !variant) {
    return;
  }

  var newurl =
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname +
    '?variant=' +
    variant.id;
  
  window.history.replaceState({ path: newurl }, '', newurl);
}

$('.product-category select').on('change', function() {
  var selectedValues = getVariantFromOptions();
  var variants = window.product.variants;
  
  // Search for product variants based on what was selected in the dropdowns
  var found = _.find(variants, function(variant) {
    return selectedValues.every(function(values) {
      return _.isEqual(variant[values.index], values.value);
    });
  });
  updateHistoryState(found)
  $('#variant-id').val(found.id)
});

  goHere();
})(jQuery);

/***/ }),

/***/ "./src/css/app.scss":
/*!**************************!*\
  !*** ./src/css/app.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 				var [chunkIds, fn, priority] = deferred[i];
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
/******/ 			"/app": 0,
/******/ 			"assets/app": 0
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
/******/ 			var [chunkIds, moreModules, runtime] = data;
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkrotshi"] = self["webpackChunkrotshi"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/app"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/app"], () => (__webpack_require__("./src/css/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;