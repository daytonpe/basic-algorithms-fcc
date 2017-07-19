//git rid of falsy values
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
function bouncer(arr){
	var filteredArray = arr.filter(Boolean);
  return filteredArray;
}





console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));


// function isFalsy(value){
// 	if (value === false || 
// 		value === null || 
// 		value === 0 || 
// 		value === "" || 
// 		value === undefined || 
// 		value == NaN ){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// }

// function bouncer(arr) {

//   var arrayLength = arr.length;
	
// 	for (var i = arrayLength-1; i >=0; i--) {
//     if (isFalsy(arr[i])){
//     	arr.splice(i,1);
//     }
//     // console.log(i + '   ' +arr);
// 	}
// 	// console.log('final');
// 	return arr;
// }