// Functions (optional and default parameters)
function sum(a: number, b: number = 0): number {
  return a + b;
}

type MyFunc = (a: number, b: number) => number;
const sum2: MyFunc = (a, b) => a + b;

// Unknown number of arguments
function sumEverything(...numbers: number[]): number {
  return numbers.reduce((result, sum) => result + num, 0);
}

function sumEverything1(arg1: string, arg2: boolean, ...numbers: number[]): number {
  return numbers.reduce((result, sum) => result + num, 0);
}

// Overloads
function calcArea(width: number, height: number): number;
function calcArea(length: number): number;
function calcArea(...args: number[]): number {
  if (args.length === 2) {
    return args[0] * args[1];
  }
  return Math.pow(args[0], 2);
}
