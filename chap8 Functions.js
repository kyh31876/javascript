//a function definition may include a list of identifiers,
//known as parameters, that work as local variables for the body of the
//function. Function invocations provide values, or arguments, for the
//function’s parameters.


//If a function is assigned to a property of an object, it is known as a
//method of that object.



//When a function is invoked on or through anobject, 
//that object is the invocation context or "this" value for the function.



//8.1 Defining Functions


//8.1.1 Function Declarations


//function functionName(parameters) {
    // code to be executed
//}

//Function parameters are the names listed in the function definition.
//Function arguments are the real values passed to (and received by) the function.

// Print the name and value of each property of o. Return undefined.
function printprops(o) {
    for(let p in o) {
        console.log(`${p}: ${o[p]}\n`);
    }
}

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx*dx + dy*dy);
}

// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x-1);
}


//the name of the function becomes a variable whose value is the function itself.


//8.1.2 Function Expressions


// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
const square = function(x) { return x*x; };

// Function expressions can include names, which is useful for recursion.
const f = function fact(x) { if (x <= 1) return 1; else
return x*fact(x-1); };

// Function expressions can also be used as arguments to other functions:
[3,2,1].sort(function(a,b) { return a-b; });

// Function expressions are sometimes defined and immediately invoked:
let tensquared = (function(x) {return x*x;}(10));


//the function name is optional for functions defined as expressions, 
//and most of the preceding function expressions we’ve shown omit it.



//8.1.3 Arrow Functions


hello = function() {
    return "Hello World!";
  }

//it is same as 
hello = () => {
    return "Hello World!";
  }


sum=(x,y) => {return x+y;};

//If the function has only one statement, and the statement returns a value,
//you can remove the brackets{} and the return keyword:
sum=(x,y) =>x+y;

//if an arrow function has exactly one parameter, 
//you can omit the parentheses around the parameter list:

polynomial = x => x*x + 2*x+3;


const f = x => { return { value: x }; }; // Good: f() returns an object
const g = x => ({ value: x }); // Good: g() returns an object

const h = x => { value: x }; // Bad: h() returns nothing
const i = x => { v: x, w: x }; // Bad: Syntax Error


//the expression to be returned is an object literal, then you have to
//put the object literal inside parentheses to avoid syntactic ambiguity
//between the curly braces of a function body and the curly braces of 
//an object literal:



//8.1.4 Nested Functions
function hypotenuse(a, b) {
    function square(x) { return x*x; }
    return Math.sqrt(square(a) + square(b));
}
hypotenuse(1,2)


//8.2 Invoking Functions

//8.2.1 Function Invocation

//If the function expression is a property-access expression
//then it is a method invocation expression.
 
printprops({x: 1});
let total = distance(0,0,2,1) + distance(2,1,3,5);
factorial=x=>{return x*x;}
let probability = factorial(5)/factorial(13);






//8.2.2 Method Invocation
//A method is nothing more than a JavaScript function that is stored in a
//property of an object.

//If you have a function f and an object o, 
//you can define a method named m of o with the following line:
o.m = f;


//Having defined the method m() of the object o
p.m();


let calculator = { // An object literal
    operand1: 1,
    operand2: 1,
    add() { // We're using method shorthand syntax for this function
    // Note the use of the this keyword to refer to the containing object.
    this.result = this.operand1 + this.operand2;
    }
};
calculator.add(); // A method invocation to compute 1+1.
calculator.result // => 2


//property access expressions that use square brackets also cause method
//invocation.

o["m"](x,y); // Another way to write o.m(x,y).
a[0](z) // Also a method invocation (assuming a[0] is a function).


//Method invocations may also involve more complex property access expressions:
customer.surname.toUpperCase(); // Invoke method on customer.surname
f().m(); // Invoke method m() on return value of f()

//this in a Method
//In an object method, this refers to the "owner" of the method.
//Note that this is a keyword, not a variable or property name.


//If a nested function (that is not an arrow function) 
//is invoked as a function, then its this value will be 
//either the global object (non-strict mode) or undefined (strict mode)


let o = { // An object o.
    m: function() { // Method m of the object.
        let self = this; // Save the "this" value in a variable.
        this === o // => true: "this" is the object o.
        f(); // Now call the helper function f().
        function f() { // A nested function f
            this === o // => false: "this" is global or undefined
            self === o // => true: self is the outer "this" value.
        }
    }
};
o.m(); // Invoke the method m on the object o.

