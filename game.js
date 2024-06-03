let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector(".resetbtn")
let newbtn = document.querySelector(".newbtn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector(".msg")
let turnO = true; // turn for playerO & playerX
let count=0;//to check win or draw
let winPatterns = [
   [0, 1, 2],
   [0, 3, 6],
   [0, 4, 8],
   [1, 4, 7],
   [2, 5, 8],
   [2, 4, 6],
   [3, 4, 5],
   [6, 7, 8],
]
const resetGame=()=>{
   turnO=true;
   count=0;
   enabledBox()
   msgcontainer.classList.add("hide")
}
// this is for clicking box and printing value O & X

boxes.forEach((box) => {
   box.addEventListener("click", () => {
      console.log("box was clicked");
      if (turnO) {
         box.innerText = "O"
         turnO = false;
         box.classList.add("Otxt")
      }
      else {
         box.innerText = "X"
         turnO = true
         box.classList.add("Xtxt")

      }
      box.disabled = true;
      count++
      let isWinner=checkWinner()
      if (count==9 &&!isWinner){
         gameDraw()

      }
   
   })

})

const gameDraw=()=>{
   msg.innerText=`Game was a Draw`
   msgcontainer.classList.remove("hide")
   disabledbox()
}

// for diabled box after winning
let enabledBox=()=>{
   for(let box of boxes){
      box.disabled=false
      box.innerText=""
   }
}
let disabledbox=()=>{
   for(let box of boxes){
      box.disabled=true
   }
   
}
// printing winner of the game
const showWinner = (winner) => {
   msg.innerText = `congratulations,winner is${winner}`
   msgcontainer.classList.remove("hide")
   disabledbox()
}
// checking winner
let checkWinner = () => {
   for (let pattern of winPatterns) {
      let posval1 = boxes[pattern[0]].innerText
      let posval2 = boxes[pattern[1]].innerText
      let posval3 = boxes[pattern[2]].innerText
      // console.log(pattern[0], pattern[1], pattern[2]);
      // console.log
      //    (boxes[pattern[0]].innerText,
      //       boxes[pattern[1]].innerText,
      //       boxes[pattern[2]].innerText);
      if (posval1 != "" && posval2 != "" && posval3 != "") {
         if (posval1 === posval2 && posval2 === posval3) {
            console.log("winner", posval1);
            showWinner(posval1)
         }
      }
   }
}


newbtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)