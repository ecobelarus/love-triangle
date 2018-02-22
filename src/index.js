module.exports = function getLoveTrianglesCount(preferences) {

  var loveTriangles = 0;

  preferences.unshift("0");

    for (var a = 1; a < preferences.length; a++) {
      for (var b = a + 1; b < preferences.length; b++) {
        for (var c = a + 1; c < preferences.length; c++) {
          if (a != b && b != c && c != a &&
              preferences[a] == b && preferences[b] == c && preferences[c] == a) {
                loveTriangles++;
          }
        }
      }
    }

  return loveTriangles;
}