//Inside the nested function f(), the "this" keyword is not equal to the
//object o.

//it will properly inherit the "this" value:
const f = () => {
    this === o // true, since arrow functions inherit this
    };


//8.2.3 Constructor Invocation

//If a function or method invocation is preceded by the keyword new,
//then it is a constructor invocation.

o = new Object();
o = new Object;

//A constructor invocation creates a new, empty object that inherits from
//the object specified by the prototype property of the constructor.


//Constructor functions do not normally use the return keyword.





//8.3 Function Arguments and Parameters

//8.3.1 Optional Parameters and Defaults

//When a function is invoked with fewer arguments than declared parameters, 
//the additional parameters are set to their default value,
//which is normally undefined.


// Append the names of the enumerable properties of object o to the
// array a, and return a. If a is omitted, create and return a new array.
function getPropertyNames(o, a) {
    if (a === undefined) a = []; // If undefined, use a new array
    for(let property in o) a.push(property);
    return a;
}

//Instead of using an if statement in the first line of this function, you
//can use the || operator in this idiomatic way:
a = a || [];



// getPropertyNames() can be invoked with one or two arguments:
let o = {x: 1}, p = {y: 2, z: 3}; // Two objects for testing
let a = getPropertyNames(o); // a == ["x"]; get o's properties in a new array
getPropertyNames(p, a); // a == ["x","y","z"]; add p's properties to it


getPropertyNames=(o,a) =>{if (a===undefined) a=[];
    for(let property in o) a.push(property);
    return a;
}



//|| operator returns its first argument if
//that argument is truthy and otherwise returns its second argument.

//may be you want to calls your function cannot omit the first argument 
//and pass the second: they would have to
//explicitly pass undefined as the first argument.


//Parameter default expressions are evaluated when your function is called,
//not when it is defined,

// This function returns an object representing a rectangle's 2 dimensions.
// If only width is supplied, make it twice as high as it is wide.
const rectangle = (width, height=width*2) => ({width,
height});
rectangle(1) // => { width: 1, height: 2 }


//8.3.2 Rest Parameters and Variable-Length Argument Lists

//Parameter defaults enable us to write functions that can be invoked
//with fewer arguments than parameters.


//Functions like this example that can accept any number of
//arguments are called variadic functions,
function max(first=-Infinity, ...rest) {
    let maxValue = first; // Start by assuming the first arg is biggest
    // Then loop through the rest of the arguments, looking for bigger
    for(let n of rest) {
        if (n > maxValue) {
            maxValue = n;
        }
    }
    // Return the biggest
    return maxValue;
}
max(1, 10, 100, 2, 3, 1000, 4, 5, 6) // => 1000
    
//A rest parameter is preceded by three periods, and it must be the last
//parameter in a function declaration.



//8.3.3 The Arguments Object

//within the body of any function, the identifier arguments 
//refers to the Arguments object for that invocation.

//Arguments object is an array-like object (see  7.9) that allows the
//argument values passed to the function to be retrieved by number


//rewritten to use the Arguments object instead of a rest parameter:
function max(x) {
    let maxValue = -Infinity;
    // Loop through the arguments, looking for, and remembering, the biggest.
    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxValue) maxValue = arguments[i];
    }
    // Return the biggest
    return maxValue;
}
max(1, 10, 100, 2, 3, 1000, 4, 5, 6) // => 1000

//if you encounter a function that uses arguments, you can often replace it
//with a ...args rest parameter.




//8.3.4 The Spread Operator for Function Calls


let numbers = [5, 2, 10, -1, 9, 100, 1];
Math.min(...numbers) // => -1
//it is a special JavaScript syntax that 
//can be used in array literals and function invocations.


//in  8.3.2, using ... in a function definition gathers
//multiple function arguments into an array.

// This function takes a function and returns a wrapped version
function timed(f) {
    return function(...args) { // Collect args into a rest parameter array
        console.log(`Entering function ${f.name}`);
        let startTime = Date.now();
        try {
            // Pass all of our arguments to the wrapped function
            return f(...args); // Spread the args back out again
        }
        finally {
            // Before we return the wrapped return value, print elapsed time.
            console.log(`Exiting ${f.name} after
${Date.now()-startTime}ms`);
        }
    };
}
// Compute the sum of the numbers between 1 and n by brute force
function benchmark(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) sum += i;
    return sum;
}
// Now invoke the timed version of that test function
timed(benchmark)(1000000) // => 500000500000; this is the sum of the numbers


