import _ from 'lodash';

export default () => {
  const random = _.random(1, 100);
  return random;
};

export const randomCharacter = () => {
  const character = _.sample(['*', '-', '+']);
  return character;
};
