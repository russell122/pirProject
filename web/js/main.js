"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // polyfill flat
  if (!Array.prototype.flat) Array.prototype.flat = function () {
    return function f(arr) {
      return arr.reduce(function (a, v) {
        return Array.isArray(v) ? a.concat(f(v)) : a.concat(v);
      }, []);
    }(this);
  }; // input range
  // let sliderInp = document.querySelector('.sliderInp');
  // let rangeInput = document.querySelector('.block__range-wrap > input');
  // let blockRangeValue = document.querySelector('.block__range-value > p >span');
  // sliderInp.addEventListener('input', (e) => {
  // 	// blockRangeValue.innerHTML = e.target.value;
  // 	rangeInput.value = e.target.value;
  // });
  // rangeInput.addEventListener('input', (e) => {
  // 	// blockRangeValue.innerHTML = e.target.value;
  // 	sliderInp.value = e.target.value;
  // });
  // input end range
  // modal

  var modal = function modal() {
    function activeModal(btnsTarget, modalWrap, activeClass) {
      var btns = document.querySelectorAll(btnsTarget);
      var modal = document.querySelector(modalWrap);
      btns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          modal.classList.add(activeClass.replace(/\D/, ""));
          document.body.style.overflow = 'hidden';
        });
        modal.addEventListener('click', function (e) {
          if (e.target === modal || e.target.getAttribute('data-close') == '') {
            modal.classList.remove(activeClass.replace(/\D/, ""));
            document.body.style.overflow = '';
          }
        });
        document.addEventListener('keyup', function (e) {
          if (modal.classList.contains(activeClass.replace(/\D/, "")) && e.key == 'Escape') {
            modal.classList.remove(activeClass.replace(/\D/, ""));
            document.body.style.overflow = '';
          }
        });
      });
    }

    activeModal('.modal1__target', '.popup', '.popup-active');
    activeModal('.databaseManagement__modalTarget', '.popup2', '.popup-active');
    activeModal('.databaseManagement__bazes-modalTarget', '.popup3', '.popup-active');
    activeModal('.listSubNewBase__numberModalTarget', '.popup4', '.popup-active');
  };

  modal(); // end modal
  // tabs

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
    }; // tabs('.newsletter__tabs-elem', '.newsletter__content-item');


    tabs('.recipients__tabs-elem1', '.recipients__content-item1');
    tabs('.recipients__tabs-elem2', '.recipients__content-item2');
    tabs('.recipients__tabs-elem3', '.recipients__content-item3');
    tabs('.recipients__tabs-elem4', '.recipients__content-item4');
    tabs('.statistics__top-elemModal', '.statistics__content-itemModal'); // tabs('.detailedStatistics__tabs-elem', '.detailedStatistics__content-item');
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
    prolapse('.newsletter__left-top', '.newsletter__left-wrap');
    prolapse('.newsletter__right-top', '.newsletter__right-wrap');
  };

  myProlapse(); // end accordion
  // 

  var mySelectionInTheEkNewsletter = function mySelectionInTheEkNewsletter() {
    var selectionInTheEkNewsletter = function selectionInTheEkNewsletter(myTextArea, myGSelect, mySelectName, mySelectNumber, myInputName, myInputNumber) {
      var gSelect = document.querySelector(myGSelect);
      var textarea = document.querySelector(myTextArea); // let rezSelectName = 'Выберите имя';

      if (gSelect) {
        gSelect.addEventListener('change', function (e) {
          textarea.innerHTML = e.target.value;
        });
      }
    };

    selectionInTheEkNewsletter('.newsletter__form-vk-text > textarea', '.newsletter__form-selVk-el > select', '', '', '', '');
  };

  mySelectionInTheEkNewsletter(); //
  // Показать блок с применением флекса

  var myShowFlexBlock = function myShowFlexBlock() {
    var showFlexBlock = function showFlexBlock(myTarget, myWrap) {
      var target = document.querySelector(myTarget);
      var wraps = document.querySelectorAll(myWrap);
      var blockSearch = document.querySelector('.block__search');
      var i = 0;
      target.addEventListener('click', function (e) {
        i++;

        if (i < 4) {
          blockSearch.innerHTML += "\n\t\t\t\t\t<div class=\"block__search-wrap-hide\">\n\t\t\t\t\t\t<input type=\"text\" class=\"g-input\">\n\t\t\t\t\t\t<div class=\"mySelect__elem\">\n\t\t\t\t\t\t\t<div class=\"mySelect__style\">\n\t\t\t\t\t\t\t\t<select class=\"g-input\" type=\"text\">\n\t\t\t\t\t\t\t\t\t<option>\u0412\u043E \u0432\u0441\u0435\u0445 \u043F\u043E\u043B\u044F\u0445</option>\n\t\t\t\t\t\t\t\t\t<option>\u041D\u043E\u043C\u0435\u0440</option>\n\t\t\t\t\t\t\t\t\t<option>\u0424\u0430\u043C\u0438\u043B\u0438\u044F</option>\n\t\t\t\t\t\t\t\t\t<option>\u0418\u043C\u044F</option>\n\t\t\t\t\t\t\t\t\t<option>\u041E\u0442\u0432\u0435\u0441\u0442\u0432\u043E</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t<svg class=\"svg-sprite-icon\" width=\"9\" height=\"9\" viewBox=\"0 0 9 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t\t\t\t\t<g clip-path=\"url(#clip0)\">\n\t\t\t\t\t\t\t\t\t<path d=\"M8.94265 2.4881C9.0177 2.41041 9.01554 2.28657 8.93785 2.21152C8.86204 2.13832 8.74187 2.13832 8.66608 2.21152L4.50099 6.37622L0.336291 2.21113C0.261236 2.13344 0.137422 2.13129 0.0597076 2.20633C-0.0179882 2.28138 -0.020133 2.4052 0.054903 2.48291C0.0564804 2.48454 0.0580759 2.48614 0.0597076 2.48772L4.3629 6.7909C4.43927 6.86726 4.56309 6.86726 4.63948 6.7909L8.94265 2.4881Z\" fill=\"#fff\"/>\n\t\t\t\t\t\t\t\t\t<path d=\"M0.0021963 2.34964C0.00199413 2.24161 0.089427 2.15389 0.197453 2.15369C0.249531 2.15359 0.2995 2.17428 0.336286 2.21116L4.50099 6.37624L8.66567 2.21116C8.74215 2.13467 8.86615 2.13467 8.94264 2.21116C9.01912 2.28764 9.01912 2.41164 8.94264 2.48812L4.63945 6.79131C4.56308 6.86767 4.43926 6.86767 4.36287 6.79131L0.0597019 2.48812C0.0228987 2.45145 0.0021963 2.40161 0.0021963 2.34964Z\" fill=\"white\"/>\n\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t\t<clipPath id=\"clip0\">\n\t\t\t\t\t\t\t\t\t<rect width=\"9\" height=\"9\" fill=\"white\" transform=\"translate(9) rotate(90)\"/>\n\t\t\t\t\t\t\t\t\t</clipPath>\n\t\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
        }
      });
    };

    showFlexBlock('.block__info', '.block__search-wrap-hide');
  };

  myShowFlexBlock(); // end Показать блок с применением флекса
  // Массовый cheked inp

  var myMassChekedElems = function myMassChekedElems() {
    var massChekedElems = function massChekedElems(myTarget, myElems) {
      var target = document.querySelector(myTarget);
      var elems = document.querySelectorAll(myElems);
      target.addEventListener('click', function (e) {
        if (e.target.checked == true) {
          elems.forEach(function (el) {
            el.checked = true;
          });
        } else {
          elems.forEach(function (el) {
            el.checked = false;
          });
        }
      });
    };

    massChekedElems('.statistics__target-myInp', '.statistics__checked-myInp');
  };

  myMassChekedElems(); // end Массовый cheked inp
  // Фиксирую блок "Выбор получателей сообщения" 

  var rightFull = document.querySelector('.newsletter__form-right-full');
  window.addEventListener('scroll', function (e) {
    if (rightFull) {
      if (window.pageYOffset > 500 && screen.width >= 991) {
        rightFull.classList.add('fixed-full');
      } else {
        rightFull.classList.remove('fixed-full');
      }
    }
  }); // end Фиксирую блок "Выбор получателей сообщения" 

  var headerMenu = document.querySelector('.header__menu');
  var myHeader = document.querySelector('.header');
  window.addEventListener('scroll', function (e) {
    if (window.pageYOffset > 100 && screen.width >= 991) {
      headerMenu.classList.add('fixedMenu');
    } else {
      headerMenu.classList.remove('fixedMenu');
    }

    if (window.pageYOffset > 100 && screen.width < 991) {
      myHeader.classList.add('fixedMenu');
    } else {
      myHeader.classList.remove('fixedMenu');
    }
  });
}); // let rangeWrap = document.querySelector('.js-range-slider');
// rangeWrap.addEventListener('change', (e) => {
// 	console.log(e.target.value)
// })

