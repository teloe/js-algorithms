'use strict';

/**
 * Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally. Brian wants to order
 * something that Anna is allergic to though, and they agree that Anna won't pay for that item. Brian gets the check and
 * calculates Anna's portion. You must determine if his calculation is correct.
 *
 * For example, assume the bill has the following prices: . Anna declines to eat item  which costs . If Brian
 * calculates the bill correctly, Anna will pay . If he includes the cost of , he will calculate . In the second case,
 * he should refund  to Anna.
 */

function bonApetite(bill, k, b) {
  let sum = bill.reduce((i, j) => i + j, 0);
  let costPerPerson = (sum - bill[k]) / 2;
  let amountOwed = b - costPerPerson;
  return (costPerPerson === b) ? "Bon Apetite!" : amountOwed;
}

console.log(bonApetite([3, 10, 2, 9], 1, 12)); // 5
console.log(bonApetite([3, 10, 2, 9], 1, 7)); // "Bon Apetite!"