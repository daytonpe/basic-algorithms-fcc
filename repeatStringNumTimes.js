function repeatStringNumTimes(str, num) {
  if (num <= 0) {
  	return "";
  }
  var x = "";
  for (var i = 0; i < num; i++) {
    x+=str;
	}
	return x;
}

console.log(repeatStringNumTimes("abc", 1));
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 5));
console.log(repeatStringNumTimes("*", -1));
