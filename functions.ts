// typing parameters
export function addNumbers(a: number, b: number): number {
  return a + b;
}

export const addStrings = (str1: string, str2: string = 'tors'): string =>
  `${str1}${str2}`;

// union types
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

// void returns
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

// Promise function
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

// rest parameters
export function introduce(salutation: string, ...names: string[]) {
  return `${salutation} ${names.join(' ')}`;
}

// typescript only enforces types at compile time not at run time
export const getUser = (user: { first: string; last: string }): string =>
  `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
