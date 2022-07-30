import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);

const [accAlice, accBob] =
    await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Alice and Bob!');

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
const desition = ["TRUE", "FALSE"]
const fortune = ['MONEY', 'HEALTH', 'DIE']

console.log('Starting backends...');
const Player = (Who) => ({
    decide: (i) => {
        const decides = Math.floor(Math.random() * 2)//fingers[Math.floor(Math.random() * 5)]
        console.log(Who, `saw ${fortune[i]} decides is `, desition[decides])
        return decides
    },
    readFortune: () => {
        const reading = Math.floor(Math.random() * 3)//guess[Math.floor(Math.random() * 10)]
        console.log(Who, ' select fortune: ', fortune[reading])
        return reading
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
        amount: stdlib.parseCurrency(10),
        deadline: 10
    }),
    backend.Bob(ctcBob, {
        ...stdlib.hasRandom,
        // implement Bob's interact object here
        ...Player('Bob')
    }),
]);


console.log('Goodbye, Alice and Bob!');
