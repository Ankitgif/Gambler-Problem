const gamblerMain = require('./GamblerBl');
const input = require('readline-sync');
let noOfTrial = input.questionInt("Enter number of trial :");
let stake = input.questionInt("Enter stake in INR :");
let goal = input.questionInt("Enter goal in INR :");
let bet = 0, win = 0, loss = 0;
const validate = () => {                                                              
    let pattern = /[1-9]/
    return pattern.test(noOfTrial) && pattern.test(stake) && pattern.test(goal) ? gamblerMain(noOfTrial, stake, goal, bet, win, loss)
        : console.log("Enter valid trials , stake and goal");
}
validate();
