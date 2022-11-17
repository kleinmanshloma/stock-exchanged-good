function creat(trEl, innerText) {
  let tdElement = document.createElement("td");
  tdElement.innerText = innerText;
  trEl.append(tdElement);
}
