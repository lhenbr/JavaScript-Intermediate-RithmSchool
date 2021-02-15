//https://www.rithmschool.com/courses/intermediate-javascript/javascript-nested-data-structures-objects-exercises

let nestedData = {
    innerData: {
        order: ["first", "second", "third"],
        snacks: ["chips", "fruit", "crackers"],
        numberData: {
            primeNumbers: [2, 3, 5, 7, 11],
            fibonnaci: [1, 1, 2, 3, 5, 8, 13]
        },
        addSnack: function (snack) {
            this.snacks.push(snack);
            return this;
        }
    }
}
function primeNumbers() {
    let primeNumbers = nestedData.innerData.numberData.primeNumbers;
    for (let number of primeNumbers) {
        console.log(number);
    }
}
function fibonnaciNumbers() {
    let fibonnaciNumbers = nestedData.innerData.numberData.fibonnaci;
    for (let i = 0; i < fibonnaciNumbers.length; i++)
        if (fibonnaciNumbers[i] % 2 === 0)
            console.log(fibonnaciNumbers[i]);
}
primeNumbers();
fibonnaciNumbers();
console.log(nestedData.innerData.order[1]);
nestedData.innerData.addSnack("chocolate");
console.log(nestedData.innerData.snacks);

let nestedObject = {
    speakers: [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }],
    data: {
        continents: {
            europe: {
                countries: {
                    switzerland: {
                        capital: "Bern",
                        population: 8000000
                    }
                }
            }
        },
        languages: {
            spanish: {
                hello: "Hola"
            },
            french: {
                hello: "Bonjour"
            }
        }
    }
}
function addSpeaker(value) {
    let speakers = nestedObject.speakers;
    speakers.push({ name: value });
    return speakers;
}

function addLanguage(language, greeting) {
    let languages = nestedObject.data.languages;
    languages[language] = { hello: greeting }
    return languages;
}
function addCountry(country, capital, population) {
    let EUConutries = nestedObject.data.continents.europe.countries;
    EUConutries[country] = {
        capital: capital,
        population: population
    }
    return EUConutries;
}

console.log(addLanguage("portuguese", "Olá"));
console.log(addSpeaker("Lucas"));
console.log(addCountry("portugal", "Lisbon", 10000000));