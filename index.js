#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWELCOME TO\'CODE WITH SNAZ'\-CLI PROJECT(TO DO LIST)\n");
let todos = [""];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your todo? "
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do You Want To Add More Todo?",
            default: false
        }
    ]);
    const { TODO, addmore } = answer;
    console.log(answer);
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly add valid input");
    }
    // console.log(todos)
    if (todos.length > 0) {
        console.log("Your TODO list:");
        todos.forEach(todo => {
            // console.log(todo)
        });
    }
    else {
        console.log("Not TODO found");
    }
}
