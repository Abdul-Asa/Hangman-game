var myDisplay = document.querySelector("#display");
var userInput = document.querySelectorAll(".userIn");
var myComment = document.querySelector("#comment");
var tryA = document.querySelector("#tryAgain");
var container1 = document.querySelector(".container1");
var container2 = document.querySelector(".container2");
var container3 = document.querySelector(".container3");
var nextButton = document.querySelector("#nextQ");
var exitButton = document.querySelector("#bye");
var buttonPad = document.querySelector(".buttons");
var playerLife = document.querySelector("#liveBar")

container2.style.display="none";
container3.style.display="none";

var meals = ["FRANCE","NIGERIA","JAPAN","BRAZIL","CANADA","MEXICO","GERMANY"];
var question ;
var loop = 0;
var answer;
var lives = 5;  
var str;
    

function playGame(){ 
    // answer = meals[Math.floor(Math.random()*meals.length)];
    for (let i = 0; i < lives; i++) {
        str = str + "&#9829 ";
        playerLife.innerHTML = "Chances : " + str;
    }
    answer = meals[loop];
    myComment.style.display="none";
    tryA.style.display="none";
    container2.style.display="none";
    container3.style.display="none"; 
    buttonPad.style.display="grid"; 
    nextButton.innerHTML="Next";  
    question=[];
   
    for(let i=0; i < answer.length;i++){
        question.push("_");
    }
    myDisplay.innerHTML = question.join(" ");
    console.log(answer); 
}

function checkAnswer(u){
    str = "";
    var bool = false;
    var completeWord = true;
    for(let i=0; i<answer.length;i++){
        if(u.value == answer[i]){
            bool = true;
            question[i] = answer[i];
        }
    }

    myDisplay.innerHTML = question.join(" ");
    if (bool == true) {
        myComment.style.display="block";
        myComment.innerHTML = "Correct"
        
    } else {
        myComment.style.display="block";
        myComment.innerHTML = "Wrong";
        lives--;
        for (let i = 0; i < lives; i++) {
            str = str + "&#9829 ";
            playerLife.innerHTML = "Chances : " + str;
        }

    }
    
    if(lives==0){
        lives=5;
        buttonPad.style.display="none";
        tryA.style.display="block";
        tryA.innerHTML = "Failed 😔";
        playerLife.innerHTML = "&#128148"
        container2.style.display="block";
        nextButton.innerHTML="Try again";
    }
    // console.log(lives)
    
    for(let i=0; i<answer.length;i++){
        if(question[i] == "_"){
            completeWord = false; 
        }
    }
    if(completeWord == true){
        tryA.style.display="block";
        tryA.innerHTML = "Complete 👍🏽";
        container2.style.display="block";
        loop++;
        if(loop==meals.length){
            nextButton.style.display="none";

        }
    }


} 

function byeBye(){
    container1.style.display="none";
    container2.style.display="none";
    container3.style.display= "block";
}

function callBack(event){
   
    checkAnswer(event.target);
}


playGame();

nextButton.addEventListener("click",playGame);
for(let i=0;i<userInput.length;i++){
    userInput[i].addEventListener("click",callBack);
}

exitButton.addEventListener("click", byeBye);







    
