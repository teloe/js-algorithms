/*
 * Create a function that, given string and array of ‘naughty words’, returns
 * new string with naughty words changed to “x” chars. Given ("Snap crackle pop
 * nincompoop!", ["crack", "poop"]), you should return "Snap xxxxxle pop
 * nincomxxxx!""])
 */

function censor(str, arr) {
  if (arr.indexOf(str) > -1 ) {
    return true;
  } else {
    return false;
  }
}

var str = "Snap crackle pop nincompoop!", arr = ["crack", "poop"];
console.log(censor(str, arr)); // "Snap xxxxxle pop nincomxxxx!"
