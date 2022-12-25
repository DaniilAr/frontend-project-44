import _ from 'lodash';

const randomNum = () => {
  const random = _.random(1, 100);
  return random;
};

export default randomNum;

export const randomNum10 = () => {
  const random10 = _.random(1, 9);
  return random10;
};

export const randomCharacter = () => {
  const character = _.sample(['*', '-', '+']);
  return character;
};

export const randomProgression = () => {
  let startNum = randomNum();
  const step = randomNum10();
  const progressionArray = [];
  for (let i = 0; i < 10; i += 1) {
    progressionArray.push(startNum);
    startNum += step;
  }
  return progressionArray;
};
