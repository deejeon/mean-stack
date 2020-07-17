function coinChange(n) {
    let solution = {};
    while (n >= 100) {
        n -= 100;
        if (solution.hasOwnProperty("dollars")) solution["dollars"] += 1;
        else solution["dollars"] = 1;
    }
    while (n >= 25) {
        n -= 25;
        if (solution.hasOwnProperty("quarters")) solution["quarters"] += 1;
        else solution["quarters"] = 1;
    }
    while (n >= 10) {
        n -= 10;
        if (solution.hasOwnProperty("dimes")) solution["dimes"] += 1;
        else solution["dimes"] = 1;
    }
    solution["pennies"] = n;
    return solution;
}

console.log(coinChange(78));