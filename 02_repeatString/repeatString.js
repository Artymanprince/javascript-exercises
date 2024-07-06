const repeatString = function(strr, num) {

    let stringg = "";
    if (num < 0) {
        return "ERROR"; 
    }
    
    for(let i = 0; i < num; i++) {
        stringg += strr;
    }
    
    return stringg;
};

// Do not edit below this line
module.exports = repeatString;
