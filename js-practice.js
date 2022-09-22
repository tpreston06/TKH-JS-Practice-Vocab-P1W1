//Complete the instructions for each numbered problem 

//1. data types built-in methods, variables 
//a. define a variable and give it a string value
    let a = "apple"
//b. define a variable and give it a number value
    let b = 2
//c. define a variable and give it a boolean value
    let tired = true
//2. if else, ternary 
//a. define a variable 'metrocard' and give it a value of 5
    let metrocard = 5
//b. write an if statement that has a condition to check if the value of metro card is greater than 2.75, and display the message "you have enough to ride the train", if the condition is true
    if (metrocard >= 2.75){
        console.log("You have enough to ride the train")
    }
//c.write an else statement that displays the message "you do not have enough to pay fare sorry"
    else{
        console.log("you do not have enough to pay fare sorry")
    }
//d. write the above if/else statement again as a ternary 
    function rideMetro(metrocard){
        return metrocard >= 2.75 ? "You have enough to ride the train": "you do not have enough fare sorry"
    }
    console.log(rideMetro(1.50))
//3. conditionals 2 (1 pt)
//a.  complete this codecademy project: https://www.codecademy.com/courses/introduction-to-javascript/projects/magic-eight-ball-1 
//add a screenshot showing your completion of this project to the root folder of this repo

//4. functions 
//a. write a function named helloWorld that returns the value 'Hello World!' 
function helloWorld(){
    let greeting = 'Hello World!';
    return greeting;
}
//b. console log the value returned from running the function helloWorld
console.log(helloWorld())

//3. arrays
//a. define a variable myArray and assign it to a value of an array. Give the array at least 5 elements
let myArray = ['bread','pasta','rice','potates', 5]
//b. an array's index starts at:
// An array's index starts at 0


//4. loops 
//a. write a for loop that console logs even numbers starting at 10 and decrementing to 0 
for(i = 10; i >= 0; i--) {
    console.log(i)
}

//5. objects
//a. define a variable named 'bike' 
let bike;
//b. assign an object to bike 
bike = []
//c. give the object 3 properties: handlebars, color, wheels 
// bike = {handlebars, color, wheels}
//d. give each property a value 
bike = [{
    handlebars: true,
    color: "Jet Black",
    wheels: 2
}]
//6. Chessboard
/*Write a function that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

read and refer to https://eloquentjavascript.net/02_program_structure.html  there are hints at the bottom of the page 
*/

//create funcation that creates a string
function chessboard(row, col){
    let board = " ";
    for (let x = 0; x < row; x++){
        for (let y = 0; y < col; y++){
            if((x + y) % 2 == 0){
                board += " ";
            }
            else{
                board += "#"
            }
        }
        board += "\n"
    }
    return board;
}
console.log(chessboard(8, 8))

