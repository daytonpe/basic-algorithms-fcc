
function rot13(str) { // LBH QVQ VG!
  
	arr = [];

		//if number is in first 13 letters, need to go the other way because it loops back around

	for (var i = 0; i < str.length; i++) {
		//should really use regex here
		if (str[i] == ' ' || str[i] == '.' || str[i] == '!' || str[i] == '?'){
			arr.push(str[i]);
		}
		else if (str.charCodeAt(i)>77){
			arr.push(String.fromCharCode((str.charCodeAt(i)-13))) ;
		}
		else{
			arr.push(String.fromCharCode((str.charCodeAt(i)+13))) ;
		}
	}

  return arr.join('');
}


console.log(rot13("SERR PBQR PNZC"));
// should decode to "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!"));
// should decode to "FREE PIZZA!"
console.log(rot13("SERR YBIR?"));
// should decode to "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));
// should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."


// One of the simplest and most widely known ciphers 
// is a Caesar cipher, also known as a shift cipher. 
// In a shift cipher the meanings of the letters 
// are shifted by some set amount.

// A common modern use is the ROT13 cipher, 
// where the values of the letters are shifted 
// by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 
// encoded string as input and returns a decoded string.

// All letters will be uppercase. 
// Do not transform any non-alphabetic 
// character (i.e. spaces, punctuation), but do pass them on.

// Remember to use Read-Search-Ask if you 
// get stuck. Try to pair program. Write your own code.

// Here are some helpful links: