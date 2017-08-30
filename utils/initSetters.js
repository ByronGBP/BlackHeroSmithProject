
function initSetup() {
  _initCircle();
  _initSquaresForHits();
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
}

function _initSquares () {
  squares = new Squares();
}
