module.exports = function(string, index, replacement, options) {
  if (typeof(string) !== 'string') {
    throw new TypeError('Expected a string but got: ' + typeof(string));
  } else if (typeof(index) !== 'number') {
    throw new TypeError('Expected a number but got: ' + typeof(index));
  } else if(typeof(replacement) !== 'string') {
    throw new TypeError('Expected a string but got: ' + typeof(replacement));
  }

  if (index > string.length) {
    throw new RangeError('Index is out of range');
  }

  options = Object.assign({
    inline: false
  }, options);

  if (options['inline']) {
    return string.substring(0, index) + replacement + string.substring(index + replacement.length);
  } else {
    return string.substring(0, index) + replacement + string.substring(index + 1);
  }
}
