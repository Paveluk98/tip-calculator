const btnEl = document.getElementById("calculate");
const billEl = document.getElementById("bill");
const tipEl = document.getElementById("tip");
const totalEl = document.getElementById("total");

function calculateTotal() {
  // console.log("clicked");
  // console.log(billValue);
  const billValue = billEl.value;
  const tipValue = tipEl.value;
  const totalValue = billValue * (1 + tipValue / 100);

  totalEl.innerText = `$${totalValue.toFixed(2)}`;

  // console.log(totalValue);
}

btnEl.addEventListener("click", calculateTotal);
