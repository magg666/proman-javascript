export {makeTextEditableOnClick, makeTextReturnToDefaultOnMouseOut}

function makeSaveButton(element, saveButtonId){
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
        if(element.nextSibling === null){
            makeSaveButton(element, saveButtonId)
        }
    })
}

function makeTextReturnToDefaultOnMouseOut(element, saveButtonId) {
    element.addEventListener('mouseout', function () {
        if(element.isContentEditable){
            let button = document.getElementById(saveButtonId);
            button.remove()
        }
    })
}

function createCard(boardId) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h4');
    cardTitle.classList.add('card-title');

    const cardSubtitle = document.createElement('div');
    cardSubtitle.classList.add('card-subtitle');

    const cardButtonDelete = document.createElement('button');
    cardButtonDelete.classList.add('card-delete');
    cardButtonDelete.setAttribute('title', 'Delete Card');
    cardButtonDelete.insertAdjacentHTML('afterbegin', '<i class="far fa-trash-alt"></i>');

    const cardText = document.createElement('textarea');
    cardText.classList.add('card-text');

    cardSubtitle.appendChild(cardButtonDelete);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardSubtitle);
    cardBody.appendChild(cardText);

    card.appendChild(cardBody);
    const cardContainer = document.getElementById(boardId);
    cardContainer.appendChild(card);
}



function showCards(cards) {

}