benchmark=(n)=>{let sum =0;
for(let i=1;i<=n;i++) sum +=i;
return sum;
}


//8.3.5 Destructuring Function Arguments into Parameters

function vectorAdd(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1]];
    }
vectorAdd([1,2], [3,4]) // => [4,6]

//The code would be easier to understand if we destructured the two
//vector arguments into more clearly named parameters:
function vectorAdd([x1,y1], [x2,y2]) { // Unpack 2 arguments into 4 parameters
    return [x1 + x2, y1 + y2];
    }
vectorAdd([1,2], [3,4]) // => [4,6]


//if you are defining a function that expects an object argument,
//you can destructure parameters of that object.

// Multiply the vector {x,y} by a scalar value
function vectorMultiply({x, y}, scalar) {
    return { x: x*scalar, y: y*scalar };
}
vectorMultiply({x: 1, y: 2}, 2) // => {x: 2, y: 4}



function vectorAdd(
    {x: x1, y: y1}, // Unpack 1st object into x1 and y1 params
    {x: x2, y: y2} // Unpack 2nd object into x2 and y2 params
    )
{
    return { x: x1 + x2, y: y1 + y2 };
}
vectorAdd({x: 1, y: 2}, {x: 3, y: 4}) // => {x: 4, y: 6}

vectorAdd=({x: x1,y: y1},
    {x: x2,y: y2}) => {return{x:x1+x2, y:y1+y2};}

//Consider a function that copies a specified number of elements from
//one array into another array with optionally specified starting offsets
//for each array.


function arraycopy({from, to=from, n=from.length,
fromIndex=0, toIndex=0}) {
    let valuesToCopy = from.slice(fromIndex, fromIndex + n);
    to.splice(toIndex, 0, ...valuesToCopy);
    return to;
}
let a = [1,2,3,4,5], b = [9,8,7,6,5];
arraycopy({from: a, n: 3, to: b, toIndex: 4}) // => [9,8,7,6,1,2,3,5]


//The value of that rest parameter will be an object that has any
//properties that did not get destructured.

// Multiply the vector {x,y} or {x,y,z} by a scalar value, retain other props
function vectorMultiply({x, y, z=0, ...props}, scalar) {
    return { x: x*scalar, y: y*scalar, z: z*scalar, ...props
};
}
vectorMultiply({x: 1, y: 2, w: -1}, 2) // => {x: 2, y: 4, z:0, w: -1}

//8.3.6 Argument Types

// Return the sum of the elements an iterable object a.
// The elements of a must all be numbers.


function sum(a) {
    let total = 0;
    for(let element of a) { // Throws TypeError if a is not iterable
        if (typeof element !== "number") {
            throw new TypeError("sum(): elements must be numbers");
        }
        total += element;
    }
    return total;
}
sum([1,2,3]) // => 6
sum(1, 2, 3); // !TypeError: 1 is not iterable
sum([1,2,"3"]); // !TypeError: element 2 is not a number


//8.4 Functions as Values

function square(x) { return x*x; }
// /This definition creates a new function object and assigns it to the
//variable square

//Functions can also be assigned to object properties rather than variables.
let o = {square: function(x) { return x*x; }}; // An object literal
let y = o.square(16);


//Functions don’t even require names at all
let a = [x => x*x, 20]; // An array literal
a[0](a[1]) // => 400



//Example 8-1 demonstrates the kinds of things that can be done when
//functions are used as values.

// We define some simple functions here
function add(x,y) { return x + y; }
function subtract(x,y) { return x - y; }
function multiply(x,y) { return x * y; }
function divide(x,y) { return x / y; }

// Here's a function that takes one of the preceding functions
// as an argument and invokes it on two operands
function operate(operator, operand1, operand2) {
    return operator(operand1, operand2);
}
// We could invoke this function like this to compute the value (2+3) + (4*5):
let i = operate(add, operate(add, 2, 3), operate(multiply, 4,5));

// For the sake of the example, we implement the simple
//functions again,

