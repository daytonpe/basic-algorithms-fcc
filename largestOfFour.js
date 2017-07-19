function largestOfFour(arr) {
  
  // create return array
  var largestNums = [];

  // loop through array of arrays (master array)
  var arrayLength = arr.length;
	for (var i = 0; i < arrayLength; i++) {
  	// sort each array in the master array
    arr[i] = arr[i].sort(function(a, b) {
  	return b-a;
		});
  // push largest (first) element of each sub array into return array
	largestNums.push(arr[i][0]);
	}

  return largestNums;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));