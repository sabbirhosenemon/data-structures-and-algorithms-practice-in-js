// linear search algorithm
function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}

// recursive linear search algorithm
function search(v, l, item) {
  let n = v.length - 1;
  if (l > n) {
    return false;
  } else if (v[l] === item) {
    return true;
  }
  return search(v, l + 1, item);
}

function recursiveLinearSearch(v, item) {
  return search(v, 0, item);
}

// bubble sort algorithm
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    // console.log('1st loop', arr);
    for (var j = 0; j < arr.length - 1 - i; j++) {
      //   console.log('2nd loop', arr);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        // console.log('swap', arr);
      }
    }
  }
  return arr;
}

// recursive bubble sort algorithm
function sort(arr, i) {
  if (i <= 1) {
    return arr;
  }
  for (var j = 0; j < i; j++) {
    if (arr[j] > arr[j + 1]) {
      swap(arr, j, j + 1);
    }
  }
  sort(arr, i - 1);
  return arr;
}

function recursiveBubbleSort(arr) {
  let n = arr.length;
  return sort(arr, n);
}

// insertion sort algorithm
function shift(arr, i, j) {
  if (i <= j) {
    return arr;
  }
  let temp = arr[i];
  for (let k = i; k > j; k--) {
    arr[k] = arr[k - 1];
  }
  arr[j] = temp;
  return arr;
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        shift(arr, j, j - 1);
      }
    }
  }
  return arr;
}

// compact insertion sort algorithm
function insertionSortCompact(arr) {
  for (var i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

// recursive insertion sort algorithm
function insertionSortRecursion(arr) {
  let n = arr.length;
  if (n <= 1) {
    return arr;
  }
  let temp = arr[n - 1];
  arr[n - 1] = arr[0];
  arr[0] = temp;
  insertionSortRecursion(arr.slice(0, n - 1));
  return arr;
}

// binary search algorithm
function binarySearch(arr, val) {
  const n = arr.length;
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] === val) {
      return m;
    } else if (arr[m] < val) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return -1;
}

// recursive binary search algorithm
function searchRecursion(v, l, r, item) {
  if (l > r) {
    return false;
  }
  let m = Math.floor((l + r) / 2);
  if (v[m] === item) {
    return true;
  } else if (v[m] > item) {
    r = m - 1;
  } else {
    l = m + 1;
  }
  return searchRecursion(v, l, r, item);
}

function binarySearchRecursion(arr, val) {
  let n = arr.length;
  let l = 0;
  let r = n - 1;
  return searchRecursion(arr, l, r, val);
}

// factorial calculation
function factorial(n) {
  let a = 1;
  for (let i = 1; i <= n; i++) {
    a *= i;
  }
  return a;
}

// factorial calculation using recursion
function factorialRecursion(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorialRecursion(n - 1);
}

// fibonacci series calculation recursion | 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
function fibonacciRecursion(n) {
  if (n <= 2) {
    return 1;
  }
  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

// sum of n numbers using recursion | n should be greater than 0
function sumRecursion(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumRecursion(n - 1);
}

// =========================================CONSOLE LOGS========================================

// console.log(binarySearchRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
// console.log(insertionSort([10, 6, 9, 3, 1, 2, 4, 5, 7, 8]));
// console.log(insertionSortCompact([10, 6, 9, 3, 1, 2, 4, 5, 7, 8]));
// console.log(sort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
// console.log(recursiveBubbleSort([10, 2, 3, 4, 5, 6, 7, 8, 9, 1]));
// console.log(bubbleSort([10, 2, 3, 4, 5, 6, 7, 8, 9, 1]));
// console.log(recursiveLinearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));
// console.log(sumRecursion(5))
// console.log(fibonacciRecursion(5));
// console.log(factorial(5));
// console.log(factorialRecursion(5));
