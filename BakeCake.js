/* 
        PROBLEM-STATEMENT (5kyu)
        Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

        Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

        Examples:

        // must return 2
        cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
        // must return 0
        cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

*/
function cakes(obj1, obj2) {
  var obj1array = Object.keys(obj1);
  var obj2array = Object.keys(obj2);
  var result = [];

  var obj1values = Object.values(obj1);
  var obj2values = Object.values(obj2);
  for (var i = 0; i < obj1array.length; i++) {
    if (!obj2array.includes(obj1array[i])) {
      result.push(obj1array[i]);
    }
  }
  if (result.length >= 1) {
    return 0;
  } else {
    var res = [];
    var j = 0;
    for (var i = 0; i < obj1values.length; i++) {
      if (isNaN(obj2values[j])) {
        res.push(Math.floor(obj1values[i]));
      } else {
      }
      res.push(Math.floor(obj2values[i] / obj1values[j]));
      j++;
    }
    var sorted = res.sort((a, b) => a - b);
    return sorted[0];
  }
}
cakes(
  { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
  { sugar: 500, flour: 2000, milk: 2000 }
);
