

const url = 'data.json';
const section = document.querySelector('.product');
let products;
let inCartCount = 0;
let inCartSum = 0;
let totalCount = document.querySelector('.count');
let totalSum = document.querySelector('.summary');
let id = Date.now()

let btnCart = document.querySelector('.btn-cart');
let cart = document.querySelector('.cart');

let xhr = new XMLHttpRequest();
xhr.open('GET', url, true); // конфигурируем запрос
xhr.send(); // отправляем запрос

xhr.onload = () => {
  if(xhr.status == 200){
    products = JSON.parse(xhr.responseText);
    buildLayout(products);
  }
}


function buildLayout(data){
  data.forEach(item => {
    let div = document.createElement('div');
    div.classList.add('coffee_item');

    let img = new Image();
    img.src= item.img;

    let h3 = document.createElement('h3');
    h3.textContent = item.name;

    let price = document.createElement('h2');
    price.textContent = item.price;

    let btnAdd = document.createElement('button');
    btnAdd.classList.add('btn-add');
    btnAdd.innerText = 'Add to cart';
    div.append(h3);
    div.append(price);
    div.append(btnAdd);
    div.append(img);

    section.append(div);
  });

}

section.addEventListener('click', function(event){
  if(event.target.tagName.toLowerCase() == 'button'){
    addToCart(event.target.parentNode);
  }
});


function addToCart(el){
  let cartList = document.querySelector('.cart-list');
  let cartListItem = document.createElement('li');
  let priceSpan = document.createElement('span');
  let name = el.querySelector('h3').innerText.trim();
  let price = +el.querySelector('h2').innerText.trim();

  let minusBtn = document.createElement('span');
  minusBtn.innerText= '-';
  minusBtn.classList.add('minus-item');

  inCartSum += price;
  inCartCount++;
  totalCount.innerText = inCartCount;
  totalSum.innerText = inCartSum;

  cartListItem.append(`${name}:  ${price}ua`,minusBtn);
  cartList.append(cartListItem,);



}


btnCart.addEventListener('click',(e) => {
  cart.style.opacity = '1';
  cart.style.visibility = 'visible';
})
cart.addEventListener('click',(e) => {
  if (e.target == document.querySelector('.close-cart')){
    cart.style.opacity = '0';
    cart.style.visibility = 'hidden';
  }
  if (e.target == document.querySelector('.minus-item')){

    totalCount.innerText = +totalCount.textContent -1;
    // totalSum.innerText = +totalSum.textContent - +(e.target.parenNode.price);
    e.target.parentNode.remove();
  }
})
let icons = document.querySelector('.icon-container');

icons.addEventListener("click", (e) => {

  let sortList = icons.querySelector('.sort-list');
  let sortBtn = document.querySelector('.sort-btn');

  if (e.target == document.querySelector('.sort-btn')){
    sortBtn.style.display = 'none';
    sortList.style.visibility = 'visible';
    sortList.style.left = '0';
  }
  else if (e.target == document.querySelector('.close-sort')) {
    sortBtn.style.display = 'block';
    sortList.style.visibility = 'hidden';
    sortList.style.left = '-100%';
  }

      })


