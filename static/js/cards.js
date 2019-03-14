import {dataHandler} from "./data_handler.js";

export {createCard, fillCard, setDataAttributes}

function createCard(boardProperColumn, card_data) {

    let cardTemplate = `
<div class="card">
    <div class="card-body">
        <div class="card-subtitle">
            <button class="card-delete-button btn btn-sm btn-danger" title="DELETE"><i class="far fa-trash-alt"></i></button>
            <button class="card-archive-button btn btn-sm btn-warning" title="ARCHIVE"><i class="far fa-file-archive"></i></button>
        </div>    
        <h4 class="card-text"></h4>        
    </div>
</div>
`;
    boardProperColumn.insertAdjacentHTML('afterbegin',cardTemplate);
    fillCard(boardProperColumn.firstElementChild, card_data)
}


function fillCard(card, card_data) {

    let cardId = 'card' + card_data.id;
    card.setAttribute('id', cardId);
    card.setAttribute('draggable', 'true');
    drag(card);

    let cardText = card.querySelector('.card-text');
    cardText.textContent = card_data.title;
    editableOnClick(cardText, card_data);

    let cardDeleteButton = card.querySelector('.card-delete-button');
    deleteDataOnClick(cardDeleteButton, cardId, "cards");

    let cardArchiveButton = card.querySelector('card-archive-button');

    setDataAttributes(card, card_data);
    setDataAttributes(cardText, card_data);
    setDataAttributes(cardDeleteButton, card_data);
}

function setDataAttributes(item, card_data){
    const myDataAttributes = [
        {attr: "data-card-id", value: card_data.id},
        {attr: "data-board-id", value: card_data.board_id},
        {attr: "data-status-id", value: card_data.status_id},
        {attr: "data-order", value: card_data.order},
    ];
    for(let {attr, value} of myDataAttributes){
        item.setAttribute(attr, value)
    }
}

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