$(document).ready(function () {
  var $d3 = $(".js-range-slider");
  $d3.ionRangeSlider({
    skin: "big",
    min: 0,
    max: 2000,
    from: 300
  });
  $d3.on("change", function () {
    var $inp = $(this);
    var from = $inp.prop("value"); // reading input value

    var from2 = $inp.data("from"); // reading input data-from attribute

    var inpOut = $(".block__range-wrap > input"); // console.log(from, from2); // FROM value
    // console.log($inp.val())
    // console.log(inpOut.val())

    inpOut.val($inp.val());
  });
  var $slider = $("#slider");
  var $fill = $(".bar .fill");

  function setBar() {
    $fill.css("width", $slider.val() + "%");
  }

  $slider.on("input", setBar);
  setBar();
  var ddData = [{
    text: "Viber",
    value: 1,
    selected: false,
    description: "",
    imageSrc: "web/images/content/2.svg"
  }, {
    text: "SMS",
    value: 3,
    selected: false,
    description: "",
    imageSrc: "web/images/content/1.svg"
  }, {
    text: "ВКОНТАКТЕ",
    value: 2,
    selected: false,
    description: "",
    imageSrc: "web/images/content/3.svg"
  }];
  var ddData2 = [{
    text: "Viber",
    value: 2,
    selected: false,
    description: "",
    imageSrc: "web/images/content/2.svg"
  }, {
    text: "SMS",
    value: 3,
    selected: false,
    description: "",
    imageSrc: "web/images/content/1.svg"
  }, {
    text: "ВКОНТАКТЕ",
    value: 1,
    selected: false,
    description: "",
    imageSrc: "web/images/content/3.svg"
  }];
  var ddData3 = [{
    text: "Viber",
    value: 1,
    selected: false,
    description: "",
    imageSrc: "web/images/content/2.svg"
  }, {
    text: "SMS",
    value: 3,
    selected: false,
    description: "",
    imageSrc: "web/images/content/1.svg"
  }, {
    text: "ВКОНТАКТЕ",
    value: 2,
    selected: false,
    description: "",
    imageSrc: "web/images/content/3.svg"
  }];
  $('.demoBasic').ddslick({
    data: ddData,
    defaultSelectedIndex: 3,
    width: 150,
    imagePosition: "left",
    selectText: "Select your favorite social network",
    onSelected: function onSelected(data) {
      console.log(data);
    }
  });
  $('.demoBasic2').ddslick({
    data: ddData2,
    defaultSelectedIndex: 2,
    width: 150,
    imagePosition: "left",
    selectText: "",
    onSelected: function onSelected(data) {
      console.log(data);
    }
  });
  $('.demoBasic3').ddslick({
    data: ddData3,
    defaultSelectedIndex: 1,
    width: 150,
    imagePosition: "left",
    selectText: "",
    onSelected: function onSelected(data) {
      console.log(data);
    }
  });
  $('input[type=file]').each(function () {
    var $input = $(this),
        $label = $input.next('.js-labelFile'),
        labelVal = $label.html();
    $input.hide();
    $input.on('change', function (element) {
      var fileName = '';
      if (element.target.value) fileName = element.target.value.split('\\').pop();
      fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
    });
  });
  var slider = new Swiper('.mySlider', {
    autoHeight: true,
    slidesPerView: 4,
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
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      991: {
        slidesPerView: 4,
        spaceBetween: 10
      }
    } // autoplay: {
    // 	delay: 5000,
    // },

  }); // Зададим стартовую дату

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

  });
  var newsletterTransliterationText = document.querySelectorAll('.newsletter__transliteration-text');
  var checkTransElems = document.querySelectorAll('.checkTrans');
  checkTransElems.forEach(function (elem, i) {
    elem.addEventListener('change', function (e) {
      if (e.target.getAttribute('data-check') === newsletterTransliterationText[i].getAttribute('data-check-trans')) {
        newsletterTransliterationText[i].classList.toggle('active');
      }
    });
  });
  var lengthLetters = document.querySelector('.newsletter__form-text-symbol > span');
  var lengthSMS = document.querySelector('.newsletter__form-text-sms > span');
  var translengthLetters = document.querySelector('.newsletter__transliteration-symbol > span');
  var transLengthSMS = document.querySelector('.newsletter__transliteration-sms > span');
  var lengthLetters2 = document.querySelector('.newsletter__form-text-symbol2 > span');
  var lengthSMS2 = document.querySelector('.newsletter__form-text-sms2 > span');
  var translengthLetters2 = document.querySelector('.newsletter__transliteration-symbol2 > span');
  var transLengthSMS2 = document.querySelector('.newsletter__transliteration-sms2 > span');

  var countSms = function countSms(arg, sum) {
    return Math.ceil(arg / sum);
  };

  $('[data-number]').on('click', function (e) {
    e.preventDefault();
    var parentElem = $(this).closest('.newsletter__form-text');
    var txt = parentElem.find('.txt');
    var dataText = txt.attr('data-txt');
    var transElem = $("[data-txtTrans=\"".concat(dataText, "\"]"));
    txt.val(txt.val() + $(this).attr('data-number'));
    transElem.val(rus_to_latin(txt.val()));
    lengthLetters.innerHTML = txt.val().length;
    lengthSMS.innerHTML = countSms(txt.val().length, 170);
    translengthLetters.innerHTML = transElem.val().length;
    transLengthSMS.innerHTML = countSms(transElem.val().length, 160);
  });
  $('.txt').on('input', function (e) {
    var dataText = $(this).attr('data-txt');
    var txtValue = $(this).val();
    var transElem = $("[data-txtTrans=\"".concat(dataText, "\"]"));
    transElem.val(rus_to_latin(txtValue));
    lengthLetters.innerHTML = $(this).val().length;
    lengthSMS.innerHTML = countSms($(this).val().length, 170);
    translengthLetters.innerHTML = transElem.val().length;
    transLengthSMS.innerHTML = countSms(transElem.val().length, 160);
  });
  $('[data-number2]').on('click', function (e) {
    e.preventDefault();
    var parentElem2 = $(this).closest('.newsletter__form-text2');
    var txt2 = parentElem2.find('.txt2');
    var dataText2 = txt2.attr('data-txt2');
    var transElem2 = $("[data-txtTrans2=\"".concat(dataText2, "\"]"));
    txt2.val(txt2.val() + $(this).attr('data-number2'));
    transElem2.val(rus_to_latin(txt2.val()));
    lengthLetters2.innerHTML = txt2.val().length;
    lengthSMS2.innerHTML = countSms(txt2.val().length, 170);
    translengthLetters2.innerHTML = transElem2.val().length;
    transLengthSMS2.innerHTML = countSms(transElem2.val().length, 160);
  });
  $('.txt2').on('input', function (e) {
    var dataText2 = $(this).attr('data-txt2');
    var txtValue2 = $(this).val();
    var transElem2 = $("[data-txtTrans2=\"".concat(dataText2, "\"]"));
    transElem2.val(rus_to_latin(txtValue2));
    lengthLetters2.innerHTML = $(this).val().length;
    lengthSMS2.innerHTML = countSms($(this).val().length, 170);
    translengthLetters2.innerHTML = transElem2.val().length;
    transLengthSMS2.innerHTML = countSms(transElem2.val().length, 160);
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

var numbersInputs = document.querySelectorAll('.numbers');
var maskOptions = {
  mask: Number,
  min: -10000,
  max: 10000,
  maxLength: 2,
  thousandsSeparator: ' '
};
numbersInputs.forEach(function (el) {
  var mask = IMask(el, maskOptions);
});
var numbersPhone = document.querySelectorAll('.numbersPhone');
var maskOptionsPhone = {
  mask: '+{7}(000)000-00-00'
};
numbersPhone.forEach(function (el) {
  var mask = IMask(el, maskOptionsPhone);
});