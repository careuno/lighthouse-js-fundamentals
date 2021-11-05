const sayHello  = function () {
  console.log("Hello, world");
}

sayHello();

// How to improve previous function 

const sayHello  = function (name) {
  console.log("Hello, " + name);
}

/* 

Now we've got a function taking a value as its input, which 
we've referred to as name and which we concatenate to the string 
"Hello, " before we output the whole result. The input to the 
function is called a parameter, in our case we've called it name. 
We can think of a function's parameters as variables that are 
accessible and can be used only within the function, and whose 
values vary and are set when we call the function.

sayHello is one of two main varieties of functions:

- One that produces a SIDE EFFECT, as in it does something.
- One that produces a RESULT, as in it calculates and 
returns a value we can use in further code.

