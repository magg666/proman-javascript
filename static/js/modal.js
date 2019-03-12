export {addListenerButtonModal}

function addListenerButtonModal(modalButtonId, modalWindowId) {
    let buttonModal = document.getElementById(modalButtonId);
    let popUpWindow = document.getElementById(modalWindowId);
    let popUpClose = document.getElementsByClassName("close");
    buttonModal.addEventListener('click', function handler() {


        if (popUpWindow.style.display === "block") {
            popUpWindow.style.display = "none";
        }
        popUpWindow.style.display = "block";

        for (let i = 0; i < popUpClose.length; i++) {
            popUpClose[i].addEventListener("click", function () {

                popUpWindow.style.display = "none";
            })
        }
    })
}


