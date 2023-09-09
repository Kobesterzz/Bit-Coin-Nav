document.addEventListener("DOMContentLoaded", function () {

const bitcoinHalvingDate = new Date(2024, 4, 7, 0, 0, 0).getTime();

//update the time every second
const countdown = document.getElementById('countdown');

const updateCountdown = () => {
    const now = new Date().getTime();
    const timeRemaning = bitcoinHalvingDate - now;

    if(timeRemaning <= 0){
        countdown.innerHTML = "Bitcoin Halving is happening now!";
    } else{
       const days = Math.floor(timeRemaning / (1000 * 60 * 60 * 24)); 
       const hours = Math.floor((timeRemaning % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
       const minutes = Math.floor((timeRemaning % (1000 * 60 * 60 )) / (1000 * 60)); 
       const seconds = Math.floor((timeRemaning % (1000 * 60)) / 1000); 

       countdown.innerHTML = days + ' Date ' + hours + ' Hours ' + minutes + ' Minutes ' + seconds + ' Seconds';
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);

});