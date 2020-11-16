let countDownDate = new Date("Nov 16 2020 00:00:00 GMT-0300").getTime();

const countDownFunction = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = ('0' + Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
  let minutes = ('0' + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
  let seconds = ('0' + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);

  document.getElementById("date").innerHTML = days + "d " + hours + "h " + minutes + "m " +
    seconds + "s ";

  if (distance < 0) {
    clearInterval(countDownFunction);
     document.getElementById("time").innerHTML = "Dale click :D";
    document.getElementById("date").innerHTML = `<a href="" class="btn  btn-primary">Feliz Cumple <3</a>`;

  }
}, 1000);
