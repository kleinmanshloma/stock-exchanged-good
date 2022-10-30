// declare and init var
let firstCompanyName = "BP";
let firstCompanyPrice = 31.36;
let numbersOfSharesToBuy;
let totalPrice;
let dollarAmountToDeposit;
let hasEnoughMoney;

const WELCOME_MESSAGE = `Welcome to our Stock Exchange Program!`;
const FIRST_QUESTION = `How many shares of ${firstCompanyName}, would you like to purchase?`;

// ask user how many stocks do you like to purchase
numbersOfSharesToBuy = prompt(WELCOME_MESSAGE + "\n" + FIRST_QUESTION);
console.log(`${typeof +firstCompanyName}`);
totalPrice = +numbersOfSharesToBuy * firstCompanyPrice;

dollarAmountToDeposit = prompt(
  `Total price is: $${totalPrice}. How mutch do you want to deposit?`
);
dollarAmountToDeposit = +dollarAmountToDeposit;
console.log(`${typeof +dollarAmountToDeposit}`);

hasEnoughMoney = totalPrice > dollarAmountToDeposit;

if (!hasEnoughMoney) {
  let notgo = "njkl";
  console.log(`true`);
}
