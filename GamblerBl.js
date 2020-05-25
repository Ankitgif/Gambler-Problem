/*
*       @Description -> Simulates a gambler who start with $stake and place fair $1 bets until
*                       he/she goes broke (i.e. has no money) or reach $goal. Keeps track of the number of
*                       times he/she wins and the number of bets he/she makes. Run the experiment N
*                       times, averages the results, and prints them out.
*       @Parameter  : Number of trials, stake, goal, bet, win, loss
*       @Return     : Number of times win and loss
*                     Percentage of win and loss
*
*/
gambler = (noOfTrial, stake, goal, bet, win, loss) => {             //arrow function accepting the required parameters
    try {
        for (let trial = 0; trial < noOfTrial; trial++) {           //Loop run till number of trials
            let cash = stake;                                       //stake assign to cash
            while (cash > 0 && cash < goal) {                   //Loop will run till cash equal to zero or reaches to goal
                bet++;                                                   //bet++ till cash equal to zero or cash reaches to goal
                let gamblerCheck = (Math.random() < 0.5) ? cash++ : cash--;             //generates random number, if random number is less than 0.5, cash will be increamented else decremented                        
            }
            let gameCheck = (cash == goal) ? win++ : loss++;  //checking cash reaches to goal, if cash reaches to goal then win will be counted till number of trials else loss will be counted 
        }
    } catch (error) {
        console.log(error);
    }
    console.log("Number of time win :" + win);      //Print number of times wins
    console.log("Number of time loss :" + loss);    //Print number of times loss 
    let winPercent = win * 100 / noOfTrial;         //Percentage of win
    let lossPercent = loss * 100 / noOfTrial;       //Percentage of loss
    console.log("Percentage of win : " + winPercent);
    console.log("Percentage of loss : " + lossPercent);
}
module.exports = gambler;