let i;
let sum = 0;
sum.toFixed(2);
let createProtfolioTable = async () => {
  let tableBodyElement = document.getElementById("your-stocks");
  tableBodyElement.innerHTML = null;

  for (let i = 0; i < COMPANIES.length; i++) {
    let company = COMPANIES[i];
    let trElement = document.createElement("tr");

    try {
      const response = await fetch(
        "https://api.polygon.io/v2/aggs/ticker/" +
          `${company?.ticker}` +
          "/prev?adjusted=true&apiKey=UOu086oqXGc7zuCtSFuV2als70WgZNGG"
      );

      const data = await response.json();

      creat(trElement, company.ticker);
      creat(trElement, data.results[0].c);
      creat(trElement, company.amount);
      creat(trElement, company.totalAmount.toFixed(2));
      console.log(data);
      var current = data.results[0].c;
      var heigh = data.results[0].h;
      var low = data.results[0].l;
    } catch (error) {
      console.log(error);
    }

    let btnTd = document.createElement("td");
    let btnAdd = document.createElement("button");
    btnTd.append(btnAdd);
    btnAdd.classList.add("btn", "btn-warning", "btn-sm");
    btnAdd.innerText = company.amount ? `Buy More` : `BUY`;

    let btnRemove = document.createElement("button");
    btnRemove.classList.add("btn", "btn-danger", "btn-sm");
    btnRemove.innerText = `REMOVE`;

    trElement.append(btnAdd, btnRemove);

    tableBodyElement.append(trElement);

    btnRemove.addEventListener("click", (e) => {
      e.preventDefault();
      let result = confirm(`Do you really want to remove ${company.ticker}?!`);

      if (result) {
        COMPANIES.splice([i], 1);
        createProtfolioTable();
      }
    });
    btnAdd.addEventListener("click", function () {
      let amount = Number(
        prompt(`How many  ${company.ticker} stocks would you like to buy?`)
      );
      if (isNaN(amount) || amount == 0) {
        alert("Invalid amount. Please enter a valid amount.");
      } else {
        company.amount += amount;
        company.totalAmount += company.price * company.amount;
        sum += company.amount * company.price;
        /* document.getElementById("sum-of-Stocks").textContent = sum; */
        createProtfolioTable();
      }
    });
  }
};

createProtfolioTable();
