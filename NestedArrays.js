//https://www.rithmschool.com/courses/intermediate-javascript/javascript-nested-data-structures-arrays
/*let nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];
    for(let i = 0; i< nestedArr.length; i++){
        for(let j = 0; j< nestedArr[i].length; j++){
            console.log(nestedArr[i][j]);
        }
    }*/
/*let nestedArr = [[1, 2], [3, 4], [5, 6]];
 
function sumTotal(){
   let sum = 0;
   for(let arr of nestedArr){
       for( let elem of arr){
           sum += elem;
       }
   }
   return sum;
} 
console.log(sumTotal());*/
let nestedArr = [
    "Elie",
    ["Matt", ["Tim"]],
    ["Colt", ["Whiskey", ["Janey"], "Tom"]],
    "Lorisen"
];

function seeIfVowel(count, char) {
    const vowels = 'aeiou';
    if (vowels.includes(char.toLowerCase()))
        return ++count;
    return count;
}
function CountCharacters(count, string) {
    for (char of string)
        count = seeIfVowel(count, char);
    return count;
}
function countVowels(arr) {
    count = 0;
    for (let elem1 of arr)
        if (Array.isArray(elem1))
            for (let elem2 of elem1)
                if (Array.isArray(elem2))
                    for (let elem3 of elem2)
                        if (Array.isArray(elem3))
                            for (let elem4 of elem3)
                                count = CountCharacters(count, elem4);
                        else
                            count = CountCharacters(count, elem3);
                else
                    count = CountCharacters(count, elem2);
        else
            count = CountCharacters(count, elem1);
return count;
}
console.log(countVowels(nestedArr));
