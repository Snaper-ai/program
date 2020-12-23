let frame = document.getElementById("frame");
let currentInterval;
let i = 0;
let fi;
let x;
let y;
let a = 220;
let b = 50;
setInterval(function() {
    i++;
    psi = (i * 3.14159 / 180.0);
    fi = Math.atan2(a * Math.sin(psi), b * Math.cos(psi));
    x = a * Math.cos(fi)+250;
    y = b * Math.sin(fi)+160;
    frame.style.left = `${x}px`;
    frame.style.top = `${y}px`;
    if(i == 360){
        i=0;
    }
   if(x < 50){
      frame.style.zIndex = -99;
       }
    if(x > 400){
      frame.style.zIndex = 99; 
    }
	}, 25);

