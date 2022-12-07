const IS_MARKET_OPEN = document.getElementById("is-market-open");

let themeClick = false;
let now;

const MARKET_OPEN = (isOpen) => {
  if (isOpen) {
    !themeClick ? sun() : console.log(`client clicked moon`);
    IS_MARKET_OPEN.innerHTML = `Market is already open ${
      now.getHours() - openingHours.getHours()
    } hours and ${
      now.getMinutes() - openingHours.getMinutes()
    } minutes And  will  remain open for the next ${
      15 - now.getHours()
    } hours and ${
      now.getMinutes() > 30 ? 59 - now.getMinutes() : now.getMinutes() - 59
    } minutes`;
  }
};

const MARKET_CLOSE = (isBefore) => {
  !themeClick ? moon() : console.log(`client clicked sun`);
  if (isBefore) {
    IS_MARKET_OPEN.innerHTML = `Market will open in ${
      8 - now.getHours()
    } hours and ${
      now.getMinutes() < 30 ? 30 - now.getMinutes() : 60 - now.getMinutes() + 30
    } minutes`;
  } else {
    IS_MARKET_OPEN.innerHTML = `Market is already closed for ${
      now.getHours() - 16
    } hours and ${now.getMinutes()} minutes`;
  }
};

function loop() {
  now = new Date();
  // Opening Hours
  let openingHours = new Date();
  openingHours.setHours(9, 30);

  // Closing Hours
  let closingHours = new Date();
  closingHours.setHours(16, 00, 00);

  let isOpen;

  if (now.getHours() >= 0 && now < openingHours) {
    isOpen = false;
    isBefore = true;
    MARKET_CLOSE(isBefore);
  } else if (now >= openingHours && now <= closingHours) {
    isOpen = true;
    MARKET_OPEN(isOpen);
  } else {
    isOpen = false;
    isBefore = false;
    MARKET_CLOSE(isBefore);
  }

  now = new Date();
  let delay = now % 60000; // exact ms to next minute
  setTimeout(loop, delay);
}

switch (new Date().getDay()) {
  case 6:
    day = "Saturday";
    moon();
    IS_MARKET_OPEN.innerHTML += `Markets are close on the weekends`;
    break;
  case 0:
    day = "Sunday";
    moon();
    IS_MARKET_OPEN.innerHTML += `Markets are close on the weekends`;
    break;
  case 1:
    day = "Monday";
    themeClick = false;
    loop();
    break;
  case 2:
    day = "Tuesday";
    themeClick = false;
    loop();
    break;
  case 3:
    day = "Wednesday";
    themeClick = false;
    loop();
    break;
  case 4:
    day = "Thursday";
    themeClick = false;
    loop();
    break;
  case 5:
    day = "Friday";
    themeClick = false;
    loop();
    break;
  default:
    IS_MARKET_OPEN.innerHTML += `TODAY IS: ${day}`;
}
