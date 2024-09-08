/*
    A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return -1.
 */

function getMoneySpent(keyboards, drives, b) {
  var resultantArray = [];
  keyboards.map((K) =>
    drives.map((D) => (K + D <= b ? resultantArray.push(K + D) : ""))
  );
  if (resultantArray.length === 0) {
    return -1;
  } else {
    return Math.max(...resultantArray);
  }
}
getMoneySpent([40, 50, 60], [5, 8, 12], 60);