// this time within an object literal;
const operators = {
    add: (x,y) => x+y,
    subtract: (x,y) => x-y,
    multiply: (x,y) => x*y,
    divide: (x,y) => x/y,
    pow: Math.pow // This works for predefined functions too
};
// This function takes the name of an operator, looks up that operator
// in the object, and then invokes it on the supplied operands.
//the syntax used to invoke the operator function.
function operate2(operation, operand1, operand2) {
    if (typeof operators[operation] === "function") {
        return operators[operation](operand1, operand2);
    }
    else throw "unknown operator";
}
operate2("add", "hello", operate2("add", " ", "world")) // => "hello world"
operate2("pow", 10, 2) // => 100


//8.4.1 Defining Your Own Function Properties

//Functions are not primitive values in JavaScript, but a specialized kind
//of object, which means that functions can have properties.

// Initialize the counter property of the function object.
// Function declarations are hoisted so we really can
// do this assignment before the function declaration.
uniqueInteger.counter = 0;
// This function returns a different integer each time it is called.
// It uses a property of itself to remember the next value to be returned.
function uniqueInteger() {
    return uniqueInteger.counter++; // Return and increment counter property
}
uniqueInteger() // => 0
uniqueInteger() // => 1



//As another example, consider the following factorial() function
//that uses properties of itself (treating itself as an array) to cache
//previously computed results:


// Compute factorials and cache results as properties of the function itself.
function factorial(n) {
    if (Number.isInteger(n) && n > 0) { // Positive integers only
        if (!(n in factorial)) { // If no cached result
            factorial[n] = n * factorial(n-1); // Compute and cache it
        }
        return factorial[n]; // Return the cached result
    } else {
        return NaN; // If input was bad
    }
}

factorial[1] = 1; // Initialize the cache to hold this base case.
factorial(6) // => 720
factorial[5] // => 120; the call above caches this value


//8.5 Functions as Namespaces

//Variables declared within a function are not visible outside of the
//function.

//variables that would have been global become local to the function:
function chunkNamespace() {
    // Chunk of code goes here
    // Any variables defined in the chunk are local to this function
    // instead of cluttering up the global namespace.
    }
    chunkNamespace(); // But don't forget to invoke the function!

//This code defines only a single global variable: the function name
//chunkNamespace.

(function() { // chunkNamespace() function rewritten as an unnamed expression.
    // Chunk of code goes here
    }()); // End the function literal and invoke it now.


//8.6 Closures
    //Global Variables
    
    let a = 4; //a is a global variable 
    function myFunction() {
        return a * a;
    }
    
    
    function myFunction() {
        let a = 4; //a is a local variable
        return a * a;
    }
    
    //Variables created without a declaration keyword (var, let, or const)
    // are always global, even if they are created inside a function.
    function myFunction() {
        a = 4;
    }


let scope = "global scope"; // A global variable
function checkscope() {
    let scope = "local scope"; // A local variable
    function f() { return scope; } // Return the value in scope here
    return f();
}
checkscope() // => "local scope"

//The checkscope() function declares a local variable and then
//defines and invokes a function that returns the value of that variable.


//In order to implement lexical scoping, the internal state of 
//a JavaScript function object must include not only the code of 
//the function but also a reference to the scope in which 
//the function definition appears.

//This combination of a function object and a scope (a set of 
//variable bindings) in which the function’s variables
//are resolved is called "a closure"

//JavaScript functions are executed using the scope they were defined in.

let uniqueInteger = (function() { // Define and invoke
    let counter = 0; // Private state of function below
    return function() { return counter++; };
    }());
uniqueInteger() // => 0
uniqueInteger() // => 1




//the first line of code looks like it is assigning a function to the
//variable uniqueInteger.

//the return value of the function that is being assigned to uniqueInteger.

//JavaScript functions are executed using the scope they were defined in.


function counter() {
    let n = 0;
    return {
        count: function() { return n++; },
        reset: function() { n = 0; }
    };
}
let c = counter(), d = counter(); // Create two counters
c.count() // => 0
d.count() // => 0: they count independently
c.reset(); // reset() and count() methods share state
c.count() // => 0: because we reset c
d.count() // => 1: d was not reset



//it uses closures for private state rather than relying on a regular
//object property:

function counter(n) { // Function argument n is the private variable
    return {
    // Property getter method returns and increments private counter var.
        get count() { return n++; },
        // Property setter doesn't allow the value of n to decrease
        set count(m) {
            if (m > n) n = m;
            else throw Error("count can only be set to a larger value");
        }
    };
}

