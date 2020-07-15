function maxMinAvg(array) {
    let max = array[0];
    let min = array[0];
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) max = array[i];
        if (array[i] < min) min = array[i];
        sum += array[i];
    }

    let avg = sum / array.length;

    return "The maximum is " + max + ". The minimum is " + min + ". The average is " + avg + ".";
}

console.log(maxMinAvg([1,-2,9,4]));