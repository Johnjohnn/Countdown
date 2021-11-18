const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdown");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById("countdown");
const countdownElTitle= document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-button");
const timeElments = document.querySelectorAll("span");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;

const second =  1000;
const minute = second* 60 ;
const hour =  minute * 60 ;
const day = hour * 24 ; 


// Set Date Input Min with Todays's Date 
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);


// Populate Our Countdown 
function  updateDOM() {
    const now =  new Date().getTime();
    const distance =  countdownValue - now;
    console.log("distance", distance);

 const days = Math.floor(distance/ day);
const hours = Math.florr((distance % day) / hour)
const minutes = Math.florr((distance % hour) / minute)
const seconds = Math.florr((distance % hour) / second)

}
// Take Valudes from Input 
function updateCountdown (e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElemtn[1].value;
    console.log(countdownTitle, countdownDate);

    // Get number Version of current Date ,  update DOM 
    countdownValue = new Date(countdownDate).getTime();
    console.log("countdown value:", countdownValue);
    updateDOM();


}


// Event Listener 
countdownForm.addEventListener('submit', updateCountdown);