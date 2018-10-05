/* The sum of a range */

function range(start, end, increment = 1){
    let array = []
    if (increment > 0) {
        for (i = start; i <= end; i++){
            array.push(i);
        }
        return array;
    } else {
        for (i = end; i >= start; i++){
            array.push(i);
        }
        return array;
    }
}

function sum(array){
    let total = 0;
    for(let value of array) {
        total += value;
    }
    return total;
}