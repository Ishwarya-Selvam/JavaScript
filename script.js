window.onload = function(){
    let minutes = 0;
    let seconds = 0;
    let tens = 0;

    let appendMinutes = document.querySelector('#minutes');
    let appendSeconds = document.querySelector('#seconds');
    let appendTens = document.querySelector('#tens');

    let strtBtn = document.querySelector('#start-timer');
    let pauseBtn = document.querySelector('#pause-timer');
    let resetBtn = document.querySelector('#reset-timer');

    let Interval;

    startTimer = () =>{
        tens++;
        if(tens <= 9)
            appendTens.innerHTML = '0' + tens
        if(tens > 9)
            appendTens.innerHTML = tens
        if(tens > 99){
            seconds++;
            appendSeconds.innerHTML = '0' + seconds
            tens = 0;
            appendTens.innerHTML = '0' + tens;
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
        if(seconds > 59){
            minutes++;
            appendMinutes.innerHTML = '0' + minutes
            seconds = 0
            appendSeconds.innerHTML = '0' + seconds
        }
    }
    strtBtn.onclick = () =>{
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    pauseBtn.onclick = () =>{
        clearInterval(Interval);
    }
    resetBtn.onclick = () =>{
        appendMinutes.innerHTML = '0' + 0;
        appendSeconds.innerHTML = '0' + 0;
        appendTens.innerHTML = '0' + 0;
    }
}