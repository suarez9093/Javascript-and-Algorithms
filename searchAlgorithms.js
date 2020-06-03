// Linear Search
// array has to be sorted

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
};

// console.log(linearSearch([1, 2, 3, 4, 5], 4)) // will return 3

// Binary Search
function binarySearch(arr, val) {
    let min = 0;
    let max = arr.length - 1;


    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];
        console.log("currentElement: ", currentElement)

        if (currentElement < val) {
            min = middle + 1;
            // console.log('min in while loop: ', min)
        } else if (currentElement > val) {
            max = middle - 1;
            // console.log("max:", max)
        } else {
            return middle;
        }
    }
    return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 9, 10], 10))