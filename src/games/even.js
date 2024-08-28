import launchGame from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomInt(0, 10);

  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = number;

  return [question, correctAnswer];
};

export default () => launchGame(gameDescription, generateRound);
