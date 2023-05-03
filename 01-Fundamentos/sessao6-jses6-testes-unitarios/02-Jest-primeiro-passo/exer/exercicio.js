const num = (arr) => {
    for (let i = 0; i < arr.length; arr += 1) {
        if (typeof arr[i] !== 'number') {
            return false;
        }
    }
    return true;
}

module.exports = num;