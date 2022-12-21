import _ from 'lodash';
import readlineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNum = _.random(1, 100);
    const isEven = randomNum % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === isEven) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default game;
