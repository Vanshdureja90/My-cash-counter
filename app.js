var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var message = document.querySelector(".message-shower");
var clickButton = document.querySelector("#btn");
var noOfNotes = document.querySelectorAll(".no-of-notes")
var currency = [500, 200, 100, 50, 20, 10, 5, 1];

clickButton.addEventListener("click", function validateClickAmount(){
//    hideMessage();
    if(cashGiven.value > 0){
        const amountToBeReturn = cashGiven.value - billAmount.value;
        calculateChange(amountToBeReturn);
        console.log("if")
    }else{
        showMesssage("The amount is lesser than the genrated bill amount.")
        console.log("wlse")
    }
})

// function hideMessage(){
//     message.style.display = "none";
// }

function showMesssage (msg){
    message.style.display = "block";
    message.innerText = msg;
}

function calculateChange(amountToBeReturn){
    for(let i = 0; i < currency.length; i++){
        var numberOfNotes = Math.trunc(amountToBeReturn / currency[i]);
        amountToBeReturn = amountToBeReturn % currency[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}


function play(a, b){
    return a- b;
}

console.log(play(cashGiven.value, billAmount.value
))