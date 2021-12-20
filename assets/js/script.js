var timerEl = document.getElementById('countdown');
var startBtn = document.querySelector("#start");

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

function startquiz() {
    countdown();
};


startBtn.addEventListener("click", startquiz);