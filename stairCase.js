function birthdayCakeCandles(candles) {
  // Write your code here
  candles = candles.sort( (a,b ) =>a -b);
  var tallestCandle= candles[candles.length -1];
  var counter =0;
  candles.map(function(val){
    if(val == tallestCandle){
      counter++;
    }
  })
  if(counter === 0){
    return 1
  }else{
    return counter
  }
}
console.log( birthdayCakeCandles([4,4,1,3]))