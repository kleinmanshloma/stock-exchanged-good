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

  let toggleClass = (inputNmae) => {
    inputNmae.classList.toggle("invalid");
  };

  if (SHARE_NAME_EMPTY || SHARE_AMOUNT_EMPTY) {
    toggleClass(SHARE_NAME_INSERT);
    toggleClass(SHARES_AMOUNT);
    alert("No field has been entered!");
    console.log("No field has been entered!");
    return;
  }
  if (isInValidInputNaN) {
    toggleClass(SHARES_AMOUNT);
    alert(`Please enter the amount field with a number!`);
    console.log(`Please enter the amount field with a number!`);
    return;
  } else if (SHARE_NAME_EMPTY || SHARE_NAME_INSERT_VALUE != metchName) {
    toggleClass(SHARE_NAME_INSERT);
    alert(
      `Opss...  No valid share name has been entered! OR We don't soppurt this stock yet!`
    );
    console.log(
      `Opss...  No valid share name has been entered! OR We don't soppurt this stock yet!`
    );
    return;
  } else if (!SHARES_AMOUNT_VALUE > 0) {
    toggleClass(SHARES_AMOUNT);
    alert(`Please enter amount more then 0!`);
    console.log(`Please enter amount more then 0!`);
    toggleClass(SHARES_AMOUNT);
    return;
  } else if (metchName === SHARE_NAME_INSERT_VALUE && SHARES_AMOUNT_VALUE > 0) {
    let result = COMPANIES.find(
      (compamy) => compamy.name === SHARE_NAME_INSERT_VALUE
    );

    let totalPrice = result.price * SHARES_AMOUNT_VALUE;
    let remaining;

    insertDepositAmount = prompt(
      `Amount needed for this transaction is $${totalPrice}, Please enter the amount to debit from your account`
    );
    insertDepositAmount = +insertDepositAmount;

    remaining = insertDepositAmount - totalPrice;

    if (insertDepositAmount >= totalPrice) {
      alert(
        `Great we will debited from your account $${totalPrice} and ${remaining} will remain in your in your account`
      );
      console.log(
        `Great we will debited from your account $${totalPrice} and ${remaining} will remain in your in your account`
      );
    } else {
      alert(`Opsss.... not enough credit for this transaction`);
      console.log(`Opsss.... not enough credit for this transaction`);
    }
    document.getElementById("buy/sell").reset();
  }
});
