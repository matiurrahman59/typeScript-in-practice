//===> utility types are a mechanism, a generics mechanism in typescript that we can use to essentially create another type from an existing type

//Partial<Type>
interface MyUser {
  name: string;
  id: number;
  email?: string;
}

// partial/required,pick,omit
type MyUserOptionals = Partial<MyUser>; // partial takes a type and then makes everything in it optional

type RequiredMyUser = Required<MyUser>; // Constructs a type consisting of all properties of Type set to required

type JustEmailAndName = Pick<MyUser, 'email' | 'name'>; // pick takes a type and also a list of keys and it will go and pick out from that type the specific fields that you want

type UserWithOutId = Omit<MyUser, 'id'>; // omit takes a type and then keys and it basically does exactly opposite of pick, (remove)

const merge = (user: MyUser, overides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overides,
  };
};

console.log(
  merge(
    { name: 'Matiur', id: 5, email: 'test@test.com' },
    { email: 'test2@test.com' }
  )
);

const mapById = (user: MyUser[]): Record<MyUser['id'], Omit<MyUser, 'id'>> => {
  return user.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    { id: 1, name: 'Mr. Foo' },
    { id: 2, name: 'Mrs. Baz' },
  ])
);
