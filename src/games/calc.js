import getStart from '../index.js';
import getRandomInt from '../randomInt.js';

const gameDescription = 'What is the result of the expression?';

const generateRound = () => {
  const operators = ['-', '+', '*'];
  const getRandomOperator = () => Math.floor(Math.random() * operators.length);

  const index = getRandomOperator();
  const operator = operators[index];

  const number1 = getRandomInt(0, 10);
  const number2 = getRandomInt(0, 10);

  const RandomMathOperation = () => `${number1} ${operator} ${number2}`;

  const answer = () => {
    let result = '';
    switch (operator) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      default:
        throw new Error(`Unknown operator: '${operator}!`);
    }
    return result;
  };

  const correctAnswer = answer();
  const question = RandomMathOperation();
  return [question, correctAnswer];
};

export default () => getStart(gameDescription, generateRound);
