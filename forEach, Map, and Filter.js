//https://www.rithmschool.com/courses/intermediate-javascript/javascript-iterators-foreach-map-filter
function printFirstAndLast(arr) {
    arr.forEach((val, index, arr) => {
        console.log(val.charAt(0) + val.charAt(val.length - 1));
    });
}
printFirstAndLast(['awesome', 'example', 'of', 'forEach'])
function addKeyAndValue(arr, key, value) {
    arr.forEach((object, index, arr) => {
        object[key] = value;
    });
    return arr;
}
console.log(addKeyAndValue([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Elie' }], "isInstructor", true))
function valTimesIndex(arr) {
    return arr.map((val, index, arr) => {
        return val * index;
    });
}
console.log(valTimesIndex([1, 2, 3])) // [0,2,6])
console.log(valTimesIndex([5, 10, 15])) // [0,10,30])

function extractKey(arr, key) {
    return arr.map((obj, index, arr) => {
        return obj[key];
    })
}
console.log(extractKey([{ name: "Elie", isInstructor: true }, { name: "Tim", isInstructor: true }, { name: "Matt", isInstructor: true }], "name"))
function filterLetters(arr, letter) {
    return arr.filter((obj, index, arr) => {
        return obj.toLowerCase() === letter.toLowerCase();
    }).length;
}
console.log(filterLetters(["a", "a", "b", "c", "A"], "a")); // 3
console.log(filterLetters(["a", "a", "b", "c", "A"], "z")); // 0)
console.log(filterLetters(["a", "a", "b", "c", "A"], "B")); // 1

function filterKey(arr, key) {
    return arr.filter((val, index, arr) => {
        return val[key]
    })
}
console.log(filterKey([{ name: "Elie", isInstructor: true, isHilarious: false }, { name: "Tim", isInstructor: true, isHilarious: true }, { name: "Matt", isInstructor: true }], "isHilarious"))

