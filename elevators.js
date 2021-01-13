const config = require('config');
const { sortArray } = require('./helpers');
const { createQueue } = require('./queue');

/**
 * A function to sendElevatorsToFloors as functions to execute with time elements associated
 * as an actual task/job. 
 * @param {*} arrayOfFloors 
 */
const sendElevatorToFloors = (arrayOfFloors = []) => () => {
  if ((Array.isArray(arrayOfFloors) && arrayOfFloors.length === 0) || !Array.isArray(arrayOfFloors)) {
    return [];
  }

  const sortedFloors = sortArray(arrayOfFloors, false);
  const topFloor = sortedFloors.shift();
  const tripTime = (config.get('application.fastSimulation')) ? (2 * parseInt(topFloor)) + parseInt(topFloor) : ((2 * parseInt(topFloor)) + parseInt(topFloor)) * 1000;
  return new Promise(resolve => {
    return setTimeout(() => resolve(tripTime), tripTime);
  });
}

/**
 * Create the elevator jobs/task queue to runElevators
 * @param {*} queuedArrayCalls 
 * @param {*} maxNumberOfWorkers 
 */
const runElevators = (queuedArrayCalls, maxNumberOfWorkers) => {
  const taskQueue = [];
  if ((Array.isArray(queuedArrayCalls) && queuedArrayCalls.length === 0) || !Array.isArray(queuedArrayCalls)) {
    return taskQueue;
  }
  
  for(let i = 0; i < queuedArrayCalls.length; i++) {
    if (process.env.NODE_ENV !== 'test') console.log(queuedArrayCalls[i]);
    taskQueue.push(sendElevatorToFloors(queuedArrayCalls[i]));
  }
  if (process.env.NODE_ENV !== 'test') console.log(`Total number of tasks in queue: ${taskQueue.length}  serviced by: ${maxNumberOfWorkers} elevators/workers`);
  createQueue(taskQueue, maxNumberOfWorkers).then(result => console.log(result));
};

module.exports = {
  sendElevatorToFloors,
  runElevators,
}
