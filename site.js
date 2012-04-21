function $(id) { return document.getElementById(id); };
function $$(cls, parent) { return parent.getElementsByClassName(cls); };
function hasClass(ele, cls) {
  return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
};
function addClass(ele, cls) {
  if (!this.hasClass(ele, cls)) ele.className += " " + cls;
};
function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
          var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
};
function indexOf(v, arr) {
  for(var i = arr.length; i-- && arr[i] !== v;);
       return i;
};


var app = {};


app.init = function() {
  this.header = $('header');
  this.navs = $$('nav', header);
  this.container = $('content');


  this.slideShow();
}

app.slideShow = function() {
  var slideShow = $('slide-show');
  var slides = $$('slide', slideShow);
  var self = this;

  for (var i = this.navs.length - 1; i >= 0; i--) {
    this.navs[i].addEventListener('click', function(e) {
      for (var j = self.navs.length - 1; j >= 0; j--) {
        removeClass(self.navs[j], 'active');
      }
      addClass(e.target, 'active');
      slideShow.style.left = -indexOf(e.target, self.navs) * 980  + "px";
    })
  };
};

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
};

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
};

app.init();
