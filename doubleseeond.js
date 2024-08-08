
function doubleEveryOther(arr) {
    return  arr.map( (val ,index)=> index %2 !== 0 ? val *2 : val)
  }
 console.log( doubleEveryOther([1 ,5 , 4, 9]));