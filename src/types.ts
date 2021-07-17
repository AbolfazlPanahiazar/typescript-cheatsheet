// Boolean
let b: boolean = false;

// Number
let num: number = 1 + 0b1 + 0o1 + 0x1;

// String
const hello: string = "Hello";
const world: string = "World";
const helloWorld: string = `
    ${hello}
    ${world}
`;

// Null and Boolean
let n: null = null;
let u: undefined = undefined;

// Object
type primitiveTypes = boolean | number | string | symbol | null | undefined;

// Void
function log(message: string): void {
    console.log(message)
}

// Array
let array1: string[] = ["a", "b"];
let array2: Array<string> = array1;

// Tuple
let tuple: [string, number] = ["hello", 3];

// Enum
enum Color1 {
    Red, //0
    Green, //1
    Blue //2
}

enum Color2 {
    Red = 2, //2
    Green, //3
    Blue //4
}

enum Color3 {
    Red = "#FF0000",
    Green = "#00FF00",
    Blue = "#0000FF"
}

let myFavorite: Color1 = Color1.Blue;

// Any
let ANY: any;
ANY = "hello";
ANY = 12;
ANY = true;

// Type Assertions
const email = document.getElementById('email');
if (email) {
    email.addEventListener('change', (e) => {
        const input = e.currentTarget as HTMLInputElement;
        // const input = <HTMLInputElement>e.currentTarget;
    })
}
