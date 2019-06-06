function handleViewProjectsButton() {

    $('.button-projects').click(e => {
        window.location = "projects.html";
    })

}


function handlePortfolio() {

    handleViewProjectsButton();
}


$(handlePortfolio);