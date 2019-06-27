/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

// change the value of `education` to test your code
var education = "no high school diploma";

// set the value of this based on a person's education
var salary = 25636;
salary.toLocaleString("en-US")
// your code goes here

switch (education) {
  case "no high school diploma":
     output = "$"+salary.toLocaleString("en-US")+"/year.";
  case "a high school diploma":
     output = "$"+salary.toLocaleString("en-US")+"/year.";
  case "an Associate's degree":
       output = "$"+salary.toLocaleString("en-US")+"/year.";
  case "a Bachelor's degree":
     output = "$"+salary.toLocaleString("en-US")+"/year.";
  case "a Master's degree":
     output = "$"+salary.toLocaleString("en-US")+"/year.";
  case "a Professional degree":
      output = "$"+salary.toLocaleString("en-US")+"/year.";
  case "a Doctoral degree":
       output = "$"+salary.toLocaleString("en-US")+"/year.";

}

console.log("In 2015, a person with "+ education+
" earned an average of "+ output);
