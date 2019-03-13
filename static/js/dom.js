import {dataHandler} from "./data_handler.js";
import {createCard} from "./cards.js";
import {makeTextEditableOnClick, makeTextReturnToDefaultOnMouseOut} from "./cards.js";
import {createBoard, determineColumnsHeaders, changeLabelOfCollapseButton, determineCardContainersClass} from "./create_dom.js";


export {dom}

// It uses data_handler.js to visualize elements
let dom = {
    loadBoards: function () {
        // retrieves boards and makes showBoards called
        dataHandler.getBoards(this.showBoards);
    },
    showBoards: function (boards) {
        // shows boards appending them to #boards div
        // it adds necessary event listeners also
        let columnsHeaders = dataHandler.getStatuses(determineColumnsHeaders);
        let columnsClasses = dataHandler.getStatuses(determineCardContainersClass);



        for(let i = 0; i < boards.length; i++) {
            const boardsContainer = document.querySelector('#boards');
            createBoard(boardsContainer, columnsHeaders, columnsClasses);
        }

        let newCardButtons = document.querySelectorAll('.new-card-button');
        let newCardContainers = document.querySelectorAll('.card-container-1');

        for(let j = 0; j < boards.length; j++){

            let boardId = 'board' + boards[j].id;
            let allBoards = document.querySelectorAll('.board-container');

            allBoards[j].setAttribute('id', boardId);

            let boardCollapseContainers = document.querySelectorAll('.board-collapse-container');
            let collapseId = 'collapse' + boards[j].id;
            boardCollapseContainers[j].setAttribute('id', collapseId);

            let rolledButtons = document.querySelectorAll('.board-collapse-button');
            rolledButtons[j].setAttribute('data-target', '#' + collapseId);
            rolledButtons[j].setAttribute('aria-controls', collapseId);
            rolledButtons[j].addEventListener('click', function () {
                changeLabelOfCollapseButton(rolledButtons[j])
            });
            newCardButtons[j].addEventListener('click', function () {
                createCard(boardId)
            })


        }
        let cardContainers = document.querySelectorAll('.for-cards');
        for(let k = 0; k< cardContainers.length; k++){
            let cardContainerId = 'card-container' + k;
            cardContainers[k].setAttribute('id', cardContainerId);
            cardContainers[k].addEventListener('dragover', function () {
                allowDrop(event)
            });
            cardContainers[k].addEventListener('drop', function () {
                drop(event)
            });
        }




    },
    loadCards: function (boardId) {
        // retrieves cards and makes showCards called
        dataHandler.getCardsByBoardId(boardId, this.showCards)
    },
    showCards: function (cards) {

        for(let i = 0; i< cards.length; i++){
            let boardId = 'board' + i;
            let cardId = 'card' + i;
            createCard(boardId);
            let card = document.querySelector('.card');
            let cardTitle = document.querySelector('.card-title');
            let cardButtonDelete = document.querySelector('.card-delete');
            let cardText = document.querySelector('.card-text');
            let cardSaveButtonId = 'card-save-button' + i;

            card.setAttribute('id', cardId);
            cardTitle.textContent = cards[i].title;

            makeTextEditableOnClick(cardText, cardSaveButtonId);
            makeTextReturnToDefaultOnMouseOut(cardText, cardSaveButtonId);

        }
        // shows the cards of a board
        // it adds necessary event listeners also
    },
    appendToElement: function (elementToExtend, textToAppend, prepend = false) {
        // function to append new DOM elements (represented by a string) to an existing DOM element
        let fakeDiv = document.createElement('div');
        fakeDiv.innerHTML = textToAppend.trim();

        for (childNode of fakeDiv.childNodes) {
            if (prepend) {
                elementToExtend.prependChild(childNode);
            } else {
                elementToExtend.appendChild(childNode);
            }
        }

        return elementToExtend.lastChild;
    }
    // here comes more features
};

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData('text/plain');
    ev.target.appendChild(document.getElementById(data))
}

function dropCopy(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("Text");
    let copySymbol = document.createElement("span");
    let original = document.getElementById(data);
    copySymbol.textContent = original.textContent;
    copySymbol.classList = original.classList;
    ev.target.appendChild(copySymbol);
    return copySymbol.textContent
}