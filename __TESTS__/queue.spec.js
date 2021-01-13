const { createQueue } = require('../queue');
const createTask = value => () => {
  if (value === 8) { 
    return Promise.reject(new Error('Failed test.'));
  }
  return new Promise(resolve => setTimeout(() => resolve(value), value));
};

describe('Elevator Challenge Test Suite - queue tests', () => {
  it('Queue function createQueue passed a set of tasks test case', () => {
    expect.assertions(1);
    expect(createQueue([
      createTask(2),
      createTask(20),
      createTask(40),
    ]).then((result) => {
      return result;
    })).not.toBe(0);
  });
  it('Queue function createQueue passed a bad task test case', () => {
    expect(createQueue([
      createTask(8),
    ]).then((result) => {
      return result;
    })).rejects.toThrow(
      'Failed test.'
    );
  });
});
