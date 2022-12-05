// const beforeLoad = 'beforeload';
// const loading = 'loading';
// const loaded = 'loaded';

// enum
enum LoadingState {
  beforeLoad = 'beforeload',
  loading = 'loading',
  loaded = 'loaded',
}

const isLoading = (state: LoadingState) => state === LoadingState.loading;

console.log(isLoading(LoadingState.loading));
console.log(isLoading(LoadingState.beforeLoad));

//////////////////////////////
//Literal types
// In addition to the general types string and number, we can refer to specific strings and numbers in type positions.
let x: 'hello' = 'hello';
// x = 'hellos' // can't change

// number literal types
type num = 1 | 2 | 3;
// const rollDice = (dice: num) => {
const rollDice = (dice: 1 | 2 | 3) => {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5) + 1;
  }
  return pip;
};

console.log(rollDice(3));
// console.log(rollDice(5)); // cant work

// string literal types
function sendEvents(name: 'addToCart', data: { productId: number }): void;
function sendEvents(name: 'checkout', data: { cartCount: number }): void;
function sendEvents(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEvents('addToCart', {
  productId: 24,
});
