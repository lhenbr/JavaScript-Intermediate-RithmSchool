// this function should accept 2 parameters, put them in!
function each(array, fn) {
    for (let elem of array)
        fn(elem);
}


each([1, 2, 3, 4], function (val) {
    console.log(val);
});
// Here is what should be output if you wrote the function correctly

// 1
// 2
// 33 
// 4

each([1, 2, 3, 4], function (val) {
    console.log(val * 2);
});

// Here is what should be output if you wrote the function correctly

// 2
// 4
// 6
// 8
function map(array, fn) {
    for (let i = 0; i < array.length; i++)
        array[i] = fn(array[i]);
    return array;
}

console.log(map([1, 2, 3, 4], function (val) {
    return val * 2;
})); // [2,4,6,8]

function reject(array, fn) {
    let newArr = []
    for (let elem of array)
        if (!(fn(elem)))
            newArr.push(elem)
    return newArr;
}

console.log(reject([1, 2, 3, 4], function (val) {
    return val > 2;
})); // [1,2]

console.log(reject([2, 3, 4, 5], function (val) {
    return val % 2 === 0;
})); // [3,5]