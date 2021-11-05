const isEven  = function (num) {
  return num % 2 === 0;
}


const isEven  = function (num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

//The variable tenIsEven is set to the value returned by isEven(10), namely true. 
//elevenIsEven is set to the value returned by isEven(11), namely false.

/* Simplify code a little; we don't need to set our function return values to new variables
before doing something with them–we can use them directly where we need them. */

const isEven  = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));

/* we can pass the result returned by isEven directly to console.log,
which takes that value and outputs it to Terminal. */