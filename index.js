const defaultFont = require('./fonts/default');
const delimiter = '\n'

module.exports = function(string, options) {
  options = Object.assign({
    delimiter: '\n'
  }, options);

  let output = [];
  let result = "";

  if (typeof(string) !== 'string' || string === null || string === "") return;

  string.split(options['delimiter']).forEach(function(fragment) {
    output = ["", "", "", "", ""]

    for (let i = 0, letter = fragment[i]; i < fragment.length; i++, letter = fragment[i]) {
      letter = translate(letter);
      for (let j = 0, line = defaultFont[letter][j]; j < defaultFont[letter].length; j++, line = defaultFont[letter][j]) {
        output[j] += line;
      }
    }
    result = append(result, output);
  })

  return result;
}

function valid(arr) {
  // TODO
}

function print(arr) {
  for (let i = 0, line = arr[i]; i < arr.length; i++, line = arr[i]) {
    console.log(line);
  }
}

function append(result, arr) {
  for (let i = 0, line = arr[i]; i < arr.length; i++, line = arr[i]) {
    result += line + '\n';
  }
  return result;
}

function translate(letter) {
  // Catch alphabetic
  if (letter.match(/^[a-zA-Z]/g)) {
    // Only allow lowercase letters (might change with new fonts)
    return letter.toLowerCase();
  }

  // Find names for non-alphabetic
  switch(letter) {
    case ' ':
      return 'space';
    default:
      return 'dne';
  }
}
