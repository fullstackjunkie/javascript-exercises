const palindromes = function (str) {
    const cleanString = str.replace(/[^a-zA-Z0-9]/g, '');

    return cleanString.toLowerCase() == cleanString.toLowerCase().split('').reverse().join('');

};
// Do not edit below this line
module.exports = palindromes;
