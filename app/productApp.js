const requstedURL =
  "https://raw.githubusercontent.com/Meqdad-Moradi/art-gallery/main/data.json";

async function getProducts() {
  try {
    let result = await fetch(requstedURL);
    let data = await result.json();
    showProducts(data);
  } catch (error) {
    console.error(error);
  }
}

// select pruduct items div
const productItems = document.querySelector(".product-items");
productItems.innerHTML = "";

function showProducts(data) {
  const products = data
    .map((item) => {
      return `
      <article class="card-item">
            <div class="product-imgs">
              <img src=${item.src} alt=${item.name} />
            </div>
            <div class="product-item-content">
              <h2 class="title">${item.name}</h2>
              <p class="item-price">€${item.price}</p>
              <button class="btn add-item" data-id=${item.id}>add to cart</button>
            </div>
          </article>`;
    })
    .join(" ");

  productItems.innerHTML = products;
}

window.addEventListener("DOMContentLoaded", () => {
  getProducts();
});
