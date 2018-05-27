# Block Letter Generator

Easily generate block letters

## Install

```bash
$ npm install block-letters
```

## Usage

```js
const blockLetterGenerator = require('block-letters');

blockLetterGenerator('Default font');
/*
    | |  ____ /-----+  __ _  _   _ ,-, _____    /-----+  ___   _   _  _____
 __,| | / __ \| ----+ / _' || | | || ||_, ,_|   | ----+ / _ \ | \ | ||_, ,_|
/ __  ||  ___/| +---+| (_| || |_| || |  | |     | +---+( |_| )|  \| |  | |  
\___,_| \____/|_|     \__,_|\___,_||_|  |_|     |_|     \___/ |_|\__|  |_|  
*/

blockLetterGenerator('Multiline with#custom line#breaks', {lineBreak: '#'});
/*
,-._._  _   _ ,-, _____  _ ,-, _  _   _   ____     _, ,_  _  _____ | |    
| , , \| | | || ||_, ,_|l_l| |l_l| \ | | / __ \   | |_| |l_l|_, ,_|| |,__
| | | || |_| || |  | |  | || || ||  \| ||  ___/   | | | || |  | |  |  _  \
|_|_|_|\___,_||_|  |_|  |_||_||_||_|\__| \____/   |_,_,_||_|  |_|  |_| |_|
  ____  _   _  _____  _____   ___  ,-._._    ,-, _  _   _   ____
 / ___\| | | |/ ____/|_, ,_| / _ \ | , , \   | |l_l| \ | | / __ \
| (____| |_| |\____ \  | |  ( |_| )| | | |   | || ||  \| ||  ___/
 \____/\___,_|/_____/  |_|   \___/ |_|_|_|   |_||_||_|\__| \____/
| |     _____   ____   __ _ | | / / _____
| |,__ |  __ \ / __ \ / _' ||  ' / / ____/
|  __ \|    _||  ___/| (_| || |\ \ \____ \
|_,___/|_|\_\  \____/ \__,_||_| \_|/_____/
*/

blockLetterGenerator('With custom spacers', {font: 'morse', spacer: '#'});
/*
.--#..#-#....# #-.-.#..-#...#-#---#--# #...#.--.#.-#-.-.#.#.-.#...
*/

blockLetterGenerator('Infinite possibilities', {font: 'morse'});
/*
../-./..-./../-./../-/./ /.--./---/.../.../../-.../../.-../../-/.././...
*/
```

## Examples

See [test.js](https://github.com/drewthoennes/block-letter-generator/blob/master/test.js) for examples

## License

[MIT](https://github.com/drewthoennes/block-letter-generator/blob/master/license)
