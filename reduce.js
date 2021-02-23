//https://www.rithmschool.com/courses/intermediate-javascript/javascript-iterators-reduce
function extractKey(arr, key) {
    return arr.reduce((acc, value, index, arr) => {
        acc.push(value[key]);
        return acc;
    }, [])
}
console.log(extractKey([{ name: "Elie", isInstructor: true }, { name: "Tim", isInstructor: true }, { name: "Matt", isInstructor: true }], "name"));

function filterLetters(arr, letter) {
    return arr.reduce((start, value, index, arr) => {
        return start += value.toLowerCase() === letter.toLowerCase();
    }, 0)
}
console.log(filterLetters(["a", "a", "b", "c", "A"], "a"))
console.log(filterLetters(["a", "a", "b", "c", "A"], "z"))
console.log(filterLetters(["a", "a", "b", "c", "A"], "B"))

function addKeyAndValue(arr, key, value) {
    return arr.reduce((start, obj, index, arr) => {
        obj[key] = value;
        return arr
    }, arr)
}
console.log(addKeyAndValue([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Elie' }], "isInstructor", true));