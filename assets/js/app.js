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

  ScrollReveal().reveal(".icons", {
    origin: "bottom",
    distance: "20px",
    duration: 1e3,
    interval: 80,
    delay: 30,
  });

  ScrollReveal().reveal(".sponsors__brand", {
    origin: "bottom",
    distance: "10px",
    duration: 1e3,
    interval: 50,
    delay: 80,
  });


  


});
