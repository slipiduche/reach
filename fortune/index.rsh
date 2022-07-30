'reach 0.1';
const [isFortune, MONEY, HEALTH, DIE] = makeEnum(3)
const [isDesition, TRUE, FALSE] = makeEnum(2)

const Player = {
  ...hasRandom,
  informTimeout: Fun([], Null)
};

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    // Specify Alice's interact interface here
    ...Player,
    amount: UInt,
    decide: Fun([UInt], UInt),
  });
  const B = Participant('Bob', {
    // Specify Bob's interact interface here
    ...Player,
    readFortune: Fun([], UInt)
  });
  init();
  // The first one to publish deploys the contract
  A.publish();
  commit();
  // The second one to publish always attaches
  B.publish();
  commit();
  // write your program here
  exit();
});
