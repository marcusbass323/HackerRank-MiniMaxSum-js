'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {

//Initialize two empty arrays
    var arr1 = [];
    var arr2 = [];


    var max = arr.reduce(function (a, b) {
        return Math.max(a, b);
    });

// Pull min index and save to value
    var min = arr.reduce(function (a, b) {
        return Math.min(a, b);
    });

// Remove max value from array and save to both two arrays
    arr.splice(arr.indexOf(max), 1);
    var arr1 = arr2 = arr;

//function to sum Array
    function sumArray(total, num) {
        return total + num;
    }

// Reduce array and save to first variable
    var array1 = arr1.reduce(sumArray);

// Add popped value back to array
    arr2.push(max)

//Removing min value from array
    arr2.splice(arr2.indexOf(min), 1);

// Redeuce array and save to second variable
    var array2 = arr2.reduce(sumArray);

//Print to console
console.log(array1, array2)

}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
