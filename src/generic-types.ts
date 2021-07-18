// Generic Functions
function genericFunction<T>(x: T): T {
  return x;
}

const genericArrowFunction = <T>(x: T): T => x;

// Generic Interfaces
interface GenericInterface<T> {
  (a: T): T;
  someProp: T;
}

interface GenericInterface<T> {
  <U>(a: U): U;
  someProp: T;
}

// Generic Classes
class GenericClass<P> {
  constructor(public props: P) {}

  getProps() {
    return this.props;
  }
}

// A example
interface Expireable {
  expiryDate: Date;
}

interface ChocolateCake extends Expireable {}
interface VanillaCake extends Expireable {}

const chocoCakes: ChocolateCake[] = [{ expiryDate: new Date() }];
const vanillaCakes: VanillaCake[] = [{ expiryDate: new Date() }];

const getExpiredItems = <Item extends Expireable>(items: Array<Item>) => {
  const currentDate = new Date().getTime();
  return items.filter((item) => item.expiryDate.getTime() < currentDate);
};

const expiredC = getExpiredItems(chocoCakes);
const expiredV = getExpiredItems(vanillaCakes);
