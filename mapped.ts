type MyFlexibleDogInfo = {
  name: string;
  [key: string]: string | number;
};

const dog: MyFlexibleDogInfo = {
  name: 'lg',
  breed: 'Mutt',
  age: 22,
};

interface DogInfo {
  name: string;
  age: number;
}

// mapped <types>
type OptionsFlags<Type> = {
  [Property in keyof Type]: null;
};

type DogInfOptions = OptionsFlags<DogInfo>; // mapped through this doginfo and key vaue sets to boolean

// const dog1: DogInfOptions = {
//   name: 'lg',
//   age: 22,
// };

type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    newValue: Type[Property]
  ) => void;
} & {
  [Property in keyof Type as `on${Capitalize<
    string & Property
  >}Delete`]?: () => void;
};

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw 'Need to be implemented';
}

const lg: DogInfo = {
  name: 'LG',
  age: 13,
};

type DogInfoListeners = Listeners<DogInfo>;

listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onAgeDelete: () => {},
});