let c = counter(1000);
c.count // => 1000
c.count // => 1001
c.count = 2000;
c.count // => 2000
c.count = 2000; // !Error: count can only be set to a larger value


//Example 8-2 is a generalization of the shared private state through the
//closures technique we’ve been demonstrating here. 

//Example 8-2. Private property accessor methods using closures

// This function adds property accessor methods for a property with
// the specified name to the object o. The methods are named get<name>
// and set<name>. If a predicate function is supplied, the setter
// method uses it to test its argument for validity before storing it.
// If the predicate returns false, the setter method throws an exception.

//The unusual thing about this function is that the property value
//that is manipulated by the getter and setter methods is not stored in
//the object o. Instead, the value is stored only in a local variable
//in this function. The getter and setter methods are also defined
//locally to this function and therefore have access to this local variable.
//This means that the value is private to the two accessor methods, and it
//cannot be set or modified except through the setter method.

function addPrivateProperty(o, name, predicate) {
    let value; // This is the property value
    // The getter method simply returns the value.
    o[`get${name}`] = function() { return value; };
    // The setter method stores the value or throws an exception if
    // the predicate rejects the value.
    o[`set${name}`] = function(v) {
        if (predicate && !predicate(v)) {
            throw new TypeError(`set${name}: invalid value ${v}`);
        } else {
            value = v;
        }
    };
}





//when creates multiple closures using a loop,
//it is a common error to try to move the loop within the function
//2that defines the closures

// The following code demonstrates the addPrivateProperty() method.
let o = {}; // Here is an empty object
// Add property accessor methods getName and setName()
// Ensure that only string values are allowed

addPrivateProperty(o, "Name", x => typeof x === "string");

o.setName("Frank"); // Set the property value
o.getName() // => "Frank"
o.setName(0); // !TypeError: try to set a value of the wrong type




//it is a common error to try to move the loop within the function
//that defines the closures.
// Return an array of functions that return the values 0-9
function constfuncs() {
    let funcs = [];
    for(var i = 0; i < 10; i++) {
        funcs[i] = () => i;
    }
    return funcs;
}
let funcs = constfuncs();
funcs[5]() // => 10; Why doesn't this return 5?


//Another thing to remember when writing closures is that "this" is a
//JavaScript keyword, not a variable.

//if you’re writing a closure that needs to use the "this" value of 
//its containing function, you should use an arrow function, 
//or call bind(), on the closure before returning it,

const self = this; // Make the this value available to nested functions



//8.7 Function Properties, Methods, and Constructor

//8.7.2 The name Property

//Function object's read-only name property indicates 
//the function's name as specified when it was created, 
const func1 = function() {};

const object = {
  func2: function() {}
};

console.log(func1.name);
// expected output: "func1"

console.log(object.func2.name);
// expected output: "func2"



//8.7.3 The prototype Property

//When a function is used as a constructor, 
//the newly created object inherits properties from the prototype object.



//8.7.4 The call() and apply() Methods

//The first argument to both call() and apply() is the object 
//on which the function is to be invoked;

//this argument is the invocation context and becomes the
//value of the "this" keyword within the body of the function.



//To invoke the function f() as a method of the object o
//you could use either call() or apply():
f.call(o);
f.apply(o);

o.m = f; // Make f a temporary method of o.
o.m(); // Invoke it, passing no arguments.
delete o.m; // Remove the temporary method.


//If you call either of those methods on an arrow function, 
//the first argument is effectively ignored.




//call()


//It can be used to invoke (call) a method with an owner object 
//as an argument (parameter).

//the first invocation context argument
//are the values that are passed to the function that is invoked

f.call(o, 1, 2);//to pass two numbers to the function f() 
//and invoke it as if it were a method of the object o,


//apply()


//The call() method takes arguments separately.
//The apply() method takes arguments as an array.

f.apply(o, [1,2]);


//It uses the apply() method instead of a spread operator,
//and by doing that, it is able to invoke the wrapped method with the
//same arguments and the same this value as the wrapper method:

// Replace the method named m of the object o with a version that logs
// messages before and after invoking the original method.
function trace(o, m) {
    let original = o[m]; // Remember original method in the closure.
    o[m] = function(...args) { // Now define the new method.
    console.log(new Date(), "Entering:", m); // Log message.
    let result = original.apply(this, args); // Invoke original.
    console.log(new Date(), "Exiting:", m); // Log message.
    return result; // Return result.
    };
}

