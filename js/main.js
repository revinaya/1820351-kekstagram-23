function getRandomValue(min, max) {
  if (min < 0) {
    throw new RangeError('Parametr `min` is out of range');
  }
  if (max < 0) {
    throw new RangeError('Parametr `max` is out of range');
  }
  if (max < min) {
    min = max;
  }
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

getRandomValue(1, 10);
checkStringLength('TYFGHUTDGkjhh', 7);
