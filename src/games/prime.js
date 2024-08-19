import getStart from '../index.js';

const gameDescription =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const getRandomInt = () => Math.ceil(Math.random() * 10);
  const number = getRandomInt();

  const isPrime = () => {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  };

  const check = () => {
    const result = isPrime(number) ? 'yes' : 'no';
    return result;
  };

  const correctAnswer = check();
  const question = number;
  return [question, correctAnswer];
};

export default () => getStart(gameDescription, generateRound);
