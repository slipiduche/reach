import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [accAlice, accBob] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Alice and Bob!');

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
const fingers = [0, 1, 2]//[0, 1, 2, 3, 4, 5]
const outcome = ['Bob Wins', 'Draw', 'Alice Wins']
const guess = [0, 1, 2, 3, 4]//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('Starting backends...');
const Player = (Who) => ({
  getFingers: () => {
    const playedFingers = fingers[Math.floor(Math.random() * 2)]//fingers[Math.floor(Math.random() * 5)]
    console.log(Who, ' select ', playedFingers)
    return playedFingers
  },
  getGuess: () => {
    const selectedGuess = guess[Math.floor(Math.random() * 4)]//guess[Math.floor(Math.random() * 10)]
    console.log(Who, ' guess ', selectedGuess)
    return selectedGuess
  },
  seeOutcome: (out) => {
    console.log(Who, ' view ', outcome[out])
  }

})
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    // implement Alice's interact object here
    ...Player('Alice')
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    // implement Bob's interact object here
    ...Player('Bob')
  }),
]);

console.log('Goodbye, Alice and Bob!');
