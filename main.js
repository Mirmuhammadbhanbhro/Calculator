#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const number = await inquirer.prompt([
    { message: "enter the first number", type: "number", name: "firstNumber" },
    { message: "enter the second number", type: "number", name: "secondNumber" },
    {
        message: "enter the operator you want",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "Multiplication", "Division"],
    },
]);
if (number.operator === "Addition") {
    console.log(number.firstNumber + number.secondNumber);
}
else if (number.operator === "subtraction") {
    console.log(number.firstNumber - number.secondNumber);
}
else if (number.operator === "Multiplication") {
    console.log(chalk.blue(number.firstNumber * number.secondNumber));
}
else if (number.operator === "Division") {
    console.log(number.firstNumber / number.secondNumber);
}
else {
    console.log("enter the valid operator");
}
