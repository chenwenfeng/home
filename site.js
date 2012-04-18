function $(id) { return document.getElementById(id); }

var app = {};


app.init = function() {
  this.initTransform();
  this.startClock();
}

app.initTransform = function() {
  var xAngle = 0, yAngle = 0;
  document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
      case 37: // left
        yAngle -= 90;
        break;
      case 38: // up
        xAngle += 90;
        break;
      case 39: // right
        yAngle += 90;
        break;
      case 40: // down
        xAngle -= 90;
        break;
    };
    $('cube').style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
  }, false);
}

app.startClock = function() {
  var angle = 360/60;
  var date = new Date();
  var hour = date.getHours();
  if(hour > 12) {
    hour = hour - 12;
  }
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var hourAngle = (360/12)*hour + (360/(12*60))*minute;
  $('minute').setStyle('-webkit-transform: rotate('+angle*minute+'deg)');
  $('second').setStyle('-webkit-transform: rotate('+angle*second+'deg)');
  $('hour').setStyle('-webkit-transform: rotate('+hourAngle+'deg)');
}

app.init();
