
function _checkAllSquare(){
  if(audio.ended){
    clearInterval(intervalMusic);
  }

  _checkFirstTrack();
  _checkSecondTrack();
  _checkThirdTrack();
  _checkFourthTrack();
}

var matchedFirst = false;
var matchedSecond = false;
var matchedThird = false;
var matchedFourth = false;

function _checkFirstTrack(){
  if (!matchedFirst && _inTime(recordsRedeables[0][0])){
    _highligthSquare(0);
    matchedFirst = true;
  }
  if (_finished(recordsRedeables[0][0])){
    _stopHighlightSquare(0);
    _removeFromTrack(0);
    matchedFirst = false;
  }
}

function _checkSecondTrack(){
  if (!matchedSecond && _inTime(recordsRedeables[1][0])){
    _highligthSquare(1);
    matchedSecond = true;

  }
  if (_finished(recordsRedeables[1][0])){
    _stopHighlightSquare(1);
    _removeFromTrack(1);
    matchedSecond = false;
  }
}

function _checkThirdTrack(){
  if (!matchedThird  && _inTime(recordsRedeables[2][0])){
    _highligthSquare(2);
    matchedThird = true;
  }
  if (_finished(recordsRedeables[2][0])){
    _stopHighlightSquare(2);
    _removeFromTrack(2);
    matchedThird = false;
  }
}

function _checkFourthTrack(){
  if (!matchedFourth && _inTime(recordsRedeables[3][0])){
    _highligthSquare(3);
    matchedFourth = true;
  }
  if (_finished(recordsRedeables[3][0])){
    _stopHighlightSquare(3);
    _removeFromTrack(3);
    matchedFourth = false;
  }
}


function _removeFromTrack(track){
  recordsRedeables[track].splice(0,1);
}

function _finished(timing){
  return timing.getEnd().toFixed(2) === audio.currentTime.toFixed(2);
}

function _inTime(timing){
  return timing.getStart().toFixed(2) === audio.currentTime.toFixed(2);
}

function _highligthSquare(track) {
  ctx.clearRect(0,0,currentDimensions.width,currentDimensions.height);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

    squaresForHit.getSquares()[track].changeColor("rgba(0, 128, 255, 1");
        blackCircle.draw();
}

function _stopHighlightSquare(track) {
    ctx.clearRect(0,0,currentDimensions.width,currentDimensions.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //squaresForHit.draw();
    squaresForHit.getSquares()[track].changeColor("rgba(0, 128, 255, 0");
    blackCircle.draw();
    //squaresForHit.getSquares()[track].changeColor("rgba(0, 128, 255, 0");
}
