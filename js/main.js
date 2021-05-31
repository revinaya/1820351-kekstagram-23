function getRandomValue(min, max) {
    if (min < 0 ) {
       throw new RangeError('Parametr `min` is out of range')
    }
    if (max < 0 ) {
       throw new RangeError('Parametr `max` is out of range')
    }
	if (max < min) {
	   min = max
	}
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function checkStringLength(str, max_length) {
    return str.length <= max_length;
  }

