// Implement Quick Sort

function quickSort(array) {
  if(array.length <= 1) return array;

  let pivot = array.shift(); //first element
  let left = [];
  let right = [];

  for(let i = 0; i < array.length; i++) {
    if(array[i] <= pivot) {
      left.push(array[i]);
    }
    else if (array[i] > pivot) {
      right.push(array[i]);
    }
  }
  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);
  let lp = leftSorted.concat(pivot)
  return lp.concat(rightSorted);

}

let arr = [7, 3, 8, 2, 5]
console.log(quickSort(arr))

module.exports = {
  quickSort
};
