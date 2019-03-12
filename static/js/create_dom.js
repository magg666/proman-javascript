export {createCard}
import {makeTextEditableOnClick} from "./cards.js";

function createCard() {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h4');
    cardTitle.classList.add('card-title');
    cardTitle.addEventListener('mouseout', function () {
                     cardTitle.contentEditable = 'false';

                 });
    cardTitle.addEventListener('click', function () {
                     cardTitle.contentEditable = 'true'
                 });


    const cardSubtitle = document.createElement('div');
    cardSubtitle.classList.add('card-subtitle');


    const cardButtonDelete = document.createElement('button');
    cardButtonDelete.classList.add('card-delete');
    cardButtonDelete.setAttribute('title', 'Delete Card');
    cardButtonDelete.insertAdjacentHTML('afterbegin', '<i class="far fa-trash-alt"></i>');

    const cardText = document.createElement('textarea');
    cardText.classList.add('card-text');
    cardText.addEventListener('mouseout', function () {
                    cardText.contentEditable = 'false';
                });
    cardText.addEventListener('dblclick', function () {
                    cardText.contentEditable = 'true';
                });


    cardSubtitle.appendChild(cardButtonDelete);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardSubtitle);
    cardBody.appendChild(cardText);

    card.appendChild(cardBody);
    const cardContainer = document.getElementById('boards');
    cardContainer.appendChild(card);
}

function createBoard() {

 const boardsContainer = document.querySelector('#boards');
 let boardString = '';

 boardString += `
 <div class="board-container container">
    <div class="row">
        <div class="delete-button-container col-1">
            <button class="btn btn-sm">DELETE</button>
        </div>
        <div class="archive-or-restore-board-button-container col-1">
            <button class="btn">ARCHIVE</button>
        </div>
        <div class="title col-7">
            <h3>BOARD TITLE</h3>
        </div>
        <div class="carousel-button-container col-2">
            <button type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false"
                    aria-controls="collapseExample">ROZWIŃ
            </button>
        </div>
    </div>

    <div class="collapse" id="collapseExample">
        <div class="row">
            <div class="add-new-card-button-container col-6">
                <button>ADD NEW CARD</button>
            </div>
            <div class="make-board-private-or-public-button-container col-6">
                <button>SHARE/UNSHARE</button>
            </div>
        </div>
        <div class="row">

            <div class="status col-3">NEW</div>
            <div class="status col-3">IN PROGRESS</div>
            <div class="status col-3">TESTING</div>
            <div class="status col-3">DONE</div>

        </div>
        <div class="row">
            <div class="for-cards col-3"></div>
            <div class="for-cards col-3"></div>
            <div class="for-cards col-3"></div>
            <div class="for-cards col-3"></div>
        </div>
    </div>
</div>
 `;

 boardsContainer.insertAdjacentHTML(boardString);

 //
 // const board = createDiv();
 // addClass(board, 'board-container container');
 //
 // const rowDiv = createDiv();
 // addClass(rowDiv, 'row');



}