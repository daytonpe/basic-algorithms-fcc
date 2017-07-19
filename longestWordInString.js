function findLongestWord(str) {

	// remove all special chars
	str = str.replace(/[^\w\s]/gi, ''); 

	// split into an array
	var arr = str.split(' ');
  
	// loop through array and replace elements with their length
  var arrayLength = arr.length;
	for (var i = 0; i < arrayLength; i++) {
    arr[i] = arr[i].length;
	}

	// sort elements by size
	arr = arr.sort(function(a, b) {
  	return b-a;
	});
	
	return arr[0];


	// return first element
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
