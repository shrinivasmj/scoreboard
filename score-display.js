
let scoreHome = document.getElementById("score-home")
let scoreGuest =document.getElementById("score-guest")

let countHome = 0;
let countGuest = 0;



function addOne(){
  countHome += 1;
  scoreHome.textContent=countHome; 

}
function addTwo(){
  countHome += 2;
  scoreHome.textContent=countHome; 

}
function addThree(){
  countHome += 3;
  scoreHome.textContent=countHome; 

}

function addOneb(){
  countGuest += 1;
  scoreGuest.textContent=countGuest; 

}
function addTwob(){
  countGuest += 2;
  scoreGuest.textContent=countGuest; 

}
function addThreeb(){
  countGuest += 3;
  scoreGuest.textContent=countGuest; 

}





