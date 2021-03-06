var selection = function (input) {
    if (!Array.isArray(input)) {
        return;
    }

    var nextIndex, min, temp;
    for (var curIndex = 0, len = input.length; curIndex < len; curIndex++) {
        min = curIndex;
        for (nextIndex = min + 1; nextIndex < len; nextIndex++) {
            if (input[min] > input[nextIndex]) {
                min = nextIndex;
            }
        }
        temp = input[min];
        input[min] = input[curIndex];
        input[curIndex] = temp;
    }

    return input;
};
