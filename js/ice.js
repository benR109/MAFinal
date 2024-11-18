let fname = "";

function green() {
    let greetParagraph = document.getElementById("green");

    let lname = document.getElementById("lname").value;
    fname = document.getElementById("fname").value;  

    greetParagraph.innerHTML = "Welcome to Leroy's " + fname + " " + lname;
}

function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer");


    let chocolateSelected = document.getElementById("chocolate").checked;
    let strawberrySelected = document.getElementById("strawberry").checked;
    let CCSelected = document.getElementById("CC").checked;

    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", Sometimes Leroy's Double Dark Chocalate Chip is just the right thing!";
    }
    else if (strawberrySelected) {
        triviaAnswer.innerHTML = fname + ", In the hot weather of Ketchum Leroy's fresh Strawberry is definitly a fan favorite!";
    }
    else if (CCSelected) {
        triviaAnswer.innerHTML = fname + ", Leroy's famous Cookies and Cream flavor has been one of the most popular for over a decade!";
    }
}

function truth() {
    let truthAnswer = document.getElementById("truth-answer");

    let truth1Selected = document.getElementById("wrong1").checked;
    let lie1Selected = document.getElementById("correct1").checked;
    let truth2Selected = document.getElementById("wrong2").checked;

   
    if (truth1Selected) {
        truthAnswer.innerHTML = "Sorry" + fname + ", you are wrong, just a little bit older than you think";
    }
    else if (lie1Selected) {
        truthAnswer.innerHTML = "Congragulations" + fname + ", you are correct!!";
    }
    else if (truth2Selected) {
        truthAnswer.innerHTML = "Sorry" + fname + ", you are wrong, just a little bit younger than you think";
    }
}