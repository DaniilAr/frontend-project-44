import game from '../index.js';
import randomNum from '../randomizer.js';

const description = 'Find the greatest common divisor of given numbers.';

const createQuestion = () => {
  let num1 = randomNum();
  let num2 = randomNum();
  const question = `${num1} ${num2}`;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  const answer = (num1 + num2).toString();
  return [question, answer];
};

export default () => game(description, createQuestion);
