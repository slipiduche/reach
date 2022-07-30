import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);

const [accAlice, accBob] =
    await stdlib.newTestAccounts(2, startingBalance);
    const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);
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

const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);
console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);
console.log('Goodbye, Alice and Bob!');
