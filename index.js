let wrong = 0;
let correct = 0;

for (let i = 0; i < 5; i++){
    const givenNumber = parseInt(prompt('Enter a guessing Number 1-3:'));
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    
    if (randomNumber === givenNumber) {
        console.log('You guess wrong number😂');
        console.log('Correct number is: ', randomNumber);
        wrong++;
    }
    else {
        console.log('you guess Right Number🤩');
        correct++;
    }
}

document.write('You Won : ', correct, ' times🤩', '<br/>');
document.write('You Lossssss : ', wrong, ' times😂', '<br/>');