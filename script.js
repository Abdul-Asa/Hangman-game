myDisplay = document.querySelector("#display");
userInput = document.querySelector("#userIn");
myButton = document.querySelector("#check");
myComment = document.querySelector("#comment")
//Query selector of all the fields

var meals = ["rice","amala","indomie","fufu",];
var randomPick = Math.floor(Math.random()*meals.length);
var answer = meals[randomPick];
var question = [];
//initialize all the variables used

for(let i=0; i<answer.length;i++){
    question.push("_");
}
//Use a loop to create the dashes

myDisplay.innerHTML = question.join(" ");
console.log(answer); 

function checkAnswer(){
    var bool = false;
    for(let i=0; i<answer.length;i++){
        if(userInput.value == answer[i]){
            bool = true;
            question[i] = answer[i];
            //If it matches, it removes the dash and replaces it with the right answer
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