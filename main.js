
//1. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
 // ***(Method push())***

// arr1 = [1, 2, 3];
// arr1.push(4,5,6);
// console.log(arr1);

// // ***cycle***

// arr2 = [1, 2, 3];
// for (var i = arr2.length; i < 6; i++) {
//  	arr2[i] = i + 1;
//  };
// console.log(arr2);

 // 2. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6
 // ***(Method shift())***

// arr1 = [1, 2, 3];

// arr1.unshift(4, 5, 6);
// console.log(arr1);

// // ***(Method concat)

// [4,5,6].concat(arr1);
// console.log(arr1);

// // ***(Method splice)

// arr1.splice(0, 0, 4, 5, 6);
// console.log(arr1);

// 3. массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// ***(Method slice())

// arr = [1, 2, 3, 4, 5];
// arr1 = arr.slice(0, 3);
// console.log(arr1);

// 4. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]
// ***(Method slice())

// arr = [1, 2, 3, 4, 5];
// arr1 = arr.slice(3);
// console.log(arr1);

// 5. .Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// ***(Method splice)

// arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

// 5.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2,
// 3, 4].
// ***(Method splice)

// arr = [1, 2, 3, 4, 5];
// arr1 = arr.splice(1, 3);
// console.log(arr1);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b',
// 'c', 4, 5].
// ***(Method splice)

arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c') 
console.log(arr);