const bubbleSort = (array) => {
  let swapped = true
  do {
    swapped = false
    for(i = 0; i <= array.length; i++){
      if(array[i] > array[i + 1]) {
        let placeholder = array[i]
        array[i] = array[i + 1]
        array[i + 1] = placeholder
        swapped = true;
      }
    }
  } while(swapped);
  return array;
}

module.exports = bubbleSort
