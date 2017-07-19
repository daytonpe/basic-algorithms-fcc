
function reverseString(str) {
  var strArray = [];
	var strLength = str.length;

	for (var i = 0; i <= strLength; i++) {
		strArray.push(str[strLength-i]);
	}

	str = strArray.join('');
	console.log(str);

  return str;
}

reverseString("hello");
reverseString("grandfather");
reverseString("hello old friend");
