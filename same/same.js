// ==========================================================================================================================
// Function takes two arrays and checks to see if the second array passed is the first one squared
function same(arr1, arr2) {
    // if the length of the first array passed does not equal the second array passed return false
    if (arr1.length !== arr2.length) {
        return false;
    }
    // set two objects to hold the numbers of the arrays passed and the frequency of how many times they occur
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // loop through the first array and set the keys and values of obj1
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    // loop through the second array and set the keys and values of obj2
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    // loop through one of the objects and see if the keys in that obj match the keys in the second obj squared
    // if not return false
    // else return true
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}