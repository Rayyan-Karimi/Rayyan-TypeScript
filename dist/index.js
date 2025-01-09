"use strict";
var _a;
function getCustomer(id) {
    return id === 0 ? undefined : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = (message) => console.log(message);
log("a");
let log2 = null;
log2 === null || log2 === void 0 ? void 0 : log2("b");
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greet(undefined);
let quantity = 50;
let metric = "cm";
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2;
    }
}
let crazyWeight;
let textBox = {
    drag: () => console.log("Dragging"),
    resize: () => console.log("Resizing"),
};
console.log(textBox);
let employee = {
    id: 1,
    name: "Rayyan",
    retire: (date) => {
        console.log(date);
    },
};
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income;
}
calculateTax(10000, 2022);
const small = 1;
const medium = 2;
const large = 3;
console.log("Enum Size Large:", 2);
let user = [1, "Mosh"];
user.push(1);
console.log(user);
let numbers = [1, 2, "3"];
let numbers2 = [1, 2, 3];
let numbers2Point5 = [];
let numbers3 = [];
numbers3[0] = 1;
numbers3[1] = 2;
function render(document) {
    console.log(document);
}
let sales = 123456789;
let course = "TypeScript";
let is_published = false;
let level;
console.log("Hello world.");
let age = 20;
if (age < 50)
    age += 10;
console.log("Age is", age);
//# sourceMappingURL=index.js.map