import getStart from '../index.js';
import getRandomInt from '../randomInt.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const number1 = getRandomInt(0, 10);
  const number2 = getRandomInt(0, 10);
  const randomNumbers = [number1, number2];

  const getGreatestCommonDivisor = (a, b) => {
    let num1 = a;
    let num2 = b;
    while (num2 !== 0) {
      const temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }
    return Math.abs(num1);
  };

  const correctAnswer = getGreatestCommonDivisor(number1, number2);
  const question = randomNumbers.join(' ');
  return [question, correctAnswer];
};

export default () => getStart(gameDescription, generateRound);
