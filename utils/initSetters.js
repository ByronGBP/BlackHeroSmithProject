
function initSetup() {
  _initCircle();
  _initSquaresForHits();
  _initSquares();
  _getDelayTime();

}

function _getDelayTime() {
  mockForTime = new MockSquares();
  mockForTime.getTimeToHit();
}

function _initCircle() {
  blackCircle = new BlackCircle();
  blackCircle.draw();
}

function _initSquaresForHits() {
  squaresForHit = new SquaresForHit();
  squaresForHit.draw();
}

function _initSquares() {
  squaresAnimated = new Squares();
}
