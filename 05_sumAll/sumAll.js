const sumAll = function(numA, numB) {
    if (typeof numA !== "number" || typeof numB !== "number" || numA < 0 || numB < 0) {
        return "ERROR"
    }
     let sum = 0;
        for (let i = Math.min (numA, numB); i <= Math.max (numA, numB); i++) {
            sum += i;
        
        }
        return sum;
    };

// Do not edit below this line
module.exports = sumAll;
