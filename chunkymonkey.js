function chunkArrayInGroups(arr, size) {
  // Break it up.
  var tempar = [];
  var newArr = arr.slice();
   
  for (var i = 0; i < newArr.length; i +=size ) {
    if (arr[i] !== "") {
      tempar.push(arr.splice(0, size));
    }
    
  }
  return tempar;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);