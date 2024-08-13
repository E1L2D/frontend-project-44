import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return `Hello, ${userName}!`;
};

export default getUserName;
