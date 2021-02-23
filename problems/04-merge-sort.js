// Implement Merge Sort

function merge(array1, array2) {
  // your code here
  let result = [];
  while (array1.length && array2.length) {
    if (array1[0] > array2[0]) {
      result.push(array2[0]);
      array2.shift();
    } else {
      result.push(array1[0]);
      array1.shift();
    }
  }
  //console.log(array1, array2);
  while (array1.length) {
    result.push(array1[0]);
    array1.shift();
  }
  while (array2.length) {
    result.push(array2[0]);
    array2.shift();
  }
  return result;
}

function mergeSort(array) {
  // your code here
  if (array.length <= 1) {
    return array;
  }
  var l1 = array.slice(0, Math.floor(array.length / 2));
  var l2 = array.slice(Math.floor(array.length / 2));

  l1 = mergeSort(l1);
  l2 = mergeSort(l2);
  return merge(l1, l2);
}

//console.log(merge([1, 3, 5], [2, 4, 6]));
console.log(mergeSort([4, 2, 1, 3, 5]));

module.exports = {
  merge,
  mergeSort,
};
