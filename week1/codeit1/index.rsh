'reach 0.1';
export const main = Reach.App(() => {
  const Methods = {
    getChallenge: Fun([], UInt),
    seeResult: Fun([UInt], Null),
  }
  const Pat = Participant('Pat', {
    // Specify Pat's interact interface here
    ...Methods
  });
  const Vanna = Participant('Vanna', {
    // Specify Vanna's interact interface here
    ...Methods
  });
  init();
  Pat.only(() => {
    const challengePat = declassify(interact.getChallenge())
  })
  // The first one to publish deploys the contract
  Pat.publish(challengePat);
  commit();
  Vanna.only(() => {
    const challengeVanna = declassify(interact.getChallenge())
  })
  // The second one to publish always attaches
  Vanna.publish(challengeVanna);
  commit();
  // write your program here
  exit();
});
