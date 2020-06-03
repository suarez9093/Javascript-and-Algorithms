

// 1. Takes an array and checks to see if the second array passed into the function is the first one with the numbers squared.
// 2. same([1,2,3,4], [1,2,9,16]) => true
// 3. Break it down
// ==========================================================================================================================



// ==========================================================================================================================
// Function takes array and sees if the two numbers in array added together = 0
function zeroSum(arr) {
    // start with assigning two pointers. One at the beginning of the array and one at the end
    let left = 0;
    let right = arr.length - 1
    // then loop through the array
    while (left < right) {
        // condition is when the left side is smaller than the right side do something...
        let sum = arr[left] + arr[right]
        // if the sum of the left plus the right === 0 return [arr[left], arr[right]]
        if (sum === 0) {
            return [arr[left], arr[right]]
            // else if sum > 0 then right--
        } else if (sum > 0) {
            right--;
            // else left++
        } else {
            left++;
        }
    }
    // return undefined if no numbers add up to 0
}
console.log(zeroSum([-5, 2, 3, 4, 5, 6, 7, 8, 9]))
// 1. Funciton that takes a sorted array and sees if two numbers in it add up to 0. If two numbers add up to 0 the funciton returns those two numbers.
// 2. zeroSum([-8,-3,-2,1,2,4,5,6,7,8,10,13,100]) => [-8,8]
// 3. Break it down. Above
// 4. Simplify/Solve => above
// 5. Refactor
// ==========================================================================================================================


// Function looks for the largest sum in the array given the num passed in
function maxSubArraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    // if the array length is less than the num passed. Return null 
    if (arr.length < num) return null;


    for (let i = 0; i < num; i++) {
        // the maxSum = the first # of (num) passed 
        maxSum += arr[i];
    }

    // setting the temp sum = maxSum
    tempSum = maxSum;


    for (let i = num; i < arr.length; i++) {
        /*
        first pass is as follows: 
        tempSum = 11 - (arr[3 - 3] = 2) + (arr[3] = 7) = 16
        */
        tempSum = tempSum - arr[i - num] + arr[i];
        // maxSum = the max number between tempSum and maxSum
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubArraySum([2, 6, 3, 7, 2, 134, 7], 3))


function bubbleSort(arr) {
    let noSwaps = true;
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwaps = false
            }
        }
        if (noSwaps) break
    }
    return arr
}