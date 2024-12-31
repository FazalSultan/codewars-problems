    
/*
for example we have a String like 'fazal sultan'
the frequance of a=1 ,b =2, c=3 ad so on...
return that string from the above string of which have the max sum number
 */


function high(x) {
  const alphabetsValues = {
    " ": 0, //whitespace
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  var temp = Object.keys(alphabetsValues);
  var result = [];
  x = x.toLowerCase();
  for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < temp.length; j++) {
      if (x[i] == temp[j]) {
        result.push(j);
      }
    }
  }
  var empty = [];
  var counter = 0;
  for (var k = 0; k < result.length; k++) {
    counter += result[k];
    if (result[k] == 0 || k == result.length - 1) {
      empty.push(counter);
      counter = 0;
    }
  }
  var max = Math.max(...empty);
  var g;
  for (g = 0; g < empty.length; g++) {
    if (empty[g] == max) {
      break;
    }
  }
  var Ok = [];
  Ok = x;
  Ok = Ok.split(" ");
  return Ok[g];
}
console.log(high("fff aa bb ab ddd"));
