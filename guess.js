var i=1
var guess=5
console.log(" what is your name")
var readlineSync=require("readline-sync");
var NAME=readlineSync.question("enter the name")
console.log("hello",NAME,"i am thinking of number  between 1 to 10")
console.log("this game give you 5 chance to win it")
while (i<=guess){
    var number=readlineSync.question("enter the guess number")
    i++
    if(number==guess){
        console.log("your guess is correct")
        console.log("congratulation,your are winner")
        break
    }else{
        console.log("guess again, it is not currect")
    }
}
