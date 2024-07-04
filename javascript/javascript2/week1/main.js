console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const ul = document.querySelector("#productList");

function renderProducts(products) {
  // your code here
  products.forEach((product) => {
    const li = document.createElement("li");
    li.style.fontWeight = "bold";
    li.innerHTML = `${product.name}`;
    const priceElement = document.createElement("li");
    priceElement.innerHTML = `price: ${product.price}`;
    const ratingElement = document.createElement("li");
    ratingElement.innerHTML = `Rating: ${product.rating}`;
    const breakElement = document.createElement("br");
    ul.appendChild(li);
    ul.appendChild(priceElement);
    ul.appendChild(ratingElement);
    ul.appendChild(breakElement);
  });
}

renderProducts(products);
