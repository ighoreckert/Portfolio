document
  .querySelector(".burguer")
  .addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
  );

document.querySelector("#qnty").addEventListener("change", updatePrice);
document.querySelector("#js").addEventListener("change", updatePrice);
document.querySelector("#layout-yes").addEventListener("change", updatePrice);
document.querySelector("#layout-no").addEventListener("change", updatePrice);
document.querySelector("#deadline").addEventListener("change", function () {
  const deadLine = document.querySelector("#deadline").value;
  document.querySelector(
    "label[for=deadline]"
  ).innerHTML = `Deadline: ${deadLine} weeks`;
  updatePrice();
});

function updatePrice() {
  const qnty = document.querySelector("#qnty").value;
  const hasJS = document.querySelector("#js").checked;
  const layoutYes = document.querySelector("#layout-yes").checked;
  const deadLine = document.querySelector("#deadline").value;
  let price = qnty * 100;
  if (hasJS) price *= 1.1;
  if (layoutYes) price += 500;
  let deadlineUrgentTax = 1 - deadLine * 0.1;
  price *= 1 + deadlineUrgentTax;

  document.querySelector("#price").innerHTML = `R$ ${price.toFixed(2)}`;
}
