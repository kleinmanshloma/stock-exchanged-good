const WE_CURRENTLY_SUPPORT = document.querySelector(".we-support");
const COMPANY_NAMES = document.querySelector(".company-name");

// THIS 2 IS NOT WORKING IN THE FUNCTION BELOW!!!!!!
let SHARE_NAME_INSERT = document.querySelector(".share-name");
let SHARES_AMOUNT = document.querySelector(".Purchase-amount");
let sharesAmountValue = +document.querySelector(".Purchase-amount").value;
/* const DEPOSIT_AMOUNT_INSERT = document.querySelector(".deposit-amount").value; */

let numbersOfSharesToBuy;
let totalPrice;
let dollarAmountToDeposit;
let hasEnoughMoney;
let isInValidInputNaN;

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

const WE_SUPPORT_MESSAGE = `We currently soppurt ${COMPANIES.length} companies`;
WE_CURRENTLY_SUPPORT.innerHTML = `${WE_SUPPORT_MESSAGE} `;

COMPANY_NAMES.innerHTML = nameAndPrice;

document.getElementById("buy/sell").addEventListener("submit", (e) => {
  e.preventDefault();

  let metchName = COMPANIES.find(
    (compamy) => compamy.name === SHARE_NAME_INSERT.value
  )?.name;

  console.log(sharesAmountValue);

  isInValidInputNaN = isNaN(sharesAmountValue);

  if (isInValidInputNaN) {
    alert(`Please enter the amount field with a number!`);
    return;
  } else if (SHARE_NAME_INSERT.value != metchName) {
    alert(`Sorry we don't soppurt this Share yet!`);
    return;
  } else if (!sharesAmountValue > 0) {
    alert(`Please enter amount more then 0!`);
    console.log(`Please enter amount more then 0!`);
    return;
  }

  if (sharesAmountValue.length <= 0 && SHARE_NAME_INSERT.value.length <= 0) {
    SHARE_NAME_INSERT.classList.add("invalid");
    SHARES_AMOUNT.classList.add("invalid");
    return;
  } else if (sharesAmountValue.length <= 0) {
    SHARES_AMOUNT.classList.add("invalid");
    alert("No Share Amount Has Been Entered!");
    return;
  } else if (SHARE_NAME_INSERT.value.length <= 0) {
    SHARE_NAME_INSERT.classList.add("invalid");
    alert("No Share Name Has Been Entered!");
    return;
  } else if (
    COMPANIES.find((compamy) => compamy.name === SHARE_NAME_INSERT.value) &&
    sharesAmountValue > 0
  ) {
    let result = COMPANIES.find(
      (compamy) => compamy.name === SHARE_NAME_INSERT.value
    );

    let sharePrice = result.price;

    let totalPrice = sharePrice * sharesAmountValue;
    alert(`Amount needed for this transaction is $${totalPrice}`);
    return;
  }
});
