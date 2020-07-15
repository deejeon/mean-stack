function bracesValid(x) {
    let openBraces = [];

    for (let i = 0; i < x.length; i++) {
        if (x[i] === "(" || x[i] === "[" || x[i] === "{") openBraces.push(x[i]);
        else {
            if (x[i] === ")" && openBraces[openBraces.length - 1] === "(") openBraces.pop();
            else if (x[i] === "]" && openBraces[openBraces.length - 1] === "[") openBraces.pop();
            else if (x[i] === "}" && openBraces[openBraces.length - 1] === "{") openBraces.pop();
            else return false;
        }
    }

    return true;
}

console.log(bracesValid("{(})"));