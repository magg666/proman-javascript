function makeSaveButton(element, saveButtonId) {
    let saveButton = document.createElement('button');
    saveButton.classList.add('save-button', 'btn', 'btn-info');
    saveButton.setAttribute('id', saveButtonId);
    saveButton.insertAdjacentHTML('afterbegin', '<i class="far fa-save"></i>');
    element.insertAdjacentElement('afterend', saveButton);
    saveButton.addEventListener('click', function () {
        element.contentEditable = 'false';
        saveButton.remove()

    })
}

function makeTextEditableOnClick(element, saveButtonId) {
    element.addEventListener('click', function () {
        element.contentEditable = 'true';
        if (element.nextSibling === null) {
            makeSaveButton(element, saveButtonId)
        }
    })
}

function makeTextReturnToDefaultOnMouseOut(element, saveButtonId) {
    element.addEventListener('mouseout', function () {
        if (element.isContentEditable) {
            let button = document.getElementById(saveButtonId);
            element.contentEditable = 'false';
            button.remove()
        }
    })
}


function changeLabelOfCollapseButton(collapseButton) {
    setTimeout(function () {
        collapseButton.classList.contains('collapsed') ? collapseButton.textContent = 'SHOW' : collapseButton.textContent = 'HIDE'
    }, 200)
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




let deleteButton;
deleteOnClick(deleteButton, boards)





function deleteOnClick(deleteButton, boards) {

    deleteButton.addEventListener('click', function () {
        deleteElement(button, boards);

    })

}
function deleteElement(button, boards) {
    let boardId = button.dataset.boardId;
    let element = document.getElementById(boardId);
    element.remove();
    for (let board of boards)
        if (board.id === boardId) {
            delete board
        }

}