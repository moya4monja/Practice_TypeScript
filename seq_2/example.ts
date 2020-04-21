let flag: boolean = false;

let decimal: number = 256;
let hex: number = 0xfff;
let binary: number = 0b000;
let octal: number = 0o123;

let color: string = "white";
color = 'black';
let myColor: string = 'my color is ${color}'

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let x: [string, number];
x = ["hello", 10]
// x = [1, "a"]

let whatever: any = 0;
whatever = "something";
whatever = false;

// const certainlyNumbers: number[] = ['0']
const maybeNumbers: any[] = ['0']
const probablyNumbers: unknown[] = ['0']

// maybeNumbers[0].toFixed(1)
// probablyNumbers[0].toFixed(1)

function logger(message: string): void{
    console.log(message);
}

let unusuable: void = undefined;

let u: undefined = undefined;
let n: null = null;

function error(message: string): never {
    throw new Error(message);
}
function infiniteLoop(): never {
    while (true) {

    }
}

let objectBrace: {}
let objectType: object

objectBrace = true
objectBrace = 0
// objectType = false // Error!
// objectType = 1 // Error!

// type Dog = {
//     tail: Tail
//     bark: () => void
// }
// type Bird = {
//     wing: Wing
//     fly: () => void
// }
// type Kimera = Dog & Bird

let value: boolean | number | string
value = false
value = 1
value = '2'

let numberOrStrings: (number | string)[]
numberOrStrings = [0, '1']
// numberOrStrings = [0, '1', false] // Error!/

let nullableString: string | null
nullableString = null
nullableString = 'notNull'

let nullableStrings: (string | null)[] = []
nullableStrings.push('1')
nullableStrings.push(null)
// nullableStrings.push(false) // Error!

let myName: 'Taro'
myName = 'Taro'
// myName = 'Jiro'
myName.toLowerCase()

let users: 'Taro' | 'Jiro' | 'Hanako'
users = 'Hanako'
