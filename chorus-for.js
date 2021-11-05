/* This is a WHILE loop
const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");

*/
// This is the same loop but written as a FOR LOOP

const chorus = "Let's dance!";
for (let repeat = 0; repeat < 10; repeat++) {
  console.log(chorus);
}
console.log("Until the sun comes up!");

// as you can see the counter variable, repeat, our condition that should to true to continue loop,
// and incrementing of our counter variable, are all written in one line, separated by semicolons. 
// (initalizing loop/declaring variable; while condition; updating state of our loop after every step)

