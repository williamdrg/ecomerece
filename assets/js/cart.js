/* Carrito */

// #1 Base de datos
const db = [
  {
    id: 1,
    name: "Invicta",
    price: 1863,
    image: "assets/img/RELOJ1.png",
    category: "watches",
    quantity: 6,
  },
  {
    id: 2,
    name: "WWOOR",
    price: 789,
    image: "assets/img/RELOJ2.png",
    category: "watches",
    quantity: 7,
  },
  {
    id: 3,
    name: "Victorinox Swiss",
    price: 123,
    image: "assets/img/RELOJ3.png",
    category: "watches",
    quantity: 4,
  },
  {
    id: 4,
    name: "Casio Digital",
    price: 453,
    image: "assets/img/RELOJ4.png",
    category: "watches",
    quantity: 5,
  },
  {
    id: 5,
    name: "BLACK MAMUT",
    price: 163,
    image: "assets/img/RELOJ5.png",
    category: "watches",
    quantity: 4,
  },
  {
    id: 6,
    name: "Salvatore Ferragamo",
    price: 456,
    image: "assets/img/RELOJ6.png",
    category: "watches",
    quantity: 1,
  },
  {
    id: 7,
    name: "RUNBOX",
    price: 32,
    image: "assets/img/cartera1.png",
    category: "wallets",
    quantity: 10,
  },
  {
    id: 8,
    name: "TRAVANDO AUSTIN",
    price: 47,
    image: "assets/img/cartera2.png",
    category: "wallets",
    quantity: 12,
  },
  {
    id: 9,
    name: "GSOIAX ",
    price: 38,
    image: "assets/img/cartera3.png",
    category: "wallets",
    quantity: 3,
  },
  {
    id: 10,
    name: "VISOUL",
    price: 32,
    image: "assets/img/cartera4.png",
    category: "wallets",
    quantity: 4,
  },
  {
    id: 11,
    name: "HAFURY Android",
    price: 67,
    image: "assets/img/Smartwatch1.png",
    category: "Smartwatch",
    quantity: 7,
  },
  {
    id: 12,
    name: "Garmin Venu",
    price: 74,
    image: "assets/img/Smartwatch2.png",
    category: "Smartwatch",
    quantity: 3,
  },
  {
    id: 13,
    name: "Fitbit Versa",
    price: 112,
    image: "assets/img/Smartwatch3.png",
    category: "Smartwatch",
    quantity: 14,
  },
  {
    id: 14,
    name: "PTHTECHUS",
    price: 450,
    image: "assets/img/Smartwatchprincipal.png",
    category: "watches",
    quantity: 1,
  }
];

const products = window.localStorage.getItem("productsDB")
  ? JSON.parse(window.localStorage.getItem("productsDB"))
  : db;


// #2 Pintar los productos en el DOM
const productContainer = document.getElementById("products__content");
function printProducts() {
  let html = "";
  for (const product of products) {
    html += `
    <article class="products__card ${product.category}">
      <div class="products__shape">
        <img src="${product.image}" alt="${product.name}" class="products__img">
      </div>

      <div class="products__data">
        <h2 class="products__name">${product.name}</h2>
        <div class="">
          <h3 class="products__price">$${product.price}</h3>
          <span class="products__quantity">Quedan solo ${product.quantity} unidades</span>
        </div>
        <button type="button" class="button products__button addToCart" data-id="${product.id}">
          <i class="bx bx-plus"></i>
        </button>
      </div>
    </article>
    `;
  }
  productContainer.innerHTML = html;
  window.localStorage.setItem("productsDB", JSON.stringify(products));
}

printProducts();

const productPrincipal = document.getElementById("product__principal");
function addProductPrincipal() {
  let html = "";
  for (const element of products) {
    if (element.id === 14) {
    html += `<div class="home__container container grid">
    <div class="home__img-bg">
      <img src="${element.image}" alt="" class="home__img">
    </div>

    <div class="home__data">
      <h1 class="home__title">PTHTECHUS Smartwatch<br> COLECCIONES 2023</h1>
      <p class="home__description">
        Teléfono para niños - Reloj Inteligente conversación bidireccional Chico Chica con SOS 18 Juegos Música Reproductor
        de MP3 HD Cámara Calculadora Linterna Temporizador de Alarma
      </p>
      <span class="home__price">$ ${element.price}</span>

      <div class="home__btns" id="${element.id}">
        <a href="#" class="button button--transparent button--small">
          Descubrir
        </a>

        <button class="button home__button">AÑADIR AL CARRITO</button>
      </div>
    </div>
  </div>`;
    }
  }
  productPrincipal.innerHTML = html;
  window.localStorage.setItem("productsDB", JSON.stringify(products));
}
addProductPrincipal()

// #3 Carrito
let cart = window.localStorage.getItem("cartDB")
  ? JSON.parse(window.localStorage.getItem("cartDB"))
  : [];
const cartContainer = document.getElementById("cart__container");
const cartCount = document.getElementById("cart-count");
const itemsCount = document.getElementById("items-count");
const cartTotal = document.getElementById("cart-total");

