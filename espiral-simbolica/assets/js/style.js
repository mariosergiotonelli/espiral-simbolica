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

function slickEspiral() {
  $('.bannerRotativo').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
  });
}

$(document).ready(function () {
  slickEspiral();
});