var MARGIN_SQUARE = 0.1;

function SquaresForHit(bunch, col) {

  var squares = bunch || _createFourSquares(col || "rgba(0, 128, 255, 0.5");

  return {
    draw: function() {
      _renderSquares(squares);
    },
    getSquares: function() {
      return squares;
    }
  };
}

function _renderSquares(squares) {
  squares.map(function(square) {
    square.draw();
  });
}

function _createFourSquares(col) {
  positions = _calculatePositions();
  return [_createSquareAtTrack(1,positions[0],col),_createSquareAtTrack(2, positions[1], col),_createSquareAtTrack(3,positions[2],  col),_createSquareAtTrack(4, positions[3],col)];
}

function _calculatePositions() {
  var currentRadius = blackCircle.getRadius();
  var currentCirclePos = blackCircle.getPosition();

  var squareWidth = currentDimensions.height * WIDTH;
  var margin = currentDimensions.height * MARGIN_SQUARE;

  return [{
    x: currentCirclePos.x - squareWidth / 2,
    y: currentCirclePos.y - margin - squareWidth * 2
  },
  {
    x: currentCirclePos.x + margin + squareWidth,
    y: currentCirclePos.y - squareWidth / 2
  },
  {
    x: currentCirclePos.x - squareWidth / 2,
    y: currentCirclePos.y + margin + squareWidth
  },
  {
    x: currentCirclePos.x - margin - squareWidth * 2,
    y: currentCirclePos.y - squareWidth / 2
  }];
}
