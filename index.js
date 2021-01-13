const config = require('config');
const fs = require('fs');
const { exit } = require('process');

const { chunkArray, convertCommaStringIntsToArrayInts, maxValueInArray } = require('./helpers');
const { runElevators } = require('./elevators');

/**
 * Main function to execute elevator challenge
 */
function main() {
  const fileName = process.env.FILENAME || config.get('application.defaultFile');
  const readFile = fs.readFileSync(`./input-files/${fileName}`, 'utf8').split('\n');
  const CAPACITY = readFile[2] || config.get('application.capacity');
  const MAX_NUM_OF_WORKERS = readFile[0] || config.get('application.maxNumberOfWorkers');
  const LIST_OF_FLOORS = convertCommaStringIntsToArrayInts(readFile[3]);
  const HIGHEST_FLOOR_IN_BUIDLING = readFile[1] || config.get('application.maxNumberOfFloors');
  const HIGHEST_FLOOR_REQUESTED = maxValueInArray(LIST_OF_FLOORS);
  if (HIGHEST_FLOOR_IN_BUIDLING >= HIGHEST_FLOOR_REQUESTED) {
    const chunkedArrays = chunkArray(LIST_OF_FLOORS, CAPACITY);
    runElevators(chunkedArrays, MAX_NUM_OF_WORKERS);
  } else {
    console.error(`This program can not run since the highest floor requested (${HIGHEST_FLOOR_REQUESTED}) exceeds the number of floors in the building (${HIGHEST_FLOOR_IN_BUIDLING}).`);
    exit();
  }
}

main();
