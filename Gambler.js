/*  
*     @author   : Ankit Kumar
*     @Date     : 03-04-2020
*     @Purpose  : Gambler
*                  
*                   a. I/P -> $Stake, $Goal and Number of times
*                   b. Logic -> Play till the gambler is broke or has won
*                   c. O/P -> Print Number of Wins and Percentage of Win and Loss.
*
*/
const gamblerMain = require('./GamblerBl');                     // in which file function should call
const input = require('readline-sync');
let noOfTrial = input.questionInt("Enter number of trial :");   // input from the user, number of trials
let stake = input.questionInt("Enter stake in INR :");          // input from the user, stake in INR
let goal = input.questionInt("Enter goal in INR :");            // input from the user, goal in INR
let bet = 0, win = 0, loss = 0;
//input validations
const validate = () => {                                                              
    let pattern = /[1-9]/
    return pattern.test(noOfTrial) && pattern.test(stake) && pattern.test(goal) ? gamblerMain(noOfTrial, stake, goal, bet, win, loss)
        : console.log("Enter valid trials , stake and goal");
}
validate();
