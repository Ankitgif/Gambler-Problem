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
gambler = (noOfTrial, stake, goal, bet, win, loss) => {
    try {
        for (let trial = 0; trial < noOfTrial; trial++) {
            let cash = stake;
            while (cash > 0 && cash < goal) {
                bet++;
                if (Math.random() < 0.5) {
                    cash++;
                }
                else {
                    cash--;
                }
            }
            if (cash == goal) {
                win++;
            }
            else {
                loss--;
            }
        }

    } catch (error) {
        console.log(error);
    }
    console.log("Number of time win :" + win);
    console.log("Number of time loss :" + loss);
    let winPercent = win * 100 / noOfTrial;
    let lossPercent = loss * 100 / noOfTrial;
    console.log("Percentage of win : " + winPercent);
    console.log("Percentage of loss : " + lossPercent);
}
module.exports = gambler;