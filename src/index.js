exports.min = function min(array) {
    if (arguments.length === 0 || array.length === 0) {
        return 0;
    }

    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
