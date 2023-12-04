console.log("hello");


var circle  = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downbtn = document.getElementById("downbtn");

var rotateValue = circle.style.transform;   //store (odeg) value//  
var rotateSum;

upBtn.onclick =function (){
    rotateSum = rotateValue + "rotate(-90deg)";
     circle.style.transform = rotateSum ;
     rotateValue  = rotateSum ;
}

downBtn.onclick =function (){
    rotateSum = rotateValue + "rotate(90deg)";
     circle.style.transform = rotateSum ;
     rotateValue  = rotateSum ;
}