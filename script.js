let choices = ["rock", "paper", "scissors"];
let userChoice = document.querySelectorAll(".choice")
for (let i = 0; i < userChoice.length; i++) {
    const e = userChoice[i];
    const q = choices[i]
    e.addEventListener("click", function () {
       
        document.querySelector("#userscore").textContent = "user choice is " + q;
        let b = Math.floor(Math.random() * 3)
        let compChoice=choices[b];
        
    document.querySelector("#compscore").textContent = "comp choice is " + compChoice;


        if (q === compChoice) {
            document.querySelector(".result").textContent = "it's a draw!";
            document.querySelector(".result").style.backgroundColor="black"
        }
        else if (q === choices[0] && compChoice === choices[1] ||
             q === choices[1] && compChoice === choices[2] ||
              q === choices[2] && compChoice === choices[0]){
                document.querySelector(".result").textContent = "comp wins";
                document.querySelector(".result").style.backgroundColor="red"
            }
            else{
                document.querySelector(".result").textContent = "user wins";
                document.querySelector(".result").style.backgroundColor="green"
        }
    })
}


