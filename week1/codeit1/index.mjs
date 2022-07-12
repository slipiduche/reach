import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [accPat, accVanna] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Pat and Vanna!');

console.log('Launching...');
const ctcPat = accPat.contract(backend);
const ctcVanna = accVanna.contract(backend, ctcPat.getInfo());

console.log('Starting backends...');
await Promise.all([
  backend.Pat(ctcPat, {
    ...stdlib.hasRandom,
    // implement Pat's interact object here
  }),
  backend.Vanna(ctcVanna, {
    ...stdlib.hasRandom,
    // implement Vanna's interact object here
  }),
]);

console.log('Goodbye, Pat and Vanna!');
