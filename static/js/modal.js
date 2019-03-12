export {addListenerButtonModal}

function addListenerButtonModal(modalButtonId, modalWindowId) {
    let buttonModal = document.getElementById(modalButtonId);

    buttonModal.addEventListener('click', function handler() {
        let popUpWindow = document.getElementById(modalWindowId);
        let popUpClose = document.getElementsByClassName("close");

        popUpWindow.style.display = "block";

        for (let i = 0; i < popUpClose.length; i++) {
            popUpClose[i].addEventListener("click", function () {
                popUpWindow.style.display = "none";
            })
        }
    })
}


