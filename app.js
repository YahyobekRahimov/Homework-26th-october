// ! 1-masala
function filterOddNumbers(arr) {
    return arr.filter(value => value % 2 == 1);
}
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// console.log(filterOddNumbers(arr));

// ! 2-masala
function squaredCubedArr(arr) {
    return arr.map(value => {
        if (value % 2 == 0) {
            return value ** 2;
        } else {
            return value ** 3;
        }
    })
}
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(squaredCubedArr(arr))

// ! 3-masala
function divisibleFiveAndThree(arr) {
    let result = arr.find(value => value % 5 == 0 && value % 3 == 0); 
    if (result) return true;
    if (!result) return false;
}
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15];
// localStorage.setItem('hasDivisibleFiveThree', divisibleFiveAndThree(arr));
// console.log(divisibleFiveAndThree(arr));

// ! 4-masala
function firstLetterFromArray(arr) {
    let arr2 = arr.map(value => value[0])
    return arr2;
}
// let arr = ["Hey", "Hi", "What are you doing? ", "Cool!", "Well done", "Good job", "Great!", "Good for you"];
// console.log(firstLetterFromArray(arr));

// ! 5-masala
function arrayFromNumber(number) {
    number = String(number);
    return Array.from(number);
    // return number.split(''); // * Alternative method
}
// console.log(arrayFromNumber(43243));

// ! 6-masala
function replaceSlice(str) {
    str = str.replace(/r/g, 'p');
    return str;
}
// console.log(replaceSlice("How are you doing, bro??"));

// ! 7-masala
function takeFirstOddNumbers(n, arr) {
    let i = 0;
    let newArr = [];
    for (const iterator of arr) {
        if (iterator % 2 == 1) {
            newArr.push(iterator);
            i++;
        }
        if (i >= n) {
            return newArr;
        }
    }
}
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(takeFirstOddNumbers(6, arr))

// ! 8-masala
function countHundredth(arr) {
    let counter = 0;
    arr.forEach(value => {
        value = String(value);
        if (value.length == 3) counter++;
    })
    return counter;
}

// console.log(countHundredth([100, 2, 300, 4, 500, 6, 710, 8, 9001, 10]))