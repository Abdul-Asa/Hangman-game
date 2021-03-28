var myDisplay = document.querySelector("#display");
var userInput = document.querySelector("#userIn");
var myButton = document.querySelector("#check");
var myComment = document.querySelector("#comment");
var tryA = document.querySelector("#tryAgain");
var container1 = document.querySelector(".container1");
var container2 = document.querySelector(".container2");
var container3 = document.querySelector(".container3")

container2.style.display="none";
container3.style.display="none";

var meals = ["rice","amala","indomie","fufu",];
var question = [];
var loop = 0;
var answer;

answer = meals[loop];
for(let i=0; i<answer.length;i++){
    question.push("_");
}
myDisplay.innerHTML = question.join(" ");
console.log(answer); 

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
        myComment.innerHTML = "Correct"
        
    } else {
        myComment.innerHTML = "Wrong"
    }
    for(let i=0; i<answer.length;i++){
        if(question[i] == "_"){
            completeWord = false; 
        }
    }
    if(completeWord==true){
        tryA.innerHTML = "Complete 👍🏽";
        container2.style.display="block";
        loop++;
    }
}
    



myButton.addEventListener("click",checkAnswer);



    
