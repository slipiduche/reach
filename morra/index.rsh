'reach 0.1';
const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3)
const Player = {
  getFingers: Fun([], UInt),
  getGuess: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
}
export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    ...Player
  });
  const B = Participant('Bob', {
    // Specify Bob's interact interface here
    ...Player
  });
  init();
  // The first one to publish deploys the contract
  A.only(() => {
    const aFinger = declassify(interact.getFingers())
    const aGuess = declassify(interact.getGuess())
  })
  A.publish(aFinger, aGuess);
  commit();
  // The second one to publish always attaches
  B.only(() => {
    const bFinger = declassify(interact.getFingers())
    const bGuess = declassify(interact.getGuess())
  })
  B.publish(bFinger, bGuess);
  commit();
  const fingers = aFinger + bFinger
  const outcome = fingers == aGuess ? (fingers == bGuess ? DRAW : A_WINS) : fingers == bGuess ? B_WINS : DRAW
  each([A, B], () => {
    interact.seeOutcome(outcome)
  });
  // write your program here
  exit();
});
