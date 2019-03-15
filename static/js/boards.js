export {createBoard, addListenersToElementsTable}
import {drop, allowDrop} from "./event_handlers.js";


function createBoard(board) {
    const boardsContainer = document.querySelector('#boards');
    let boardId = "board" + board.id;
    let boardTable = document.createElement('div');
    boardTable.setAttribute('class', 'board-container container');
    boardTable.setAttribute('id', boardId);

    let rowBoardTitle = `<div class="row row-one">
    <div class="delete-button-container col-2">
    <button class="btn-board btn btn-outline-danger btn-lg" id="btn-delete${board.id}">DELETE</button></div>    
    <div class="archive-or-restore-board-button-container col-2">
    <button class="btn-board btn btn-outline-warning btn-lg">ARCHIVE</button></div>    
    <div class="title col-6 text-center">
    <h3>BOARD TITLE</h3></div>        
    <div class="carousel-button-container col-2">
    <button class="btn-board btn btn-info board-collapse-button" id="btn${board.id}" type="button" data-toggle="collapse" aria-expanded="true" data-target="#collapse${board.id}" aria-controls="collapse${board.id}">SHOW</button></div>    
    </div>`;
    boardTable.insertAdjacentHTML('beforeend', rowBoardTitle);

    let divBoardBody = `<div class="board-collapse-container collapse" id="collapse${board.id}">
    <div class="row">
    <div class="add-new-card-button-container col-6">
    <button class="btn-lg btn btn-outline-primary new-card-button">ADD NEW CARD</button></div>
    <div class="make-board-private-or-public-button-container col-6">
    <button class="float-right btn-lg btn btn-outline-success new-card-button">SHARE/UNSHARE</button></div></div>
    
    <div class="row row-two">
    <div class="status col-3">New</div>
    <div class="status col-3">In progress</div>
    <div class="status col-3">Testing</div>
    <div class="status col-3">Done</div>
    </div>
    
    <div class="row">
    <div class="for-cards col-3 card-container0" data-board-id=${board.id} data-status-id="0"></div>
    <div class="for-cards col-3 card-container1" data-board-id=${board.id} data-status-id="1"></div>
    <div class="for-cards col-3 card-container2" data-board-id=${board.id} data-status-id="2"></div>
    <div class="for-cards col-3 card-container3" data-board-id=${board.id} data-status-id="3"></div>
    </div>
    </div>`;

    boardTable.insertAdjacentHTML('beforeend', divBoardBody);
    let boardTitle = boardTable.querySelector('h3');
    boardTitle.textContent = board.title;
    boardsContainer.appendChild(boardTable);



}

function addListenersToElementsTable(board) {
    let deleteButton = document.getElementById('btn-delete' + board.id);

    deleteButton.addEventListener('click', function () {
        console.log(deleteButton);
    });

    let collapseButton = document.getElementById("btn" + board.id);
    collapseButton.addEventListener('click', function () {
        let collapseContent = document.getElementById("collapse" + board.id);
        setTimeout(function () {
            collapseButton.classList.contains('collapsed') ? collapseButton.textContent = 'SHOW' : collapseButton.textContent = 'HIDE';
        }, 200)
    });

    let columns = document.querySelectorAll('.for-cards');

    for (let column of columns) {
        drop(column);
        allowDrop(column);
    }

}
