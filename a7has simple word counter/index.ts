#! /usr/bin/env node
// This Line is Called a shebang,it tells the OS (operating system) to run it with node.js !

// import the 'inquirer' module ,which is commont line interface for node.js 
import inquirer from "inquirer";
 
// Declare a constent 'answer' and it to the result of inquirer .prompt function
const answer:{sentence:string} = await inquirer.prompt([
    {
        message:"please Enter your sentence to count the word !",
        name:"sentence",
        type:"input"
    }
]);

const words = answer.sentence.trim().split(" ");
// print the  words in the form of array to the console
console.log(words);
// print the word count of the sentence to the console !
console.log(`Your sentence word count is :> ${words.length}`);

