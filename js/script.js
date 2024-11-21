// "use strict";

// function generateRandomArray(size, min, max) {
//     return Array.from({ length: size }, (_, index) => index + min);
// }

// function measureTime(func, array) {
//     const start = performance.now();
//     const sortedArray = func(array);
//     const end = performance.now();
//     const timeTaken = end - start;
//     return { sortedArray, timeTaken };
// }

// function sortBubble() {
//     let array = generateRandomArray(100, 1, 100);
//     const { sortedArray, timeTaken } = measureTime(() => {
//         array = bubbleSort(array);
//         return array;
//     }, array);

//     displayResult(sortedArray, timeTaken);
// }

// function bubbleSort(array) {
//     const originalArray = array.slice();
//     let n = originalArray.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (originalArray[j] > originalArray[j + 1]) {
//                 const temp = originalArray[j];
//                 originalArray[j] = originalArray[j + 1];
//                 originalArray[j + 1] = temp;
//             }
//         }
//     }
//     return originalArray;
// }

// function selectionSort() {
//     let array = generateRandomArray(100, 1, 100);
//     const { sortedArray, timeTaken } = measureTime(() => {
//         array = selectionSortAlgorithm(array);
//         return array;
//     }, array);

//     displayResult(sortedArray, timeTaken);
// }

// function selectionSortAlgorithm(array) {
//     let n = array.length;
//     for (let i = 0; i < n - 1; i++) {
//         let min = i;
//         for (let j = i + 1; j < n; j++) {
//             if (array[j] < array[min]) min = j;
//         }
//         let t = array[min];
//         array[min] = array[i];
//         array[i] = t;
//     }
//     return array;
// }

// function quickSort() {
//     let array = generateRandomArray(100, 1, 100);
//     const { sortedArray, timeTaken } = measureTime(() => {
//         quickSortAlgorithm(array, 0, array.length - 1);
//         return array;
//     }, array);

//     displayResult(sortedArray, timeTaken);
// }

// function quickSortAlgorithm(arr, low, high) {
//     if (low < high) {
//         const pivotIndex = partition(arr, low, high);
//         quickSortAlgorithm(arr, low, pivotIndex - 1);
//         quickSortAlgorithm(arr, pivotIndex + 1, high);
//     }
// }

// function mergeSort() {
//     let array = generateRandomArray(100, 1, 100);
//     const { sortedArray, timeTaken } = measureTime(() => {
//         array = sortMerge(array);
//         return array;
//     }, array);

//     displayResult(sortedArray, timeTaken);
// }

// function insertionSort() {
//     let array = generateRandomArray(100, 1, 100);
//     const { sortedArray, timeTaken } = measureTime(() => {
//         array = insertionSortFunc(array);
//         return array;
//     }, array);

//     displayResult(sortedArray, timeTaken);
// }

// function sortMerge(array) {
//     function merge(left, right) {
//         let result = [];
//         let il = 0;
//         let ir = 0;
//         while (il < left.length && ir < right.length) {
//             if (left[il] < right[ir])
//                 result.push(left[il++]);
//             else result.push(right[ir++]);
//         }
//         return result.concat(left.slice(il)).concat(right.slice(ir));
//     }

//     function merge_sort(items) {
//         if (items.length < 2) return items;
//         let middle = Math.floor(items.length / 2);
//         let left = items.slice(0, middle);
//         let right = items.slice(middle);
//         return merge(merge_sort(left), merge_sort(right));
//     }

//     return merge_sort(array);
// }

// function insertionSortFunc(arr) {
//     for (let i = 1, l = arr.length; i < l; i++) {
//         const current = arr[i];
//         let j = i;
//         while (j > 0 && arr[j - 1] > current) {
//             arr[j] = arr[j - 1];
//             j--;
//         }
//         arr[j] = current;
//     }
//     return arr;
// }

// function partition(arr, low, high) {
//     const pivot = arr[high];
//     let i = low - 1;

//     for (let j = low; j <= high - 1; j++) {
//         if (arr[j] < pivot) {
//             i++;
//             const temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }

//     const temp = arr[i + 1];
//     arr[i + 1] = arr[high];
//     arr[high] = temp;

//     return i + 1;
// }

// function displayResult(resultArray, timeTaken) {
//     const outputDiv = document.getElementById('output');
//     outputDiv.innerHTML = `Sorted array: ${resultArray.join(', ')} <br> Time taken: ${timeTaken.toFixed(2)} milliseconds`;
// }

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

function sortBubble() {
    let array = generateRandomArray(100, 1, 100);
    const { sortedArray, timeTaken } = measureTime(() => {
        array = bubbleSort(array);
        return array;
    }, array);

    displayResult(sortedArray, timeTaken);
}

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

function selectionSort() {
    let array = generateRandomArray(100, 1, 100);
    const { sortedArray, timeTaken } = measureTime(() => {
        array = selectionSortAlgorithm(array);
        return array;
    }, array);

    displayResult(sortedArray, timeTaken);
}

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

function quickSort() {
    let array = generateRandomArray(100, 1, 100);
    const { sortedArray, timeTaken } = measureTime(() => {
        quickSortAlgorithm(array, 0, array.length - 1);
        return array;
    }, array);

    displayResult(sortedArray, timeTaken);
}

function quickSortAlgorithm(arr, low, high) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSortAlgorithm(arr, low, pivotIndex - 1);
        quickSortAlgorithm(arr, pivotIndex + 1, high);
    }
}

function mergeSort() {
    let array = generateRandomArray(100, 1, 100);
    const { sortedArray, timeTaken } = measureTime(() => {
        array = sortMerge(array);
        return array;
    }, array);

    displayResult(sortedArray, timeTaken);
}

function insertionSort() {
    let array = generateRandomArray(100, 1, 100);
    const { sortedArray, timeTaken } = measureTime(() => {
        array = insertionSortFunc(array);
        return array;
    }, array);

    displayResult(sortedArray, timeTaken);
}

function sortMerge(array) {
    function merge(left, right) {
        let result = [];
        let il = 0;
        let ir = 0;
        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir])
                result.push(left[il++]);
            else result.push(right[ir++]);
        }
        return result.concat(left.slice(il)).concat(right.slice(ir));
    }

    function merge_sort(items) {
        if (items.length < 2) return items;
        let middle = Math.floor(items.length / 2);
        let left = items.slice(0, middle);
        let right = items.slice(middle);
        return merge(merge_sort(left), merge_sort(right));
    }

    return merge_sort(array);
}

function insertionSortFunc(arr) {
    for (let i = 1, l = arr.length; i < l; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
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

function displayResult(resultArray, timeTaken) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `Sorted array: ${resultArray.join(', ')} <br> Time taken: ${timeTaken.toFixed(2)} milliseconds`;
}
