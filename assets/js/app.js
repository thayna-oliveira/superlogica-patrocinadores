const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date("Dec 31, 2019 00:00:00").getTime(),
  x = setInterval(function() {
    let now = new Date().getTime(),
      distance = countDown - now;

    (document.getElementById("days").innerText = Math.floor(distance / day)),
      (document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      )),
      (document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      )),
      (document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      ));
  }, second);

$(function() {
  ScrollReveal().reveal(".info", {
    origin: "bottom",
    distance: "20px",
    duration: 1e3,
    interval: 80,
    delay: 30,
  });

  ScrollReveal().reveal(".form", {
    origin: "bottom",
    distance: "20px",
    duration: 1e3,
    interval: 80,
    delay: 30,
  });

  ScrollReveal().reveal(".icons", {
    origin: "bottom",
    distance: "20px",
    duration: 1e3,
    interval: 80,
    delay: 30,
  });

  ScrollReveal().reveal(".contact", {
    origin: "bottom",
    distance: "20px",
    duration: 1e3,
    interval: 80,
    delay: 30,
  });
});

var $slide = $(".slider");

$(window).resize(function() {
  var $windowWidth = $(document).width();
  if ($windowWidth < 992) {
    if ($slide.hasClass("slick-initialized")) {
      $slide.slick("unslick");
    }
    $slide.slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
    });
  } else {
    $slide.slick("unslick");
  }
});
