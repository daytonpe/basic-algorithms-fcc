function truncateString(str, num) {
  // Clear out that junk in your trunk
 	len = str.length;

 	// CHECK
 	if (num>=len){
 		return str;
 	}
  str = str.slice(0, num);

  if (str.indexOf(' ') == -1){
  	return str.slice(0, num) + '...';
  }

  len = str.length;
  // check, split, pop , join, repeat

 	// good up to 200 words or it stops automatically
	var i = 200;

	do {
	   i -= 1;
	   // SPLIT
	   // var arr = str.split(/[^a-zA-Z0-9]/);
	   var arr = str.split(' ');
	   

	   // POP
	   arr.pop();

	   // JOIN
	   str = arr.join(' ');

	   if (str.length <= num){
	   	return str + '...';
	   }
	} while (i > 0);
 		
	return 'There has been an issue. Either the program is broken or your string is too long.';
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));
console.log(truncateString("A-", 1));

console.log(truncateString("Absolutely Longer", 2));




