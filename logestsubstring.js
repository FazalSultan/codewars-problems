/*
    PROBLEM-STATEMENT (8Kyu)

    Develope a function which can take an array as parameter, and insert the value at the mention position
    NOTE: Handle all the important checks.
*/ 

function insertionbyPos(arr, val, pos) {
  if (pos > arr.length - 1) {
    console.log("Please Enter Valid Psosition....");
    return;
  } else {
    for (var i = arr.length - 1; i >= pos; i--) {
      arr[i + 1] = arr[i];
      if (i === pos) {
        arr[i] = val;
      }
    }
  }
}
insertionbyPos([1, 2, 4, 5, 6, 7], 100, 3);
