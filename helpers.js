/**
 * Helper function to sort array
 * @param {*} arrayList 
 * @param {*} descending - default true
 */
const sortArray = (arrayList = [], descending = true) => {
  return (descending) ? arrayList.sort((a, b) =>  a - b) : arrayList.sort((a, b) =>  b - a);
};

/**
 * Helper function to chunk up an array into an array of arrays
 * @param {*} inputArray 
 * @param {*} amountPerChunk 
 */
const chunkArray = (inputArray = [], amountPerChunk) => {
  if (!amountPerChunk) {
    return [];
  }
  const arrayChunks = inputArray.reduce((all, one, index) => {
    const chunk = Math.floor(index/amountPerChunk); 
    all[chunk] = [].concat((all[chunk]||[]),one); 
    return all;
  }, []);

  return arrayChunks;
};

/**
 * Helper function to convert a string of comma separated integers into a comma separated integers
 * @param {*} stringOfCommaInts 
 */
const convertCommaStringIntsToArrayInts = (stringOfCommaInts = '') => {
  let arrayOfInts = [];
  if (stringOfCommaInts) {
    const arrayString = stringOfCommaInts.split(',');
    for(let i = 0; i < arrayString.length; i++) {
      arrayOfInts.push(parseInt(arrayString[i]));
    }
  }
  return arrayOfInts;
};

/**
 * Helper function to find the max value in a array of integers
 * @param {*} arrayOfInts 
 */
const maxValueInArray = (arrayOfInts = []) => {
  const arrayLength = arrayOfInts.length;
  if (arrayLength === 0) {
    return 0;
  }

  let length = arrayLength;
  let max = -Infinity;
  while(length--) {
    if (Number(arrayOfInts[length] > max)) {
      max = Number(arrayOfInts[length]);
    }
  }
  return max;
};

/**
 * Helper function to sort an array of arrays
 * @param {*} arrayOfArrays 
 */
// something is off with this sorting..
const sortArrayOfArrays = (arrayOfArrays = []) => {
  return arrayOfArrays.sort((a, b) =>  a[0] - b[0]);
};

module.exports = {
  sortArray,
  chunkArray,
  convertCommaStringIntsToArrayInts,
  maxValueInArray,
  sortArrayOfArrays,
}
