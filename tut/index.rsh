'reach 0.1';
const Player = {
  getHand: Func([], Uint),
  seeOutcome: Func([Uint], null)
}

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    // Specify Alice's interact interface here
    ...Player
  });
  const Bob = Participant('Bob', {
    // Specify Bob's interact interface here
    ...Player
  });
  init();
  // The first one to publish deploys the contract
  Alice.publish();
  commit();
  // The second one to publish always attaches
  Bob.publish();
  commit();
  // write your program here
  exit();
});
