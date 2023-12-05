// 1abc2
// pqr3stu8vwx
// a1b2c3d4e5f
// treb7uchet

// take in an array;
// have two pointers: left and right;
// once left pointer finds a number, free to move right pointer;
// once right pointer hits a number, stop and then add values of the two numbers
// if right pointer === left pointer, then multiply sum by 2
// have a sum var that takes in the sum of all the numbers for each string
import fs from 'fs';

const lines = fs.readFileSync('./inputs.txt', 'utf8').trim().split('\n');
console.log(lines)

function trebuchet() {
    let numbers = {
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    }
    if (!lines) return 0;
    let sum = 0;
    for (let i = 0; i < lines.length; i++) {
        console.log('line',lines[i])
        let test = lines[i];
        for (let number in numbers) {
            console.log('number', number, test)
            while (test.includes(number)) {
                let start = test.indexOf(number)
                console.log('start', start)
                test = test.slice(0, start + 1) + numbers[number] + test.slice(start - 1 + number.length);
            }
        }
        console.log('test', test)
        //modify str above
        let str = test.split('');
        let left = 0;
        let right = str.length - 1;
        let leftVal = 0;
        let rightVal = 0;
        console.log(str)
        while (left <= right) {
            if (!isNaN(parseInt(str[left]))) {
                leftVal = parseInt(str[left]);
                console.log('leftVal', leftVal)
                if (!isNaN(parseInt(str[right]))) {
                    rightVal = parseInt(str[right]);
                    console.log('rightVal', rightVal)
                    break;
                } else {
                    console.log('right')
                    right--;
                }
            } else {
                console.log('left')
                left++
            }
        }
        if (left === right) {
            rightVal = leftVal;
        }
        let strVals = leftVal.toString() + rightVal.toString()
        console.log('strVals', strVals)
        sum += (1 * strVals)
    }
    return sum;
}

console.log(trebuchet())
