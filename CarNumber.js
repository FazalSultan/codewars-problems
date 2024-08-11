/*
Description:
In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

More examples in the test cases.

Good luck!
*/
function solve(arr){
   var sortedArray = arr.sort( (a ,b) => b -a);
   var maxValues = sortedArray.slice(0 ,Math.ceil(sortedArray.length /2));
   sortedArray = sortedArray.slice(Math.ceil(sortedArray.length /2) , sortedArray.length).reverse();
   var result= [];
   while(true){
    result.push( maxValues.shift());
    result.push( sortedArray.shift());
    if(maxValues.length == 0 && sortedArray.length == 0){
        break
    }
   }
   if(arr.length %2!==0){
    result.pop();
   }
   return result;
};
 solve([15,11,10,7,12])
