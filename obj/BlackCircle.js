var MAX_RADIUS = 0.125;
var PI = Math.PI;

function BlackCircle() {
  var position = _getScreenMiddle();
  var radius = _getRadius();

  return {
    draw: function() {
      position = _getScreenMiddle();
      radius = _getRadius();

      _drawCircle(position, radius);
    },
    getPosition: function() {
      return position;
    },
    getRadius: function() {
      return radius;
    }
  };
}

function _drawCircle(pos, radius) {
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, radius, 0, 2 * PI);
  //color = _randomColor();
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'rgba(153,0,76,0.5)';
  ctx.stroke();
}

function _randomColor() {
  var random = Math.random();
  if (random > 0.5){
    return "rgba(51,153,255,1)";
  }
  return "rgba(255,0,0,1)";

}

function _getScreenMiddle() {
  return {
    x: currentDimensions.width / 2,
    y: currentDimensions.height / 2,
  };
}

function _getRadius() {
  var minSize = Math.min(currentDimensions.width, currentDimensions.height);
  return minSize * MAX_RADIUS;
}
