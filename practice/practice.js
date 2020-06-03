function knapsackLight(value1, weight1, value2, weight2, maxW) {
    if (maxW < weight1 && maxW < weight2) return 0;
    if (weight1 + weight2 <= maxW) return value1 + value2;
    else if (weight1 <= maxW && weight2 > maxW) return value1;
    else if (weight1 > maxW && weight2 <= maxW) return value2;
    else if (weight1 < maxW && weight2 < maxW) {
        return Math.max(value1, value2)
    }

}

console.log(knapsackLight(10, 5, 6, 4, 9))

/*
    return the max value that does not exceed the max weight
    if max weight of both items is greater than the maxW
        reutrn the highest value of the two items
*/