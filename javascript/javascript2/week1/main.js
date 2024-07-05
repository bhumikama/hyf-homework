console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const ul = document.querySelector("#productList");

function renderProducts(products) {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${product.name}</strong>`;
    const priceElement = document.createElement("li");
    priceElement.innerHTML = `price: ${product.price}`;
    const ratingElement = document.createElement("li");
    ratingElement.innerHTML = `Rating: ${product.rating}`;
    const breakElement = document.createElement("br");
    li.appendChild(priceElement);
    li.appendChild(ratingElement);
    ul.appendChild(li);
    ul.appendChild(breakElement);
  });
}

renderProducts(products);
