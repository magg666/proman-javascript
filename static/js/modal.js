export {showModal}

function showModal() {

    let popUpWindow = document.getElementById('registration');
    let popUpClose = document.getElementsByClassName("close");

    if (popUpWindow.style.display === "block") {
        popUpWindow.style.display = "none";
    }
    popUpWindow.style.display = "block";

    console.log(popUpClose);
    for (let i = 0; i < popUpClose.length; i++) {
        popUpClose[i].addEventListener("click", function () {

            popUpWindow.style.display = "none";
        })
    }

    window.onclick = function (e) {
        if (e.target === popUpWindow) {

            popUpWindow.style.display = "none";
        }
    }
}