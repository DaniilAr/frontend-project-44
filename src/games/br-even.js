import game from '../index.js';
import randomNum from '../randomNum.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const createQuestion = () => {
  const question = randomNum();
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

export default () => game(description, createQuestion);
