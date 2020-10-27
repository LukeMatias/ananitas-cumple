var countDownDate = new Date("Nov 16 2020 00:00:00 GMT-0300").getTime();

var countDownFunction = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = ('0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
  var minutes = ('0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
  var seconds = ('0' + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);

  document.getElementById("date").innerHTML = days + "d " + hours + "h " + minutes + "m " +
    seconds + "s ";

  if (distance < 0) {
    clearInterval(countDownFunction);
    document.getElementById("date").innerHTML = "Hello World";

  }
}, 1000);