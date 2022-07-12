'reach 0.1';
export const main = Reach.App(() => {
  const Methods = {
    seePrice: Fun([], UInt),
    //getDescription: Fun([], Bytes(1)),
    getDescription: Fun([], UInt),
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
  Creator.publish();
  commit();
  Bidder.only(() => {
    const price = declassify(interact.seePrice())
  })
  Bidder.publish(price);
  commit();
  Buyer.only(() => {
    const payment = declassify(interact.seePrice())
    const description = declassify(interact.getDescription())
  })
  Buyer.publish(payment, description).pay(payment);
  transfer(payment).to(Creator)
  commit();
  // write your program here
  exit();
});
