import game from '../index.js';
import randomNum, { randomCharacter } from '../randomizer.js';

const description = 'What is the result of the expression?';

const createQuestion = () => {
  const num1 = randomNum();
  const num2 = randomNum();
  const character = randomCharacter();
  const question = `${num1} ${character} ${num2}`;
  let answer = 0;
  switch (character) {
    case '+':
      answer = (num1 + num2).toString();
      break;
    case '-':
      answer = (num1 - num2).toString();
      break;
    default:
      answer = (num1 * num2).toString();
  }
  return [question, answer];
};

export default () => game(description, createQuestion);
