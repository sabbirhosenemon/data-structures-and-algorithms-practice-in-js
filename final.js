// x = 2
// x = x-2
// function check(n){
//     if (n > 2) {
//         return 2;
//     }
//     return n+1;
// }

// x = check(x)
// x = x+check(x)
// x = check(check(x))
// console.log(x)
// console.log(check(2))

// sum of non integer n numbers including n using recursion | n should be greater than 0
// function sumNonIntRecursion(n) {
//     if (n === 0) {
//         return 0;
//     }
//     return n + sumNonIntRecursion(n - 1);
// }

// console.log(sumNonIntRecursion(15));

// function f1(a, b) {
//   while (a !== b) {
//       console.log(`${a} - ${b}`);
//     if (a > b) {
//         console.log(a);
//       a = a - b;
//     } else {
//         console.log(b);
//       b = b - a;
//     }
//   }
//   return a;
// }

// console.log(f1(14, 13.5));

// function fibonacci(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fibonacci(n) + fibonacci(n + 2);
// }

// console.log(fibonacci(2));

function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
  };

  console.log(quicksort([10,6,3,2,1,8,5,4,7,9]));