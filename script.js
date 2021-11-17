const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");


let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;

// Set Date Input Min with Todays's Date 
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// Take Valudes from Input 
function updateCountdown (e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElemtn[1].value;
    console.log(countdownTitle, countdownDate);

    // Get number Version of current Date ,  update DOM 
    countdownValue = new Date(countdownDate).getTime();
    console.log("countdown value:", countdownValue);


}


// Event Listener 
countdownForm.addEventListener("submit", updateCountdown);