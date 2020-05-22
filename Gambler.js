const gamblerMain = require('./GamblerBl');
const input = require('readline-sync');
let noOfTrial = input.questionInt("Enter number of trial :");
let stake = input.questionInt("Enter stake in INR :");
let goal = input.questionInt("Enter goal in INR :");
let bet = 0, win = 0, loss = 0;
gamblerMain(noOfTrial, stake, goal, bet, win, loss);
