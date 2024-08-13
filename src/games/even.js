export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getRandomInt = () => Math.floor(Math.random() * 10);
  const number = getRandomInt();

  const isEven = (num) => num % 2 === 0;
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  console.log(`Question: ${number}`);
};
