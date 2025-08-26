const form = document.getElementById("orderForm");
const furniture = document.getElementById("furniture");
const customer = document.getElementById("customer");
const total = document.getElementById("total");
const calcBtn = document.getElementById("calcBtn");
const placeOrder = document.getElementById("orderBtn");

function updateTotal() {
    const price = Number(document.getElementById("price").value);
    const qty = Number(document.getElementById("qty").value);
    
     
    const cost = price * qty;
    total.textContent = `Total: UGX ${cost.toLocaleString()}`;
}

function finishOrder() {
    window.alert("Your order is complete!")
}

qty.addEventListener("input", updateTotal);
price.addEventListener("input", updateTotal);
placeOrder.addEventListener ("mouseover", finishOrder);




