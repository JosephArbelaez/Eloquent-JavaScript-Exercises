let bank = Number(prompt("Hello, how much do you have in your account?"));
const TAX = .08;
const PHONE_PRICE = 200.15;
const ACCESSORIES = 50.56;
let subtotal = PHONE_PRICE + ACCESSORIES;
let total;
let counter = 0;
let cost = (subtotal + (subtotal * TAX));
while (bank > 0) {
    bank = bank - cost;
    counter++;
}
console.log ("Cost per phone is $" + cost.toFixed(2));
console.log("Your back account is empty after " + (counter - 1) + " number of phones.")