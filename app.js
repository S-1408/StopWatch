window.onload = function(){
    var tens =00;
    var secs = 00;
    var mins = 00;
    
    var appendTens = document.getElementById('tens');
    var appendSecs = document.getElementById('secs');
    var appendMins = document.getElementById('mins')
    var startButton = document.getElementById('start');
    var stopButton = document.getElementById('stop');
    var resetButton = document.getElementById('reset');
    
    var Interval;
    
    startButton.onclick = function(){
    clearInterval(Interval);
    
    Interval = setInterval(startTimer,10);
    }
    
    stopButton.onclick =function() {
    clearInterval(Interval)
    }
    resetButton.onclick = function(){
    
        clearInterval(Interval);
        tens = "00";
        secs = "00";
        mins = "00"
        appendSecs.innerHTML = secs;
        appendTens.innerHTML = tens;
        appendMins.innerHTML = mins;  
    }
    
    function startTimer(){
        tens++;
        if(tens<9){
         appendTens.innerHTML = "0" +tens;
        }
        
         if(tens>9){
    appendTens.innerHTML = tens;
        }
       if(tens>60){
            console.log("secs");
            secs++;
            appendSecs.innerHTML = "0"+secs;
            tens =0;
    
            appendTens.innerHtml = "0" + 0
        }
        if(secs>9){
            appendSecs.innerHTML=secs;
        }

        if(secs>60){
            console.log("mins");
            mins++;
            appendMins.innerHTML = "0" +mins;
            secs = 0;
            appendSecs.innerHTML = "0" + 0;
             
            tens = 0;
            appendSecs.innerHTML ="0"+ 0;
           
        }
        if(mins>9){
            appendSecs.innerHTML=secs;
        }

    }
}
