const WE_CURRENTLY_SUPPORT = document.querySelector(".we-support");
const COMPANY_NAMES = document.querySelector(".company-name");

// THIS 3 IS NOT WORKING IN THE FUNCTION BELOW!!!!!!
/* const SHARE_NAME_INSERT = document.querySelector(".share-name");
  const SHARES_AMOUNT = document.querySelector(".Purchase-amount"); 
   const DEPOSIT_AMOUNT_INSERT = document.querySelector(".deposit-amount").value; */

let numbersOfSharesToBuy;
let totalPrice;
let dollarAmountToDeposit;
let isEnoughMoney;
let isInValidInputNaN;

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let dateToday = `${day}/${month}/${year} `;

let nameAndPrice = COMPANIES.map(
  ({ name, price }) =>
    `<div class="row">
    <div class="col"> ${price}</div>
    <div class="col">${name} </div>
    </div>`
).join("");

let HTML = ``;

for (let compamy of COMPANIES) {
  HTML += `<tr>
  <td>${compamy.name}</td>
  <td>${compamy.nameLink}</td>
  <td>${dateToday}</td>
  <td>${compamy.price}</td>
  <td><img src="${compamy.logo}" alt="${compamy.logo} logo" /></td>
  <td>${compamy.ticker}</td>
  </tr>`;
}

document.querySelector(".html").innerHTML = HTML;

const WE_SUPPORT_MESSAGE = `We currently soppurt ${COMPANIES.length} companies`;
WE_CURRENTLY_SUPPORT.innerHTML = `${WE_SUPPORT_MESSAGE} `;

COMPANY_NAMES.innerHTML = nameAndPrice;

let yourNewStocks;

let yourStocks = [...COMPANIES];

let stocksHTML;
