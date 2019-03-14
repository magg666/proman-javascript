import {dataHandler} from "./data_handler.js";
import {createCard,fillCard, setDataAttributes} from "./cards.js";
import {makeTextEditableOnClick, makeTextReturnToDefaultOnMouseOut} from "./cards.js";
import {createBoard, determineColumnsHeaders, determineCardContainersClass, addListenersToElementsTable} from "./create_dom.js";


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
        let realBoardId;



        for(let board of boards) {

            createBoard(board);
            addListenersToElementsTable(board);

        }

        let newCardButtons = document.querySelectorAll('.new-card-button');

    },
    loadCards: function (boardId) {
        // retrieves cards and makes showCards called
        dataHandler.getCardsByBoardId(boardId, this.showCards)
    },
    showCards: function (cards) {
        for(let i=0; i< cards.length; i++){
            let card = cards[i];
            let boardId = card.board_id;
            let statusId = card.status_id;

            let board = document.getElementById('board' + boardId);
            let boardColumns = board.querySelectorAll('.for-cards');
            let properColumn;

            switch (statusId) {
                case 1:
                    properColumn = boardColumns[1];
                    break;
                case 2:
                    properColumn = boardColumns[2];
                    break;
                case 3:
                    properColumn = boardColumns[3];
                    break;
                default:
                    properColumn = boardColumns[0]
            }
            createCard(properColumn, card);
            // cardParts.forEach(setDataAttributes)
            // fillCard(card);
        }



    //
    //     for(let i = 0; i< cards.length; i++){
    //         let boardId = cards[i].board_id;
    //         let cardId = 'card' + i;
    //         if(boardId){
    //         createCard(boardId);
    //         let card = document.querySelector('.card');
    //         let cardTitle = document.querySelector('.card-title');
    //         let cardButtonDelete = document.querySelector('.card-delete');
    //         let cardText = document.querySelector('.card-text');
    //         let cardSaveButtonId = 'card-save-button' + i;
    //
    //         card.setAttribute('id', cardId);
    //         cardTitle.textContent = cards[i].title;
    //
    //         makeTextEditableOnClick(cardText, cardSaveButtonId);
    //         makeTextReturnToDefaultOnMouseOut(cardText, cardSaveButtonId);
    //         }
    //     }
    //     // shows the cards of a board
    //     // it adds necessary event listeners also
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