"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // polyfill flat
  if (!Array.prototype.flat) Array.prototype.flat = function () {
    return function f(arr) {
      return arr.reduce(function (a, v) {
        return Array.isArray(v) ? a.concat(f(v)) : a.concat(v);
      }, []);
    }(this);
  }; // tabs

  var myTabs = function myTabs() {
    var tabs = function tabs(myTargets, myContents) {
      var targets = document.querySelectorAll(myTargets);
      var contents = document.querySelectorAll(myContents);

      if (targets.length > 1 && contents.length > 1) {
        targets.forEach(function (target, i) {
          target.addEventListener('click', function (e) {
            e.preventDefault();
            targets.forEach(function (elem) {
              if (e.target == elem || e.target.parentNode == elem || e.target.parentNode.parentNode) {
                hideElems();
                showElems(i);
              }
            });
          });
        });

        function hideElems() {
          targets.forEach(function (target) {
            target.classList.remove('active');
          });
          contents.forEach(function (cont) {
            cont.classList.remove('myShow');
            cont.classList.add('myHide');
          });
        }

        function showElems() {
          var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          targets[i].classList.add('active');
          contents[i].classList.remove('myHide');
          contents[i].classList.add('myShow');
        }

        hideElems();
        showElems();
      }
    };

    tabs('.newsletter__tabs-elem', '.newsletter__content-item');
    tabs('.recipients__tabs-elem1', '.recipients__content-item1');
    tabs('.recipients__tabs-elem2', '.recipients__content-item2');
    tabs('.recipients__tabs-elem3', '.recipients__content-item3');
    tabs('.recipients__tabs-elem4', '.recipients__content-item4'); // tabs('.statistics__top-elem', '.statistics__content-item');

    tabs('.detailedStatistics__tabs-elem', '.detailedStatistics__content-item');
  };

  myTabs(); //end tabs
  // baz

  var myBaz = function myBaz() {
    var baz = function baz(myElems, myWrapRez, myAbon, myBtn, myMess) {
      var btn = document.querySelector(myBtn);
      var elems = document.querySelectorAll(myElems);
      var wrapRez = document.querySelector(myWrapRez);
      var abon = document.querySelector(myAbon);
      var mess = document.querySelector(myMess);
      var sum = 0;
      var sumAbon = 0;
      var sumMess = 0; // wrapRez.innerHTML = '';
      // abon.innerHTML = '';
      // mess.innerHTML = '';

      if (btn) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          wrapRez.innerHTML = sum;
          abon.innerHTML = sumAbon;
          mess.innerHTML = sumMess;
        });
      }

      if (wrapRez && mess) {
        elems.forEach(function (elem) {
          elem.addEventListener('change', function (e) {
            var targetValue = e.target.getAttribute('data-valueBaz');
            var targetAbon = e.target.getAttribute('data-valueAbon');
            var targetMess = e.target.getAttribute('data-valueMess');

            if (e.target.checked) {
              sum += +targetValue;
              sumAbon += +targetAbon;
              sumMess += +targetMess;
            } else {
              sum -= +targetValue;
              sumAbon -= +targetAbon;
              sumMess -= +targetMess;
            }
          });
        });
      }
    };

    baz('.table-calc-baz1 > tbody > tr', '.recipients__exceptions-value1 > p > span', '.recipients__exceptions-abon1', '.recipients__exceptions-btn1', '.recipients__exceptions-mess');
    baz('.table-calc-baz2 > tbody > tr', '.recipients__exceptions-value2 > p > span', '.recipients__exceptions-abon2', '.recipients__exceptions-btn2', '.recipients__exceptions-mess2');
  };

  myBaz(); // end baz
  // accordion

  var myProlapse = function myProlapse() {
    var prolapse = function prolapse(myTargets, myContents) {
      var myClose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var targets = document.querySelectorAll(myTargets);
      var contents = document.querySelectorAll(myContents);
      var close = document.querySelector(myClose);
      targets.forEach(function (target) {
        target.addEventListener('click', function (e) {
          contents.forEach(function (cont) {
            if (target.getAttribute('data-linkValue') == cont.getAttribute('data-ulValue')) {
              if (cont.style.maxHeight) {
                cont.style.maxHeight = null;
              } else {
                cont.style.maxHeight = cont.scrollHeight + "px";
              }
            }

            if (close) {
              close.addEventListener('click', function (e) {
                cont.style.maxHeight = null;
              });
            }
          });
        });
      });
    };

    prolapse('.settings__more-target', '.settings__more-info');
  };

  myProlapse(); // end accordion
});
$(document).ready(function () {
  // Зададим стартовую дату
  var start = new Date(),
      prevDay,
      startHours = 9; // 09:00

  start.setHours(9);
  start.setMinutes(0); // Если сегодня суббота или воскресенье - 10:00

  if ([6, 0].indexOf(start.getDay()) != -1) {
    start.setHours(10);
    startHours = 10;
  }

  $('.time-calendar').each(function (i) {
    $(this).datepicker({
      language: 'ru',
      timepicker: true,
      startDate: start,
      minHours: startHours,
      maxHours: 18,
      onSelect: function onSelect(fd, d, picker) {
        // Ничего не делаем если выделение было снято
        if (!d) return;
        var day = d.getDay(); // Обновляем состояние календаря только если была изменена дата

        if (prevDay != undefined && prevDay == day) return;
        prevDay = day; // Если выбранный день суббота или воскресенье, то устанавливаем
        // часы для выходных, в противном случае восстанавливаем начальные значения

        if (day == 6 || day == 0) {
          picker.update({
            minHours: 1,
            maxHours: 24
          });
        } else {
          picker.update({
            minHours: 9,
            maxHours: 18
          });
        }
      }
    });
  });
  $('.header__burger').click(function () {
    $('.header__burger').toggleClass('active');
    $('body').toggleClass('lock');
    $('.header__menu').toggleClass('active');
    $('.header__wrap').toggleClass('active');
    $('.wrapper').toggleClass('active');
  }); // Вот мы кликнули по меню

  $('.topmenu__item').on('click', function (e) {
    // if ($('.header__menu').contains('active')) {
    // тут меню мы скрываем у всех
    $('.submenu').slideUp();
    $('.topmenu__item').removeClass('active'); // а тут мы открываем

    if ($(this).find('.submenu').is(':visible')) {
      $(this).find('.submenu').slideUp();
    } else {
      $(this).find('.submenu').slideDown();
      $(this).addClass('active');
    } // $(this).find('.submenu').slideToggle()
    // }

  }); // $('#check1').on('change', function () {
  // 	$('.newsletter__transliteration-text').toggleClass('active');
  // })

  var newsletterTransliterationText = document.querySelectorAll('.newsletter__transliteration-text');
  var checkTransElems = document.querySelectorAll('.checkTrans');
  checkTransElems.forEach(function (elem, i) {
    elem.addEventListener('change', function (e) {
      console.log(e.target.getAttribute('data-check'));
      console.log(newsletterTransliterationText[i].getAttribute('data-check-trans'));

      if (e.target.getAttribute('data-check') === newsletterTransliterationText[i].getAttribute('data-check-trans')) {
        newsletterTransliterationText[i].classList.toggle('active');
      }
    });
  });
  var slider;

  var activeSlider = function activeSlider() {
    slider = new Swiper('.mySlider', {
      autoHeight: true,
      slidesPerView: 2,
      spaceBetween: 10,
      loop: true,
      observer: true,
      observeParents: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 10
        }
      } // autoplay: {
      // 	delay: 5000,
      // },

    });
  };

  var breakpoint = window.matchMedia('(min-width:767px)');

  var checkerBreakpoint = function checkerBreakpoint() {
    if (breakpoint.matches === true) {
      if (slider !== undefined && slider.initialized) {
        slider.destroy(true, true);
      }

      return;
    } else if (breakpoint.matches === false) {
      return activeSlider();
    }
  };

  breakpoint.addListener(checkerBreakpoint);
  checkerBreakpoint();
  $('[data-number]').on('click', function (e) {
    e.preventDefault();
    var parentElem = $(this).closest('.newsletter__form-text');
    var txt = parentElem.find('.txt');
    var dataText = txt.attr('data-txt');
    var transElem = $("[data-txtTrans=\"".concat(dataText, "\"]")); // let textValue = txt.val();

    txt.val(txt.val() + $(this).attr('data-number'));
    transElem.val(rus_to_latin(txt.val()));
  });
  $('.txt').on('input', function (e) {
    var dataText = $(this).attr('data-txt');
    var txtValue = $(this).val();
    var transElem = $("[data-txtTrans=\"".concat(dataText, "\"]"));
    transElem.val(rus_to_latin(txtValue));
  });
});

