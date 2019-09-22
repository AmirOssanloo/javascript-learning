// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
// function reverse(str) {
//   let reversed = str;
//   return reversed
//     .split('')
//     .reverse()
//     .join('');
// }

// Solution 2
// function reverse(str) {
//   let reversed = '';

//   for (char in str) {
//     reversed = str[char] + reversed;
//   }

//   return reversed;
// }

// Solution 3
function reverse(str) {
  let reversed = str;
  return reversed.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;
