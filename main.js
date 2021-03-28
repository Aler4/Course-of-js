// 1 . Cоздать базовый класс User и отнаследовать
// от него Admin в двух стилях - функциональном и на классах

// ***Функиональное



//  function User(name, age, hobbys) {

//   this.name = name;
//   this.age = age;
//   this.hobbys = [hobbys];

//    this.breakSomething = function() {
//     console.error( ` Hi I user: ${this.name}, I will break something here! :(` )
//   }
// };

// function Admin(...args){
//     User.call(this, ...args)
//     this.fixSomething = function() {
//     console.warn(`Hi! I admin: ${this.name}, I will fix
//     everthing but anyway we will find you ${user1.name}`)
//   }
// };


// const user1 = new User('Neo', 25, 'be cool');
// const admin1 = new Admin('Smith', Infinity, 'destruction of humanity');

// user1.breakSomething();
// admin1.fixSomething();
// console.log(user1);
// console.log(admin1);



// *****ООП

// class User {

//   constructor(name, age, hobbys) { 
//     this.name = name;
//     this.age = age;
//     this.hobbys = [hobbys];
//         this.breakSomething = function() {
//     console.error( ` Hi I user: ${this.name}, I will break all here! :)` )
//   }
// }
// }

// class Admin extends User {
//   constructor(...args) {
//     super(...args)
//     this.fixSomething = function (){
//     console.warn(`Hi! I admin: ${this.name}, please do not :(`);
//     }

//   }
// }

// const user1 = new User('Masha', 8, 'irritate');
// const admin1 = new Admin('Bear', 45, 'quiet life');

// user1.breakSomething();
// admin1.fixSomething();


// ***2. Относледовать холодильничек



function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge() {

  Machine.call(this, +arguments[0]);

  let volume = +arguments[0] / 100;

  this.food = [];

  this.addFood = function(...foods) {

    (this._enabled == false) ?
    console.error('ошибка, холодильник выключен') :
    this.food.push(...foods);

    if (this.food.length > volume){

      this.food = this.food.slice(0,volume)
     console.error(' ошибка, слишком много еды')

    };
  }

  this.getFood = function() { return this.food; } // Увы, как сделать массив неизменяемым я не допер :(
}

let fridge = new Fridge(500);
fridge.enable();

fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
alert( fridgeFood )

fridgeFood.push("вилка", "ложка");

alert( fridge.getFood() )


