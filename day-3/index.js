import fs from 'fs';

const lines = fs.readFileSync('./ex.txt', 'utf8').trim().split('\n');


/**
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..


Total = 4361;
=> symbols => *#+$
=> find numbers adjacent to symbols, including diagonal
=> in this case: 467 + 35 + 633 + 617 + 592 + 755 + 664 + 598 = 4361
    => 114 and 58 are not adjacent to any symbol so they are not parts

=> problem is kinda similar to find islands in 2d matrix
    => we are given a 1d matrix with a length of 10 for each element
    => we can iterate thru first line, check if a number is adjacent to a symbol,
        =>if yes, then immediately is added to sum, if not, keep it in memory
        =>we can use the number's indices and compare it to the next line if theres a symbol,
            => diagonal would be if difference is 0 or 1
    => we need a visited hash map that kept track of numbers that are adjacent to a symbol

**/

function day3(matrix = lines) {
    let sum = 0;
    const symbols = ['*', '#', '$'];

    for (let i = 0; i < matrix.length; i++) {
        let currNumStr = '';

        for (let j = 0; j < matrix[i].length; j++) {
            const curr = matrix[i][j];

            if (!isNaN(parseInt(curr))) {
                currNumStr += curr;
            } else if (currNumStr.length > 0) {
                // If a non-digit is encountered, convert and add the current number
                sum += parseInt(currNumStr);
                console.log(`Added ${parseInt(currNumStr)} to sum`);
                currNumStr = ''; // Reset the current number string
            }
        }

        // Check if there's a remaining number at the end of the row
        if (currNumStr.length > 0) {
            sum += parseInt(currNumStr);
            console.log(`Added remaining ${parseInt(currNumStr)} to sum`);
        }
    }

    return sum;
}


console.log(day3());
