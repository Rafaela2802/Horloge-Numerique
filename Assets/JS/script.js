const heures = document.getElementById('heures');
const minutes = document.getElementById('minutes');
const secondes = document.getElementById('secondes');

const Horloge = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    heures.textContent = hr;
    minutes.textContent = min;
    secondes.textContent = s;

})