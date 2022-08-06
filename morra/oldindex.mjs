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

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);
const fingers = [0, 1, 2]//[0, 1, 2, 3, 4, 5]
const outcome = ['Bob Wins', 'Draw', 'Alice Wins']
const guess = [0, 1, 2, 3, 4]//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('Starting backends...');
const Player = (Who) => ({
  getFingers: async () => {
    const playedFingers = fingers[Math.floor(Math.random() * 2)]//fingers[Math.floor(Math.random() * 5)]
    console.log(Who, ' select ', playedFingers)
    if (Math.random() <= 0.01) {
      for (let i = 0; i < 10; i++) {
        console.log(`  ${Who} takes their sweet time...`);
        await stdlib.wait(1);
      }
    }
    return playedFingers
  },
  getGuess: () => {
    const selectedGuess = guess[Math.floor(Math.random() * 4)]//guess[Math.floor(Math.random() * 10)]
    console.log(Who, ' guess ', selectedGuess)
    return selectedGuess
  },
  seeOutcome: (out) => {
    console.log(Who, ' view ', outcome[out])
  },
  informTimeout: () => {
    console.log(`${Who} observed the timeout`)
  }

})
await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    // implement Alice's interact object here
    ...Player('Alice'),
    wager: stdlib.parseCurrency(10), deadline: 10
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    // implement Bob's interact object here
    ...Player('Bob'), acceptWager: async (amt) => {
      console.log(`Bob accepts the wager of ${fmt(amt)}.`);
    }
  }),
]);
const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);
console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);

console.log('Goodbye, Alice and Bob!');
