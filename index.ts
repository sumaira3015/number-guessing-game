#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber =Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"please Guess a Number:"

},
]);
if(answers.userGuessedNumber === randomNumber){
    console.log("congratulations! you entered right number");

}else{
    console.log("you Guess wrong number");

}


