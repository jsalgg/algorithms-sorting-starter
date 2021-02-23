// Implement Selection Sort

// Implement swap without looking at bubble sort
function swap(arr, index1, index2) {
  // your code here
  let holder = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = holder;
}

function selectionSort(list) {
  // your code here
  const n = list.length;
  for (let i = 0; i < n - 1; i++) {
    let min = list[i];
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (list[j] < min) {
        min = list[j];
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(list, i, minIndex);
      //console.log(list);
    }
  }

  return list;
  /*
  while (sorted <= list.length) {
    for (let i = 0; i < list.length - 1; i++) {
      let num1 = list[i];
      let num2 = list[i + 1];
      if (num1 > num2) {
        swap(list, i, i + 1);
      }
    }
    sorted++;
  }*/
}

arr = [4, 3, 2, 1, 5];
//[4,3,2,1]
//[1,3,2,4]
//[1,2,3,4]
console.log(selectionSort(arr));

module.exports = {
  selectionSort,
  swap,
};
