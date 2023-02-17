const db = [
    {
      id: 1,
      name: "Invicta",
      price: 1863,
      image: "assets/img/RELOJ1.jpg",
      category: "watches",
      quantity: 6,
    },
    {
      id: 2,
      name: "WWOOR",
      price: 789,
      image: "assets/img/RELOJ2.jpg",
      category: "watches",
      quantity: 7,
    },
    {
      id: 3,
      name: "Victorinox Swiss",
      price: 123,
      image: "assets/img/RELOJ3.jpg",
      category: "watches",
      quantity: 4,
    },
    {
      id: 4,
      name: "Casio Digital",
      price: 453,
      image: "assets/img/RELOJ4.jpg",
      category: "watches",
      quantity: 5,
    },
    {
      id: 5,
      name: "BLACK MAMUT",
      price: 163,
      image: "assets/img/RELOJ5.jpg",
      category: "watches",
      quantity: 4,
    },
    {
      id: 6,
      name: "Salvatore Ferragamo",
      price: 456,
      image: "assets/img/RELOJ6.jpg",
      category: "watches",
      quantity: 1,
    },
    {
      id: 7,
      name: "RUNBOX",
      price: 32,
      image: "assets/img/cartera1.jpg",
      category: "wallets",
      quantity: 10,
    },
    {
      id: 8,
      name: "TRAVANDO AUSTIN",
      price: 47,
      image: "assets/img/cartera2.jpg",
      category: "wallets",
      quantity: 12,
    },
    {
      id: 9,
      name: "GSOIAX ",
      price: 38,
      image: "assets/img/cartera3.jpg",
      category: "wallets",
      quantity: 3,
    },
    {
      id: 10,
      name: "VISOUL",
      price: 32,
      image: "assets/img/cartera4.jpg",
      category: "wallets",
      quantity: 4,
    },
    {
      id: 11,
      name: "HAFURY Android",
      price: 67,
      image: "assets/img/Smartwatch1.jpg",
      category: "Smartwatch",
      quantity: 7,
    },
    {
      id: 12,
      name: "Garmin Venu",
      price: 74,
      image: "assets/img/Smartwatch2.jpg",
      category: "Smartwatch",
      quantity: 3,
    },
    {
      id: 13,
      name: "Fitbit Versa",
      price: 112,
      image: "assets/img/Smartwatch3.jpg",
      category: "Smartwatch",
      quantity: 14,
    }
    
  ];

  const countsStock = function (array) {
     let countCategory = {}
    for (let i = 0; i < array.length; i++) {
      if (countCategory[array[i].category]) {
        countCategory[array[i].category]++
      } else {
        countCategory[array[i].category] = 1
      }
    }
    
    
    return Object.entries(countCategory)[0][1]
    }
  console.log(countsStock(db))


//   const prueba2 = document.querySelector('.pp')
// const prueba = document.querySelector('span.tt');
// const prueba3 = document.createElement('span')
// prueba3.textContent = countsStock
// prueba2.replaceChild(prueba3, prueba)