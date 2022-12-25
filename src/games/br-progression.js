import game from '../index.js';
import { randomNum10, randomProgression } from '../randomizer.js';

const description = 'What number is missing in the progression?';

const createQuestion = () => {
  const progression = randomProgression();
  const skipNum = randomNum10();
  const answer = progression[skipNum].toString();
  progression[skipNum] = '...';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => game(description, createQuestion);
