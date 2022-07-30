'reach 0.1';
const [isFortune, MONEY, HEALTH, DIE] = makeEnum(3)
const [isDesition, TRUE, FALSE] = makeEnum(2)

// forAlice(
//   UInt, fortune =>
//   assert(isFortune(fortune)))
// forall(
//   UInt, desition =>
//   assert(isDesition(desition)))
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
  // The first one to publish deploys the contract
  Alice.only(() => {
    const amount = declassify(interact.amount)
    const deadline = declassify(interact.deadline)
  }
  )
  Alice.publish(amount, deadline)
    .pay(amount)

  commit();
  // The second one to publish always attaches
  Bob.only(() => {
    const fortune = declassify(interact.readFortune())
  }
  )
  Bob.publish(fortune);
  commit()
  Alice.only(() => {
    const desition = declassify(interact.decide(fortune))
  }
  )
  Alice.publish(desition)
  transfer(amount).to(Bob);
  commit();
  // write your program here
  exit();
});
