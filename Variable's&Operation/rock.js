function playGame(userChoice){

    const choices = ["rock","paper","scissors"];

    const randomIndex = Math.floor(Math.random()*3);

    const computerChoice = choices[randomIndex];

    let result = "";

    if(userChoice === computerChoice){

        result = "Draw";

    }
    else if(
        (userChoice==="rock" && computerChoice==="scissors") ||
        (userChoice==="paper" && computerChoice==="rock") ||
        (userChoice==="scissors" && computerChoice==="paper")
    ){

        result = "You Win 🎉";

    }
    else{

        result = "Computer Wins 🤖";

    }

    document.getElementById("user").innerHTML =
        "You : " + userChoice;

    document.getElementById("computer").innerHTML =
        "Computer : " + computerChoice;

    document.getElementById("winner").innerHTML =
        result;

}