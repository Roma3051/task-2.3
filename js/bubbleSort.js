"use strict";

function bubbleSort(array) {
    const originalArray = array.slice();

    let n = originalArray.length;
    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - i - 1; j++) {

            if (originalArray[j] > originalArray[j + 1]) {
                const temp = originalArray[j];

                originalArray[j] = originalArray[j + 1];
                originalArray[j + 1] = temp;
            }
        }
    }

    return originalArray;
}

function runBubbleSort() {
    runSortAlgorithm(bubbleSort);
}
