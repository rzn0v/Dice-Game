function playGame(){
    var urMove = Math.ceil(Math.random()*6);
    var computerMove = Math.ceil(Math.random()*6);
    document.querySelector(".img1").setAttribute("src",`images/dice${urMove}.png`);
    document.querySelector(".img2").setAttribute("src",`images/dice${computerMove}.png`);

    if(urMove === computerMove){
        document.querySelector("h1").innerHTML = "It's a draw";
    }else if(computerMove > urMove){
        document.querySelector("h1").innerHTML = "You lost!";
    }else{
        document.querySelector("h1").innerHTML = "You won!";
    }

}
