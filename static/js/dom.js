import {dataHandler} from "./data_handler.js";
import {createCard} from "./create_dom.js";
import {makeTextEditableOnClick, makeTextReturnToDefaultOnMouseOut} from "./cards.js";

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

        let boardsDiv = document.querySelector('#boards');

        for(let board of boards) {
            createCard();
        }
    },
    loadCards: function (boardId) {
        // retrieves cards and makes showCards called
        dataHandler.getCardsByBoardId(boardId, this.showCards)
    },
    showCards: function (cards) {

        for(let i = 0; i< cards.length; i++){
            let boardId = 'board' + i;
            createCard(boardId);
            let card = document.querySelector('.card');
            let cardTitle = document.querySelector('.card-title');
            let cardButtonDelete = document.querySelector('.card-delete');
            let cardText = document.querySelector('.card-text');
            let cardSaveButtonId = 'card-save-button' + i;

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
