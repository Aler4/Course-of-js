
// ДЗ: проапгрейдить функцию суммирования, чтобы она обрабатывала не только числа после просчитанного диапазона, но и в начале - memSum(0,10); искать не до первого совпадения, а до лучшего
    // *********************************
function sumRange(){

  let memory = [];

  return function(a, b){
    
    if(a > b){
      let c = a;
      a = b;
      b = c;
    }

    let result = a;
  
    let obj = {
      start: a,
      end: b
    }

    if(memory.length > 0){
      memory.forEach(function(item){ 
        if(item.start == a && item.end <= b){ 
          result = item.sum; 
          a = item.end;
        }
      });
    }

    for(let i = a+1; i <= b; i++){ 
      result += i;
    }

    obj.sum = result; 
    memory.push(obj); 
    console.log(memory); 
    memory.sort((a,b) => {return b.start - a.start});

        // <<<<Я В общем просто развернул массив от большего старта к меньшему и соответсвенно
        //  цыкл не будет останавливатьcz на первом попавшемся меньшем значении, а будет идти 
        // по сортированному массиву до первого удобного>>>
  }


}

let memSum = sumRange();
memSum(0,10);
memSum(1,15);


memSum(2,5);
memSum(2,8);

