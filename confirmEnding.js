function confirmEnding(str, target) {
  return str.slice(str.length-target.length, str.length) == target;
}

confirmEnding("Bastian", "n");