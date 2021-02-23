//https://www.rithmschool.com/courses/intermediate-javascript/javascript-iterators-exercises
let users = [
    {
        username: 'larry',
        email: 'larry@foo.com',
        yearsExperience: 22.1,
        favoriteLanguages: ['Perl', 'Scala', 'C++'],
        favoriteEditor: 'Vim',
        hobbies: ['Fishing', 'Sailing', 'Hiking'],
        hometown: {
            city: 'San Francisco',
            state: 'CA'
        }
    },
    {
        username: 'jane',
        email: 'jane@test.com',
        yearsExperience: 33.9,
        favoriteLanguages: ['Haskell', 'PHP'],
        favoriteEditor: 'Emacs',
        hobbies: ['Swimming', 'Biking', 'Hiking'],
        hometown: {
            city: 'New York',
            state: 'NY'
        }
    },
    {
        username: 'sam',
        email: 'sam@test.com',
        yearsExperience: 8.2,
        favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
        favoriteEditor: 'Atom',
        hobbies: ['Golf', 'Cooking', 'Archery'],
        hometown: {
            city: 'Fargo',
            state: 'SD'
        }
    },
    {
        username: 'anne',
        email: 'anne@test.com',
        yearsExperience: 4,
        favoriteLanguages: ['C#', 'C++', 'F#'],
        favoriteEditor: 'Visual Studio Code',
        hobbies: ['Tennis', 'Biking', 'Archery'],
        hometown: {
            city: 'Albany',
            state: 'NY'
        }
    },
    {
        username: 'david',
        email: 'david@test.com',
        yearsExperience: 12.5,
        favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
        favoriteEditor: 'VS Code',
        hobbies: ['Volunteering', 'Biking', 'Coding'],
        hometown: {
            city: 'Los Angeles',
            state: 'CA'
        }
    }
];
// printEmails
function printEmails() {
    users.forEach((item, index, arr) => {
        console.log(item.email);
    });
}
//printEmails();

// printHobbies
function printHobbies() {
    users.forEach((obj, index, arr) => {
        obj.hobbies.forEach((obj) => {
            console.log(obj);
        })
    })
}
//printHobbies();
//findHometownByState
function findHometownByState(state) {
    return users.find((elem) => {
        return elem.hometown.state = state;
    })
}
//console.log(findHometownByState('CA'));
//allLanguages
function allLanguages() {
    return users.reduce((acc, cur, idx, src) => {
        return acc.concat(cur.favoriteLanguages.filter((elem) => {
            //console.log(elem);
            return !(acc.some((obj) => {
                //console.log(obj);
                return obj === elem
            }))
        }))

    }, [])
}
//console.log(allLanguages());
function hasFavoriteEditor(editor) {
    return users.some((elem) => {
        return elem.favoriteEditor === editor;
    })
}

//console.log(hasFavoriteEditor('VS Code')); // true
//console.log(hasFavoriteEditor('Eclipse')); // false

function findByUsername(name) {
    return users.find((item) => {
        return item.username === name;
    })
}
//console.log(findByUsername('david'));

//Part2
function vowelCount(string) {
    let vowel = ["a", "e", "i", "o", "u"];
    return string.split("").reduce((acc, elem, idx, src) => {
        if (vowel.some((vowel) => { return elem === vowel }))
            if (acc[elem] === undefined)
                acc[elem] = 1;
            else
                acc[elem]++;
        return acc;
    }, {})
}
console.log(vowelCount('incredible'));
console.log(vowelCount('awesome'));
function removeVowels(string) {
    let vowels = ["a", "e", "i", "o", "u"];
    return string.split("").filter((elem) => {//filter: percorrer a string
        return !(vowels.some((element) => {//some: percorrer as vogais, se retornar true é adicionado ao array de resposta
            return element == elem;//o elemento é igual a vogal especifica em vo,função é vogal
        }))
    });
}
console.log(removeVowels('amazing'));
console.log(removeVowels('fun'));
console.log(removeVowels('silly'));
//part3
