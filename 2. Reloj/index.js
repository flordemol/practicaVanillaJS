const secondHand = document.querySelector('.segundos');
const minuteHand = document.querySelector('.minutos');
const hourHand = document.querySelector('.horas');
const digital = document.querySelector('.relojDigital');


function setDate(){
    const now = new Date();

    // Agrego 90° a todo porque arranco con esa diferencia en todas las agujas (.aguja {transform: rotate(90deg);})
    const seconds = now.getSeconds();
    const secondsDegrees = (( seconds / 60 ) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const min = now.getMinutes();
    const minDegrees = (( min / 60 ) * 360) + 90;
    minuteHand.style.transform = `rotate(${minDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = (( hour / 12 ) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

function relojDigital(){
    const now = new Date();
    const sec = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
    const min = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
    const hs = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();

    digital.innerHTML = `${hs} : ${min} : ${sec}`;
}

setInterval(relojDigital, 1000);