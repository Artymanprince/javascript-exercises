const removeFromArray = function(harray, ...args) {
        // Filter the array to exclude elements present in args
        return harray.filter(item => !args.includes(item));      
};

// Do not edit below this line
module.exports = removeFromArray;
