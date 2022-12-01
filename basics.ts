let userNamme: string = 'Matiur';
let hasLoggedIn: boolean = true;

userNamme += ' Rahman';

console.log(userNamme);

let myNumber: number = 10;
let myRegex: RegExp = /foo/;

/////////// Array
const names: string[] = userNamme.split(' ');
// generic
const myValues: Array<number> = [1, 2, 3];

/////////// Object
interface Person {
  first: string;
  last: string;
}
const myPerson: Person = {
  first: 'Matiur',
  last: 'Rahman',
};

// object map
const ids: Record<number, string> = {
  10: 'a',
  20: 'b',
};

ids[30] = 'c';

console.log(ids);

////////////////////////////////////////
// conditionals and expressions
// if (ids[30] === 60) console.log('Ok');
if (ids[30] === 'D') console.log('Ok');

for (let i = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach((v) => console.log(v));
const out: number[] = [4, 5, 6].map((v) => v * 10);
// const out: number[] = [4, 5, 6].map((v) => `${v * 10}`);
