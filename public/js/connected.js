$(function () {
    var socket = io();
    socket.on('update', function (msg) {
        console.log("test")
        $('span').text(msg);
    });
    socket.on('disconnected', function (msg) {
        $('span').append(msg);
    });
});


var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

function drawFace(){
context.beginPath();
context.arc(200,200,60,0,2*Math.PI);
context.stroke();
};

function drawLeftEye(){
context.beginPath();
context.arc(172,200,15,0,2*Math.PI);
context.stroke();

context.beginPath();
context.arc(172,200,7,0,2*Math.PI);
context.stroke();
};

function drawRightEye(){
context.beginPath();
context.arc(228,200,15,0,2*Math.PI);
context.stroke();

context.beginPath();
context.arc(228,200,7,0,2*Math.PI);
context.stroke();
};

function drawLeftEar(){
context.beginPath();
context.moveTo(180, 143);  //moves right point(right, down)
context.bezierCurveTo(150,50,120,80,140,190);
context.stroke();
  
  context.beginPath();
context.moveTo(168, 150);  //moves right point(right, down)
context.bezierCurveTo(150,100,140,80,150,166);
context.stroke();
};

function drawRightEar(){
context.beginPath();
context.moveTo(257, 180);  //moves right point(right, down)
context.bezierCurveTo(270,50,220,80,210,140);
context.stroke();
  
context.beginPath();
context.moveTo(245, 160);  //moves right point(right, down)
context.bezierCurveTo(250,70,240,100,220,143);
context.stroke();
};

function drawNose(){
  context.beginPath();
  context.arc(200,217,9,0, 2*Math.PI);
  context.stroke();
};

function drawMouth(){
  context.beginPath();
  context.arc(200,235,19,0, Math.PI);
  context.lineTo(219, 235);
  context.stroke();
   
 context.beginPath();
  context.moveTo(215, 247);
  context.bezierCurveTo(215, 240,180,240, 185, 247); 
  context.stroke();

};

drawFace();
drawLeftEye();
drawRightEye();
drawLeftEar();
drawRightEar();
drawNose();
drawMouth();
