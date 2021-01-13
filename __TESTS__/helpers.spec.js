const { sortArray, chunkArray, convertCommaStringIntsToArrayInts, maxValueInArray } = require('../helpers');

describe('Elevator Challenge Test Suite - helpers tests', () => {
  it('Helper function sortArray passed empty array test case', () => {
    expect(sortArray()).toEqual([]);
  });

  it('Helper function sortArray passed an array test case', () => {
    expect(sortArray([3,2,1])).toEqual([1,2,3]);
  });

  it('Helper function chunkArray passed empty arguments test case', () => {
    expect(chunkArray()).toEqual([]);
  });

  it('Helper function chunkArray passed an array and chunk amount arguments test case', () => {
    expect(chunkArray([1,2,3], 1)).toEqual([[1],[2],[3]]);
  });

  it('Helper function convertCommaStringIntsToArrayInts passed empty arguments test case', () => {
    expect(convertCommaStringIntsToArrayInts()).toEqual([]);
  });

  it('Helper function convertCommaStringIntsToArrayInts passed comma separated string arguments test case', () => {
    expect(convertCommaStringIntsToArrayInts('1,2,3')).toEqual([1,2,3]);
  });

  it('Helper function maxValueInArray passed empty arguments test case', () => {
    expect(maxValueInArray()).toEqual(0);
  });
});
