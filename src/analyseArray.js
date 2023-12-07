function analyseArray(arr) {
  let object = {
    average: 0,
    min: Infinity,
    max: -Infinity,
    length: 0,
  };

  while (arr.length) {
    let firstItem = arr.shift();

    if (typeof firstItem === "number") {
      object.average = Math.floor((object.average + firstItem) / 2);
      if (firstItem > object.max) {
        object.max = firstItem;
      }
      if (firstItem < object.min) {
        object.min = firstItem;
      }
    }

    object.length++;
  }

  return object;
}

export { analyseArray };
