function bubbleSort(arr){
  // keeps pushing largest number to the back
  // after each go it doesn't look at the back
  // always looks at two numbers next to eachother
  // if we have a length of ten the first time will do 9 sorts

  var length = arr.length-1;
  for (var index = 0; index < arr.length; index++){
      for (var i = 0; i < length; i++){
      if (arr[i] > arr[i+1]){
        // var tempVar;
        // tempVar = arr[i+1];
        // arr[i+1] = arr[i];
        // arr[i] = tempVar;
        arr = swap(arr, i);
      }
    }
    length--;
  }

  return arr;
}

function swap(arr, i){
  var tempVar;
  tempVar = arr[i+1];
  arr[i+1] = arr[i];
  arr[i] = tempVar;

  return arr;
}


// bubbleSort.prototype.swap = function(){

// }
