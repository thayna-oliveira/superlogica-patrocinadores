function youtubeEmbed() {
  for (
    var e = document.querySelectorAll(".youtube"), t = 0;
    t < e.length;
    t++
  ) {
    var d = new Image();
    
      d.addEventListener("load", void e[t].appendChild(d)),
      e[t].addEventListener("click", function() {
        var e = document.createElement("iframe");
        e.setAttribute("frameborder", "0"),
          e.setAttribute("allowfullscreen", ""),
          e.setAttribute(
            "src",
            "https://www.youtube.com/embed/" +
              this.dataset.embed +
              "?rel=0&showinfo=0&autoplay=1"
          ),
          e.setAttribute("allow", "autoplay; encrypted-media;"),
          (this.innerHTML = ""),
          this.appendChild(e);
      });
  }
}

$(document).ready(function() {
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
      if ($slide.hasClass("slick-initialized")) {
        $slide.slick("unslick");
      }
    }
  });

  youtubeEmbed();
});
