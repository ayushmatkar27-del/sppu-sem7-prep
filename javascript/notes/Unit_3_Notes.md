# 📚 Unit 3: Functions & Objects (SPPU End-Sem Model Answers)
**Subject:** JavaScript (Elective - III) | **Course:** B.E. E&TC / Electronics (2019 Pattern)  
**Standard Exam Weightage:** 6 Marks per question | **Target:** Formatted specifically for scoring full 6/6 marks in SPPU End Semester Exam.

---

## 📑 Index of Questions Covered

1. [Q1. What is an Anonymous Function in JavaScript? Explain its use with an example. (Repeated 8 times - 100% frequency)](#q1-what-is-an-anonymous-function-in-javascript-explain-its-use-with-an-example)
2. [Q2. Write a JavaScript program that will append an object to an array and will check if an object is an array datatype. (Repeated 5 times)](#q2-write-a-javascript-program-that-will-append-an-object-to-an-array-and-will-check-if-an-object-is-an-array-datatype)
3. [Q3. What is a Function? Explain with example how to pass and return parameters and arguments from called function to calling function. (Repeated 4 times)](#q3-what-is-a-function-explain-with-example-how-to-pass-and-return-parameters-and-arguments-from-called-function-to-calling-function)
4. [Q4. What are common properties and methods of the Object in JavaScript? (Repeated 4 times)](#q4-what-are-common-properties-and-methods-of-the-object-in-javascript)
5. [Q5. Explain Data Types in JavaScript. Differentiate between Primitive and Non-Primitive data types. (Repeated 4 times)](#q5-explain-data-types-in-javascript-differentiate-between-primitive-and-non-primitive-data-types)
6. [Q6. Explain the concept of "Mask Out" (Variable Shadowing/Scope Masking) with respect to functions in JavaScript. (Repeated 3 times)](#q6-explain-the-concept-of-mask-out-with-respect-to-functions-in-javascript)
7. [Q7. Explain how a function is used as an object in JavaScript. (Repeated 3 times)](#q7-explain-how-a-function-is-used-as-an-object-in-javascript)
8. [Q8. Explain how Arrays can be used as Stacks and Queues in JavaScript with suitable examples. (Repeated 3 times)](#q8-explain-how-arrays-can-be-used-as-stacks-and-queues-in-javascript-with-suitable-examples)
9. [Q9. Explain different types of Objects in JavaScript. (Repeated 3 times)](#q9-explain-different-types-of-objects-in-javascript)
10. [Q10. List various methods of the Math Object. Explain any one with an example. (Repeated 3 times)](#q10-list-various-methods-of-the-math-object-explain-any-one-with-an-example)
11. [Q11. Write a JavaScript program to pass a function by reference, perform addition of two objects inside the function, and display the result in the calling function. (Repeated 3 times)](#q11-write-a-javascript-program-to-pass-a-function-by-reference-perform-addition-of-two-objects-inside-the-function-and-display-the-result-in-the-calling-function)
12. [Q12. What is a Recursive Function? Explain with an example program. (Repeated 2 times)](#q12-what-is-a-recursive-function-explain-with-an-example-program)
13. [Q13. Write a JavaScript program to explain how to get input from the user and display output to window. List different methods used to display output. (1 time)](#q13-write-a-javascript-program-to-explain-how-to-get-input-from-the-user-and-display-output-to-window-list-different-methods-used-to-display-output)
14. [Q14. Describe different ways of creating an object in JavaScript. Explain how to access object properties with an example. (1 time)](#q14-describe-different-ways-of-creating-an-object-in-javascript-explain-how-to-access-object-properties-with-an-example)
15. [Q15. What are the different ways to enumerate properties of an object? Explain with an example. (1 time)](#q15-what-are-the-different-ways-to-enumerate-properties-of-an-object-explain-with-an-example)

---

## Q1. What is an Anonymous Function in JavaScript? Explain its use with an example.
**[Marks: 6 | Frequency: 8/8 Times (Nov 2022, May 2023, Nov 2023, May 2024, Nov 2024, May 2025, Nov 2025, May 2026)]**

### 1. Definition (1.5 Marks)
* An **Anonymous Function** is a function that does **not have any name (identifier)** associated with it.
* Unlike normal function declarations, anonymous functions are typically created at runtime using a **function expression**.
* They are often assigned to a variable, passed as an argument (callback), or immediately executed.

### 2. Syntax (1 Mark)
```javascript
// Function Expression with Anonymous Function
var variableName = function(param1, param2) {
    // code block to execute
    return param1 + param2;
};

// Invocation
variableName(arg1, arg2);
```

### 3. Key Uses of Anonymous Functions (1.5 Marks)
1. **Assigning to Variables (Function Expressions):** Allows storing functional logic dynamically in variables.
2. **Callbacks in Higher-Order Functions / Event Handlers:** Used when a function is needed only once (e.g., `setTimeout`, `setInterval`, array methods like `forEach`, or button click events).
3. **Immediately Invoked Function Expressions (IIFE):** Used to create private scope and prevent global variable pollution:
   ```javascript
   (function() {
       var secret = "private data";
   })();
   ```
4. **Closures:** Encapsulating private state and behavior inside factory functions.

### 4. Working Example Program (2 Marks)
```html
<!DOCTYPE html>
<html>
<head>
    <title>Anonymous Function Example</title>
</head>
<body>
    <h2>Anonymous Function Demo</h2>
    <button id="myBtn">Click Me</button>
    <p id="result"></p>

    <script>
        // Use Case 1: Function assigned to a variable
        var calculateArea = function(length, breadth) {
            return length * breadth;
        };

        var area = calculateArea(10, 5);
        console.log("Area of rectangle: " + area); // Output: 50

        // Use Case 2: Anonymous function as a Callback in Event Listener
        document.getElementById("myBtn").addEventListener("click", function() {
            document.getElementById("result").innerHTML = 
                "Calculated Area: " + area + " sq units (calculated via anonymous function)";
        });

        // Use Case 3: Callback in setTimeout
        setTimeout(function() {
            console.log("This message is printed after 2 seconds using an anonymous callback.");
        }, 2000);
    </script>
</body>
</html>
```

---

## Q2. Write a JavaScript program that will append an object to an array and will check if an object is an array datatype.
**[Marks: 6 | Frequency: 5 Times (Nov 2022, May 2023, Nov 2023, Nov 2025, May 2026)]**

### 1. Concepts Explained (2 Marks)
* **Appending an Object to an Array:** In JavaScript, the `push()` method adds one or more elements/objects to the end of an array.
* **Checking if an Object is an Array:**
  1. `Array.isArray(variable)`: Standard ECMAScript 5 method. Returns `true` if variable is an array, `false` otherwise.
  2. `variable instanceof Array`: Tests whether the prototype property of `Array` appears in the object's prototype chain.
  * *Note:* The `typeof` operator returns `"object"` for both regular objects and arrays, hence `Array.isArray()` is necessary.

### 2. Complete Program (4 Marks)
```html
<!DOCTYPE html>
<html>
<head>
    <title>Array and Object Verification</title>
</head>
<body>
    <h2>Array Operations & Type Checking</h2>
    <div id="output"></div>

    <script>
        // Step 1: Initialize an array of student objects
        var studentsList = [
            { id: 101, name: "Rahul", branch: "E&TC" },
            { id: 102, name: "Pooja", branch: "Electronics" }
        ];

        // Step 2: Create a new object to append
        var newStudent = {
            id: 103,
            name: "Ayush",
            branch: "E&TC"
        };

        // Step 3: Append the object to the array using push()
        studentsList.push(newStudent);

        // Step 4: Verification functions
        function checkArrayType(testObj, objName) {
            var isArrBuiltIn = Array.isArray(testObj);
            var isArrInstance = (testObj instanceof Array);
            var typeOfResult = typeof testObj;

            return objName + " => typeof: '" + typeOfResult + 
                   "', Array.isArray(): " + isArrBuiltIn + 
                   ", instanceof Array: " + isArrInstance;
        }

        // Test with the studentsList (Array) and a normal object
        var result1 = checkArrayType(studentsList, "studentsList");
        var result2 = checkArrayType(newStudent, "newStudent");

        // Display results
        var outDiv = document.getElementById("output");
        outDiv.innerHTML = "<h3>Updated Array Elements:</h3>" + 
                           JSON.stringify(studentsList) + 
                           "<h3>Datatype Verification Results:</h3>" +
                           "<p>" + result1 + "</p>" +
                           "<p>" + result2 + "</p>";

        // Console log verification
        console.log("Appended Array:", studentsList);
        console.log(result1);
        console.log(result2);
    </script>
</body>
</html>
```

### 3. Output Expected
* **Updated Array:** `[{"id":101,"name":"Rahul"...}, {"id":102,"name":"Pooja"...}, {"id":103,"name":"Ayush"}]`
* `studentsList => typeof: 'object', Array.isArray(): true, instanceof Array: true`
* `newStudent => typeof: 'object', Array.isArray(): false, instanceof Array: false`

---

## Q3. What is a Function? Explain with example how to pass and return parameters and arguments from called function to calling function.
**[Marks: 6 | Frequency: 4 Times (Nov 2022, May 2023, Nov 2023, May 2026)]**

### 1. Definition & Core Concepts (2 Marks)
* **Function:** A reusable block of organized statements designed to perform a particular task. It executes when it is invoked (called).
* **Parameters:** Variables listed in the function's definition inside parentheses (formal parameters).
* **Arguments:** Actual values passed to the function when it is called (actual arguments).
* **Calling Function:** The code statement that initiates the function call.
* **Called Function:** The function being executed.
* **`return` Statement:** Stops function execution and sends a value back to the caller.

### 2. Flow of Control (1 Mark)
```
[ Calling Function ]  ------ Pass Arguments (e.g. 15, 25) -----> [ Called Function ]
         ^                                                             |
         |                                                       Processes logic
         +------------------- Return Result (e.g. 40) <----------------+
```

### 3. Complete Working Program with Explanation (3 Marks)
```html
<!DOCTYPE html>
<html>
<head>
    <title>Parameter Passing and Return in Functions</title>
</head>
<body>
    <h2>Function Parameters & Return Value Demo</h2>
    <p id="disp"></p>

    <script>
        // Called Function Definition
        // Parameters: principal, rate, time
        function calculateSimpleInterest(principal, rate, time) {
            console.log("Inside Called Function: Processing values...");
            // Validation
            if (principal <= 0 || rate <= 0 || time <= 0) {
                return "Invalid Input Data"; // return error string
            }
            // Logic
            var interest = (principal * rate * time) / 100;
            var totalAmount = principal + interest;

            // Returning an Object containing multiple values to calling function
            return {
                interestAmount: interest,
                totalPayable: totalAmount
            };
        }

        // Calling Function / Code
        var p = 50000; // Rs. 50,000
        var r = 8.5;   // 8.5%
        var t = 3;     // 3 Years

        // Invoking called function and passing arguments p, r, t
        var result = calculateSimpleInterest(p, r, t);

        // Receiving and utilizing returned values
        document.getElementById("disp").innerHTML = 
            "<strong>Principal:</strong> Rs. " + p + "<br>" +
            "<strong>Rate:</strong> " + r + "% | <strong>Time:</strong> " + t + " Years<br>" +
            "<strong>Simple Interest Calculated:</strong> Rs. " + result.interestAmount + "<br>" +
            "<strong>Total Payable:</strong> Rs. " + result.totalPayable;
    </script>
</body>
</html>
```

---

## Q4. What are common properties and methods of the Object in JavaScript?
**[Marks: 6 | Frequency: 4 Times (Nov 2022, May 2023, Nov 2023, May 2026)]**

### 1. Introduction (1 Mark)
In JavaScript, nearly all objects are instances of `Object` which inherits properties and methods from `Object.prototype`.

### 2. Common Properties of Object (1.5 Marks)
1. **`constructor`:** Points to the constructor function that created the instance object.
   ```javascript
   var obj = {};
   console.log(obj.constructor === Object); // true
   ```
2. **`__proto__`:** Points to the prototype object from which it inherits properties.
3. **`length` (in built-in wrapper objects):** Available in String, Array, and Function objects.

### 3. Common Instance Methods (`Object.prototype`) (1.5 Marks)
| Method | Description | Example |
| :--- | :--- | :--- |
| **`hasOwnProperty(prop)`** | Returns `true` if the specified property is a direct property of the object (not inherited). | `car.hasOwnProperty('brand');` |
| **`toString()`** | Returns a string representation of the object. | `car.toString(); // [object Object]` |
| **`valueOf()`** | Returns the primitive value of the specified object. | `numObj.valueOf();` |
| **`isPrototypeOf(obj)`** | Checks if an object exists in another object's prototype chain. | `Object.prototype.isPrototypeOf(car);` |

### 4. Common Static Methods of `Object` (ECMAScript 5+) (2 Marks)
| Static Method | Purpose / Description | Code Snippet |
| :--- | :--- | :--- |
| **`Object.keys(obj)`** | Returns an array of an object's own enumerable property names. | `Object.keys({a: 1, b: 2}); // ['a', 'b']` |
| **`Object.values(obj)`** | Returns an array of an object's own enumerable property values. | `Object.values({a: 1, b: 2}); // [1, 2]` |
| **`Object.entries(obj)`** | Returns an array of key-value pairs `[key, value]`. | `Object.entries({a: 1}); // [['a', 1]]` |
| **`Object.assign(target, src)`**| Copies properties from source object to target object (shallow copy). | `Object.assign({}, source);` |
| **`Object.freeze(obj)`** | Prevents existing properties from being removed or modified. | `Object.freeze(config);` |

---

## Q5. Explain Data Types in JavaScript. Differentiate between Primitive and Non-Primitive data types.
**[Marks: 6 | Frequency: 4 Times (Nov 2022, May 2023, Nov 2023, May 2026)]**

### 1. Classification of JavaScript Data Types (1.5 Marks)
JavaScript is a **dynamically typed language**, meaning variable types are determined at runtime.
```
                  JavaScript Data Types
                        |
        +---------------+---------------+
        |                               |
Primitive Data Types            Non-Primitive (Reference) Data Types
  - Number                        - Object
  - String                        - Array
  - Boolean                       - Function
  - Undefined                     - Date
  - Null                          - RegExp
  - BigInt (ES6)
  - Symbol (ES6)
```

### 2. Description of Data Types (1.5 Marks)
* **Primitive Types:**
  - `Number`: Represents integers and floats (e.g., `42`, `3.14`).
  - `String`: Sequence of characters enclosed in quotes (e.g., `"Hello"`).
  - `Boolean`: Logical entity having values `true` or `false`.
  - `Undefined`: Variable declared but not assigned any value.
  - `Null`: Represents intentional absence of any object value.
* **Non-Primitive Types:**
  - Complex structures stored as references in memory (`Object`, `Array`, `Function`).

### 3. Comparison Table: Primitive vs. Non-Primitive (3 Marks)

| Parameter | Primitive Data Types | Non-Primitive (Reference) Data Types |
| :--- | :--- | :--- |
| **Memory Allocation** | Stored directly in the **Stack** memory. | Object data is in **Heap**; reference address is in Stack. |
| **Mutability** | **Immutable:** Values cannot be altered directly in place. | **Mutable:** Properties/elements can be changed in place. |
| **Storage / Size** | Fixed size in memory. | Dynamic and variable size in memory. |
| **Value Comparison** | Compared by **Value** (`5 === 5` is `true`). | Compared by **Reference/Address** in memory (`{} === {}` is `false`). |
| **Copy Behavior** | Copying creates an independent duplicate value. | Copying copies the reference/pointer to the same memory. |
| **Examples** | `Number, String, Boolean, Null, Undefined` | `Object, Array, Function, Date` |

```javascript
// Demonstration
var a = 10;
var b = a;  // Copy by value
b = 20;
console.log(a); // Output: 10 (unchanged)

var obj1 = { name: "Antigravity" };
var obj2 = obj1; // Copy by reference
obj2.name = "SPPU";
console.log(obj1.name); // Output: "SPPU" (mutated!)
```

---

## Q6. Explain the concept of "Mask Out" with respect to functions in JavaScript.
**[Marks: 6 | Frequency: 3 Times (May 2024, Nov 2024, May 2025)]**

### 1. Concept Definition (2 Marks)
* **Mask Out** (also formally called **Variable Shadowing** or **Scope Masking**) occurs when a local variable declared inside a function has the **exact same name** as a variable declared in an outer or global scope.
* Within the function, the local variable takes precedence and **"masks out" (hides / shadows)** the outer variable with the same name.
* The outer variable cannot be directly accessed by its bare name inside that function scope.

### 2. Scope Hierarchy Diagram (1 Mark)
```
+-------------------------------------------------------+
| GLOBAL SCOPE: var counter = 100                       |
|                                                       |
|   +-----------------------------------------------+   |
|   | FUNCTION SCOPE: var counter = 20 (Masks Out)  |   |
|   |   console.log(counter); // Prints 20          |   |
|   +-----------------------------------------------+   |
|                                                       |
|   console.log(counter); // Prints 100 (Unchanged)     |
+-------------------------------------------------------+
```

### 3. Detailed Example Code (3 Marks)
```javascript
// Global variable
var message = "Global Scope Message";
var status = "Active";

function demonstrateMasking() {
    // Local variable with the same name - MASKS OUT the global 'message'
    var message = "Local Function Message";

    console.log("Inside Function:");
    console.log("message = " + message); // Output: "Local Function Message"
    
    // Global variable can still be accessed in browser via window object:
    console.log("Global message via window = " + window.message); // "Global Scope Message"
    console.log("status (unshadowed) = " + status); // "Active" (accessible via scope chain)
}

demonstrateMasking();

console.log("Outside Function:");
console.log("message = " + message); // Output: "Global Scope Message" (original preserved)
```

### 4. Key Rules for Exam
1. Masking does **not overwrite** the global variable; it only hides it within the local execution context.
2. Once the function execution finishes, the local variable is popped off the execution stack, and the outer variable becomes visible again.

---

## Q7. Explain how a function is used as an object in JavaScript.
**[Marks: 6 | Frequency: 3 Times (May 2024, Nov 2024, May 2025)]**

### 1. Theoretical Concept: First-Class Objects (2 Marks)
In JavaScript, **functions are First-Class Objects (or First-Class Citizens)**. This means:
* Functions are actually instances of the `Function` built-in object (`func instanceof Object === true`).
* They can have **properties and methods** attached to them just like standard objects.
* They can be passed as arguments, returned from other functions, and assigned to variables.

### 2. Proof and Capabilities (2 Marks)
1. **Adding Properties & Methods to Functions:**
   ```javascript
   function greet() {
       return "Hello!";
   }
   // Attaching properties directly to the function
   greet.language = "English";
   greet.version = "1.0";
   console.log(greet.language); // "English"
   ```
2. **Built-in Function Properties & Methods:**
   - Properties: `name` (function name), `length` (number of formal parameters).
   - Methods: `call()`, `apply()`, `bind()`, `toString()`.

### 3. Function as Constructor Object (2 Marks)
Functions can act as blueprints (constructors) to instantiate multiple object instances using `new`:
```javascript
// Function acting as an Object Constructor
function Student(id, name, marks) {
    // Instance properties
    this.id = id;
    this.name = name;
    this.marks = marks;

    // Instance method
    this.getDetails = function() {
        return "ID: " + this.id + ", Name: " + this.name;
    };
}

// Adding method to prototype
Student.prototype.isPass = function() {
    return this.marks >= 40;
};

// Creating objects from function
var s1 = new Student(1, "Rohan", 85);
console.log(s1.getDetails()); // "ID: 1, Name: Rohan"
console.log("Passed: " + s1.isPass()); // true
```

---

## Q8. Explain how Arrays can be used as Stacks and Queues in JavaScript with suitable examples.
**[Marks: 6 | Frequency: 3 Times (May 2024, Nov 2024, May 2025)]**

### 1. Introduction (1 Mark)
In JavaScript, the `Array` object comes with built-in mutator methods that allow it to be seamlessly used as **Stack (LIFO)** and **Queue (FIFO)** data structures without requiring manual pointer handling.

### 2. Arrays as Stack: LIFO (Last-In, First-Out) (2.5 Marks)
* **Principle:** The element added last is removed first.
* **Methods Used:**
  - `push(element)`: Inserts element at top of stack.
  - `pop()`: Removes and returns the top element of stack.

```javascript
// Stack Implementation
var stack = [];

// Push operations
stack.push("Page A");
stack.push("Page B");
stack.push("Page C");
console.log("Stack after pushes: ", stack); // ['Page A', 'Page B', 'Page C']

// Pop operations (LIFO)
var topElement = stack.pop();
console.log("Popped: " + topElement);       // Output: "Page C"
console.log("Stack after pop: ", stack);    // ['Page A', 'Page B']
```

### 3. Arrays as Queue: FIFO (First-In, First-Out) (2.5 Marks)
* **Principle:** The element added first is served/removed first.
* **Methods Used:**
  - `push(element)`: Enqueue — adds element to the rear of the queue.
  - `shift()`: Dequeue — removes and returns the front element.
  *(Alternatively: `unshift()` for enqueue at front, `pop()` to dequeue from rear).*

```javascript
// Queue Implementation
var queue = [];

// Enqueue operations (at the rear)
queue.push("Print Job 1");
queue.push("Print Job 2");
queue.push("Print Job 3");
console.log("Queue after enqueue: ", queue); // ['Print Job 1', 'Print Job 2', 'Print Job 3']

// Dequeue operations (from the front - FIFO)
var servedJob = queue.shift();
console.log("Served: " + servedJob);         // Output: "Print Job 1"
console.log("Queue after dequeue: ", queue); // ['Print Job 2', 'Print Job 3']
```

---

## Q9. Explain different types of Objects in JavaScript.
**[Marks: 6 | Frequency: 3 Times (May 2024, Nov 2024, May 2025)]**

### 1. Classification Overview (1.5 Marks)
JavaScript objects are divided into three broad categories:
1. **User-Defined Objects**
2. **Built-in / Native Objects**
3. **Browser / Host Objects (DOM and BOM)**

```
                           JavaScript Objects
                                   |
         +-------------------------+-------------------------+
         |                         |                         |
User-Defined Objects       Built-in (Core) Objects     Host / Browser Objects
 - Created via Literals      - Math, Date, String        - Window, Document,
 - Created via Constructor   - Array, RegExp, Number       History, Location,
 - Created via Object.create - JSON, Boolean               Navigator, Screen
```

### 2. Detailed Explanation with Examples (4.5 Marks)

#### Category 1: User-Defined Objects
Created by the programmer to model domain entities.
```javascript
// Object Literal
var laptop = {
    brand: "Dell",
    ram: "16GB",
    turnOn: function() { return "Booting..."; }
};
```

#### Category 2: Built-in / Native Objects (Standard ECMAScript)
Standard objects provided by JavaScript runtime regardless of the environment:
* `Math`: Mathematical functions (`Math.PI`, `Math.sqrt()`, `Math.random()`).
* `Date`: Date and time handling (`new Date()`).
* `Array`: Ordered collections with built-in traversal methods.
* `String, Number, Boolean`: Primitive wrapper objects.
* `RegExp`: Pattern matching object.

#### Category 3: Host / Browser Objects
Supplied by the host environment (Browser or Node.js) to interact with the runtime:
* **BOM (Browser Object Model):** `window` (global scope), `navigator` (browser info), `location` (URL manipulation), `history`.
* **DOM (Document Object Model):** `document` object representing the parsed HTML tree (`document.getElementById()`, `document.createElement()`).

---

## Q10. List various methods of the Math Object. Explain any one with an example.
**[Marks: 6 | Frequency: 3 Times (May 2024, Nov 2024, May 2025)]**

### 1. Introduction to Math Object (1 Mark)
* The `Math` object is a built-in static object in JavaScript.
* It cannot be instantiated (`new Math()` is invalid). All its properties and methods are static and called directly on `Math`.

### 2. Common Methods of Math Object (3 Marks)
| Method | Description | Example | Output |
| :--- | :--- | :--- | :--- |
| **`Math.round(x)`** | Rounds `x` to the nearest integer | `Math.round(4.7)` | `5` |
| **`Math.ceil(x)`** | Rounds `x` upwards to next integer | `Math.ceil(4.1)` | `5` |
| **`Math.floor(x)`** | Rounds `x` downwards to lower integer | `Math.floor(4.9)` | `4` |
| **`Math.trunc(x)`** | Returns integer part (truncates decimals) | `Math.trunc(4.9)` | `4` |
| **`Math.pow(x, y)`** | Returns $x$ raised to power $y$ ($x^y$) | `Math.pow(2, 3)` | `8` |
| **`Math.sqrt(x)`** | Returns square root of $x$ | `Math.sqrt(64)` | `8` |
| **`Math.abs(x)`** | Returns absolute (positive) value | `Math.abs(-25)` | `25` |
| **`Math.max(...)`** | Returns highest value in list | `Math.max(10, 50, 20)`| `50` |
| **`Math.min(...)`** | Returns lowest value in list | `Math.min(10, 50, 20)`| `10` |
| **`Math.random()`** | Returns pseudo-random number between $0$ and $1$ | `Math.random()` | `0.6521...` |

### 3. In-Depth Explanation of `Math.random()` with Example (2 Marks)
* **Purpose:** Generates a floating-point number $r$ such that $0 \le r < 1$.
* **Common Use Case:** Generating random integers between range $[\text{min}, \text{max}]$.

```javascript
// Function to generate random integer between min and max (inclusive)
function getRandomInteger(min, max) {
    // Formula: Math.floor(Math.random() * (max - min + 1)) + min
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random dice roll (1 to 6)
var diceRoll = getRandomInteger(1, 6);
console.log("Random Dice Roll: " + diceRoll);

// Generate random 4-digit OTP (1000 to 9999)
var otp = getRandomInteger(1000, 9999);
console.log("Generated OTP: " + otp);
```

---

## Q11. Write a JavaScript program to pass a function by reference, perform addition of two objects inside the function, and display the result in the calling function.
**[Marks: 6 | Frequency: 3 Times (Nov 2022, May 2023, Nov 2023)]**

### 1. Theory & Working Mechanism (2 Marks)
* **Function Passing by Reference:** In JavaScript, functions are first-class objects. Passing a function name as an argument to another function passes its **reference** (callback).
* **Object Passing:** Objects in JavaScript are always passed by reference.
* The called function executes the passed function reference to perform the computation on the objects and returns the computed result object to the caller.

### 2. Complete Program (4 Marks)
```html
<!DOCTYPE html>
<html>
<head>
    <title>Pass Function by Reference</title>
</head>
<body>
    <h2>Add Objects via Function Reference</h2>
    <div id="output"></div>

    <script>
        // Definition of the function to be passed by reference
        // It adds numerical properties of two objects
        function addObjectProperties(obj1, obj2) {
            var sumObj = {
                x: obj1.x + obj2.x,
                y: obj1.y + obj2.y,
                total: (obj1.x + obj2.x) + (obj1.y + obj2.y)
            };
            return sumObj;
        }

        // Higher-Order Function (Receives function by reference)
        function processOperation(firstObj, secondObj, operationCallback) {
            console.log("Executing operation passed by reference...");
            // Invoking the passed function reference
            var result = operationCallback(firstObj, secondObj);
            return result;
        }

        // --- CALLING FUNCTION / SCRIPT ---
        // Two sample objects
        var objectA = { x: 25, y: 35 };
        var objectB = { x: 15, y: 45 };

        // Calling processOperation and passing 'addObjectProperties' by reference (without parentheses)
        var finalResult = processOperation(objectA, objectB, addObjectProperties);

        // Displaying results in calling code
        var outDiv = document.getElementById("output");
        outDiv.innerHTML = 
            "<p><strong>Object A:</strong> " + JSON.stringify(objectA) + "</p>" +
            "<p><strong>Object B:</strong> " + JSON.stringify(objectB) + "</p>" +
            "<p><strong>Resulting Sum Object:</strong> " + JSON.stringify(finalResult) + "</p>" +
            "<p><strong>Sum of X:</strong> " + finalResult.x + "<br>" +
            "<strong>Sum of Y:</strong> " + finalResult.y + "<br>" +
            "<strong>Grand Total:</strong> " + finalResult.total + "</p>";

        console.log("Final Added Object Result:", finalResult);
    </script>
</body>
</html>
```

---

## Q12. What is a Recursive Function? Explain with an example program.
**[Marks: 6 | Frequency: 2 Times (Nov 2025, May 2026)]**

### 1. Definition (1.5 Marks)
* A **Recursive Function** is a function that calls itself directly or indirectly in order to solve a smaller sub-problem of the original problem.
* Every recursive function must contain two essential parts:
  1. **Base Case:** The condition under which the function stops calling itself, preventing an infinite loop and call-stack overflow.
  2. **Recursive Step:** The code block where the function breaks the task down and calls itself with modified arguments.

### 2. Call Stack Representation (1 Mark)
```
For factorial(3):
[ factorial(1) -> returns 1 ]  (Base case reached)
[ factorial(2) -> returns 2 * 1 = 2 ]
[ factorial(3) -> returns 3 * 2 = 6 ]
```

### 3. Example Program (Factorial & Fibonacci) (3.5 Marks)
```javascript
// Factorial Program using Recursion
function calculateFactorial(n) {
    // 1. Base Case
    if (n === 0 || n === 1) {
        return 1;
    }
    // 2. Error handling for negative numbers
    if (n < 0) {
        return -1;
    }
    // 3. Recursive Step: n! = n * (n - 1)!
    return n * calculateFactorial(n - 1);
}

// Verification
var num = 5;
var answer = calculateFactorial(num);
console.log("Factorial of " + num + " is: " + answer); // Output: 120

// Recursive Fibonacci (returns nth term)
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("6th Fibonacci term: " + fibonacci(6)); // Output: 8
```

---

## Q13. Write a JavaScript program to explain how to get input from the user and display output to window. List different methods used to display output.
**[Marks: 6 | Frequency: 1 Time (Nov 2025)]**

### 1. Methods Used to Display Output in JavaScript (2 Marks)
1. **`window.alert(message)`:** Displays an alert dialogue box with an OK button.
2. **`document.write(content)`:** Writes directly into the active HTML output stream.
3. **`element.innerHTML`:** Writes into a specified HTML element DOM node.
4. **`console.log(data)`:** Prints output directly in the browser developer console.

### 2. Methods to Take Input from User (1.5 Marks)
1. **`window.prompt(text, default)`:** Pops up an input dialog box. Returns input string or `null`.
2. **`window.confirm(message)`:** Confirmation box. Returns boolean `true` (OK) or `false` (Cancel).
3. **HTML Form Elements:** Reading `.value` from `<input type="text">`.

### 3. Complete Program (2.5 Marks)
```html
<!DOCTYPE html>
<html>
<head>
    <title>Input Output Methods Demo</title>
</head>
<body>
    <h2>User Interaction Demo</h2>
    <button onclick="getUserData()">Start Input</button>
    <div id="outputCard" style="margin-top:15px; border:1px solid #ccc; padding:10px;"></div>

    <script>
        function getUserData() {
            // 1. Get input using window.prompt
            var userName = prompt("Please enter your name:", "Ayush");
            var userAge = prompt("Please enter your age:", "21");

            if (userName !== null && userAge !== null) {
                // 2. Ask confirmation using window.confirm
                var isConfirmed = confirm("Are you sure the entered age is: " + userAge + "?");

                if (isConfirmed) {
                    // Method 1: Displaying via innerHTML
                    document.getElementById("outputCard").innerHTML = 
                        "<h3>Welcome, " + userName + "!</h3>" +
                        "<p>Your age is recorded as: " + userAge + " years.</p>";

                    // Method 2: Displaying via alert
                    alert("Data Saved Successfully!");

                    // Method 3: Displaying via console.log
                    console.log("User Input Logged: Name = " + userName + ", Age = " + userAge);
                } else {
                    alert("Submission cancelled by user.");
                }
            }
        }
    </script>
</body>
</html>
```

---

## Q14. Describe different ways of creating an object in JavaScript. Explain how to access object properties with an example.
**[Marks: 6 | Frequency: 1 Time (Nov 2025)]**

### 1. Four Ways of Creating Objects (3 Marks)

#### 1. Using Object Literal (Most Common)
```javascript
var car = {
    brand: "Toyota",
    model: "Corolla",
    start: function() { return "Engine started"; }
};
```

#### 2. Using `new Object()` Constructor
```javascript
var student = new Object();
student.name = "Sneha";
student.rollNo = 45;
```

#### 3. Using a Constructor Function
```javascript
function Employee(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}
var emp1 = new Employee(101, "Amit", 55000);
```

#### 4. Using `Object.create()` (Prototype-based)
```javascript
var personPrototype = {
    greet: function() { return "Hello " + this.name; }
};
var p1 = Object.create(personPrototype);
p1.name = "Pooja";
```

### 2. Accessing Object Properties with Example (3 Marks)
Object properties can be accessed using two notations:
1. **Dot Notation (`object.property`):** Used when the property name is a valid JavaScript identifier.
2. **Bracket Notation (`object["property"]`):** Necessary when property names contain spaces, special characters, or are dynamic variables.

```javascript
var mobile = {
    brand: "Apple",
    "screen size": "6.1 inches",
    price: 79999
};

// 1. Dot Notation
console.log(mobile.brand);        // "Apple"

// 2. Bracket Notation (for space in key)
console.log(mobile["screen size"]); // "6.1 inches"

// 3. Dynamic Property Access via Variable
var queryKey = "price";
console.log(mobile[queryKey]);     // 79999
```

---

## Q15. What are the different ways to enumerate properties of an object? Explain with an example.
**[Marks: 6 | Frequency: 1 Time (Nov 2025)]**

### 1. Enumeration Mechanisms (3 Marks)
JavaScript provides four primary mechanisms to loop over and enumerate object properties:

| Method | Enumerable Own Properties | Inherited Properties (Prototype) | Non-Enumerable Properties |
| :--- | :---: | :---: | :---: |
| **`for...in` loop** | Yes | **Yes** | No |
| **`Object.keys(obj)`** | **Yes** | No | No |
| **`Object.getOwnPropertyNames(obj)`** | **Yes** | No | **Yes** |
| **`Object.entries(obj)`** | **Yes (Key-Value pairs)** | No | No |

### 2. Complete Example Demonstrating Enumerations (3 Marks)
```javascript
// Base prototype
var person = { species: "Homo Sapiens" };

// Inheriting object
var developer = Object.create(person);
developer.name = "Kunal";
developer.role = "Frontend Engineer";
developer.experience = 3;

// 1. Using for...in loop (Iterates over own + inherited properties)
console.log("--- 1. for...in loop ---");
for (var key in developer) {
    if (developer.hasOwnProperty(key)) {
        console.log("Own Property: " + key + " = " + developer[key]);
    } else {
        console.log("Inherited Property: " + key + " = " + developer[key]);
    }
}

// 2. Using Object.keys() (Returns array of own enumerable keys)
console.log("--- 2. Object.keys() ---");
var keysArray = Object.keys(developer);
console.log(keysArray); // ['name', 'role', 'experience']

// 3. Using Object.entries() (Returns array of [key, value] pairs)
console.log("--- 3. Object.entries() ---");
Object.entries(developer).forEach(function([k, v]) {
    console.log(k + " : " + v);
});
```
