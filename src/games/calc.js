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
    switch (operator) {
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      case '*':
        return number1 * number2;
    }
  };

  const correctAnswer = answer();
  const question = RandomMathOperation();
  return [question, correctAnswer];
};

export default () => getStart(gameDescription, generateRound);
