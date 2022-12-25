import game from '../index.js';
import randomNum from '../randomizer.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const createQuestion = () => {
  const question = randomNum();
  let answer = 'yes';
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      answer = 'no';
      break;
    }
  }
  return [question, answer];
};

export default () => game(description, createQuestion);