import {dataHandler} from "./data_handler.js";
import {createCard} from "./cards.js";
import {createBoard, addListenersToElementsTable} from "./boards.js";


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

        for(let board of boards) {

            createBoard(board);
            addListenersToElementsTable(board);
            let boardId = board.id;
            dom.loadCards(boardId)
        }
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
        }
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
