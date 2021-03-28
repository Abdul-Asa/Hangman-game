var myDisplay = document.querySelector("#display");
var userInput = document.querySelector("#userIn");
var myButton = document.querySelector("#check");
var myComment = document.querySelector("#comment")
var tryA = document.querySelector("#tryAgain")

var meals = ["rice","amala","indomie","fufu",];
var question = [];
var loop = 0;
var answer;
var TA = true;
while(TA == true){
    answer = meals[loop];
    for(let i=0; i<answer.length;i++){
        question.push("_");
    }

    myDisplay.innerHTML = question.join(" ");
    console.log(answer); 

    function checkAnswer(){
        var bool = false;
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

    }



    myButton.addEventListener("click",checkAnswer);
}