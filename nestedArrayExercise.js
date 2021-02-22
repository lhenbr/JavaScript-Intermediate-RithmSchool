//https://www.rithmschool.com/courses/intermediate-javascript/javascript-nested-data-structures-arrays-exercises
function rotate(array, number) {
   var amount = number % array.length;
   for(var i=0; i< amount;i++)
    array.unshift(array.pop());
    return array;
}

console.log(rotate([1, 2, 3], 1))// [3,1,2]
console.log(rotate([1, 2, 3], 2))// [2,3,1]
console.log(rotate([1, 2, 3], 3)) // [1,2,3]

function makeXOGrid(rows, columns) {
    let arr = [];
    for (i = 0; i < rows; i++) {
        arr[i] = []
        for (j = 0; j < columns; j++) {
            arr[i].push(xOrO());
        }
    }
    return arr;
}
function xOrO() {
    if (Math.random() < 0.5)
        return "X";
    return "O";
}
console.log(makeXOGrid(1,4));
console.log(makeXOGrid(3,2) );
console.log(makeXOGrid(3,3));