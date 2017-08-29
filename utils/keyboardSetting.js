var KEYBOARD_CODE = {
  arrowLeft: 37,
  arrowUp: 38,
  arrowRight: 39,
  arrowBottom: 40
};

function setupKeyboard() {
  $(document).on("keydown", function(e) {
      if (e.which === KEYBOARD_CODE.arrowLeft) {
        e.preventDefault();

        _highligthSquare(KEYBOARD_CODE.arrowLeft);

      }

      else if (e.which === KEYBOARD_CODE.arrowUp) {
        e.preventDefault();

        _highligthSquare(KEYBOARD_CODE.arrowUp);

      }

      else if (e.which === KEYBOARD_CODE.arrowRight) {
        e.preventDefault();

        _highligthSquare(KEYBOARD_CODE.arrowRight);

      }
      else if (e.which === KEYBOARD_CODE.arrowBottom) {
        e.preventDefault();

        _highligthSquare(KEYBOARD_CODE.arrowBottom);

      }
  });
  //TODO: refactor!
  setupKeyboard2();
}

function setupKeyboard2() {
  $(document).on("keyup", function(e) {
      if (e.which === KEYBOARD_CODE.arrowLeft) {
        e.preventDefault();

        _stopHighlightSquare(KEYBOARD_CODE.arrowLeft);
      }

      else if (e.which === KEYBOARD_CODE.arrowUp) {
        e.preventDefault();

        _stopHighlightSquare(KEYBOARD_CODE.arrowUp);
      }

      else if (e.which === KEYBOARD_CODE.arrowRight) {
        e.preventDefault();

        _stopHighlightSquare(KEYBOARD_CODE.arrowRight);
      }
      else if (e.which === KEYBOARD_CODE.arrowBottom) {
        e.preventDefault();

        _stopHighlightSquare(KEYBOARD_CODE.arrowBottom);
      }
  });
}

function _getTrack(key) {
  switch(key) {
    case KEYBOARD_CODE.arrowLeft:
      return 3;
    case KEYBOARD_CODE.arrowUp:
      return 0;
    case KEYBOARD_CODE.arrowRight:
      return 1;
    case KEYBOARD_CODE.arrowBottom:
      return 2;
    default:
      console.log("Invalid key");
  }
}

// function _highligthSquare(key) {
//     var track = _getTrack(key);
//     squaresForHit.getSquares()[track].changeColor("rgba(50, 200, 0, 1");
// }
//
// function _stopHighlightSquare(key) {
//     var track = _getTrack(key);
//     squaresForHit.getSquares()[track].changeColor("rgba(0, 200, 0, 0.5");
// }
