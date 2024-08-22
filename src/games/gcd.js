import getStart from '../index.js';
import getRandomInt from '../randomInt.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const number1 = getRandomInt(0, 10);
  const number2 = getRandomInt(0, 10);
  const randomNumbers = [number1, number2];

  const getGreatestCommonDivisor = (num1, num2) => {
    let remainder;
    if (num1 > num2) {
      while (num2 !== 0) {
        remainder = num2;
        num2 = num1 % num2;
        num1 = remainder;
      }
    }
    if (num1 < num2) {
      return getGreatestCommonDivisor(num2, num1);
    }
    return remainder;
  };

  const correctAnswer = getGreatestCommonDivisor(number1, number2);
  const question = randomNumbers.join(' ');
  return [question, correctAnswer];
};

export default () => getStart(gameDescription, generateRound);
