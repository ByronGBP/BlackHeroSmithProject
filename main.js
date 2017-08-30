var audioListen = new Audio("src/music.mp3");
var audioMutedRight = new Audio("src/music.mp3");
var audioMutedBottom = new Audio("src/music.mp3");

var canvas = document.getElementsByClassName('canvas')[0];
var ctx = canvas.getContext('2d');
var currentDimensions;

var squaresForHit;
var blackCircle;
var squares;

window.onload = function() {
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  currentDimensions = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  ctx.fillStyle = "rgba(0,0,0,1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  initSetup();

  setupKeyboard();
};
var intervalMusic;
function animate() {
  _checkAllSquareForDraw();
  clearCanvas();
  blackCircle.draw();
  squaresForHit.draw();
  squares.update();
  requestAnimationFrame(animate);
}

function playMusic(){
  audioListen.play();
  intervalMusic = setInterval(function(){ _checkAllSquare();}, 1);
}

if(audioListen.ended){

  clearInterval(intervalMusic);

}