function rus_to_latin(str) {
  var ru = {
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'g',
    'д': 'd',
    'е': 'e',
    'ё': 'e',
    'ж': 'j',
    'з': 'z',
    'и': 'i',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': 'h',
    'ц': 'c',
    'ч': 'ch',
    'ш': 'sh',
    'щ': 'shch',
    'ы': 'y',
    'э': 'e',
    'ю': 'u',
    'я': 'ya'
  },
      n_str = [];
  str = str.replace(/[ъь]+/g, '').replace(/й/g, 'i');

  for (var i = 0; i < str.length; ++i) {
    n_str.push(ru[str[i]] || ru[str[i].toLowerCase()] == undefined && str[i] || ru[str[i].toLowerCase()].toUpperCase());
  }

  return n_str.join('');
}

var numberMask = IMask(document.getElementById('number-mask'), {
  mask: Number,
  min: -10000,
  max: 10000,
  maxLength: 2,
  thousandsSeparator: ' '
});
var numberMask2 = IMask(document.getElementById('number-mask2'), {
  mask: Number,
  min: -10000,
  max: 10000,
  maxLength: 2,
  thousandsSeparator: ' '
});
var numberMask3 = IMask(document.getElementById('number-mask3'), {
  mask: Number,
  min: -10000,
  max: 10000,
  maxLength: 2,
  thousandsSeparator: ' '
});
var numberMask4 = IMask(document.getElementById('number-mask4'), {
  mask: Number,
  min: -10000,
  max: 10000,
  maxLength: 2,
  thousandsSeparator: ' '
});