//8.7.5 The bind() Method

//When you invoke the bind() method on a function f and pass 
//an object o, the method returns a new function.

//Invoking the new function (as a function) invokes 
//the original function f as a method of o. 

//Any arguments you pass to the new function are passed to the original function.

function f(y) { return this.x + y; } // This function needs to be bound
let o = { x: 1 }; // An object we'll bind to
let g = f.bind(o); // Calling g(x) invokes f() on o
g(2) // => 3
let p = { x: 10, g }; // Invoke g() as a method of this object
p.g(2) // => 3: g is still bound to o, not p.


let sum = (x,y) => x + y; // Return the sum of 2 args
let succ = sum.bind(null, 1); // Bind the first argument to 1
succ(2) // => 3: x is bound to 1, and we pass 2 for the y argument
function f(y,z) { return this.x + y + z; }
let g = f.bind({x: 1}, 2); // Bind this and y
g(3) // => 6: this.x is bound to 1, y is bound to 2 and z is 3


//8.7.7 The Function() Constructor

//that can be used to create new functions:
const f = new Function("x", "y", "return x*y;");

//The Function() constructor expects any number of string arguments.


//If you are defining a function that takes no arguments,
//you would simply pass a single string to the constructor.


//8.8 Functional Programming

//8.8.1 Processing Arrays with Functions

let data = [1,1,3,5,5]; // This is our array of numbers
// The mean is the sum of the elements divided by the number of elements
let total = 0;
for(let i = 0; i < data.length; i++) total += data[i];
let mean = total/data.length; // mean == 3; The mean of our data is 3
// To compute the standard deviation, we first sum the squares of
// the deviation of each element from the mean.
total = 0;
for(let i = 0; i < data.length; i++) {
    let deviation = data[i] - mean;
    total += deviation * deviation;
}
let stddev = Math.sqrt(total/(data.length-1)); // stddev == 2



//We can perform these same computations in concise functional style
// First, define two simple functions
const sum = (x,y) => x+y;
const square = x => x*x;
// Then use those functions with Array methods to compute mean and stddev
let data = [1,1,3,5,5];
let mean = data.reduce(sum)/data.length; // mean == 3
let deviations = data.map(x => x-mean);
let stddev = Math.sqrt(deviations.map(square).reduce(sum)/(data.length- 1));
stddev // => 2


//Let’s write functional versions of the map() and reduce() methods:
const map = function(a, ...args) { return a.map(...args); };
const reduce = function(a, ...args) { return a.reduce(...args); };

//With these map() and reduce() functions defined, out code to compute 
//the mean and standard deviation.

const sum = (x,y) => x+y;
const square = x => x*x;
let data = [1,1,3,5,5];
let mean = reduce(data, sum)/data.length;
let deviations = map(data, x => x-mean);
let stddev = Math.sqrt(reduce(map(deviations, square),sum)/(data.length-1));
stddev // => 2


//8.8.2 Higher-Order Functions

//A higher-order function is a function that operates on functions, taking
//one or more functions as arguments and returning a new function.

// This higher-order function returns a new function that passes its
// arguments to f and returns the logical negation of f's return value;
function not(f) {
    return function(...args) { // Return a new function
        let result = f.apply(this, args); // that calls f
        return !result; // and negates its result.
    };
}
const even = x => x % 2 === 0; // A function to determine if a number is even
const odd = not(even); // A new function that does the opposite
[1,1,3,5,5].every(odd) // => true: every element of the array is odd

//This not() function is a higher-order function because it takes a
//function argument and returns a new function.



//This function uses the map() function defined earlier,

// Return a function that expects an array argument and applies f to
// each element, returning the array of return values.
// Contrast this with the map() function from earlier.
function mapper(f) {
    return a => map(a, f);
}
const increment = x => x+1;
const incrementAll = mapper(increment);
incrementAll([1,2,3]) // => [2,3,4]


//f and g, and returns a new function that computes f(g()):

