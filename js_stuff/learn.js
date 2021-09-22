// This is so that we can print on cosole and on multiple lines
// console.log(" _\n|_|\n|_|")

// We can use vars to store these things and print them
// note that let is not needed, we can use var, const, or just have only the var name
// var, let and const have different uses please google its
let eight = " _\n|_|\n|_|" 
    let eightline = ["_", "|_|", "|_|"]
//console.log(eight)

zero = " _\n| |\n|_|"
    let zeroline = [" _", "| |", "|_|"]
//console.log(zero)

var one = "\n |\n |"
    let oneline = [" ", "|", "|"]
//console.log(one)

two = " _\n _|\n|_" 
    let twoline = ["_", "_|", "|_"]

let three = "_\n_|\n_|"
    let threeline = ["_", "_|", "_|"]

four = "/_|_\n  |\n"
console.log(four)

// We can also use arrays to hold the vars and print them using loops
arr = [eight, zero, one, two, three]

for (i of arr) // basically means that i is an element of the array
    console.log(i)

// two digit numbers, for any loops, you will need to have curly brackets for more than 1 line
var ten = ""
for (i = 0; i < 3; i++){
    ten += oneline[i] + zeroline[i]
    ten += "\n"
}
console.log(ten)


