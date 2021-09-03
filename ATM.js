console.log("WELCOME TO THE INDIAN BANK")
console.log("insert an your debit card into the ATM:")
const balance=10000;
var readlineSync=require("readline-sync");
var language=readlineSync.question(" chosse your language in which language you are confortable").toLowerCase()
if(language=="english"){
    var readlineSync=require("readline-sync");
    var pin_number=readlineSync.question("enter your number")
    if(pin_number>4 && pin_number>6){
        console.log(" your pin is currect")
        var readlineSync=require("readline-sync");
        var select_transaction=readlineSync.question("select you transaction withdrawal money,transfer,balance enquiry")
        if (select_transaction=="withdrawal money"){
            var readlinesync=require("readline-sync")
            var account_type=readlineSync.question("enter type of account savaing or current")
            if (account_type=="saving" ||"current"){
                console.log("go to next step")
                var readlineSync=require("readline-sync");
                var withdrawal_amount=readlineSync.question("enter  how much money you want to withdrawal")
                if (withdrawal_amount<=balance){
                    console.log("your withdrawal is succesful")
                    console.log("collect your cash")
                    var readlineSync=require("readline-sync");
                    var reamaing_balance=readlineSync.question("cheak reaming balance in your account")
                    console.log(balance-withdrawal_amount)

                }else{
                    console.log("your withdrawal is not succesful")
                }
            }else{
                console.log("not go to next step")
            }

        }else{
            console.log("not withdrawal")
        }


    }else{
        console.log("pin is not currect")
}
}else{
    console.log("don't enter pin number")
}
    
