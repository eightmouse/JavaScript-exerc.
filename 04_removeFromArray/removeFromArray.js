const removeFromArray = function(array) {
    let value = array
    const newArray = []
    newArray = newArray.filter(item => item !== value)
    return newArray

};

// Do not edit below this line
module.exports = removeFromArray;
