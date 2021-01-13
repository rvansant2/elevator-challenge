# Elevator Challenge
## Motivation
Using the idea of an elevator challenge and the concepts of job scheduling, this code represents scheduling these tasks in a queue, using the concepts of time for a task or job to finish, and the workers reprsented in the form of 'elevators' servicing the queue.

Additional abstract description of the [algorithmic problem](https://journals.sagepub.com/doi/abs/10.1177/003754979306100409)

## Problem Overview
Using Node.js write a JavaScript program that solves the following problem and creates an output as indicated.

- You have a building with M elevators and N Floors that hold up to Q people (each car).
- In order to be serviced, people take a number in the mezzanine and wait for their turn to be lifted to their floor.
- The speed of the elevator is 2 seconds per floor going up and 1 second per floor going down.
- Given N,M and Q and the name of the input file as arguments for your program, create a program to service the line of people waiting in the lobby in the least amount of time possible.

Input: Text file with a comma separated string with the destination floor number for each person waiting in line. Files are located in the input-files folder.

Output: A text file called output.txt with the elevator trip logs (you decide the best way to display that data) and the total time to service all the passengers.

### Requirements
- Nodejs v14.6.x+ and NPM v6.14.x+

### Installation
- Go to the directory docroot and install npm packages via `npm install`.

### Run
- For tests, Jest is used and you can run `npm run test`.
- To run the program, pass in an environment variable for the `FILENAME` to the command line so for example: `FILENAME=input2.txt node index`.

#### TODO 
- Refactor how queue is implemented as an object to keep track of them and how they're working in parallel.
- Optimize performance.


