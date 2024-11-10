#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter the first value = ", type: "number", name: "firstvalue" },
    { message: "Enter the second value = ", type: "number", name: "secondvalue" },
    {
        message: "Select one of the operators to perform operation  ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstvalue + answer.secondvalue);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstvalue - answer.secondvalue);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstvalue * answer.secondvalue);
}
else if (answer.operator === "Division") {
    console.log(answer.firstvalue / answer.secondvalue);
}
else {
    console.log("Please select valid operator ");
}
