const input = require('readline-sync');
let noOfTrial = input.questionInt("Enter number of trial :");
let stake = input.questionInt("Enter stake in INR :");
let goal = input.questionInt("Enter goal in INR :");
let bet = 0, win = 0, loss = 0;
for(let trial=0;trial<noOfTrial;trial++)
{
    let cash = stake;
    while(cash>0 && cash<goal)
    {
        bet++;
        if(Math.random() < 0.5)
        {
            cash++;
        }
        else
        {
            cash--;
        }
    }
    if(cash == goal)
    {
        win++;
    }
    else
    {
        loss--;
    }
}
console.log("Number of time win :"+win);
console.log("Number of time loss :"+loss);
let winPercent = win * 100 / noOfTrial;               
let lossPercent = loss * 100 / noOfTrial;                 
console.log("Percentage of win : " + winPercent);
console.log("Percentage of loss : " + lossPercent);