// Return a new function that computes f(g(...)).
// The returned function h passes all of its arguments to g, then passes
// the return value of g to f, then returns the return value of f.
// Both f and g are invoked with the same this value as h was invoked with.
function compose(f, g) {
    return function(...args) {
// We use call for f because we're passing a single value and
// apply for g because we're passing an array of values.
    return f.call(this, g.apply(this, args));
    };
}
const sum = (x,y) => x+y;
const square = x => x*x;
compose(square, sum)(2,3) // => 25; the square of the sum



//8.8.3 Partial Application of Functions

//The bind() method partially applies arguments on the left

// The arguments to this function are passed on the left
function partialLeft(f, ...outerArgs) {
    return function(...innerArgs) { // Return this function
        let args = [...outerArgs, ...innerArgs]; // Build the argument list
        return f.apply(this, args); // Then invoke f with it
    };
}
// The arguments to this function are passed on the right
function partialRight(f, ...outerArgs) {
    return function(...innerArgs) { // Return this function
        let args = [...innerArgs, ...outerArgs]; // Build the argument list
        return f.apply(this, args); // Then invoke f with it
    };
}
// The arguments to this function serve as a template. Undefined values
// in the argument list are filled in with values from the inner set.
function partial(f, ...outerArgs) {
    return function(...innerArgs) {
        let args = [...outerArgs]; // local copy of outerargs template
        let innerIndex=0; // which inner arg is next
// Loop through the args, filling in undefined values from inner args
        for(let i = 0; i < args.length; i++) {
            if (args[i] === undefined) args[i] = innerArgs[innerIndex++];
        }
    // Now append any remaining inner arguments
        args.push(...innerArgs.slice(innerIndex));
        return f.apply(this, args);
    };
}
// Here is a function with three arguments
const f = function(x,y,z) { return x * (y - z); };
// Notice how these three partial applications differ
partialLeft(f, 2)(3,4) // => -2: Bind first argument:
2 * (3 - 4)
partialRight(f, 2)(3,4) // => 6: Bind last argument:
3 * (4 - 2)
partial(f, undefined, 2)(3,4) // => -6: Bind middle argument: 3 * (2 - 4)




const increment = partialLeft(sum, 1);
const cuberoot = partialRight(Math.pow, 1/3);
cuberoot(increment(26)) // => 3

//We can also use composition and partial application to redo our mean
//and standard deviation calculations in extreme functional style:

// sum() and square() functions are defined above. Here are some more:
const product = (x,y) => x*y;
const neg = partial(product, -1);
const sqrt = partial(Math.pow, undefined, .5);
const reciprocal = partial(Math.pow, undefined, neg(1));
// Now compute the mean and standard deviation.
let data = [1,1,3,5,5]; // Our data
let mean = product(reduce(data, sum),
reciprocal(data.length));
let stddev = sqrt(product(reduce(map(data,
    compose(square,
        partial(sum,neg(mean)))))),sum)
reciprocal(sum(data.length,neg(1)))));
[mean, stddev] // => [3, 2]


//8.8.4 Memoization


//The code that follows shows a higher-order function, memoize(), 
//that accepts a function as its argument and 
//returns a memoized version of the function:


// Return a memoized version of f.
// It only works if arguments to f all have distinct string representations.
function memoize(f) {
    const cache = new Map(); // Value cache stored in the closure.
    return function(...args) {
    // Create a string version of the arguments to use as a cache key.
        let key = args.length + args.join("+");
        if (cache.has(key)) {
        return cache.get(key);
        } else {
            let result = f.apply(this, args);
            cache.set(key, result);
            return result;
        }
    };
}

//The memoize() function creates a new object to use as the cache and
//assigns this object to a local variable so that it is private to (in the
//closure of) the returned function.

// Return the Greatest Common Divisor of two integers using the Euclidian
// algorithm: http://en.wikipedia.org/wiki/Euclidean_algorithm
function gcd(a,b) { // Type checking for a and b has been omitted
if (a < b) { // Ensure that a >= b when we start
    [a, b] = [b, a]; // Destructuring assignment to swap variables
    }
    while(b !== 0) { // This is Euclid's algorithm for GCD
        [a, b] = [b, a%b];
    }
    return a;
}
const gcdmemo = memoize(gcd);
gcdmemo(85, 187) // => 17
// Note that when we write a recursive function that we will be memoizing,
// we typically want to recurse to the memoized version, not the original.
const factorial = memoize(function(n) {
    return (n <= 1) ? 1 : n * factorial(n-1);
});
factorial(5) // => 120: also caches values for 4, 3, 2 and 1.