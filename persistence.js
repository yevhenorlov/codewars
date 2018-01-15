/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
*/

function persistence(num) {
  function countIterations(num, counter) {

    const result = Array
      .from(num.toString())
      .map(string => parseInt(string))
      .reduce((acc, num) => {
        acc *= num;
        return acc;
      }, 1);

    if (num.toString().length <= 1) {
      return counter;
    }
    return countIterations(result, counter+1)
  }
  return countIterations(num, 0);
}

console.log('final result for 39: ', persistence(39));
console.log('final result for 4: ', persistence(4));
console.log('final result for 25: ', persistence(25));
console.log('final result for 999: ', persistence(999));
