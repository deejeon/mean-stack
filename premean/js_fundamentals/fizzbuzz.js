function fizzBuzz(n) {
    if (n === NaN) return null;
    let solution = "";

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) solution = solution.concat("FizzBuzz, ");
        else if (i % 3 === 0) solution = solution.concat("Fizz, ");
        else if (i % 5 === 0) solution = solution.concat("Buzz, ");
        else solution = solution.concat(i + ", ");
    }

    solution = solution.slice(0, solution.length - 2);

    return solution;
}

console.log(fizzBuzz(15));