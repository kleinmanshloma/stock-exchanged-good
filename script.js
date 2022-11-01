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

// NOT NEEDED ANY MORE
/* let displayCompanies = [];

for (let company of COMPANIES) {
  displayCompanies.push(company.name);
  console.log(...displayCompanies);
} */

let nameAndPrice;
let i;
for (i = 0; i < COMPANIES.length; i += 2) {
  let divs = COMPANIES.slice(i, i + 2)
    .map(
      ({ name, price }) =>
        `<div class="row">
        <div class="col"> ${price}</div>
        <div class="col">${name} </div>
        </div>`
    )
    .join("");

  nameAndPrice += divs;
}
const COMPANIES_NAMES_AND_PRICE = nameAndPrice;

const WE_SUPPORT_MESSAGE = `We currently soppurt ${COMPANIES.length} companies`;

WE_CURRENTLY_SUPPORT.innerHTML = `${WE_SUPPORT_MESSAGE} `;

COMPANY_NAME.innerHTML = COMPANIES_NAMES_AND_PRICE;

console.log(nameAndPrice);
document.getElementById("buy/sell").addEventListener("submit", (e) => {
  e.preventDefault();

  if (document.querySelector(".share-name").value.length <= 0) {
    document.querySelector(".share-name").classList.add("invalid");
    alert("No Share Name Has Been Entered!");
    return;
  } else if (document.querySelector(".Purchase-amount").value.length <= 0) {
    document.querySelector(".share-name").classList.remove("invalid");
    document.querySelector(".Purchase-amount").classList.add("invalid");
    alert("No Share Amount Has Been Entered!");
    document.querySelector(".Purchase-amount").classList.remove("invalid");
    return;
  } else {
    if (
      COMPANIES.find(
        (compamy) =>
          compamy.name === document.querySelector(".share-name").value
      )
    ) {
      let result = COMPANIES.find(
        (compamy) =>
          compamy.name === document.querySelector(".share-name").value
      );
      console.log();
      let sharePrice = result.price;

      let totalPrice =
        sharePrice * document.querySelector(".Purchase-amount").value;
      alert(`Amount needed for this transaction is $${totalPrice}`);
    } else {
      alert(`Sorry we don't soppurt this Share yet!`);
    }
  }
});

/**/

/* SHARES_AMOUNT; */

//First Name Validation

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
