

const url = 'data.json';
const section = document.querySelector('.product');
let products;
let inCartCount = 0;
let inCartSum = 0;
let totalCount = document.querySelectorAll('.count');
let totalSum = document.querySelector('.summary');
let btnCart = document.querySelector('.btn-cart');
let cart = document.querySelector('.cart');
let cartArr = [];
let sortList = document.querySelector('.sort-list');


let coffee_items;

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
    div.setAttribute('data-price', item.price);
    div.setAttribute('data-name', item.name);

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
  coffee_items = document.querySelectorAll('.coffee_item');
}

section.addEventListener('click', function(event){
  if(event.target.tagName.toLowerCase() == 'button'){
    addToCart(event.target.parentNode);
  }
});


function addToCart(el){
  let id = Date.now();
  let bodge =  document.querySelector('.bodge');
  let cartList = document.querySelector('.cart-list');
  let cartListItem = document.createElement('li');
  let cartListItemContent = document.createElement('p');
  cartListItemContent.classList.add('list-content')
  let cartListPrice = document.createElement("i");


  cartListItem.id = id;
  let name = el.querySelector('h3').innerText.trim();
  let price = +el.querySelector('h2').innerHTML;
  let minusBtn = document.createElement('span');
  minusBtn.innerHTML= '<i class="fas fa-minus-circle"></i>';
  minusBtn.classList.add('minus-item');

  inCartSum += price;
  inCartCount++;

  totalCount.forEach((item) => {
    item.innerText = inCartCount
  })
  totalSum.innerText = inCartSum;
  cartListPrice.append(`${price}`)
  cartListItemContent.append(`${name}: `, cartListPrice, minusBtn)
  cartListItem.append(cartListItemContent,);
  cartList.append(cartListItem,);
  cartArr.push([name,price]);

  showBodge(inCartCount, bodge);

    // ******Callback

  // minusBtn.addEventListener('click', (e) => {msgDel(minusBtn.parentNode.innerText,del,notDel)})

  // function msgDel(e,yes,no){
  //   let result = confirm(`Do you want to remove ${e}`);
  //   result ? yes() : no()
  // };
  //
  // function del() {
  //   // debugger
  //   minusBtn.parentNode.remove();
  //   totalCount.forEach((item) => {
  //     item.innerText = +item.innerText - 1;
  //     inCartCount = totalCount[0].innerText;
  //   })
  //   inCartSum = totalSum.innerText - cartListPrice.innerText;
  //   totalSum.innerText = inCartSum;
  //   cartArr.splice(inCartCount - 1, 1)
  //   alert(`${minusBtn.parentNode.innerText} has been remove!`)
  // };
  //
  // function notDel(){
  //   alert(`${minusBtn.parentNode.innerText}not remove!`)
  // };

  // **** Promise****

  minusBtn.addEventListener('click', (e) => {delPromise()})

  function delPromise() {
    return new Promise(function (resolve, reject) {
      let cart = document.querySelector('.cart');
      cart.style.display = 'none';
      let msg = document.createElement('div');
      msg.classList.add('msg');
      msg.innerHTML = `<p>Do you want to delete ${minusBtn.parentNode.innerText}?</p>`;
      let yesBtn = document.createElement('button');
      yesBtn.classList.add('yes-btn');
      yesBtn.innerText= 'Yes';
      let noBtn = document.createElement('button');
      noBtn.classList.add('no-btn');
      noBtn.innerText= 'No';

      msg.append(yesBtn, noBtn);
      document.body.append(msg)
      resolve()
      reject()
    })
        .then(() => {
          let agree = document.querySelector('.yes-btn')
          let disagree = document.querySelector('.no-btn')
          agree.addEventListener('click', () => {
            minusBtn.parentNode.remove();
            totalCount.forEach((item) => {
              item.innerText = +item.innerText - 1;
              inCartCount = totalCount[0].innerText;
            })
            inCartSum = totalSum.innerText - cartListPrice.innerText;
            totalSum.innerText = inCartSum;
            cartArr.splice(inCartCount - 1, 1)
            alert(`${minusBtn.parentNode.innerText} was removed!`)
            document.querySelector('.msg').remove()
            cart.style.display = 'block';

          })
          disagree.addEventListener('click', () => {
            alert(`${minusBtn.parentNode.innerText} was not removed!`)
            document.querySelector('.msg').remove()
            cart.style.display = 'block';

          })
        })
  }
}


function showBodge(count, element) {
  if(count > 0) {
    element.style.opacity = '1'
  }
  else
    element.style.opacity = '0'
}

cart.addEventListener('click',(e) => {
  if (e.target == document.querySelector('.close-cart')){
    cart.style.opacity = '0';
    cart.style.visibility = 'hidden';
  }
})

btnCart.addEventListener('click',(e) => {
  cart.style.opacity = '1';
  cart.style.visibility = 'visible';
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

sortList.addEventListener('click', (e) => {
  if (e.target == document.querySelector('.name')) {
    console.log(1)
    sortProducts(coffee_items, 'name');
  }
  else if (e.target == document.querySelector('.price')) {
    sortProducts(coffee_items, 'price');
  }
})

function sortProducts(data, prop){
  let dataCopy = [].slice.call(data);

  dataCopy.sort(function(a,b){ // a,b - это обьекты из массива products, которые мы попарно сравниваем
    if(a.getAttribute(`data-${prop}`) > b.getAttribute(`data-${prop}`)){ // если prop в обьекте а больше prop в обьекте b, то в массиве а перемещается после b
      return 1;
    }
    else  if(a.getAttribute(`data-${prop}`) < b.getAttribute(`data-${prop}`)){ // если prop в обьекте b больше prop в обьекте a, то в массиве b перемещается после a
      return -1;
    }
    else { // здесь ничего не меняем местами
      return 0;
    }
  });

  console.log(dataCopy);

  dataCopy.forEach((item, index) => item.style.order = index);
}


