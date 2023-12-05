import fs from 'fs';

const lines = fs.readFileSync('./inputs.txt', 'utf8').trim().split('\n');


//for each game, we iterate thru their array
//compare color to maxColor
//if its less than the maxColors, add that game's ID to viable Games
//convert viableGames elements to integer, add sum
function dayTwo() {
    let sumOfGameNumbers = 0;
    let viableGames = [];
    let sumOfPower = 0;
    for (let i = 0; i < lines.length; i++) {
        let game = lines[i];

        let colors = {
            'red': 12,
            'green': 13,
            'blue': 14,
        }
        let splitGame = game.split(':')

        let gameInfo = splitGame[0]
        let gameRounds = splitGame[1]
        let splitRounds = gameRounds.split(';')
        let gameNum = gameInfo.split(' ')[1]

        let red = 0;
        let blue = 0;
        let green = 0;

        for (let j = 0; j < splitRounds.length; j++) {
            let roundColors = splitRounds[j].split(',')
            for (let c = 0; c < roundColors.length; c++) {
                for (let color in colors) {
                    if (roundColors[c].includes(color)) {
                        let test = roundColors[c].split(' ')
                        console.log(test)
                        if (color === 'red' && test[1] > red) {
                            red = (1 * test[1])
                        } else if (color === 'blue' && test[1] > blue) {
                            blue = (1 * test[1])
                        } else if (color === 'green' && test[1] > green) {
                            green = (1 * test[1])
                        }
                    }
                }
            }
        }
        let power = red * blue * green
        console.log('power', power)
        sumOfPower += power
        console.log('sum of power', sumOfPower)
        if (red <= colors['red'] && blue <= colors['blue'] && green <= colors['green']) {
            console.log('this game is viable')
            viableGames.push({
                gameNumber: gameNum
            });
        } else {
            console.log('this game is NOT viable')
        }
    }
    console.log('These are the viable Games:', viableGames)
    for (let i = 0; i < viableGames.length; i++) {
        let gameNumber = parseInt(viableGames[i].gameNumber, 10);
        if (!isNaN(gameNumber)) {
            sumOfGameNumbers += gameNumber;
        }
    }
    return sumOfGameNumbers;
}


console.log(dayTwo())
