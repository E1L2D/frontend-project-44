import getStart from '../index.js';

const gameDescription =
  'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const getRandomInt = () => Math.floor(Math.random() * 10);
  const number = getRandomInt();

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
