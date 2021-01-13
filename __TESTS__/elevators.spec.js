const { runElevators, sendElevatorToFloors } = require('../elevators');

describe('Elevator Challenge Test Suite - elevator tests', () => {
  it('Elevators runElevators passed empty array test case', () => {
    expect(runElevators()).toEqual([]);
  });

  it('Elevators runElevators passed an array test case but has no return and is undefined', () => {
    expect(runElevators([[55,44,33], [66,22,11]])).toBeUndefined();
  });

  it('Elevators sendElevatorToFloors passed passed empty array test case', () => {
    expect(sendElevatorToFloors()).toEqual(expect.any(Function));
  });

  it('Elevators sendElevatorToFloors passed an array test case', () => {
    expect(sendElevatorToFloors([33,44,22])).toEqual(expect.any(Function));
  });
});
