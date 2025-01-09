/**
 * 10. Optional types
 */
type Customer = {
  birthday?: Date;
};
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? undefined : { birthday: new Date() };
}
let customer = getCustomer(1);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());
// Optional element access operator

// Optional call
let log: any = (message: string) => console.log(message);
log("a");
let log2: any = null;
log2?.("b");

/**
 * 9. Nullable types
 */
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}
greet(undefined);

/**
 * 8. Literal types
 */
type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = "cm" | "in";
let metric: Metric = "cm";

/**
 * 7. Advanced types
 */
/**
 * 7.1 Type Aliases
 */
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
/**
 * 7.2 Union Types
 */
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2;
  }
}
/**
 * 7.3 Intersection Types
 */
let crazyWeight: number & string;
type Draggable = {
  drag: () => void;
};
type Resizeable = {
  resize: () => void;
};
type UIWidget = Draggable & Resizeable;
let textBox: UIWidget = {
  drag: () => console.log("Dragging"),
  resize: () => console.log("Resizing"),
};
console.log(textBox);

/**
 * 6. Objects
 */
let employee: Employee = {
  id: 1,
  name: "Rayyan",
  retire: (date: Date) => {
    console.log(date);
  },
};
// employee.id = 0;
// employee.salary = 'Mosh'; >> Employee does not have salary

/**
 * 5. Functions
 */
// in tsconfig - do noUnusedParameters: true
// function calculateTax(income: number, taxYear?: number): number {
// if (taxYear < 2022) return income * 1.2;
// if ((taxYear || 2022) < 2022) return income * 1.2;
//   if (taxYear < 2022) return income * 1.2;
//   return income;
// }
function calculateTax(income: number, taxYear = 2022): number {
  // let x;
  if (taxYear < 2022) return income * 1.2;
  return income;
}
calculateTax(10_000, 2022);

/**
 * 4. Enums
 */
const small = 1;
const medium = 2;
const large = 3;

// PascalCase - use const for optimized code in JS
const enum Size {
  Small, // default values 0
  Medium, // default values 1
  Large, // default values 2
}
console.log("Enum Size Large:", Size.Large);

/**
 * 3. Tuples
 */
let user: [number, string] = [1, "Mosh"];
user.push(1);
console.log(user);

/**
 * 2. Arrays
 */
// hover above foll
let numbers = [1, 2, "3"];
let numbers2: number[] = [1, 2, 3];
let numbers2Point5 = [];
let numbers3: number[] = [];
numbers3[0] = 1;
numbers3[1] = 2;
// numbers3[2] = '3';

/**
 * 1. Must knows
 */
//  you must  define type of document or change tsconfig: noImplicitAny > false
function render(document: any) {
  console.log(document);
}

// hover above the following
let sales: number = 123_456_789;
let course = "TypeScript";
let is_published = false;
let level;

console.log("Hello world.");
let age: number = 20;
if (age < 50) age += 10;
console.log("Age is", age);
