$(document).ready(function() {
    var timer;
    var timerLength = 25 * 60;
    var timeRemaining = timerLength;
    var isRunning = false;
    
    function startTimer() {
      isRunning = true;
      timer = setInterval(function() {
        timeRemaining--;
        var minutes = Math.floor(timeRemaining / 60);
        var seconds = timeRemaining % 60;
        var displayTime = ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
        $('#time').html(displayTime);
        if (timeRemaining === 0) {
          $('#notification')[0].play();
          clearInterval(timer);
          isRunning = false;
        }
      }, 1000);
    }
    
    $('#start').click(function() {
      if (!isRunning) {
        startTimer();
      }
    });
    
    $('#reset').click(function() {
      clearInterval(timer);
      timeRemaining = timerLength;
      var displayTime = ('0' + Math.floor(timerLength / 60)).slice(-2) + ':00';
      $('#time').html(displayTime);
      isRunning = false;
    });
  });