var myDisplay = document.querySelector("#display");
var userInput = document.querySelector("#userIn");
var myButton = document.querySelector("#check");
var myComment = document.querySelector("#comment");
var tryA = document.querySelector("#tryAgain");
var container1 = document.querySelector(".container1");
var container2 = document.querySelector(".container2");
var container3 = document.querySelector(".container3");
var nextButton = document.querySelector("#nextQ");
var exitButton = document.querySelector("#bye");

container2.style.display="none";
container3.style.display="none";

var meals = ["rice","amala","indomie","fufu",];
var question ;
var loop = 0;
var answer;

function playGame(){
    myComment.style.display="none";
    tryA.style.display="none";
    container2.style.display="none";
    container3.style.display="none";    
    question=[];
    answer = meals[loop];
    for(let i=0; i<answer.length;i++){
        question.push("_");
    }
    myDisplay.innerHTML = question.join(" ");
    console.log(answer); 
}

function checkAnswer(){
    var bool = false;
    var completeWord = true;
    for(let i=0; i<answer.length;i++){
        if(userInput.value == answer[i]){
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
        myComment.innerHTML = "Wrong"
    }
    for(let i=0; i<answer.length;i++){
        if(question[i] == "_"){
            completeWord = false; 
        }
    }
    if(completeWord==true){
        tryA.style.display="block";
        tryA.innerHTML = "Complete 👍🏽";
        container2.style.display="block";
        loop++;

        if(loop == meals.length){
            nextButton.style.display="none";
        }
    }

} 

function byeBye(){
    container1.style.display="none";
    container2.style.display="none";
    container3.style.display= "block";
}
playGame();

nextButton.addEventListener("click",playGame)
myButton.addEventListener("click",checkAnswer);
exitButton.addEventListener("click", byeBye);







    
