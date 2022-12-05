type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(add3DCoordinate([0, 100, 0], [10, 20, 30]));

function simpleStringState(
  initial: string
): [() => string, (v: string) => void] {
  let str: string = initial;
  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
}

// noted
// tuples is an array and each elements in the array can be named and have different types
const [getStr1, setStr1] = simpleStringState('Helloo');
const [getStr2, setStr2] = simpleStringState('Mac');

console.log(getStr1());
console.log(getStr2());
setStr1('Bye dude');
console.log(getStr1());
console.log(getStr2());
