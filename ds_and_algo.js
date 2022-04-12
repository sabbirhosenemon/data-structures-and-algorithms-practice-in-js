// linear search algorithm
// worst case time complexity for linear search is O(n)
function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}

// recursive linear search algorithm
// worst case time complexity is O(n)
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
// worst case time complexity for bubble sort is O(n^2)
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
// worst case time complexity is O(n^2)
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
// worst case time complexity for insertion sort is O(n^2)
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
      console.log(arr);
    }
    console.log(`${i + 1} pass --- `, arr);
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
    console.log(arr);
  }
  return arr;
}

// recursive insertion sort algorithm
// worst case time complexity is O(n^2)
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

// quick sort algorithm
// worst case time complexity for quick sort is O(n^2)
function part(array, left, right) {
  var lArray = [];
  var rArray = [];
  var mid = Math.floor((left + right) / 2);
  var pivot = array[mid];
  for (var i = left; i <= right; i++) {
    if (i !== mid) {
      if (array[i] < pivot) {
        lArray.push(array[i]);
      } else {
        rArray.push(array[i]);
      }
    }
  }
  for (var i = 0; i < lArray.length; i++) {
    array[left + i] = lArray[i];
  }
  var final = left + i;
  array[final] = pivot;
  for (var i = 0; i < rArray.length; i++) {
    array[final + 1 + i] = rArray[i];
  }
  return final;
}

function quickSort(array, left, right) {
  if (right <= left) {
    return array;
  }
  var final = part(array, left, right);
  sort(array, left, final - 1);
  sort(array, final + 1, right);
  return array;
}

// merge sort algorithm
// worst case time complexity for merge sort is O(n log n)
function merge(w, v) {
  let m = w.length;
  let n = v.length;
  let s = [];
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < m && j < n) {
    if (w[i] < v[j]) {
      s.push(w[i]);
      i++;
    } else {
      s.push(v[j]);
      j++;
    }
    k++;
  }
  while (i < m) {
    s.push(w[i]);
    i++;
    k++;
  }
  while (j < n) {
    s.push(v[j]);
    j++;
    k++;
  }
  return s;
}

function mergeSort(vector) {
  let n = vector.length;
  console.log("value of n ", n);
  if (n === 1) {
    return vector;
  }
  let mid = Math.floor((n + 1) / 2);
  console.log("value of mid ", mid);
  let left = vector.slice(0, mid);
  let right = vector.slice(mid, n);
  return merge(mergeSort(left), mergeSort(right));
}

// binary search algorithm
// worst case time complexity for binary search is O(log n)
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
  if (n < 2) {
    return n;
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

// console.log(merge([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
// console.log(mergeSort([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]));
// console.log(binarySearchRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
// console.log(insertionSort([5,5,1,5,4,8]));
// console.log(insertionSortCompact([5, 5, 1, 5, 4, 8]));
// console.log(sort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
// console.log(recursiveBubbleSort([10, 2, 3, 4, 5, 6, 7, 8, 9, 1]));
// console.log(bubbleSort([10, 2, 3, 4, 5, 6, 7, 8, 9, 1]));
// console.log(recursiveLinearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));
// console.log(sumRecursion(5))
// console.log(fibonacciRecursion(10));
// console.log(factorial(5));
// console.log(factorialRecursion(5));
