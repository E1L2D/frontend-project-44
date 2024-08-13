import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const countRound = 3;

  for (let i = 0; i < countRound; i += 1) {
    const userAnswer = readlineSync.question('Your answer: ');

    if (String(correctAnswer) !== userAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`
      );
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};