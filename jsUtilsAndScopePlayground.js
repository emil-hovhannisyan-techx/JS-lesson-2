//Part A: JavaScript Utilities Library (Functions)

// ----- Math Utilities -----
//Function for percentage calculation. 2 parameters.
function calculatePercentage(value, total) {
  if (total === 0) return 0;
  let percentage = (value / total) * 100;
  return Math.round(percentage * 100) / 100;
}

//Test "cases"
console.log("Percentage of 25 out of 100");
console.log(calculatePercentage(25, 100));
console.log("Percentage of 13 out of 242");
console.log(calculatePercentage(13, 242));
console.log("Percentage of 228 out of 0");
console.log(calculatePercentage(228, 0));

//Calculating sum of array elements
const sumArray = function (numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
};

//Test casing
arrays = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [42, 42, 42, 42],
];

for (let i = 0; i < arrays.length; i++) {
  let sum = sumArray(arrays[i]);
  console.log(sum);
}

// ----- String Utilities -----
//String reversing function
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed;
}

// Testing

console.log("Reverse of 'hello' : ", reverseString("hello"));
console.log("Reverse of 'darkness' : ", reverseString("darkness"));
console.log("Reverse of 'my' : ", reverseString("my"));
console.log("Reverse of 'old' : ", reverseString("old"));
console.log("Reverse of 'friend' : ", reverseString("friend"));

// Function to capitalize first letter of the word
const capitalizeFirst = function (str) {
  if (str === "") return "";
  return str[0].toUpperCase() + str.substring(1);
};

//Test casing
console.log("Capitalize 'javascript' : ", capitalizeFirst("javascript"));
console.log("Capitalize 'vladimir' : ", capitalizeFirst("vladimir"));
console.log("Capitalize 'vladimirovich' : ", capitalizeFirst("vladimirovich"));
console.log("Capitalize 'putin' : ", capitalizeFirst("putin"));

// Array functions

//Function to find out the largest element within array
const findLargest = (numbers) => {
  if (numbers.length === 0) return 0;
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
};

//Test casing
arrays = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [42, 42, 42, 42],
];

for (let i = 0; i < arrays.length; i++) {
  let largest = findLargest(arrays[i]);
  console.log("Largest for Array: ", arrays[i]);
  console.log(largest);
}

//Function to find out whether array contains targeted number
const containsNumber = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
};

//Test casing
arrays = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [42, 42, 42, 42],
];

for (let i = 0; i < arrays.length; i++) {
  console.log(
    "The statement 'Array : ",
    arrays[i],
    " ' contains number",
    42,
    "is: ",
    containsNumber(arrays[i], 42)
  );
}

//Part B: Scope Simulation & Analysis

//global variable - accessible everywhere. really, everywhere!

let globalVar = "I self identify as a global variable!";

function outerFunction() {
  var functionVar = "I'm function scopped, but not block scopped!";

  if (true) {
    let blockLet = "I'm declared by let, I am block-scoped!"; //let variable - accessible within block (if else par exemple)
    const blockConst = "I'm declared by const. I am block-scoped!"; //const variable - accessible within block

    console.log("Inside an if block ({})");
    console.log(globalVar); //access anywhere
    console.log(functionVar); //access within function and it's nested functions
    console.log(blockLet); //accessible within block
    console.log(blockConst); //accessible within block
  }

  //Attempt to access
  try {
    console.log("Outside of if block: ");
    console.log(blockLet); //fail - block-defined variable can't be used outsife of block
  } catch (error) {
    console.log("blockLet access failed: ", error.message);
  }

  try {
    console.log("Outside of if block: ");
    console.log(blockConst); //fail - block-defined variable can't be used outsife of block
  } catch (error) {
    console.log("blockConst access failed: ", error.message);
  }

  function innerFunction() {
    console.log("\nInside an inner function");
    console.log(globalVar); //accessible everywhere
    console.log(functionVar); //accessible also within inner, nested functions
    try {
      console.log(blockLet);
    } catch (error) {
      console.log("blockLet access failed: ", error.message); //not accessible outside of it's block
    }
    try {
      console.log(blockLet);
    } catch (error) {
      console.log("blockLet access failed: ", error.message); //not accessible outside of it's block
    }
  }

  innerFunction();
  console.log("\nInside outer function, outside inner function");
  console.log(functionVar); //as is clear from the console.log - function variable is still accessible!
}

console.log("In global scope");
console.log(globalVar); //example of global variable in global environment
outerFunction();

try {
  console.log(functionVar); //function scopped var can't be accessed outside of function where it's declared
} catch (error) {
  console.log(
    "Calling var declared within function outside of it results in: ",
    error.message
  );
}

//var before declaration
console.log("\n=== Hoisting & TDZ Debugger ===");
try {
  console.log("Accessing var variable before declaration: ", varVariable); //again, var can not be accessed before it's declared. It's not C and this declaration isn't a prophet - it can't see the future (lines of code)
} catch (error) {
  console.log("Error while accessing: ", error.message);
}

var varVariable = 42;
console.log("After declaration: ", varVariable, "\n"); //now var can be accessed with no issues

//let before declaration
try {
  console.log("Accesing let variable before declaration: ", letVariable); //same thing - let isn't a prophet - it should be declared first, then used.
} catch (error) {
  console.log("Error while accessing: ", error.message);
}

let letVariable = 42;
console.log("After declaration: ", letVariable, "\n"); //as may be seem from the terminal/console, here it goes after the declaration (not of independence!)

//const before declaration
try {
  console.log("Accessing const variable before declaration: ", constVariable); //how unexpected! Same thing with const! Didn't see that one coming!
} catch (error) {
  console.log("Error while accesing: ", error.message);
}

const constVariable = 42;
console.log("After declaration: ", constVariable, "\n"); //again, no issues after declaration

//function before declaration
try {
  console.log(
    "Accessing functions before declaration: ", //a different case - trying to access function (declared via function keyword, no arrows or variables)
    functionDeclaration() //this time it works perfectly fine! try-catch was used just to demonstrate that this is potentially a weak moment
  );
} catch (error) {
  console.log("Error while accessing: ", error.message);
}

function functionDeclaration() {
  return "I am a declaration of hoisted function! ";
}

console.log("Accessing after declaration: ", functionDeclaration(), "\n"); //here, obviously, it works too.

//var function (declaration of function with keyword) before declaration

try {
  console.log("Accessing var function before declaration: ", varFunction()); //another scenario - function declared using var. this time there is an error
} catch (error) {
  console.log("Error while accessing: ", error.message);
}

var varFunction = function () {
  return "I am a function expression with var";
};

console.log("Accessing after declaration: ", varFunction(), "\n"); //after declaration everything works fine

//let function (declaration of function with keyword) before declaration
try {
  console.log("Accessing let function before declaration: ", letFunction()); //and same with using let - error while trying to acces before declaration.
} catch (error) {
  console.log("Error while accessing: ", error.message);
}

let letFunction = function () {
  return "I am a function expression with let!";
};

console.log("Accessing after declaration: ", letFunction(), "\n");
