var timerEl = document.getElementById('countdown');
var chosenanswer = document.querySelector("#choice");


var countdown = function() {
    var timeLeft = 75;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = 'Time: ' + timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
        timerEl.textContent = 'Time: 0';
    }
  }, 1000);
}

var runquestion2 = function() {
    document.getElementById('que1').style.display = "none";
    document.getElementById('que2').style.display = "block"; 
}


document.getElementById('start').onclick = function() {
    //remove beginning page
    document.getElementById('opening').style.display = "none";
    //starts timer
    countdown();
    //brings up first question
    document.getElementById('que1').style.display = "block";
}


chosenanswer.addEventListener("click", runquestion2);