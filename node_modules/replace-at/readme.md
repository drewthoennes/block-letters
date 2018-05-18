# Replace At

A much needed JavaScript function when dealing with strings

## Install

```bash
$ npm install replace-at
```

## Usage

```js
const replaceAt = require('replace-at');

replaceAt('Hello  $, how are you?', 6, 'world');
// Hello world, how are you?

replaceAt('Replace this inline', 6, 'ing this inline replaces multiple characters', {inline: true});
// Replacing this inline replaces multiple characters
```

## Examples

See [test.js](https://github.com/drewthoennes/replace-at/blob/master/test.js) for examples

## License

[MIT](https://github.com/drewthoennes/replace-at/blob/master/license)
