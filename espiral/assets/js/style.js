function redirectForm() {
  $('.btnContato').on('click', function(){
    if (window.location.href.indexOf('lp-yoga') > 0) {
      var submitForm = setInterval(function () {
        if ($('.wpcf7-mail-sent-ok').length) {
          window.open('http://espacocura.com/download/PDF-Yoga.pdf');
          clearInterval(submitForm)
        }
      }, 500)
    }
  })
}

function popupEspaco() {
  $('.popupEspacoCura').fadeIn();
  $('.popupEspacoCura .modal').addClass('active');
}

function fechaPopup() {
  $('.popupBg, .popupEspaco-close').on('click', function () {
    $('.popupBg, .popupEspaco-close, .popupEspacoCura').fadeOut();
    $('.popupEspacoCura .modal').removeClass('active');
    setCookie("PopupEspacoCura", (24 * 60 * 60 * 1000));
  });
}

function getCookie(k) {
  var c = String(document.cookie).split(";");
  var neq = k + "=";

  for (var i = 0; i < c.length; i++) {
    var d = c[i];

    while (d.charAt(0) === " ") {
      c[i] = c[i].substring(1, d.length);
    }

    if (c[i].indexOf(neq) === 0) {
      return decodeURIComponent(c[i].substring(neq.length, c[i].length));
    }
  }

  return null;
}

function setCookie(k, v, expira, path) {
  path = path || "/";

  var d = new Date();
  d.setTime(d.getTime() + (expira * 1000));

  document.cookie = encodeURIComponent(k) + "=" + encodeURIComponent(v) + "; expires=" + d.toUTCString() + "; path=" + path;
}

function slickEspaco() {
  $('.mainPageEspaco-content__fotos.maiores').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.mainPageEspaco-content__fotos.menores',
    infinite: true,
    speed: 400,
  });
  $('.mainPageEspaco-content__fotos.menores').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.mainPageEspaco-content__fotos.maiores',
    dots: false,
    focusOnSelect: true,
    infinite: true,
    speed: 400,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false
        }
      }
    ]
  });

}

$(document).ready(function () {

  redirectForm();
  fechaPopup();
  slickEspaco()

  if (!getCookie('PopupEspacoCura') && window.location.href.indexOf('lp-yoga') < 0) {
    popupEspaco();
  }

  $(".hamburguer").on('click', function () {
    $("nav").toggleClass("open");
    $(this).toggleClass("toggle");
  });

});

$(window).load(function () {});