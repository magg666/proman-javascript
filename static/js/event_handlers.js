export {drag, editableOnClick, deleteDataOnClick}
import {dataHandler} from "./data_handler.js";


// drag function
function drag(element){
    element.addEventListener('dragstart', function (ev) {
        ev.dataTransfer.setData("text/plain", ev.target.id);
    });
}

// text rename handler
function editableOnClick(element, data) {
    element.addEventListener('dblclick', function () {
        if(!element.isContentEditable){
            element.contentEditable = 'true';
            updateText(element, data)
        }
    })
}

function updateText(element, data){
    let saveButton = document.createElement('button');
    saveButton.classList.add('save-button','float-right', 'btn', 'btn-sm', 'btn-success');
    saveButton.setAttribute('title', 'SAVE TEXT or ESC TO CANCEL');
    saveButton.insertAdjacentHTML('afterbegin', '<i class="far fa-save"></i>');

    saveButton.addEventListener('click', function () {
        element.contentEditable = 'false';
        saveButton.remove();
        data.title = element.textContent;
        dataHandler.synchronise()
    });

    element.parentElement.parentElement.appendChild(saveButton);
}
//------------------------

// delete handler

function deleteDataOnClick(element, dataId, data) {
    element.addEventListener('click', function () {
        let confirmation = confirm("Do you really want delete card?\nIt's irreversible...");
        confirmation === true ? deleteDataAndSave(dataId, data): null;
    })
}

function deleteDataAndSave(dataId, data) {
    let dataToDelete = document.getElementById(dataId);
    let id = parseInt(dataToDelete.dataset.cardId, 10);
    dataToDelete.remove();
    dataHandler.deleteData(data, id);
    dataHandler.synchronise()
}



// make one card/board
// for one card/board add event handlery

// --------------- BOARD
// DELETE
// ARCHIVE
// SHOW/HIDE
// ADD NEW CARD
// SHARE/UNSHARE
// RENAME TITLE

//-----------------CARD
// DELETE
// RENAME TITLE
// CHANGE TEXT
// ARCHIVE
// CHANGE STATUS





// let deleteButton;
// deleteOnClick(deleteButton, boards)
//
//
//
//
//
// function deleteOnClick(deleteButton, boards) {
//
//     deleteButton.addEventListener('click', function () {
//         deleteElement(button, boards);
//
//     })
//
// }
// function deleteElement(button, boards) {
//     let boardId = button.dataset.boardId;
//     let element = document.getElementById(boardId);
//     element.remove();
//     for (let board of boards)
//         if (board.id === boardId) {
//             delete board
//         }
//
// }