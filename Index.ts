#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message:"Enter first number",type:"number",name:"firstnumber"},
    {message:"Enter second number",type:"number",name:"secondnumber"},
    {message:"select one of the operators to perform action",type:"list",name:"operator",
    choices:["Addition","Subtraction","multiplication","division"]
},
]);


if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
} else if  (answer.operator === "Subtraction") {
    console.log( answer.firstnumber - answer.secondnumber);
}else if  (answer.operator === "multiplication") {
    console.log( answer.firstnumber * answer.secondnumber);
}else if  (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
} else {
     console.log("Please select valid operator")
}