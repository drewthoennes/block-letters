const defaultFont = require('./fonts/default');
const delimiter = '\n'

module.exports = function(string) {
  let output = [];

  if (typeof(string) !== 'string' || string === null || string === "") return;

  string.split(delimiter).forEach(function(fragment) {
    output = ["", "", "", "", ""]

    for (let i = 0, letter = fragment[i]; i < fragment.length; i++, letter = fragment[i]) {
      letter = translate(letter);
      for (let j = 0, line = defaultFont[letter][j]; j < defaultFont[letter].length; j++, line = defaultFont[letter][j]) {
        output[j] += line;
      }
    }
    print(output);
  })

  return string;
}

function print(arr) {
  for (let i = 0, line = arr[i]; i < arr.length; i++, line = arr[i]) {
    console.log(line);
  }
}

function translate(letter) {
  // Catch alphabetic
  if (letter.match(/^[a-zA-Z]/g)) {
    return letter;
  }

  // Find names for non-alphabetic
  switch(letter) {
    case ' ':
      return 'space';
    default:
      return 'dne';
  }
}
