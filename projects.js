function handleHomeButton() {

    $('.button-home').click(e => {

        window.location = "index.html";
    })
}


function handleQuizApp() {

    $('.quizapp-try').click(e => {
        window.open("https://lesarrow.github.io/baseball-quiz-app/");
    });

    $('.quizapp-repo').click(e => {
        window.open("https://github.com/lesarrow/baseball-quiz-app");
    });
}


function handleMLBWagerApp() {

    $('.mlbwagerapp-try').click(e => {
        window.open("https://lesarrow.github.io/mlbwager/");
    });

    $('.mlbwagerapp-repo').click(e => {
        window.open("https://github.com/lesarrow/mlbwager");
    });
}


function handleProjects() {

    handleHomeButton();
    handleQuizApp();
    handleMLBWagerApp();
}


$(handleProjects);