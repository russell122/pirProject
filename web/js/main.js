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
    }; // tabs('.newsletter__tabs-elem', '.newsletter__content-item');


    tabs('.recipients__tabs-elem1', '.recipients__content-item1');
    tabs('.recipients__tabs-elem2', '.recipients__content-item2');
    tabs('.recipients__tabs-elem3', '.recipients__content-item3');
    tabs('.recipients__tabs-elem4', '.recipients__content-item4'); // tabs('.statistics__top-elem', '.statistics__content-item');
    // tabs('.detailedStatistics__tabs-elem', '.detailedStatistics__content-item');
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
    var selectionInTheEkNewsletter = function selectionInTheEkNewsletter(myTextArea, mySelectName, mySelectNumber, myInputName, myInputNumber) {
      var selectName = document.querySelector(mySelectName);
      var selectNumber = document.querySelector(mySelectNumber);
      var inputName = document.querySelector(myInputName);
      var inputNumber = document.querySelector(myInputNumber);
      var textarea = document.querySelector(myTextArea);
      var rezSelectName = 'Выберите имя';
      var rezSelectNumber = 'Выберите номер';

      if (selectName) {
        selectName.addEventListener('change', function (e) {
          rezSelectName = e.target.value;
          textarea.innerHTML = "".concat(rezSelectName, " ").concat(rezSelectNumber);
        });
      }

      if (selectNumber) {
        selectNumber.addEventListener('change', function (e) {
          rezSelectNumber = e.target.value;
          textarea.innerHTML = "".concat(rezSelectName, " ").concat(rezSelectNumber);
        });
      }

      if (inputName) {
        inputName.addEventListener('input', function (e) {
          rezSelectName = e.target.value;
          textarea.innerHTML = "".concat(rezSelectName, " ").concat(rezSelectNumber);
        });
      }

      if (inputNumber) {
        inputNumber.addEventListener('input', function (e) {
          rezSelectNumber = e.target.value;
          textarea.innerHTML = "".concat(rezSelectName, " ").concat(rezSelectNumber);
        });
      }
    };

    selectionInTheEkNewsletter('.newsletter__form-vk-text > textarea', '.newsletter__form-vkTemplate-baz-name > select', '.newsletter__form-vkTemplate-baz-number > select', '.newsletter__form-vkTemplate-manually-name > input', '.newsletter__form-vkTemplate-manually-number > input');
  };

  mySelectionInTheEkNewsletter(); //
});
$(document).ready(function () {
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
  }); // let myDataNumber = document.querySelectorAll('[data-number]');
  // let myTxt = document.querySelector('.txt');
  // let newsletterFormTextSymbol = document.querySelector('.newsletter__form-text-symbol > span');
  // let newsletterFormTextSms = document.querySelector('.newsletter__form-text-sms > span');

  var numberOfMessages = function numberOfMessages(myElems, myTxt, myLengthLetters, myLengthSMS, myTransLengthLetters, myTransLengthSMS, searchElem) {
    var elems = document.querySelectorAll(myElems);
    var txt = document.querySelector(myTxt);
    var lengthLetters = document.querySelector(myLengthLetters);
    var lengthSMS = document.querySelector(myLengthSMS);
    var translengthLetters = document.querySelector(myTransLengthLetters);
    var transLengthSMS = document.querySelector(myTransLengthSMS);

    if (lengthLetters && lengthSMS) {
      lengthLetters.innerHTML = txt.value.length;
      lengthSMS.innerHTML = Math.floor(lengthLetters.innerHTML / 17);
    }

    if (txt) {
      txt.addEventListener('input', function (e) {
        lengthLetters.innerHTML = e.target.value.length;
        lengthSMS.innerHTML = Math.floor(lengthLetters.innerHTML / 17);
        translengthLetters.innerHTML = e.target.value.length;
        transLengthSMS.innerHTML = Math.floor(lengthLetters.innerHTML / 17);
      });
    }

    if (elems) {
      elems.forEach(function (elem) {
        elem.addEventListener('click', function (e) {
          lengthLetters.innerHTML = txt.value.length + e.target.getAttribute(searchElem).length;
          lengthSMS.innerHTML = Math.floor(lengthLetters.innerHTML / 17);
          translengthLetters.innerHTML = txt.value.length + e.target.getAttribute(searchElem).length;
          transLengthSMS.innerHTML = Math.floor(lengthLetters.innerHTML / 17);
        });
      });
    }
  };

  numberOfMessages('[data-number]', '.txt', '.newsletter__form-text-symbol > span', '.newsletter__form-text-sms > span', '.newsletter__transliteration-symbol > span', '.newsletter__transliteration-sms > span', 'data-number');
  numberOfMessages(false, '.txtTrans', '.newsletter__transliteration-symbol > span', '.newsletter__transliteration-sms > span');
  numberOfMessages('[data-number2]', '.txt2', '.newsletter__form-text-symbol2 > span', '.newsletter__form-text-sms2 > span', '.newsletter__transliteration-symbol2 > span', '.newsletter__transliteration-sms2 > span', 'data-number2');
  numberOfMessages(false, '.txtTrans2', '.newsletter__transliteration-symbol2 > span', '.newsletter__transliteration-sms2 > span');
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
  $('[data-number2]').on('click', function (e) {
    e.preventDefault();
    var parentElem2 = $(this).closest('.newsletter__form-text2');
    var txt2 = parentElem2.find('.txt2');
    var dataText2 = txt2.attr('data-txt2');
    var transElem2 = $("[data-txtTrans2=\"".concat(dataText2, "\"]")); // let textValue = txt.val();

    txt2.val(txt2.val() + $(this).attr('data-number2'));
    transElem2.val(rus_to_latin(txt2.val()));
  });
  $('.txt2').on('input', function (e) {
    var dataText2 = $(this).attr('data-txt2');
    var txtValue2 = $(this).val();
    var transElem2 = $("[data-txtTrans2=\"".concat(dataText2, "\"]"));
    transElem2.val(rus_to_latin(txtValue2));
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