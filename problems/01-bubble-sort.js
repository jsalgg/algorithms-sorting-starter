// Implement Bubble Sort
/*
Compare 1st to 2nd then swapping if needed
iterate, repeat
stop iterating when there are no more swaps
 */
//[3, 2, 1]
//[2, 3, 1]
//[2, 1, 3]
//[1, 2, 3]

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(array) {
  const n = array.length;
  let swapped = true;

  while(swapped) {
    swapped = false;
    //for(let j = 0; j < n - 1; j++) {
      for(let i = 0; i < n - 1; i++) {
        if(array[i] > array[i + 1]) {
          swap(array, i, i+1);
          swapped  = true;
          console.log("inside if", array)
        }
      }
    //}

  }
  return array;
}

let arr= [4, 3, 2, 1];
console.log(bubbleSort(arr))

module.exports = {
  bubbleSort,
  swap
};
