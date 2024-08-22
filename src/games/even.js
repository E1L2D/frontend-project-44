import getStart from '../index.js';
import getRandomInt from '../randomInt.js';

const gameDescription =
  'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const number = getRandomInt(0, 10);

  const isEven = () => number % 2 === 0;
  const check = () => {
    const result = isEven(number) ? 'yes' : 'no';
    return result;
  };

  const correctAnswer = check();
  const question = number;
  return [question, correctAnswer];
};

export default () => getStart(gameDescription, generateRound);
