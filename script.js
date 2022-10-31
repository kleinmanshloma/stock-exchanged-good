const WE_CURRENTLY_SUPPORT = document.querySelector(".we-support");
const COMPANY_NAME = document.querySelector(".company-name");

// THIS 2 IS NOT WORKING IN THE FUNCTION BELOW!!!!!!
const SHARE_NAME_INSERT = document.querySelector(".share-name").value;
const SHARES_AMOUNT = document.querySelector(".Purchase-amount").value;
/* const DEPOSIT_AMOUNT_INSERT = document.querySelector(".deposit-amount").value; */

let numbersOfSharesToBuy;
let totalPrice;
let dollarAmountToDeposit;
let hasEnoughMoney;
let isInValidInput;

let displayCompanies = [];

for (let company of COMPANIES) {
  displayCompanies.push(company.name);
  console.log(...displayCompanies);
}
/* console.log(displayCompanies.join(", ")); */
const COMPANIES_NAMES = ` ${displayCompanies.join("<p class=mb-1>")}`;

const WE_SUPPORT_MESSAGE = `We currently soppurt ${displayCompanies.length} companies`;

WE_CURRENTLY_SUPPORT.innerHTML = `${WE_SUPPORT_MESSAGE} `;

COMPANY_NAME.innerHTML = `<p>${COMPANIES_NAMES} `;

document.getElementById("buy/sell").addEventListener("submit", (e) => {
  e.preventDefault();

  let result = COMPANIES.find(
    (o) => o.name === document.querySelector(".share-name").value
  );
  let sharePrice = result.price;

  let totalPrice =
    sharePrice * document.querySelector(".Purchase-amount").value;
  alert(`Amount needed for this transaction is $${totalPrice}`);
});

// ${} <p>
/* companyIndex = prompt(
  `${WELCOME_MESSAGE} Which company would you like to purchase `
);

companyIndex--;

const HOW_MANY_SHARES = `How many shares of ${companyIndex}, would you like to purchase?`;

numbersOfSharesToBuy = prompt(HOW_MANY_SHARES); */

totalPrice = +numbersOfSharesToBuy * COMPANIES[0].price;

isInValidInput = isNaN(numbersOfSharesToBuy);

/* 
if (isInValidInput) {
  alert(`Please enter a valid number!`);
  throw "in valid input";
}

dollarAmountToDeposit = prompt(
  `Total price is: $${totalPrice}. How mutch do you want to deposit?`
  );
  
  dollarAmountToDeposit = +dollarAmountToDeposit;
  console.log(`${typeof +dollarAmountToDeposit}`);

  hasEnoughMoney = totalPrice < dollarAmountToDeposit;
  
  if (hasEnoughMoney) {
    alert(`purchased!`);
  } else {
    alert(`Not enough funds to make the transaction!`);
  }
  */
