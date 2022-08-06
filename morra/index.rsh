'reach 0.1';
const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3)
const [isFingers, ZERO, ONE, TWO, THREE, FOUR, FIVE] = makeEnum(6);
const [isGuess, GUESSZERO, GUESSONE, GUESSTWO, GUESSTHREE, GUESSFOUR, GUESSFIVE, GUESSSIX, GUESSSEVEN, GUESSEIGHT, GUESSNINE, GUESSTEN] = makeEnum(11);

const winner = (aFingers, bFingers, aGuess, bGuess) => {
  const fingers = aFingers + bFingers
  const outcome = fingers == aGuess ? (fingers == bGuess ? DRAW : A_WINS) : fingers == bGuess ? B_WINS : DRAW
  return outcome
}
assert(winner(TWO, ZERO, GUESSTWO, GUESSTHREE) == A_WINS) //A Wins
assert(winner(THREE, ONE, GUESSFIVE, GUESSFOUR) == B_WINS) //B Wins
assert(winner(ZERO, ZERO, GUESSZERO, GUESSZERO) == DRAW) //both are correct
assert(winner(ZERO, TWO, GUESSFOUR, GUESSFIVE) == DRAW) //both are incorrect
forall(UInt, aFIngers =>
  forall(UInt, bFIngers =>
    forall(UInt, aGuess =>
      forall(UInt, bGuess =>
        assert(isOutcome(winner(aFIngers, bFIngers, aGuess, bGuess)))))));
forall(UInt, fingersA =>
  forall(UInt, fingersB =>
    forall(UInt, guess =>
      assert(winner(fingersA, fingersB, guess, guess) == DRAW))));

const Player = {
  ...hasRandom,
  getFingers: Fun([], UInt),
  getGuess: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null)
}
export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    ...Player,
    wager: UInt,
    deadline: UInt
  });
  const B = Participant('Bob', {
    // Specify Bob's interact interface here
    ...Player,
    acceptWager: Fun([UInt], Null)
  });
  init();
  const informTimeout = () => {
    each([A, B], () => {
      interact.informTimeout()
    });
  }

  // The first one to publish deploys the contract
  A.only(() => {
    const wager = declassify(interact.wager)

    const deadline = declassify(interact.deadline);
  })
  A.publish(wager, deadline).pay(wager);
  commit()
  B.only(() => {
    interact.acceptWager(wager)
  })
  B.pay(wager).timeout(relativeTime(deadline), () => closeTo(
    A, informTimeout
  ))
  var outcome = DRAW;
  invariant(balance() == 2 * wager && isOutcome(outcome))
  while (outcome == DRAW) {
    commit()
    A.only(() => {
      const _aFingers = interact.getFingers()
      const _aGuess = interact.getGuess()
      const [_commitAFingers, _saltAFingers] = makeCommitment(interact, _aFingers)
      const [_commitAGuess, _saltAGuess] = makeCommitment(interact, _aGuess)
      const commitAFingers = declassify(_commitAFingers)
      const commitAGuess = declassify(_commitAGuess)
    })
    A.publish(commitAFingers, commitAGuess).timeout(relativeTime(deadline), () => closeTo(
      B, informTimeout
    ));
    commit();
    // The second one to publish always attaches
    unknowable(B, A(_aFingers, _saltAFingers))
    unknowable(B, A(_aGuess, _saltAGuess))
    B.only(() => {
      const bFingers = declassify(interact.getFingers())
      const bGuess = declassify(interact.getGuess())
    })
    B.publish(bFingers, bGuess).timeout(relativeTime(deadline), () => closeTo(
      A, informTimeout
    ));
    commit()
    A.only(() => {
      const aFingers = declassify(_aFingers)
      const aGuess = declassify(_aGuess)
      const saltAFingers = declassify(_saltAFingers)
      const saltAGuess = declassify(_saltAGuess)
    })
    A.publish(saltAFingers, saltAGuess, aFingers, aGuess)
    checkCommitment(commitAFingers, saltAFingers, aFingers)
    checkCommitment(commitAGuess, saltAGuess, aGuess)
    outcome = winner(aFingers, bFingers, aGuess, bGuess)
    continue
  }

  transfer(2 * wager).to(outcome == A_WINS ? A : B);
  commit();



  each([A, B], () => {
    interact.seeOutcome(outcome)
  });
  // write your program here
  exit();
});
