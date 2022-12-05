interface Cat {
  readonly name: string;
  breed: string;
}

type ReadonlyCat = Readonly<Cat>;

const makeCat = (name: string, breed: string): ReadonlyCat => {
  return {
    name,
    breed,
  };
};

const usul = makeCat('Usul', 'Tabby');
// usul.name = 'Pitter'; // can not change

// readonly tuples
const makeCoordinate = (
  x: number,
  y: number,
  z: number
): readonly [number, number, number] => {
  return [x, y, z];
};

const c1 = makeCoordinate(10, 20, 40);
// c1[0] = 100; // can not change

const reallyConst = [10, 30, 45] as const; // contents of that array are also constant/immutable
// reallyConst[0] = 100; // can not change
