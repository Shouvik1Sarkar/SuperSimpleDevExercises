// Setup: 2 basket balls (20.95*2) 4.99, shipping 2 T-Shirts (7.99) 4.99

// Question-11: use interpolation and use math to add.

let items = 4;

const item_cost = (20.95 * 100 * 2 + 7.99 * 100 * 2) / 100;

console.log(`Items(${items}): $${item_cost.toFixed(2)}`);

// Question-12:  Shipping and Handling: 9.98

let shipping_handling = (4.99 * 100 * 2) / 100;
console.log(`Shipping and Handling: $${shipping_handling.toFixed(2)}`);

// Question-13:  Total before Tax:

let total_before_tax = (item_cost * 100 + shipping_handling * 100) / 100;
console.log(`Total before Tax: $${total_before_tax.toFixed(2)}`);

// Question-13:  10% Tax:
let tax = (total_before_tax * 100 * 0.1) / 100;
console.log(`Estimated Tax: $${tax.toFixed(2)}`);
