// function bubbleSort(arr) {
//     let noSwaps = true;
//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//                 noSwaps = false
//             }
//         }
//         if (noSwaps) break
//     }
//     return arr
// }

// console.log(bubbleSort([3, 2, 5, 1, 6]))

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (var j = i + 1; j < arr.length; j++) {
            console.log(arr[j], arr[i])
            if (arr[j] < arr[lowest]) lowest = j;
        }
        if (i !== lowest) {
            let temp = arr[i]
            arr[i] = arr[lowest];
            arr[lowest] = temp
        }
    }
    return arr;
};

console.log(selectionSort([3, 2, 1, 6, 4, 5, 7]))