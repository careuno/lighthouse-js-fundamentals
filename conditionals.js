/*
const raining = false;
        const cold = true;

        if (raining) {
          console.log("Don't forget your umbrella!");
        }

        if (cold) {
          console.log("Make sure you pick out a scarf!");
        }

        console.log("Now you're ready to go outside!");

/* As you can see, you can execute code conditionally and add multiple different
if statements in a row. BUT what if we wanted to do one thing in one case and another
in all other cases? ELSE 

const cold = false;

      if (cold) {
        console.log("Make sure you pick out a scarf!");
      } else {
        console.log("Short sleeves are fine.");
      }

Because it's false, the code within our if statement will not be executed, 
but the code inside the else block will. If cold were true, the opposite would 
happen—that is, the program would tell us to choose a scarf to wear but it 
won't tell us short sleeves are OK.

*/

const temperature = 15;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

/* The difference between multiple if statements together vs. if, else if, else together is,
it reads IF AND IF AND IF, but this one reads IF (true) it ends there. */