var timerEl = document.getElementById('countdown');
var chosenanswer = document.querySelector("#choice");
var startbtn = document.querySelector("#start");
//var answer = document.querySelector("#correct");



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

var showhighscores = function() {
  event.preventDefault();
  document.getElementById("highscores").style.display = "block";
  document.getElementById('opening').style.display = "none";

}

var scoreForm = function() {
  document.getElementById("finalscore").style.display = "block";

  document.getElementById("submit").onclick = function() {
      document.getElementById("finalscore").style.display = "none";
      showhighscores();
  }
}


var runquestion = function() {
    document.getElementById('que1').style.display = "none";
    document.getElementById('que2').style.display = "block";

    //var que1Input = document.getElementById("que1").value;
    //if (que1Input == "3.alerts") {
        //window.alert("Correct!")
       //answer = "Correct!";
    //}else {
       //answer = "Wrong!";
    //}
    //console.log(que1Input);

    document.getElementById("que2").onclick = function() {
      document.getElementById("que2").style.display = "none";
      document.getElementById("que3").style.display = "block";
    }
    document.getElementById("que3").onclick = function() {
        document.getElementById("que3").style.display = "none";
        document.getElementById("que4").style.display = "block";
    }
    document.getElementById("que4").onclick = function() {
        document.getElementById("que4").style.display = "none";
        document.getElementById("que5").style.display = "block";
    }
    document.getElementById("que5").onclick = function() {
        document.getElementById("que5").style.display = "none";
        scoreForm();
    }
}

function runquiz() {
   countdown();
   document.getElementById('opening').style.display = "none";
   document.getElementById('que1').style.display = "block";

   

};



startbtn.addEventListener("click", runquiz);
chosenanswer.addEventListener("click", runquestion);