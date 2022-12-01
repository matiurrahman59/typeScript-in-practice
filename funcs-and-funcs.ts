export const printToFile = (test: string, callback: () => void): void => {
  console.log(test);
  callback();
};

// can use in different directory
export type MutationFunction = (v: number) => number;

// function params with params
const arrayMutate = (numbers: number[], mutate: MutationFunction): number[] => {
  return numbers.map(mutate);
};
const myNewMutateFunc: MutationFunction = (v: number) => v * 100;
console.log(arrayMutate([1, 2, 3], (v) => v * 10));

// func returning func
export type typeAdderFunc = (val: number) => number;
const createAdder = (num: number): typeAdderFunc => {
  return (val: number) => val + num;
};

const addOne = createAdder(1);
console.log(addOne(100));
