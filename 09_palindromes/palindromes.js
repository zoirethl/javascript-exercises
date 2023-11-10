const palindromes = function (str) {
    const re = /[\W_]/g;
    const lowRedStr = str.toLowerCase().replace(re, '');
    const reverseStr = lowRedStr.split('').reverse().join('');
    return (lowRedStr === reverseStr)
};

// Do not edit below this line
module.exports = palindromes;