function printCart() {
  let html = "";
  for (const article of cart) {
    const product = products.find((p) => p.id === article.id);
    html += `
    <article class="cart__card">
        <div class="cart__box">
          <img src="${product.image}" alt="${product.name}" class="cart__img">
        </div>

        <div class="cart__details">
          <h3 class="cart__title">${product.name} <span class="cart__price">$${
      product.price
    }</span></h3>

          <div class="cart__amount">
            <div class="cart__amount-content">
              <span class="cart__amount-box removeToCart" data-id="${
                product.id
              }">
                <i class="bx bx-minus"></i>
              </span>

              <span class="cart__amount-number">${article.qty}</span>

              <span class="cart__amount-box addToCart" data-id="${product.id}">
                <i class="bx bx-plus"></i>
              </span>
            </div>

            <i class="bx bx-trash-alt cart__amount-trash deleteToCart" data-id="${
              product.id
            }"></i>
            </div>
            
            <span class="cart__subtotal">
            <span class="cart__stock">Quedan ${
              product.quantity - article.qty
            } unidades</span>
            <span class="cart__subtotal-price">${
              product.price * article.qty
            }</span>
            </span>
            </div>
            </article>
            `;
  }
  cartContainer.innerHTML = html;
  cartCount.innerHTML = totalArticles();
  itemsCount.innerHTML = totalArticles();
  cartTotal.innerHTML = numberToCurrency(totalAmount());
  checkButtons();
  window.localStorage.setItem('cartDB', JSON.stringify(cart))
}

printCart();
// #4 Agragar al carrito //añadir 
function addToCart(id, qty = 1) {
  const product = products.find((p) => p.id === id);
  if (product && product.quantity > 0) {
    const article = cart.find((a) => a.id === id);

    if (article) {
      if (checkStock(id, qty + article.qty)) {
        article.qty++;
      } else {
        window.alert("No hay stock suficiente");
      }
    } else {
      cart.push({ id, qty });
    }
  } else {
    window.alert("Producto agotado");
  }
  printCart();
  addProductPrincipal();
}

function checkStock(id, qty) {
  const product = products.find((p) => p.id === id);
  return product.quantity - qty >= 0;
}


// #5 Remover articulos
function removeFromCart(id, qty = 1) {
  const article = cart.find((a) => a.id === id);

  if (article && article.qty - qty > 0) {
    article.qty--;
  } else {
    const confirm = window.confirm("Estás Seguro??");
    if (confirm) {
      cart = cart.filter((a) => a.id !== id);
    }
  }
  printCart();
}

// #6 Eliminar del carrito
function deleteFromCart(id) {
  const article = cart.find((a) => a.id === id);
  cart.splice(cart.indexOf(article), 1);
  printCart();
}

// #7 Contar Artículos
function totalArticles() {
  return cart.reduce((acc, article) => acc + article.qty, 0);
}

// #8 El total
function totalAmount() {
  return cart.reduce((acc, article) => {
    /* Primero recorre los productos, la base de datos para traer las propiedades y luego busca al producto por su id y lo hace coincidir con el articulo, si lo encuntra multiplica el precio del producto por la cantidad de artículos del carrito*/
    const product = products.find((p) => p.id === article.id);
    return acc + product.price * article.qty;
  }, 0);
}

// #9 Limpiar Carrito
function clearCart() {
  cart = [];
  printCart();
}

// #10 Comprar
function checkout() {
  cart.forEach((article) => {
    const product = products.find((p) => p.id === article.id);

    product.quantity -= article.qty;
  });
  clearCart();
  printProducts();
  printCart();
  printBtnCategory();
  window.alert("Gracias por su compra");
}

function checkButtons() {
  if (cart.length > 0) {
    document.getElementById("cart-checkout").removeAttribute("disabled");
    document.getElementById("cart-empty").removeAttribute("disabled");
  } else {
    document
      .getElementById("cart-checkout")
      .setAttribute("disabled", "disabled");
    document.getElementById("cart-empty").setAttribute("disabled", "disabled");
  }
}

function numberToCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

/* Agregando eventos a nuestros botones */
productContainer.addEventListener("click", function (e) {
  const add = e.target.closest(".addToCart");

  if (add) {
    const id = +add.dataset.id;
    addToCart(id);
  }
});

cartContainer.addEventListener("click", function (e) {
  const remove = e.target.closest(".removeToCart");
  const add = e.target.closest(".addToCart");
  const deleteCart = e.target.closest(".deleteToCart");
  const add2 = e.target.closest(".home__button")

  if (remove) {
    const id = +remove.dataset.id;
    removeFromCart(id);
  }

  if (add && add2) {
    const id = +add.dataset.id;
    addToCart(id);
  }

  if (deleteCart) {
    const id = +deleteCart.dataset.id;
    deleteFromCart(id);
  }
});

const actionButtons = document.getElementById("action-buttons");

actionButtons.addEventListener("click", function (e) {
  const clear = e.target.closest("#cart-empty");
  const buy = e.target.closest("#cart-checkout");

  if (clear) {
    clearCart();
  }

  if (buy) {
    checkout();
  }
});

const printCategory = document.getElementById('container__Category')
function printBtnCategory() {
  let countCategory = {}
  for (let i = 0; i < products.length; i++) {
    if (countCategory[products[i].category]) {
      countCategory[products[i].category]++
    } else {
      countCategory[products[i].category] = 1
    }
  }
  const arrayCategory = Object.entries(countCategory)
  let html = `<li class="products__item products__line" data-filter="all">
  <h3 class="products__title">Mostrar todo</h3>
  <span class="products__stock">Mostrar todos los productos</span></li>`
  for (const category of arrayCategory) {
    html += `<li class="products__ite pp products__line active-product" data-filter=".${category[0]}">
    <h3 class="products__title">${category[0]}</h3>
    <span class="products__stock tt">${category[1]} modelos disponibles</span></li>`
  }
  printCategory.innerHTML = html
  return arrayCategory
  }
  printBtnCategory()

  
  