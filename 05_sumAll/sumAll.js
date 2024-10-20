const sumAll = function(num1, num2) {
    if((num1 < 0 || typeof num1 !== "number" ||  !Number.isInteger(num1)) || (num2 < 0 || typeof num2 !== "number" || !Number.isInteger(num2))) return "ERROR";
  
    let sum = 0;

    for(let i = (num1 < num2 ? num1 : num2); i <= (num1 > num2 ? num1 : num2); i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
