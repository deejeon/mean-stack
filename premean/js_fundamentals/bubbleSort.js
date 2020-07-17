function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let swapped = false;
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                swapped = true;
            }
        }
        if (!swapped) return;
    }
}

let myArray = [3,5,6,1,4,2];
bubbleSort(myArray);
console.log(myArray);