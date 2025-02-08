// Set-up: 1 toaster(18.99), 1 t-shirt(7.99) and 1 basketball(20.95)

//question-6: What is the total cost of the items in the shopping cart?
let toaster = 18.99 * 100;
let tshirt = 7.99 * 100;
let basketball = 20.95 * 100;

let total_cost = (toaster + tshirt + basketball) / 100;

console.log(total_cost);

//question-7: add 4.99 dollars shipping

let total_cost_before_tax = total_cost + 4.99;
console.log(total_cost_before_tax);

//question-8: calcultate 10% tax on the total cost.
let tax = total_cost_before_tax * 0.1;
console.log(tax.toPrecision(3));

//question-9: Final Cost

let final_cost = total_cost_before_tax + tax;
console.log(final_cost.toPrecision(4));
