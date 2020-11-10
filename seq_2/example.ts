function expo2(amount: number) {
    return amount ** 2
}

console.log(expo2(1000))
// console.log(expo2('1,000')) // Error!

function taxed(amount): number {
    return amount * 1.1
}

function fee(amount): number {
    return amount * 1.4
}

// function price(amount): number {
//     return '${fee(amount)}' // Error1
// }

let flag: boolean = false;

let decimal: number = 256;
let hex: number = 0xfff;
let binary: number = 0b0000;
let octal: number = 0o123;

let color: string = "White";
color = 'black';
let myColor: string = 'my color is ${color}'
// let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

let x: [string , number];
x = ['hello', 10]
//x = [10, 'hello'] // Error

console.log(x[0].substr(1))
//console.log(x[1].substr(1)) // Error

//x[3] = "world";

let whatever: any = 0;
whatever = "something";
whatever = false;

//const certainlyNumbers: number[] = ['0'] // Error!
const maybeNumbers: any[] = ['0'] // OK
const probablyNumbers: unknown = ['0'] // OK

maybeNumbers[0].toFixed(1)
//probablyNumbers[0].toFixed(1) // Error!


function logger(message: string): void {
    console.log(message);
}

let unusable: void = undefined;

let u: undefined = undefined;
let n: null = null;

function error(message: string): never {
    throw new Error(message);
}
function infiniteLoop(): never {
    while(true) {

    }
}

let objectBrace: {}
let objectType: object

// object型
// objectBrace = true
// objectBrace = 0
// objectType = false
// objectType = 1

// type Dog = {
//     tail: Tail
//     bark: () => void
// }
// type Bird = {
//     wing: Wing
//     fly: () => void
// }
// type Kimera = Dog & Bird

function returnNever(): never {
    throw new Error()
}
let unexistenceType: string & number & boolean = returnNever()
//let problematicNumber: string & number = '0'// Error!

// Union Types

// let value: boolean | number | string
// value = false
// value = 1
// value = '2'

let numberOrStrings: (number | string)[]
numberOrStrings = [0, '1', 3]
//numberOrStrings = [0, '1', false] // Error!

let nullableString: string | null
nullableString = null
nullableString = 'notNull'

let nullableStrings: (string | null)[] = []
nullableStrings.push('1')
nullableStrings.push(null)
// nullableStrings.push(false) // Error!

let myName: 'Taro'
// myName = 'Jiro' // Error
// myName.toLowerCase()

let zero: 0
zero = 0
// zero = 1 // Error!
zero.toFixed(1)

let bit: 8 | 16 | 32 | 64
bit = 8
// bit = 12 // Error!

let trush: true
trush = true
// trush = false // Error!

let asString: string = ''
let value: typeof asString
value = 'value'
// value = 0 // Error!

// let myObject = {foo: 'foo'}
// let anotherObject: typeof myObject = {foo: ''}
// anotherObject['foo'] = 'value'
// anotherObject['bar'] = 'value'
// anotherObject['']

const myObject = {
    foo: 'FOO',
    bar: 'BAR',
    baz: 'BAZ'
}
let myObjectKey: keyof typeof myObject
myObjectKey = 'bar'
// myObjectKey = 'qux' // Error!

const indexedObject = {
    0: 0,
    1: 1
}
let indexedKey: keyof typeof indexedObject
indexedKey = 1
// indexedKey = 2

// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

class Creature{
    numberOfHands: number
    numberOfFeet: number
    constructor(numberOfHands: number, numberOfFeet: number){
        this.numberOfHands = numberOfHands
        this.numberOfFeet = numberOfFeet
    }
}
const creature = new Creature(0, 4)

class Dog extends Creature{
    bark: string
    constructor(bark: string){
        super(0, 4)
        this.bark = bark
    }
    barking(){
        return '${this.bark}! ${this.bark}!'
    }
    shakeTail(){
        console.log(this.barking())
    }
}
// class Human extends Creature{
//     name: string
//     constructor(name: string){
//         super(2, 2)
//         this.name = name
//     }
//     greet(){
//         return 'Hello! I`m ${this.name}.'
//     }
//     shakeHands(){
//         console.log(this.greet())
//     }
// }
const dog = new Dog('boe-wow')
// const human = new Human('Hanako')

class Human extends Creature{
    protected name: string
    constructor(name: string){
        super(2, 2)
        this.name = name
    }
    protected greet(){
        return 'Hello! I`m ${this.name}.'
    }
    public shakeHands(){
        console.log(this.greet())
    }
}
class Taro extends Human{
    constructor(){
        super('Taro')
    }
    public greeting(){
        console.log(this.greet()) // 継承関係では protected メンバーを実行可能
    }
}

const taro = new Taro()
taro.greeting() // public メンバーは実行可能
// taro.greet() // protected メンバーは実行不可
taro.shakeHands() // 親クラスの public メンバーは実行可能

enum Direction{
    Up,     // 0
    Down,   // 1
    Left,   // 2
    Right   // 3
}

const left = Direction.Left

enum Ports{
    USER_SERVICE = "8080",
    REGISTER_SERVICE = "8081",
    MEDIA_SERVICE = "8888"
}