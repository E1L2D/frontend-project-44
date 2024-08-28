import launchGame from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (begin, length, step) => {
  const result = [];
  for (let i = 0; i <= length; i += 1) {
    result.push(begin + i * step);
  }
  return result;
};

const generateRound = () => {
  const begin = getRandomInt(0, 100);
  const length = getRandomInt(5, 10);
  const step = getRandomInt(2, 5);

  const progression = getProgression(begin, length, step);

  const correctAnswer = progression.splice(getRandomInt(0, progression.length - 1), 1, '..').join('');
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => launchGame(gameDescription, generateRound);
