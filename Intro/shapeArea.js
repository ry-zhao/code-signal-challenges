function shapeArea(n) {
  var output;
  for (var i = 1; i <= n; i++) {
    if (i === 1) {
      output = 1;
    } else {
      output += (i - 2) * 4 + 4;
    }
  }
  return output;
}
