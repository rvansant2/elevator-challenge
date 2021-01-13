const config = require('config');
const fs = require('fs');

/**
 * Function to createQueue of tasks/jobs to execute, then write out to logs
 * @param {*} tasks 
 * @param {*} maxNumberOfWorkers 
 */
const createQueue = (tasks, maxNumberOfWorkers = 10) => {
  let numOfWorkers = 0;
  let taskIndex = 0;
  let writeStream = fs.createWriteStream('./output.txt');

  return new Promise(done => {
    const handleResult = index => result => {
      const convertedTime = (!config.get('application.fastSimulation')) ? result/1000 : result;
      const outputMessage = `Ending task number: ${index} time for round robin trip: ${convertedTime} seconds ${new Date()}`;
      writeStream.write(`${outputMessage} \n`);
      writeStream.on('finish', () => {
        if (process.env.NODE_ENV !== 'test') console.log(outputMessage);
      });
      tasks[index] = result;
      numOfWorkers--;
      getNextTask();
    };
    const getNextTask = () => {
      if (process.env.NODE_ENV !== 'test') console.log('getNextTask numOfWorkers=', numOfWorkers, new Date());
      if (numOfWorkers < maxNumberOfWorkers && taskIndex < tasks.length) {
        if (process.env.NODE_ENV !== 'test') console.log(`Starting task number: ${taskIndex} at ${new Date()}`);
        tasks[taskIndex]().then(handleResult(taskIndex)).catch(handleResult(taskIndex));
        taskIndex++;
        numOfWorkers++;
        getNextTask();
      } else if (numOfWorkers === 0 && taskIndex === tasks.length) {
        writeStream.end();
        done(tasks);
      }
    };
    getNextTask();
  });
};

module.exports = {
  createQueue,
}
