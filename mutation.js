function mutation(arr) {
	var stringOne = arr[0].toLowerCase();
	var stringTwo = arr[1].toLowerCase();

	var stringTwoArray = stringTwo.split('');

	var arrayLength = stringTwoArray.length;
	
	for (var i = 0; i < arrayLength; i++) {
    if (stringOne.indexOf(stringTwoArray[i]) == -1){
    	return false;
    }
	}

  return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["floor", "for"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["voodoo", "no"]));

//downcase both
//split up second array into letters
//loop through all those letters
//see if first contains them all
