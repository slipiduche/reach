import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [accCreator, accBidder] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Creator and Bidder!');

console.log('Launching...');
const ctcCreator = accCreator.contract(backend);
const ctcBidder = accBidder.contract(backend, ctcCreator.getInfo());

console.log('Starting backends...');
await Promise.all([
  backend.Creator(ctcCreator, {
    ...stdlib.hasRandom,
    // implement Creator's interact object here
  }),
  backend.Bidder(ctcBidder, {
    ...stdlib.hasRandom,
    // implement Bidder's interact object here
  }),
]);

console.log('Goodbye, Creator and Bidder!');
