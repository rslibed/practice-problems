var data = [1, 5, 67, 2, 76, 3, 7, 5, '+'];
function doMath (stuff) {
    var numberArr = [];
    for (var argumentsIndex = 0; argumentsIndex < arguments[0].length; argumentsIndex++) {
        if (!isNaN(arguments[0][argumentsIndex])) {
            numberArr.push(arguments[0][argumentsIndex]);
        }
        if (isNaN(arguments[0][argumentsIndex])) {
            var op = arguments[0][argumentsIndex].splice(1,1);
        }
    }
    console.log(op);
}

doMath(data);