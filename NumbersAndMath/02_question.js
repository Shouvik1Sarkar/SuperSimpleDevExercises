// Question-2: bought 1 soup for 30$, 3 Burgers for 8$ each, 1 icecream for 5$. But for 3 friends. How much each one will pay?

let soup = 30;
let burger = 8 * 3;
let icecream = 5;

let each_cost = (soup + burger + icecream) / 3;

console.log(each_cost.toPrecision(3)); // toPrecision(3) to avoid many numbers after decimal.
