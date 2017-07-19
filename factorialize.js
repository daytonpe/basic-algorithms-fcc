
function factorialize(num) {
	var total = 1;
	for (var i = 1; i <= num; i++) {
		total *= i; 
	  // console.log(total);
	}
  return total;
}

console.log(factorialize(5));