const products = document.getElementsByClassName("product");

for (let i = 0; i < products.length; i++) {
  const product = products[i];

  const addButton = product.querySelector("button.add");
  const subtractButton = product.querySelector("button.subtract");
  const quantityField = product.querySelector("input");
  const addToCartButton = product.querySelector("button.addToCart");
  const productName = product.querySelector(".productName");

  addButton.addEventListener("click", function () {
    quantityField.value = parseInt(quantityField.value, 10) + 1; 
  })

  subtractButton.addEventListener("click", function () {
    if (parseInt(quantityField.value, 10) >= 1) {
        quantityField.value = parseInt(quantityField.value, 10) - 1;
    }
  })

  addToCartButton.addEventListener("click", function () {
    confirm(`You are ordering ${quantityField.value} of ${productName.innerHTML}`);
    quantityField.value = 0;
  })
}
