console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  const ul = document.querySelector("#productList");
  ul.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");
    li.classList.add("products");
    li.innerHTML = `
      <h2>${product.name}</h2>
      <p>Price: $${product.price.toFixed(2)}</p>
      <p>Rating: ${product.rating}</p>
    `;
    ul.appendChild(li);
  });
}

function filterProducts() {
  const searchInput = document
    .querySelector("#search-input")
    .value.toLowerCase();
  const maxPriceInput = parseFloat(
    document.querySelector("#max-price-input").value // if input is empty parseFloat returns NaN
  );

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchInput); // empty string also returns true
    const matchesPrice = isNaN(maxPriceInput) || product.price <= maxPriceInput;
    return matchesSearch && matchesPrice;
  });

  renderProducts(filteredProducts);
}

function sortProducts(products, sortType) {
  const sortedProducts = [...products];
  sortedProducts.sort((a, b) => {
    if (sortType === "price") {
      return a.price - b.price;
    } else if (sortType === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortType === "rating") {
      return (b.rating || 0) - (a.rating || 0);
    }
    return 0;
  });
  renderProducts(sortedProducts);
}

document
  .querySelector("#search-input")
  .addEventListener("input", filterProducts);
document
  .querySelector("#max-price-input")
  .addEventListener("input", filterProducts);

document.querySelector("#sort-select").addEventListener("change", (event) => {
  const sortType = event.target.value;
  sortProducts(products, sortType);
});

renderProducts(products);
