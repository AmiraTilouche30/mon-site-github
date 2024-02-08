document.addEventListener("DOMContentLoaded", function () {
  const shoppingCart = {
    items: [],
    total: 0,
  };
  function handleBuyButtonClick(event) {
    event.preventDefault();
    const dishElement = event.target.closest(".dish");
    const dishName = dishElement.querySelector("p").textContent;
    const dishPrice = parseFloat(
      dishElement.querySelector("h2").textContent.slice(1)
    );

    shoppingCart.items.push({ name: dishName, price: dishPrice });
    shoppingCart.total += dishPrice;
    alert(
      `You have added ${dishName} to your cart. Total: $${shoppingCart.total.toFixed(
        2
      )}`
    );
    updateCartDisplay();
  }
  const buyButtons = document.querySelectorAll(".dish a");
  buyButtons.forEach((button) => {
    button.addEventListener("click", handleBuyButtonClick);
  });
  function updateCartDisplay() {
    const cartTotalElement = document.getElementById("cartTotal");
    cartTotalElement.textContent = `$${shoppingCart.total.toFixed(2)}`;
  }
});
