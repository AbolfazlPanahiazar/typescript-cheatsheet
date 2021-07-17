// Interfaces
interface Profile {
  name: string;
  readonly family: string;
  age?: number;
}

let profile: Profile = {
  name: "Abolfazl",
  family: "Panahiazar",
};

// Index Signture
interface A {
  someProp: string;
  [key: string]: string | number;
}

const a: A = { someProp: "hello" };
a.x = 1;
a.y = 2;

// Call Signture
interface Sum {
  (a: number, b: number): number;
  prop1: string;
}

const sum: Sum = (a, b) => a + b;
sum.prop1 = "hello";

// Extending Interfaces
interface Parent1 {
  x: string;
}

interface Parent2 {
  y: string;
}

interface Parent3 {
  z: number;
}

interface Child extends Parent1, Parent2, Parent3 {}

let child: Child = { x: "some prop", y: "hello", z: 10 };
