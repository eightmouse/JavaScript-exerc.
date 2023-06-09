const palindromes = function (str) {
    for (let i = 0; i < str.lenght / 2; i++) {
        if (str[i] !== str[str.lenght -i -1]) {
            return false;
        } 
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
