// ============ showcase section

const toggleBtn = document.querySelector(".toggle-btn");
const nav = document.querySelector(".nav");
const navLinks = [...document.querySelectorAll(".nav-list li a")];
const header = document.querySelector("#header");

/// ============ header section

// set active class to toggle btn
function toggleActive() {
  toggleBtn.classList.toggle("active");
}

function navToggle() {
  nav.classList.toggle("active");
}

// manipulate active class to nav links
function navLinksAcrive(e) {
  // remove active class from toggle btn on click
  if (toggleBtn.classList.contains("active")) {
    toggleBtn.classList.remove("active");
  }

  // remove active class from nav on click
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  }
  navLinks.forEach((link) => link.classList.remove("active"));
  e.currentTarget.classList.add("active");
}

function stickyHeader() {
  const scroll = window.scrollY;

  header.style.transition = "all .3s ease-in-out";

  if (scroll > 0) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}

// call the functions
toggleBtn.addEventListener("click", () => {
  toggleActive();
  navToggle();
});

navLinks.forEach((link) =>
  link.addEventListener("click", (e) => {
    navLinksAcrive(e);
  })
);

window.addEventListener("scroll", stickyHeader);


// ================== product page 
const requstedURL = "https://raw.githubusercontent.com/Meqdad-Moradi/art-gallery/main/data.json";

async function getProducts() {
  try {
    let result = await fetch(requstedURL);
    let data = await result.json();
    showProducts(data);
  } catch (error) {
    console.error(error);
  }
}



function showProducts(data) {
  // select pruduct items div
  const productItems = document.querySelector(".product-items");
  productItems.innerHTML = "";

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


  const addToCartBtns = [...document.querySelectorAll('.add-item')]
  addToCartBtns.forEach(btn => btn.addEventListener('click', e => {
    const id = btn.dataset.id
    const currentItem = data.find(item => item.id === parseInt(id))

    const newItem = {
      ...currentItem,
      amount: 1
    }

    cart = [...cart, newItem]
    addToCart(newItem)
    setAmount()
  }))
}

// select the cart elements
const cartContainer = document.querySelector('.cart-container')
const cartContent = document.querySelector('.cart-content')
const cartCloseBtn = document.querySelector('.cart-close-btn')
const cartShowBtn = document.querySelector('#show-cart')
const cartStateAmount = document.querySelector('.cart-state-amount')
const cartItems = document.querySelector('.cart-items')
const cartItem = document.querySelector('.cart-item')
const cartTotalPrice = document.querySelector('.total-price')
const cartCheckoutBtn = document.querySelector('#checkout-btn')

// declare the shoping cart
let cart = []


// show cart item amount on top of cart icon
function setAmount() {
  cartStateAmount.textContent = cart.reduce((value, item) => {
    return value + item.amount
  }, 0)
}


// add item to cart 
function addToCart(item) {

  if (cart.length === 0) {
    const p = document.createElement('p')
    p.className = 'cart-info'
    p.textContent = 'Your cart is empty!'
    cartItems.appendChild(p)
    cartCheckoutBtn.disabled = true
    cartCheckoutBtn.style.cursor = 'not-allowed'
    cartCheckoutBtn.style.opacity = '.5'
  } else {
    const cartInfo = cartItems.querySelector('.cart-info')
    cartInfo.style.display = 'none'
    cartCheckoutBtn.disabled = false
    cartCheckoutBtn.style.cursor = 'pointer'
    cartCheckoutBtn.style.opacity = '1'

    cartItems.innerHTML += `
      <article class="cart-item">
        <div class="img-box">
          <img src=${item.src} alt=${item.name} />
        </div>

        <div class="cart-item-details">
          <div class="title">${item.name}</div>
          <p class="price">$${item.price}</p>
          <button class="remove-item-btn" data-id=${item.id}>remove</button>
        </div>

        <div class="cart-item-controler">
          <span class="item-controler" id="up" data-id=${item.id}><i class="fas fa-chevron-up"></i></span>
          <span class="item-controler" id="amount" data-id=${item.id}>1</span>
          <span class="item-controler" id="down" data-id=${item.id}><i class="fas fa-chevron-down"></i></span>
        </div>
      </article>`
  }



  calcPrices()
}

// calc the cart prices
function calcPrices() {
  let totalPrice = 0

  cart.forEach(item => {
    totalPrice += item.price * item.amount
  })

  cartTotalPrice.textContent = `$${totalPrice.toFixed(2)}`
}


// display cart El
function displayCart() {
  cartContainer.classList.toggle('active')
}


cartShowBtn.addEventListener('click', displayCart)
cartCloseBtn.addEventListener('click', displayCart)

window.addEventListener("DOMContentLoaded", () => {
  if (document.body.id === 'product-page') {
    getProducts()
  }
  addToCart()

});