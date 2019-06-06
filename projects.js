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


function handleProjects() {

    handleHomeButton();
    handleQuizApp();
}


$(handleProjects);