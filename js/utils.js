"use strict";

function generateRandomArray(size, min, max) {
    return Array.from({ length: size }, (_, index) => index + min);
}

function measureTime(func, array) {
    const start = performance.now();
    const sortedArray = func(array);
    const end = performance.now();
    const timeTaken = end - start;
    return { sortedArray, timeTaken };
}

function displayResult(resultArray, timeTaken) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `Sorted array: ${resultArray.join(', ')} <br> Time taken: ${timeTaken.toFixed(2)} milliseconds`;
}

function runSortAlgorithm(sortFunction) {
    let array = generateRandomArray(100, 1, 100);
    const { sortedArray, timeTaken } = measureTime(() => {
        array = sortFunction(array);
        return array;
    }, array);

    displayResult(sortedArray, timeTaken);
}
