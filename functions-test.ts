import {
  addNumbers,
  addStrings,
  format,
  getUser,
  introduce,
} from './functions';

console.log(addNumbers(1, 2));
console.log(addStrings('a', 'b'));
console.log(addStrings('Mac'));
console.log(introduce('MD', 'Matiur', 'Rahman'));
console.log(getUser({ first: 'Matiur', last: 'Rahman' }));
