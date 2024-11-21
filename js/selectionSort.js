"use strict";

function selectionSortAlgorithm(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[min]) min = j;
        }
        
        let t = array[min];
        array[min] = array[i];
        array[i] = t;
    }

    return array;
}

function runSelectionSort() {
    runSortAlgorithm(selectionSortAlgorithm);
}