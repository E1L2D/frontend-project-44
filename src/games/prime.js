import launchGame from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const number = getRandomInt(0, 20);

  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = number;

  return [question, correctAnswer];
};

export default () => launchGame(gameDescription, generateRound);
