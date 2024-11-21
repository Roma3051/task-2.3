"use strict";

function quickSortAlgorithm(arr, low, high) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        
        quickSortAlgorithm(arr, low, pivotIndex - 1);
        quickSortAlgorithm(arr, pivotIndex + 1, high);
    }

    return arr; 
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    const temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
}

function runQuickSort() {
    runSortAlgorithm(quickSortAlgorithm);
}

