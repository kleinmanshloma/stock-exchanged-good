const WE_CURRENTLY_SUPPORT = document.querySelector(".we-support");
const COMPANY_NAMES = document.querySelector(".company-name");

// THIS 2 IS NOT WORKING IN THE FUNCTION BELOW!!!!!!
/* const SHARE_NAME_INSERT = document.querySelector(".share-name");
  const SHARES_AMOUNT = document.querySelector(".Purchase-amount"); 
   const DEPOSIT_AMOUNT_INSERT = document.querySelector(".deposit-amount").value; */

let numbersOfSharesToBuy;
let totalPrice;
let dollarAmountToDeposit;
let isEnoughMoney;
let isInValidInputNaN;
let nameAndPrice;

for (let i = 0; i < COMPANIES.length; i += 2) {
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

const WE_SUPPORT_MESSAGE = `We currently soppurt ${COMPANIES.length} companies`;
WE_CURRENTLY_SUPPORT.innerHTML = `${WE_SUPPORT_MESSAGE} `;

COMPANY_NAMES.innerHTML = nameAndPrice;

document.getElementById("buy/sell").addEventListener("submit", (e) => {
  e.preventDefault();

  let SHARE_NAME_INSERT = document.querySelector(".share-name");
  let SHARE_NAME_INSERT_VALUE = SHARE_NAME_INSERT.value;
  let SHARES_AMOUNT = document.querySelector(".Purchase-amount");
  let SHARES_AMOUNT_VALUE = +SHARES_AMOUNT.value;

  // validation variables
  let SHARE_NAME_EMPTY = SHARE_NAME_INSERT_VALUE.length <= 0;
  let SHARE_AMOUNT_EMPTY = SHARES_AMOUNT_VALUE.length <= 0;

  let metchName = COMPANIES.find(
    (compamy) => compamy.name === SHARE_NAME_INSERT_VALUE
  )?.name;

  isInValidInputNaN = isNaN(SHARES_AMOUNT_VALUE);

  console.log(metchName);
  console.log(SHARE_NAME_INSERT_VALUE);

  if (SHARE_NAME_EMPTY || SHARE_AMOUNT_EMPTY) {
    // good
    SHARE_NAME_INSERT.classList.toggle("invalid");
    SHARES_AMOUNT.classList.toggle("invalid");
    /* alert("No field has been entered!") */
    console.log("No field has been entered!");
    return;
  }
  if (isInValidInputNaN) {
    SHARES_AMOUNT.classList.toggle("invalid");
    // good
    /* alert(`Please enter the amount field with a number!`); */
    console.log(`Please enter the amount field with a number!`);
    return;
  } else if (SHARE_NAME_EMPTY || SHARE_NAME_INSERT_VALUE != metchName) {
    // good
    SHARE_NAME_INSERT.classList.toggle("invalid");
    /*  alert(
      `Opss...  No valid share name has been entered! OR We don't soppurt this stock yet!`
    ); */
    console.log(
      `Opss...  No valid share name has been entered! OR We don't soppurt this stock yet!`
    );
    return;
  } else if (!SHARES_AMOUNT_VALUE > 0) {
    // good
    SHARES_AMOUNT.classList.toggle("invalid");
    /*  alert(`Please enter amount more then 0!`); */
    console.log(`Please enter amount more then 0!`);
    return;
  } /*  else if (SHARE_AMOUNT_EMPTY) {
    SHARES_AMOUNT.classList.toggle("invalid");
    console.log("No Share Amount Has Been Entered!");
    return;
  } */ else if (
    metchName === SHARE_NAME_INSERT_VALUE &&
    SHARES_AMOUNT_VALUE > 0
  ) {
    let result = COMPANIES.find(
      (compamy) => compamy.name === SHARE_NAME_INSERT_VALUE
    );

    let sharePrice = result.price;

    let totalPrice = sharePrice * SHARES_AMOUNT_VALUE;

    isEnoughMoney = prompt(
      `Amount needed for this transaction is $${totalPrice}, Please enter the amount to debit from your account`
    );
    isEnoughMoney += +isEnoughMoney;
    if (isEnoughMoney >= totalPrice) {
      /*   alert(`Great you will debited from your account $${totalPrice}`); */
      console.log(`Great you will debited from your account $${totalPrice}`);
    }
    SHARE_NAME_INSERT.value = "";
    SHARES_AMOUNT.value = "";
    return;
  }
});
