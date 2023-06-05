const sumAll = function(min, max) {
    
    //Sums number withing range.
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
    const temp = min;
    min = max;
    max = temp;
    }
    //Using a for loop.
    let sum = 0
    for (let i = min; i < max + 1; i++) {
        sum += i;
    }
    //Returning the sum.
        return sum;
}

// Do not edit below this line
module.exports = sumAll;
