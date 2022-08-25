document.addEventListener("DOMContentLoaded",()=>{

   let dataForm = document.querySelector("form")
   dataForm.addEventListener("submit",(e)=>{
       e.preventDefault()
       displayComment(e)
   })
   function displayComment(disp){
      let p = document.createElement("p")
     let resArea = document.getElementById("list");
     resArea.appendChild(p)
      p.innerHTML = `${disp.target.comment.value}`
   }
//Variables
let container = [];
let container2 = [];
let likeEvenets = document.querySelector(".likes")
let comment = document.getElementById("submit")
let counter = document.getElementById("counter");
let increase = document.getElementById("plus");
let decrease = document.getElementById("minus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");
let clock = null
let seconds = 0

function startCounter(){
   clock = setInterval(() => {
       counter.innerHTML = ++seconds;},1000);
}

function timeIncrease(){
counter.innerHTML = ++seconds 
}
increase.addEventListener("click",timeIncrease);

function timeDecrease(){
counter.innerHTML = --seconds
}
decrease.addEventListener("click",timeDecrease);

function manageHeart(){
   let found = -1
for (let i = 0;i<container.length; i++){
   if (container[i] === seconds){
  found = i
  container2[i] = +container2[i]+1
  break
   }
} 
if (found === -1){
   container.push(seconds)  
   container2.push("1")
   found = container2.length-1

const list = document.createElement("li")
list.innerHTML = `The Number ${seconds} has been liked`
likeEvenets.appendChild(list)
}
else {const selectAll = document.querySelectorAll('li')
selectAll[found].innerHTML = `The Number ${seconds} has been liked ${container2[found]} times!`
}
}
heart.addEventListener("click",manageHeart);


function managePause(){
   if(pause.innerText==="Resume"){
       manageResume()
   } else { pause.innerText = "Resume",
clearInterval(clock)
increase.disabled=true
decrease.disabled=true
heart.disabled=true
dataForm.disabled=true
comment.disabled=true
   }
}
pause.addEventListener("click",managePause);

function manageResume(){
   pause.innerText = "Pause"
pause.disabled=false
increase.disabled=false
decrease.disabled=false
heart.disabled=false
dataForm.disabled=false
comment.disabled=false
startCounter()
}

startCounter();

})


 

