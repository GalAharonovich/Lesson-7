// //Task 1 solved
const grades = [1, 5, 10, 2, 14, 3, 6]
const task1 = (grades) => {
    grades.sort((x, y) => y - x);
    console.log(grades);
}

//Task 2 solved
const array1 = [1, 2, 2, 9, 4, 5, 7];
const array2 = [6, 2, 2, 13, 88, 0];

const common = (array1, array2) => {
    let commonNumbers = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                let isAlreadyAdded = false;
                for (let k = 0; k < commonNumbers.length; k++) {
                    if (commonNumbers[k] === array1[i]) {
                        isAlreadyAdded = true;
                        break;
                    }
                }
                if (!isAlreadyAdded) {
                    commonNumbers.push(array1[i]);
                }
                break;
            }
        }
    }
    return commonNumbers;
}

console.log(common(array1, array2));


//Task 3 solved
const numberGrid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
];

const avarage = (numberGrid) => {
    let sum = 0;
    let counter = 0;

    for (let i = 0; i < numberGrid.length; i++) {
        for (let j = 0; j < numberGrid[i].length; j++) {
            sum += numberGrid[i][j]
            counter++
        }
    }

    if (count === 0) {
        return 0;
    }

    return sum / count;
}
console.log(avarage(numberGrid));


//Task 4 solved
function findNumbers(numbersArray, number) {
    let count = 0;

    for (let i = numbersArray.length - 1; i >= 0; i--) {
        if (numbersArray[i] === number) {
            numbersArray.pop();
            count++;
        } else {

            numbersArray.unshift(numbersArray.pop());
        }
    }


    console.log(numbersArray);
    return count;
}

const numbersArray = [9, 1, 2, 3, 3, 5, 5, 28];
const number = 3;
const numAppear = findNumbers(numbersArray, number);
console.log(numAppear)



//Arrow Task 1 solved
const string1 = "it is a string"


const stringLength = (text) => {
    if (text.length > 5) {
        return true;
    }

    return false;
}

console.log(stringLength(string1));

//Arrow Task 2 solved
const string2 = "it is a stringi"
const stringIndex = (text) => {
    if (text[0] == text[text.length - 1]) {
        return "First character and last character are the same"
    }
    return "First character and last character are different"
}
console.log(stringIndex(string2));


//Arrow Task 3 solved
const string3 = "it is a stringI"

const UppercaseCheck = (text) => {
    if (text[text.length - 1] === text[text.length - 1].toUpperCase()) {
        return true;
    }
    return false;
}
console.log(UppercaseCheck(string3));


//Task maps-foreach 1 
const numbersDivision = [2, 3, 5, 9, 12, 13, 14, 15];
let divisionByThree = false;

numbersDivision.forEach((number, index) => {
    if (number % 3 === 0) {
        console.log(number, index);
        divisionByThree = true;
    }
}
);
if (!divisionByThree) {
    console.log("The array is not divisible by 3")
}

//Task maps-foreach 2 solved
const allLetters = ['a', 'B', 'd', 'D', 'R', 'f'];

const newLetters2 = allLetters.map((letter) => {
    if (letter == letter.toUpperCase()) {
        return letter = 'U';
    } else return letter = 'L';
});
console.log(newLetters2)


//Task maps-foreach 3 solved
const newLetters = ['a', 'b', 'c', 'd', 'e', 'f'];

newLetters.forEach((letters, index) => {
    if (index % 2 === 0) letters[index] = index;
});

console.log(newLetters);


// Task Filter 1 solved
const ages = [32, 33, 16, 40];
const result = ages.filter(age => age >= 18);


// Task Filter 2 solved
const anyNmbers = [2, 4, 1, 2, 7, 2, 8];
const qualified = anyNmbers.filter((item,index) => index != 3);
console.log(qualified);


//Task spread 1 solved

function makeCombined(arr11, newName) {
    return [...arr11, newName];
}

let arr11 = ['eitan', 'dor', 'gal'];
const newName = 'meni';

const addName = makeCombined(arr11, newName);
console.log(addName);

//Task spread 2 solved
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

function makeCombination(arr1, arr2) {
    return [...arr1, ...arr2];
}

const combined = makeCombination(arr1, arr2);
console.log(combined);