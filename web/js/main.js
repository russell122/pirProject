"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // polyfill flat
  // if (!Array.prototype.flat) Array.prototype.flat = function () {
  // 	return (function f(arr) {
  // 	return arr.reduce(
  // 			(a, v) =>
  // 	Array.isArray(v)
  // 				? a.concat(f(v))
  // 				: a.concat(  v )
  // 			, []
  // 		)
  // 	})(this)
  // };
  // function createRipple(e) {
  // 	const button = e.target.closest('.g-btn');
  // 	const ripple = document.querySelectorAll(".ripple");
  // 	if (ripple) ripple.forEach( el => el.remove() )
  // 	const circle = document.createElement("span");
  // 	const diameter = Math.max(button.clientWidth, button.clientHeight);
  // 	const radius = diameter / 2;
  // 	circle.style.width = circle.style.height = `${diameter}px`;
  // 	circle.style.left = `${e.offsetX - radius }px`;
  // 	circle.style.top = `${e.offsetY - radius }px`;
  // 	circle.classList.add("ripple");
  // 	button.appendChild(circle);
  // }
  // const buttons = document.querySelectorAll('.g-btn');
  // if(buttons.length) buttons.forEach( el => el.addEventListener('click', createRipple) )

  /**
   * Return separator price
   * example - 1000 return 1 000} arg 
   * @param {string}
   * @returns {string}
   * 
   */
  var priceSeparatorMethod = function priceSeparatorMethod(str) {
    return str.split('').reverse().join('').replace(/(.{3})/g, '$1 ').split('').reverse().join('').replace(/\.\d+/, '');
  };

  var mobileMenuList = document.querySelector('.mobile__change');
  var burgerBtn = document.querySelector('.hide-nav');
  var headerUserBlock = document.querySelector('.header__user');
  var headerNavBlock = document.querySelector('.nav');
  var headerContainer = document.querySelector('.header .container');
  var footerContainer = document.querySelector('.footer .container');
  burgerBtn && burgerBtn.addEventListener('click', function () {
    this.classList.toggle('active');
    headerNavBlock.classList.toggle('active');
    document.body.classList.toggle('active');
  }); // Сорри дизайн непредсказуемый )

  var changePositionElements = function changePositionElements() {
    if (document.documentElement.clientWidth < 992) {
      headerNavBlock && headerUserBlock && headerNavBlock.insertAdjacentElement('afterbegin', headerUserBlock);
      headerNavBlock && mobileMenuList && headerNavBlock.insertAdjacentElement('beforeend', mobileMenuList);
    } else {
      headerContainer && headerUserBlock && headerContainer.insertAdjacentElement('beforeend', headerUserBlock);
      footerContainer && mobileMenuList && footerContainer.insertAdjacentElement('afterbegin', mobileMenuList);
    }
  };

  changePositionElements();
  window.addEventListener('resize', function () {
    changePositionElements();
  });
  /**
   * Stop auto play for sliders
   * @returns null
   * @readonly
   */

  function init() {
    var _this = this;

    this.el.addEventListener('mouseenter', function () {
      _this.autoplay.stop();
    });
    this.el.addEventListener('mouseleave', function () {
      _this.autoplay.start();
    });
  }

  var professionalsSlider = new Swiper('.professionals-js', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    slidesPerView: 6,
    spaceBetween: 25,
    on: {
      init: init
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      360: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 15
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 15
      }
    }
  });
  var newsSlider;

  var enableNewsSlider = function enableNewsSlider() {
    newsSlider = new Swiper('.news-js', {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      slidesPerView: 2,
      spaceBetween: 25,
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        576: {
          slidesPerView: 2
        }
      }
    });
  };

  var breakpointForNews = window.matchMedia('(min-width:768px)');

  var checkerBreakpointForNewsSlider = function checkerBreakpointForNewsSlider() {
    if (breakpointForNews.matches === true) {
      if (newsSlider !== undefined && newsSlider.initialized) {
        newsSlider.destroy(true, true);
      }

      return;
    } else if (breakpointForNews.matches === false) {
      return enableNewsSlider();
    }
  };

  breakpointForNews.addListener(checkerBreakpointForNewsSlider);
  checkerBreakpointForNewsSlider();
  var parthnersSlider = new Swiper('.parthners-js', {
    loop: true,
    on: {
      init: init
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    slidesPerView: 6,
    spaceBetween: 15,
    breakpoints: {
      320: {
        slidesPerView: 2
      },
      360: {
        slidesPerView: 3
      },
      600: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 5
      },
      1200: {
        slidesPerView: 6
      }
    }
  });
  var servicesSlider = new Swiper('.services-js', {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 5
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 25
      }
    }
  });
  var interfaceSlider = new Swiper('.interface-js', {
    spaceBetween: 35,
    loop: true,
    on: {
      init: init
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    navigation: {
      prevEl: '.interface__arrow-l',
      nextEl: '.interface__arrow-r'
    }
  });
  var licenseSlider = new Swiper('.license-js', {
    observer: true,
    observeParents: true,
    spaceBetween: 15,
    on: {
      init: init
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      320: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 4
      }
    }
  });
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    slidesPerView: 4,
    // loop: true,
    freeMode: true,
    loopedSlides: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        spaceBetween: 15
      },
      1199: {
        spaceBetween: 25
      }
    }
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    // loop: true,
    loopedSlides: 5,
    thumbs: {
      swiper: galleryThumbs
    }
  });
  var sliderInput = document.querySelector('.range-filter');
  /**
   * Input range slider at two prices
   */

  if (sliderInput) {
    var _min = +sliderInput.dataset['min'];

    var _max = +sliderInput.dataset['max'];

    var prevInput = sliderInput.previousElementSibling;
    prevInput = prevInput.querySelector('input');
    var nextInput = sliderInput.nextElementSibling;
    nextInput = nextInput.querySelector('input');
    var inputs = [prevInput, nextInput];
    noUiSlider.create(sliderInput, {
      format: {
        to: function to(value) {
          return Math.round(value);
        },
        from: function from(value) {
          return Number(Math.round(value));
        }
      },
      start: [_min, _max],
      connect: true,
      step: 1,
      range: {
        'min': _min,
        'max': _max
      }
    });
    sliderInput.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = values[handle];
    });
    inputs.forEach(function (input, handle) {
      input.addEventListener('change', function () {
        sliderInput.noUiSlider.setHandle(handle, this.value);
      });
      input.addEventListener('keydown', function (e) {
        var values = sliderInput.noUiSlider.get();
        var value = Number(values[handle]);
        var steps = sliderInput.noUiSlider.steps();
        var step = steps[handle];
        var position;

        switch (e.which) {
          case 13:
            sliderInput.noUiSlider.setHandle(handle, this.value);
            break;

          case 38:
            position = step[1];

            if (position === false) {
              position = 1;
            }

            if (position !== null) {
              sliderInput.noUiSlider.setHandle(handle, value + position);
            }

            break;

          case 40:
            position = step[0];

            if (position === false) {
              position = 1;
            }

            if (position !== null) {
              sliderInput.noUiSlider.setHandle(handle, value - position);
            }

            break;
        }
      });
    });
  }
  /**
   * Tab functions
   * @returns null
   */


  var tab = function tab() {
    var tabNav = document.querySelectorAll('.tabs-nav__item'),
        // Выбираем элементы навигации табов
    tabContent = document.querySelectorAll('.tabs-content__item'),
        // Выбираем самы табы
    tabName; // Переменная для имени таба
    // Проходим циклом по каждому элементу навигации и навешиваем обработчик клика, который вызывает функцию selectTabNav

    tabNav.forEach(function (item) {
      item.addEventListener('click', selectTabNav);
    });

    function selectTabNav() {
      tabNav.forEach(function (item) {
        // Удаляем активный класс у всех элементов навигации табов
        item.classList.remove('is-active');
      });
      this.classList.add('is-active'); // Добавляем активный укласс у элемента по которому кликнули

      tabName = this.getAttribute('data-tab-name'); // Получаем имя таба, который нам нужен

      selectTabContent(tabName); // Запускаем функцию, чтобы показать выбранный таб
    }
    /**
     * 
     * @param { NodeList }
     */


    function selectTabContent(tab) {
      // Проходим по всем табам и проверяем есть ли у элемента класс, равный имени таба(переменной tabName). Если есть, то добавляем класс активного таба, если нет, то удаляем этот класс
      tabContent.forEach(function (item) {
        var classList = item.classList;
        classList.contains(tab) ? classList.add('is-active') : classList.remove('is-active');
        setTimeout(function () {
          classList.contains(tab) ? classList.add('show') : classList.remove('show');
        }, 100);
      });
    }
  };

  tab();
  var testObjMapMark = {
    title: 'ЛОК "Солнечная"',
    address: 'Краснодарский край, г. Геленджик, ул. Туристическая, 19 '
  };
  /**
   * Create mark for yandex map
   * @param {Object} options 
   * @returns {string} 
   */

  var createMarkForMap = function createMarkForMap(options) {
    return "\n\t\t\t<div class='map-content'>\n\t\t\t\t<a href='#'>".concat(options.title, " </a>\n\t\t\t\t<p> ").concat(options.address, "</p>\n\t\t\t</div>\n\t\t");
  }; // Яндекс метки - а дальше см )


  var mapId = document.querySelector('#map');
  mapId && ymaps.ready(initMap); // Тут нужно будет допилить функцию с аякс запросом по фильтру

  function initMap() {
    var myMap = new ymaps.Map(mapId, {
      center: [44.58704957458791, 38.045314],
      zoom: 10,
      controls: ['smallMapDefaultSet']
    });
    var myPlacemark2 = new ymaps.Placemark([44.58704957458791, 38.045314], {
      balloonContentBody: createMarkForMap(testObjMapMark),
      hintContent: testObjMapMark.title
    }, {
      iconLayout: 'default#imageWithContent',
      // iconImageClipRect: [[34,0], [62, 46]],
      iconImageHref: './web/images/general/hotel.svg',
      iconImageSize: [50, 50],
      iconImageOffset: [-26, -46]
    });
    myMap.geoObjects.add(myPlacemark2);
  }

  var accrordionItem = document.querySelectorAll('.accordion__col span');
  var accordionWrapper = document.querySelector('.accordion');
  /**
   * Masonry grid settings
   */

  var msnry;

  if (accordionWrapper) {
    msnry = new Masonry(accordionWrapper, {
      columnWidth: '.accordion__col',
      itemSelector: '.accordion__col',
      horizontalOrder: true,
      gutter: 15
    });
  }

  accrordionItem && accrordionItem.forEach(function (el) {
    return el.addEventListener('click', function (e) {
      var parentElement = this.closest('.accordion__col');
      parentElement.classList.toggle('show');
      msnry.layout();
    });
  });
  var calcTitle = document.querySelector('.calculator__title');
  var calcSecondsTitle = document.querySelector('.calculator__seconds');
  var calcCountRecords = document.querySelector('.calculator__count');
  var calcPrice = document.querySelector('.calculator__total-price');
  var calcAlertText = document.querySelector('.calculator__alert');
  var calcInputSlider = document.querySelector('.slider-calc');
  var calcInputPrice = document.querySelector('[name="calculator"]');
  var calcInputMaking = document.querySelector('[name="making"]'); // Такие параметры ожидаются при формирование параметров калькулятора

  var paramsForRange = {
    300: {
      records: 'не ограничено',
      title: 'Самостоятельное внесение данных о Вашем здоровье',
      second: 'Рекомендуем для уверенных пользователей',
      aletText: ''
    },
    1000: {
      records: '15',
      title: 'Внесение данных о Вашем здоровье профессиональным ассистентом',
      second: 'Рекомендуем на начальном этапе использования ЭМК',
      aletText: 'Количество записей внесенных самостоятельно не ограничено'
    },
    2000: {
      records: '35',
      title: 'Внесение данных о Вашем здоровье профессиональным ассистентом',
      second: 'Рекомендуем на начальном этапе использования ЭМК',
      aletText: 'Количество записей внесенных самостоятельно не ограничено'
    },
    3000: {
      records: '60',
      title: 'Внесение данных о Вашем здоровье профессиональным ассистентом',
      second: 'Рекомендуем на начальном этапе использования ЭМК',
      aletText: 'Количество записей внесенных самостоятельно не ограничено'
    },
    4000: {
      records: '85',
      title: 'Внесение данных о Вашем здоровье профессиональным ассистентом',
      second: 'Рекомендуем на начальном этапе использования ЭМК',
      aletText: 'Количество записей внесенных самостоятельно не ограничено'
    },
    5000: {
      records: 'не ограничено',
      title: 'Внесение данных о Вашем здоровье профессиональным ассистентом',
      second: 'Соберем и внесем в ЭМК всю историю Вашего здоровья',
      aletText: ''
    }
  }; //General object for range slider

  var _objKeysParams = Object.keys(paramsForRange); // keys 


  var _minValRangeSlider = +_objKeysParams[0]; // min


  var _maxValRangeSlider = +_objKeysParams[_objKeysParams.length - 1]; //max


  var _totalPriceInCalculate = _maxValRangeSlider - _minValRangeSlider; //

  /**
   * Creat new Params for range slider
   * @param {Object} obj 
   * @param {number} total
   * @returns Object
   */


  var creatObjectForRangeSlider = function creatObjectForRangeSlider(obj, total) {
    var range = {};
    Object.keys(obj).forEach(function (item, idx, arr) {
      var percent;
      idx === 0 ? percent = 'min' : percent = parseInt(item / total * 100) + '%';
      idx === arr.length - 1 ? percent = 'max' : true;
      range[percent] = +item;
    });
    return range;
  };

  var _obj = {
    start: 2000,
    snap: true,
    connect: [true, false],
    range: creatObjectForRangeSlider(paramsForRange, _totalPriceInCalculate)
  };
  calcInputSlider && noUiSlider.create(calcInputSlider, _obj);
  calcInputSlider && calcInputSlider.noUiSlider.on('update', function (values, handle) {
    var keyCalcParam = paramsForRange[+values[handle]];
    calcTitle.textContent = keyCalcParam.title;
    calcSecondsTitle.textContent = keyCalcParam.second;
    calcAlertText.textContent = keyCalcParam.aletText;
    calcCountRecords.textContent = keyCalcParam.records;
    calcInputPrice.value = priceSeparatorMethod(values[handle]);
    calcInputMaking.value = keyCalcParam.records;
    calcPrice.textContent = priceSeparatorMethod(values[handle]);
  });
  var showHiddenBlock = document.querySelector('.show-block');
  var hiddenBlock = document.querySelector('.hidden');
  showHiddenBlock && showHiddenBlock.addEventListener('click', function (e) {
    e.preventDefault();
    hiddenBlock.classList.toggle('show');
    this.classList.toggle('active');
  });
  document.addEventListener('click', function (e) {
    if (e.target.closest('.checked-password')) {
      e.preventDefault();
      var inputPassword = e.target.closest('button').previousElementSibling;
      inputPassword.type == 'password' ? inputPassword.type = 'text' : inputPassword.type = 'password';
    }
  }); // Вызовы модалок
  // Вся разметка модалок лежит в ./web/js/elements.js

  var modalElem;
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-btn-modal]')) {
      e.preventDefault();
      var datTarget = e.target.closest('[data-btn-modal]').dataset.btnModal;
      var rr = document.querySelector('.calculator__title').innerHTML;

      switch (datTarget) {
        case 'login':
          modalElem = $plugins.modal({
            title: 'Вход в личный кабинет',
            closable: true,
            width: '1000px',
            content: $globalHtmlElements.modalLogin
          });
          setTimeout(function () {
            return modalElem.open();
          }, 300);
          break;

        case 'callback':
          modalElem = $plugins.modal({
            title: 'Бесплатная консультация',
            closable: true,
            width: '550px',
            content: $globalHtmlElements.modalCallback
          });
          setTimeout(function () {
            return modalElem.open();
          }, 300);
          break;

        case 'appointment-doctor':
          var formDoctorParent = e.target.closest('form');
          var formData = new FormData(formDoctorParent); // Заменить на актуальную инфу о докторе по айдишнику

          var getDoctorApiParams = {
            id: formData.get('id'),
            name: 'Иванова Татьяна Владимировна',
            secondDescr: 'Акушер, гинеколог в Клинике “Сова“',
            imgUrl: './web/images/content/modal-doc.jpg',
            specialisation: 'Акушер, гинеколог',
            category: 'Высшая',
            experience: '17 лет',
            cost: '2000 ₽ (первичный приём)',
            times: ['12:00', '13:00', '14:00', '23:00'],
            selectedDate: formData.get('date'),
            selectedTime: formData.get('time')
          };
          modalElem = $plugins.modal({
            title: 'Запись на прием к врачу',
            closable: true,
            width: '600px',
            bodyClass: 'vmodal__body--p',
            content: $globalHtmlElements.createModalAppointmentDoctor(getDoctorApiParams)
          });
          setTimeout(function () {
            return modalElem.open();
          }, 200);
          break;

        case 'booking':
          var formBookingParent = e.target.closest('form');
          var formDataBooking = new FormData(formBookingParent);
          var getHotelApiParams = {
            id: formDataBooking.get('id'),
            name: 'ЛОК “СОЛНЕЧНАЯ”',
            address: 'Краснодарский край,г. Геленджик, ул. Туристическая, 19',
            imgUrl: './web/images/content/modal-hot.jpg',
            cost: '2000 ₽/сутки',
            treatment: [1, 2, 3],
            food: [1, 2, 3]
          };
          modalElem = $plugins.modal({
            title: 'Заявка на бронирование',
            closable: true,
            width: '600px',
            bodyClass: 'vmodal__body--p',
            content: $globalHtmlElements.createModalBooking(getHotelApiParams)
          });
          setTimeout(function () {
            return modalElem.open();
          }, 300);
          break;

        case 'buy-card':
          modalElem = $plugins.modal({
            title: 'Электронная медицинская карта',
            closable: true,
            width: '600px',
            bodyClass: 'vmodal__body--p',
            content: $globalHtmlElements.createModalBuyCard(calcInputPrice.value, calcInputMaking.value, rr)
          });
          setTimeout(function () {
            return modalElem.open();
          }, 300);
          break;

        default:
          return;
      }
    }
  });
});
$(document).ready(function () {
  $('a[data-rel^=lightcase]').lightcase({
    maxWidth: 1850,
    maxHeight: 1000
  });
}); // Держись мужик ) DRY KISS YAGNI xD - ya takoy ne znay