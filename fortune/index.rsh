'reach 0.1';
const [isFortune, MONEY, HEALTH, DIE] = makeEnum(3)
const [isDesition, TRUE, FALSE] = makeEnum(2)

const Player = {
  ...hasRandom,
  informTimeout: Fun([], Null)
};

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    // Specify Alice's interact interface here
    ...Player,
    amount: UInt,
    decide: Fun([UInt], UInt),
    deadline: UInt
  });
  const Bob = Participant('Bob', {
    // Specify Bob's interact interface here
    ...Player,
    readFortune: Fun([], UInt)
  });
  init();
  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout()
    });
  }
  // The first one to publish deploys the contract
  Alice.only(() => {
    const amount = declassify(interact.amount)
    const deadline = declassify(interact.deadline)
  }
  )
  Alice.publish(amount, deadline)
    .pay(amount)
  commit();

  Bob.publish().timeout(relativeTime(deadline), () => closeTo(
    Alice, informTimeout
  ))

  // // The second one to publish always attaches
  var accepted = FALSE
  invariant(balance() == amount)
  while (accepted == FALSE) {
    commit()
    Bob.only(() => {
      const fortune = declassify(interact.readFortune())
    }
    )
    Bob.publish(fortune).timeout(relativeTime(deadline), () => closeTo(
      Alice, informTimeout
    ));
    commit()
    Alice.only(() => {
      const desition = declassify(interact.decide(fortune))
    })
    Alice.publish(desition).timeout(relativeTime(deadline), () => closeTo(
      Bob, informTimeout
    ))
    accepted = desition
    continue
  }


  //commit()
  // Bob.only(() => {
  //   const fortune = declassify(interact.readFortune())
  // }
  // )
  // Bob.publish(fortune);
  // commit()
  // Alice.only(() => {
  //   const desition = declassify(interact.decide(fortune))
  // })
  // Alice.publish(desition)

  transfer(amount).to(Bob);
  commit();
  // write your program here
  exit();
});
