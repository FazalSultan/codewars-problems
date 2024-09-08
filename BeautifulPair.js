function beautifulPairs(a, b) {
  var uniqueValue;
  var extraValue;
  var location;
  for (var i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      uniqueValue = a[i];
    }
  }
  for (var j = 0; j < b.length; j++) {
    if (!a.includes(b[j])) {
      extraValue = b[j];
      location = j;
    }
  }
  if (typeof extraValue == "undefined" && typeof location == "undefined") {
    // duplicate values Occure
    for (var k = 0; k < b.length; k++) {
      if (b[k] == b[k + 1]) {
        location = k +1;
        b[k + 1] = uniqueValue;
      }
    }
  }

  console.log(uniqueValue);
  console.log(location);
  console.log(extraValue);
  console.log(b)
}
beautifulPairs([1, 2, 3, 4,8], [1, 2, 3,8]);
