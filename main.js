
 // 1. Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти;

// arr1 = [-34, 0,  8, 7, 9, 11, 22, -2, 553];

// ***Method #1

// for( value of arr1) {
//   if (value > 0 && value< 10) {
//     console.log(value)
//   }
// };

// ***Method #2

// function getSpecArr(arr) {
//   let lessValue = 0;
//   let bigValue = 0;
//   arr = arr.sort((a, b) => {
//     return a -b;
//   })

//   for( i = 1; i <= arr.length - 1 ; i++) {
//       if (arr[i] > 0 && arr[i] < 10) {
//         console.log(arr[i])
//       }
//       else if (arr[i] < 0) {
//         lessValue = i + 1;
//         continue;
//     }
//     else if (arr[i] > 10) {
//       bigValue = arr.length - i;
//       break;
//     }
//   }
//       console.log(`Значений меньше 0: ${lessValue}`)
//       console.log(`Значений больше 10: ${bigValue}`)

// };
//  getSpecArr(arr1);

// 2. Дан массив с числами. Найдите среднее арифметическое его элементов;

// let arr2 = [1, 2, 3, 8, 13, 46];
// function getMean(arr) {
//   let total = 0;
//   let sum = arr.length;
//   for( num of arr){
//     total +=num;
//   }
//   console.log(Math.round(total/sum))
// };
// getMean(arr2);

// 3. Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
// Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл.
// Если такого элемента нет - ничего не выводите. 

// let arr3 = [3,4, 6, 8, 5, 9,];

// function findValue(arr, value) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == value) {
//       console.log('Ecть');
//       console.log('Итераций: '+ i);
//       break;
//     }
//   }
//    return console.log('Значения нет');
// };
// findValue(arr3,5);

// 4) Создайте объект cat, name:'Stepan' и в этом объекте создайте метод voice,
//  который при вызове себя у объекта cat будет выводить сообщение в консоль 'привет, меня зовут Stepan';

// let cat = {
//   name: 'Stepan',
//    voice(){
//     console.log(`Привет, меня зовут ${this.name}, мяу или типо того`)
//   }
// };

// cat.voice();

// 5. Программное обеспечение для распознавания символов широко используется для оцифровки печатных текстов.
// Таким образом, тексты можно редактировать, искать и сохранять на компьютере.
// Когда документы (особенно старые, написанные на пишущей машинке) оцифровываются,
// программы распознавания символов часто делают ошибки. Ваша задача - исправить ошибки в оцифрованном тексте
// . Вам нужно только исправить следующие случаи: S-5, O-0, I-1,
//  correct('L0ND0N') => 'LONDON'
// correct('DUBL1N') => 'DUBLIN'
// correct('51NGAP0RE') => 'SINGAPORE'
// correct('BUDAPE5T') => 'BUDAPEST'
// correct('PAR15') => 'PARIS'


// ***Method #1

// function correct(str) {
//    corStr =str.split('');

//   for(i = 0; i <= corStr.length; i++) {
//     switch(corStr[i]) {
//       case '5' ||  5:
//           corStr.splice(i, 1, 'S')
//         continue;
//       case '0' || 0:
//           corStr.splice(i, 1, 'O');
//         continue;
//       case '1' || 1:
//           corStr.splice(i, 1, 'I');
//         continue;
//     }
//   } 

//   return console.log(`${str} => ${corStr.join('')}`); 
// };

// ***Method #2

function correct(str) {
   corStr  = str.split('');

  for(letter in corStr) {
    switch(corStr[letter]) {
      case '5' ||  5:
          corStr[letter] = 'S';
        continue;
      case '0' || 0:
         corStr[letter] = 'O';
        continue;
      case '1' || 1:
          corStr[letter] = 'I';
        continue;
    }
  } 

  return console.log(`${str} => ${corStr.join('')}`); 
};
correct('L0ND0N');
correct('DUBL1N');
correct('51NGAP0RE');
correct('BUDAPE5T');
correct('PAR15');








