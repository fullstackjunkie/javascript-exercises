const removeFromArray = function(...args) {
    
    let arrs = [];
    let elements = args.slice(1);
  
  
    return args[0].filter(elem => {
      return !elements.includes(elem) 
    });
};

// Do not edit below this line
module.exports = removeFromArray;
