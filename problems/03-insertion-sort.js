// Implement Insertion Sort

function insertionSort(list) {
  // your code here
  let holePosition;
  let valueToInsert;

  for(let i = 1; i < list.length; i++) {
    valueToInsert = list[i];                                            //V=2
    holePosition = i;                                                   //H=1

    while(holePosition > 0 && list[holePosition - 1] > valueToInsert) { //1>0true & 3>2true  //0>0false
      list[holePosition] = list[holePosition - 1];                      //2 => 3
      holePosition = holePosition - 1;                                  //H=0
    }
    list[holePosition] = valueToInsert;                                                      //
  }
  return list;
}

//[3, 2, 1]


module.exports = {
  insertionSort
};
