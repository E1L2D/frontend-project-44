export default () => {
  console.log('What is the result of the expression?');

  const getRandomOperator = () => {
    return Math.floor(Math.random() * operators.length);
  };
  const index = getRandomOperator();
  const operators = ['-', '+', '*'];
  const operator = operators[index];

  const getRandomInt = () => Math.ceil(Math.random() * 10);
  const number1 = getRandomInt();
  const number2 = getRandomInt();

  const RandomMathOperation = () => `${number1} ${operator} ${number2}`;
  const operation = RandomMathOperation();

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

  console.log(`Question: ${operation}`);
};
