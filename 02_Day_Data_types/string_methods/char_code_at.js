// charCodeAt(): Takes an index and returns the char code (ASCII number) of the value at that index.

/*
  Syntax:

  string.charCodeAt(index)
*/

let string = '30 Days of JavaScript'
console.log(string.charCodeAt(3)) // The ASCII code of D is 68

let lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // The ASCII code of t is 116
