import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [accCreator, accBidder, accBuyer] =
  await stdlib.newTestAccounts(3, startingBalance);
console.log('Hello, Creator, Bidder and Buyer!');

console.log('Launching...');
const ctcCreator = accCreator.contract(backend);
const ctcBidder = accBidder.contract(backend, ctcCreator.getInfo());
const ctcBuyer = accBuyer.contract(backend, ctcCreator.getInfo());
const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeCreator = await getBalance(accCreator);
const beforeBuyer = await getBalance(accBuyer);
const IO = (Who) => ({
  seePrice: () => {
    console.log(Who)
    return stdlib.parseCurrency(5)
  },
  getDescription: () => {
    console.log(Who)
    return 1
  }
})

console.log('Starting backends...');
await Promise.all([
  ctcCreator.p.Creator(
    { ...IO('Creator') }
  ),
  ctcBidder.p.Bidder(
    { ...IO('Bidder') }
  ),
  ctcBuyer.p.Buyer(
    { ...IO('Buyer') }
  )
]);
const afterCreator = await getBalance(accCreator);
const afterBuyer = await getBalance(accBuyer);
console.log(`Creator went from ${beforeCreator} to ${afterCreator}.`);
console.log(`Buyer went from ${beforeBuyer} to ${afterBuyer}.`);
console.log('Goodbye, Creator Bidder, Buyer!');
