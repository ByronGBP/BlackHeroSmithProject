var audioListen = new Audio("src/music.mp3");
var audioMutedRight = new Audio("src/music.mp3");
var audioMutedBottom = new Audio("src/music.mp3");

var canvas = document.getElementsByClassName('canvas')[0];
var ctx = canvas.getContext('2d');
var currentDimensions;

var squaresForHit;
var blackCircle;
var squaresAnimated;

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
  clearCanvas();
  squaresAnimated.updateSquares();
  blackCircle.draw();
  squaresForHit.draw();
  requestAnimationFrame(animate);
}

function playMusic(){
  _startAudiosWithDelay();
  intervalMusic = setInterval(function(){ _checkAllSquareForDraw();}, 1);
  animate();
}
