var audio = new Audio("src/music.mp3");

var canvas = document.getElementsByClassName('canvas')[0];
var ctx = canvas.getContext('2d');
var currentDimensions;

var squaresForHit;
var blackCircle;

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
  //setupKeyboard();
};
var intervalMusic;
function animate() {
  _checkAllSquare();
  ctx.clearRect(0,0,currentDimensions.width,currentDimensions.height);
  blackCircle.draw();
  squaresForHit.draw();
  requestAnimationFrame(animate);
}

function playMusic(){
  audio.play();
  intervalMusic = setInterval(function(){ _checkAllSquare();}, 1);
}

if(audio.ended){

  clearInterval(intervalMusic);

}
