// Letters are 4 x 7
const letters = {
  a: [
    "  __ _ ",
    " / _' |",
    "| (_| |",
    " \\__,_|",
  ],
  b: [
    "| |    ",
    "| |,__ ",
    "|  __ \\",
    "|_,___/"
  ],
  c: [
    "  ____ ",
    " / ___\\",
    "| (____",
    " \\____/",
  ],
  e: [
    "  ____ ",
    " / __ \\",
    "|  ___/",
    " \\____/",
  ]
  /*
  *: [
    "       ",
    "       ",
    "       ",
    "       "
  ],
  */
}
const delimiter = '\n'

module.exports = function(string) {
  let output = [];

  if (typeof(string) !== 'string' || string === null || string === "") return;

  string.split(delimiter).forEach(function(fragment) {
    output = ["", "", "", "", ""]

    for (let i = 0, letter = fragment[i]; i < fragment.length; i++, letter = fragment[i]) {
      for (let j = 0, line = letters[letter][j]; j < letters[letter].length; j++, line = letters[letter][j]) {
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
