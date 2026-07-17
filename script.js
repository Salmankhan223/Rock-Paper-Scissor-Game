let userScore = 0; 
let compScore = 0;

const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score")   
const compScorepara = document.querySelector("#comp-score") 
const genCompChoice = () => { 
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("The Game was draw.")
    msg.innerText = "Game was Draw. Play again"
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin ,userChoice ,compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        console.log("You lose!")
        msg.innerText= `You lose. ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
    console.log("userchoice =", userChoice)
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice =", compChoice)

    if (userChoice == compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice == "rock") {
            //scissor ,paper
            userWin = compChoice == "paper" ? false : true;
        } else if (userChoice == "paper") {
            //rock , scissor
            userWin = compChoice == "scissor" ? false : true
        }
        else {
            //rock , paper
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin ,userChoice, compChoice);
    }

}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
