
setInterval(function(){
  var date = new Date();
  updateClock(date);
  digitalClock(date);
},1000)

function updateClock(date){
// var timeDiv = document.getElementById('time');
// var time = date.getHours() +':'+ date.getMinutes() +':'+date.getSeconds();
// timeDiv.innerHtml = time;


var secHand = document.getElementById('secHand').style;
var minHand = document.getElementById('minHand').style;
var hourHand = document.getElementById('hourHand').style;

secHand.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
minHand.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
hourHand.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * (6/12)) + "deg)";
}

 function digitalClock(date){
 var div = document.getElementById('time');

 var digitalSec = date.getSeconds();
 digitalSec = (digitalSec < 10) ? "0" + digitalSec : digitalSec;

 var digitalMin = date.getMinutes();
 digitalMin = (digitalMin < 10) ? "0" + digitalMin : digitalMin;

 var digitalHour = date.getHours();
 var amPm=(digitalHour >= 12) ? 'PM' : 'AM';

digitalHour = (digitalHour > 12) ? (digitalHour - 12) : digitalHour;

 div.textContent = digitalHour + ':' + digitalMin + ':' + digitalSec +' '+ amPm;
}
