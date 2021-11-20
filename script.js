const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById("countdown");
const countdownElTitle= document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-button");
const timeElments = document.querySelectorAll("span");

const completeEl = document.getElementById("complete");
const completeElInfo = document.getElementById("complete-info");
const completeBtn = document.getElementById("complete-button");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;
let countdownActive;

const second =  1000;
const minute = second* 60 ;
const hour =  minute * 60 ;
const day = hour * 24 ; 


// Set Date Input Min with Todays's Date 
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);


// Populate Our Countdown 
function  updateDOM() {
countdownActive = setInterval( () => {
    const now =  new Date().getTime();
    const distance =  countdownValue - now;
    console.log("distance", distance);

 const days = Math.floor(distance / day);
const hours = Math.florr((distance % day) / hour)
const minutes = Math.florr((distance % hour) / minute)
const seconds = Math.florr((distance % minute) / second)

// Hide Input 
inputContainer.hidden= true;


// If the countdown ha ended , show complete 
if (distance < 0) {
    countdownEl.hidden = true;
    clearInterval(countdownActive);
    completeElInfo.textContent = `${countdownTitle} finished on  ${countdownDate}`;
    completeEl.hidden = false;
}else {
// Populate Countdown 
countdownElTitle.textContent = `${countdownTitle}`;
timeElments[0].textContent = `${days}`;
timeElments[1].textContent = `${hours}`;
timeElments[2].textContent = `${minutes}`;
timeElments[3].textContent = `${seconds}`;
completeEl.hidden = true;
countdownEl.hidden = false;

}

}
// Take Valudes from Input 
function updateCountdown (e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElemetn[1].value;
    console.log(countdownTitle, countdownDate);
    // Check for valid date 
    if (countdownDate === "") {
        alert("please select a date for the countdown.")
    }else {
        // Get number Version of current Date ,  update DOM 
        countdownValue = new Date(countdownDate).getTime();
        console.log("countdown value:", countdownValue);
        updateDOM();

    }




}
// Reset all values 
function reset() {
// Hide Countdowns , show input 
countdownEl.hidden = true;
inputContainer.hidden = false;
// Stop the countdown 
clearInterval(countdownActive);
// Reset values 
countdownTitle  = "";
countdownDate = "";
}

// Event Listener 
countdownForm.addEventListener('submit', updateCountdown);
countdownBtn.addEventListener("click", reset);