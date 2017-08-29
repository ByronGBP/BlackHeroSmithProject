
function Timing(s, e, t) {
  var start = s;
  var end = e;
  var track = t;
  return {
    getParameters: function() {
      return [start, end, track];
    },
    getStart: function() {
      return start;
    },
    getEnd: function() {
      return end;
    },
    getTrack: function(){
      return track;
    }
  };
}
