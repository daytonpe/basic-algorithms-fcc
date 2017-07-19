function reverseString(str) {
  var strArray = [];
	var strLength = str.length;
	for (var i = 0; i <= strLength; i++) {
		strArray.push(str[strLength-i]);
	}
	str = strArray.join('');
  return str;
}


function palindrome(str) {
	str = str.toLowerCase().replace(/[^a-z0-9+]+/gi, '');
	if (str == reverseString(str)){
		return true;
	}
  else{
  	return false;
  }
}



console.log(palindrome("eye"));
console.log(palindrome("foot"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("My age is 0, 0 si ega ym."));
