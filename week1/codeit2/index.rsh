'reach 0.1';
export const main = Reach.App(() => {
  const Methods = {
    seePrice: Fun([], UInt),
    getDescription: Fun([], Bytes(1)),
  }
  const Creator = Participant('Creator', {
    // Specify Creator's interact interface here
    ...Methods
  });
  const Bidder = Participant('Bidder', {
    // Specify Bidder's interact interface here
    ...Methods
  });
  const Buyer = Participant('Buyer', {
    // Specify Buyer's interact interface here
    ...Methods
  });
  init();

  // The first one to publish deploys the contract
  Creator.publish();
  commit();
  Bidder.only(() => {
    const price = declassify(interact.seePrice())
  })
  // The second one to publish always attaches
  Bidder.publish(price);
  commit();
  Buyer.only(() => {
    const description = declassify(interact.getDescription())
  })
  // The third one to publish always attaches
  Buyer.publish(description);
  commit();
  // write your program here
  exit();
});
