"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function expo2(amount) {
    return Math.pow(amount, 2);
}
console.log(expo2(1000));
// console.log(expo2('1,000')) // Error!
function taxed(amount) {
    return amount * 1.1;
}
function fee(amount) {
    return amount * 1.4;
}
// function price(amount): number {
//     return '${fee(amount)}' // Error1
// }
var flag = false;
var decimal = 256;
var hex = 0xfff;
var binary = 0;
var octal = 83;
var color = "White";
color = 'black';
var myColor = 'my color is ${color}';
// let list: number[] = [1, 2, 3];
var list = [1, 2, 3];
var x;
x = ['hello', 10];
//x = [10, 'hello'] // Error
console.log(x[0].substr(1));
//console.log(x[1].substr(1)) // Error
//x[3] = "world";
var whatever = 0;
whatever = "something";
whatever = false;
//const certainlyNumbers: number[] = ['0'] // Error!
var maybeNumbers = ['0']; // OK
var probablyNumbers = ['0']; // OK
maybeNumbers[0].toFixed(1);
//probablyNumbers[0].toFixed(1) // Error!
function logger(message) {
    console.log(message);
}
var unusable = undefined;
var u = undefined;
var n = null;
function error(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
    }
}
var objectBrace;
var objectType;
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
function returnNever() {
    throw new Error();
}
var unexistenceType = returnNever();
//let problematicNumber: string & number = '0'// Error!
// Union Types
// let value: boolean | number | string
// value = false
// value = 1
// value = '2'
var numberOrStrings;
numberOrStrings = [0, '1', 3];
//numberOrStrings = [0, '1', false] // Error!
var nullableString;
nullableString = null;
nullableString = 'notNull';
var nullableStrings = [];
nullableStrings.push('1');
nullableStrings.push(null);
// nullableStrings.push(false) // Error!
var myName;
// myName = 'Jiro' // Error
// myName.toLowerCase()
var zero;
zero = 0;
// zero = 1 // Error!
zero.toFixed(1);
var bit;
bit = 8;
// bit = 12 // Error!
var trush;
trush = true;
// trush = false // Error!
var asString = '';
var value;
value = 'value';
// value = 0 // Error!
// let myObject = {foo: 'foo'}
// let anotherObject: typeof myObject = {foo: ''}
// anotherObject['foo'] = 'value'
// anotherObject['bar'] = 'value'
// anotherObject['']
var myObject = {
    foo: 'FOO',
    bar: 'BAR',
    baz: 'BAZ'
};
var myObjectKey;
myObjectKey = 'bar';
// myObjectKey = 'qux' // Error!
var indexedObject = {
    0: 0,
    1: 1
};
var indexedKey;
indexedKey = 1;
// indexedKey = 2
// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;
var someValue = "this is a string";
var strLength = someValue.length;
var Creature = /** @class */ (function () {
    function Creature(numberOfHands, numberOfFeet) {
        this.numberOfHands = numberOfHands;
        this.numberOfFeet = numberOfFeet;
    }
    return Creature;
}());
var creature = new Creature(0, 4);
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(bark) {
        var _this = _super.call(this, 0, 4) || this;
        _this.bark = bark;
        return _this;
    }
    Dog.prototype.barking = function () {
        return '${this.bark}! ${this.bark}!';
    };
    Dog.prototype.shakeTail = function () {
        console.log(this.barking());
    };
    return Dog;
}(Creature));
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
var dog = new Dog('boe-wow');
// const human = new Human('Hanako')
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human(name) {
        var _this = _super.call(this, 2, 2) || this;
        _this.name = name;
        return _this;
    }
    Human.prototype.greet = function () {
        return 'Hello! I`m ${this.name}.';
    };
    Human.prototype.shakeHands = function () {
        console.log(this.greet());
    };
    return Human;
}(Creature));
var Taro = /** @class */ (function (_super) {
    __extends(Taro, _super);
    function Taro() {
        return _super.call(this, 'Taro') || this;
    }
    Taro.prototype.greeting = function () {
        console.log(this.greet()); // 継承関係では protected メンバーを実行可能
    };
    return Taro;
}(Human));
var taro = new Taro();
taro.greeting(); // public メンバーは実行可能
// taro.greet() // protected メンバーは実行不可
taro.shakeHands(); // 親クラスの public メンバーは実行可能
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
var left = Direction.Left;
var Ports;
(function (Ports) {
    Ports["USER_SERVICE"] = "8080";
    Ports["REGISTER_SERVICE"] = "8081";
    Ports["MEDIA_SERVICE"] = "8888";
})(Ports || (Ports = {}));
