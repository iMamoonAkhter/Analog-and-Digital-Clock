let audio = new Audio("clock.mp3")

setInterval(() => {
    audio.play();
    let date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    hrotation =  30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
}, 1000);



function updateClock(){
    let currentTime = new Date()
    let currentHour =  currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds =  currentTime.getSeconds();

    let timeOfDay = (currentHour < 12 ? 'AM':'PM');

    currentMinutes = (currentMinutes < 10 ? '0':'') + currentMinutes
    // currentHour = (currentHour < 10 ? '0':'') + currentHour
    currentSeconds = (currentSeconds < 10 ? '0':'') + currentSeconds

    currentHour = (currentHour>12)? currentHour-12:currentHour;
    currentHour = (currentHour==0)? 12 : currentHour;
    currentHour = (currentHour<10 ? '0':'') + currentHour;



    let currentTimeStr = currentHour + ':'+currentMinutes+':'+currentSeconds+" "+ timeOfDay
    let digitalclock = document.getElementById('clock');
    let digitalHour = digitalclock.querySelector(".hour"); 
    let digitalMint = digitalclock.querySelector(".mint"); 
    let digitalSec = digitalclock.querySelector(".sec"); 
    let digitalAmPm = digitalclock.querySelector(".pmam"); 
    digitalHour.innerHTML = currentHour;
    digitalMint.innerHTML = currentMinutes;
    digitalSec.innerHTML = currentSeconds;
    digitalAmPm.innerHTML = timeOfDay;

}

