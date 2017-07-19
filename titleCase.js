String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function titleCase(str) {
  var arr = str.toLowerCase().split(' ');

  // loop through array and replace elements with capped version
  var arrayLength = arr.length;
	for (var i = 0; i < arrayLength; i++) {
    arr[i] = arr[i].capitalizeFirstLetter();
	}

	// join the array back together
	str = arr.join([separator = ' ']);

	return str;
}

console.log(titleCase("sHoRt AnD sToUt"));
