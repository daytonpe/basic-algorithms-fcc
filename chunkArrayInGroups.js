
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var copyArray = arr;
  var chunkArray = [];
  var finalArray = [];

  copyArray = arr;

  while (copyArray.length >0){
	  chunkArray = copyArray.slice(0, size);
	  copyArray = copyArray.slice(size, copyArray.length);
	  finalArray.push(chunkArray);
	}

  return finalArray;

}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));