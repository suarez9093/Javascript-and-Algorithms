function mergeSort(...args) {
    let array = [];
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
            console.log("args[i][j]", args[i][j])
        }
        // console.log("args[i]: ", args[i])
        // let num = 0;
        // array.push(args[i][num])
        // num++

    }
    return array
};

// Split arrays down to length of 1



console.log(mergeSort([1, 10, 50], [2, 14, 99, 100]))

// , [2, 14, 99, 100]