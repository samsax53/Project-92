scoreP1 = 0;
scoreP2 = 0;

questionTurn = "player1";
answerTurn = "player2";

name1 = localStorage.getItem("player1");
name2 = localStorage.getItem("player2");

qtName = name1;
atName = name2;

document.getElementById("playerDisplay1").innerHTML = "<h3>" + name1 + ": " + "</h3>"; 
document.getElementById("playerDisplay2").innerHTML = "<h3>" + name2 + ": " + "</h3>";
document.getElementById("playerScore1").innerHTML = scoreP1;
document.getElementById("playerScore2").innerHTML = scoreP2;
document.getElementById("QuestionTurn").innerHTML = "Question Turn: " + name1;
document.getElementById("AnswerTurn").innerHTML = "Answer Turn: " + name2;
document.getElementById("output").style.display = "none";
consoleStats();

function consoleStats() {
    console.log("Stats:");
    console.log("");
    console.log(name1 + ": " + scoreP1);
    console.log(name2 + ": " + scoreP2);
    console.log("");
    console.log("Question Turn: " + qtName);
    console.log("Answer Turn: " + atName);
    console.log("");
}

function clearAlrt() {
    document.getElementById("alertLbl").style.display = "none";
}

function sendBtn() {

    userInput1  = document.getElementById("wordInput1").value;
    userInput2  = document.getElementById("wordInput2").value;
    
    if((userInput1=="") && (userInput2=="")){
        document.getElementById("alertLbl").innerHTML = "Please insert the numbers"
        document.getElementById("alertLbl").style.display = "inline-block";
        setTimeout(clearAlrt, 2000);
    }
    
    if((userInput1!="") && (userInput2=="")){
        document.getElementById("alertLbl").innerHTML = "Please insert the second number"
        document.getElementById("alertLbl").style.display = "inline-block";
        setTimeout(clearAlrt, 2000);
    }
    
    if((userInput1=="") && (userInput2!="")){
        document.getElementById("alertLbl").innerHTML = "Please insert the first number"
        document.getElementById("alertLbl").style.display = "inline-block";
        setTimeout(clearAlrt, 2000);
    }
    
    if((userInput1!="") && (userInput2!="")){
        questionEnt = userInput1 + " × " + userInput2
        answerVal = userInput1 * userInput2;
        
        questionTag = "<h4 id='questionDisplay'> Q. " + questionEnt + "</h4>"
        inputTag = "<br>" + "<input type='text' id='answerInput' placeholder='Type here'>";
        btnTag = "<br> <br>" + "<button class='btn btn-primary' onclick='checkWrd()'> Check </button>";
        outputTags = questionTag + inputTag + btnTag;
        
        document.getElementById("inputDiv").style.display = "none";
        document.getElementById("output").innerHTML = outputTags;
        document.getElementById("output").style.display = "inline-block";
        document.getElementById("wordInput1").value = "";
        document.getElementById("wordInput2").value = "";
    }
    
}

function checkWrd() {

    ansInput = document.getElementById("answerInput").value;

    if(ansInput==answerVal) 
    {
        if(answerTurn=="player1"){
            scoreP1 = scoreP1 + 1;
            document.getElementById("playerScore1").innerHTML = scoreP1;
        } else {
            scoreP2 = scoreP2 + 1;
            document.getElementById("playerScore2").innerHTML = scoreP2;
        }        
    }

    if(questionTurn=="player1"){
        questionTurn = "player2";
        qtName = name2;
        document.getElementById("QuestionTurn").innerHTML = "Question Turn: " + name2;
    } else {
        questionTurn = "player1";
        qtName = name1;
        document.getElementById("QuestionTurn").innerHTML = "Question Turn: " + name1;
    }
    
    if(answerTurn=="player1"){
        answerTurn = "player2";
        atName = name2;
        document.getElementById("AnswerTurn").innerHTML = "Answer Turn: " + name2;
    } else {
        answerTurn = "player1";
        atName = name1;
        document.getElementById("AnswerTurn").innerHTML = "Answer Turn: " + name1;
    }

    document.getElementById("output").innerHTML = "";
    consoleStats();
    document.getElementById("output").style.display = "none";
    document.getElementById("inputDiv").style.display = "block";

}