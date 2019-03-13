export {
    createBoard,
    determineColumnsHeaders,
    determineCardContainersClass,
    addListenersToElementsTable
}


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


function createBoard(board) {
    const boardsContainer = document.querySelector('#boards');
    let boardId = "board" + board.id;
    let boardTable = document.createElement('div');
    boardTable.setAttribute('class', 'board-container container');
    boardTable.setAttribute('id', boardId);

    let rowBoardTitle = `<div class="row">
    <div class="delete-button-container col-2">
    <button id="btn-delete${board.id}">DELETE</button></div>    
    <div class="archive-or-restore-board-button-container col-2">
    <button>ARCHIVE</button></div>    
    <div class="title col-6 text-center">
    <h3>BOARD TITLE</h3></div>        
    <div class="carousel-button-container col-2">
    <button class="board-collapse-button" id="btn${board.id}" type="button" data-toggle="collapse" aria-expanded="true" data-target="#collapse${board.id}" aria-controls="collapse${board.id}">HIDE</button></div>    
    </div>`;
    boardTable.insertAdjacentHTML('beforeend', rowBoardTitle);

    let divBoardBody = `<div class="board-collapse-container collapse" id="collapse${board.id}">
    <div class="row">
    <div class="add-new-card-button-container col-6">
    <button class="new-card-button">ADD NEW CARD</button></div>
    <div class="make-board-private-or-public-button-container col-6">
    <button>SHARE/UNSHARE</button></div></div>
    
    <div class="row">
    <div class="status col-3">New</div>
    <div class="status col-3">In progress</div>
    <div class="status col-3">Testing</div>
    <div class="status col-3">Done</div>
    </div>
    
    <div class="row">
    <div class="for-cards col-3 card-container0"></div>
    <div class="for-cards col-3 card-container1"></div>
    <div class="for-cards col-3 card-container2"></div>
    <div class="for-cards col-3 card-container3"></div>
    </div>
    </div>`;

    boardTable.insertAdjacentHTML('beforeend', divBoardBody);
    let boardTitle = boardTable.querySelector('h3');
    boardTitle.textContent = board.title;
    boardsContainer.appendChild(boardTable);

}

function addListenersToElementsTable(board) {
    let boardId = board.id;
    let boardTable = document.getElementById(boardId);
    let deleteButton = document.getElementById('btn-delete' + board.id);

    deleteButton.addEventListener('click', function () {
        console.log(deleteButton);
    });

    let collapseButton = document.getElementById("btn" + board.id);
    collapseButton.addEventListener('click', function () {
        let collapseContent = document.getElementById("collapse" + board.id);
        setTimeout(function () {
            collapseButton.classList.contains('collapsed') ? collapseButton.textContent = 'HIDE' : collapseButton.textContent = 'SHOW'
        }, 200)
    });
}

function determineColumnsHeaders(statuses) {
    let columnsHeaders = [];
    for (let status of statuses) {
        columnsHeaders.push(status.name)
    }
    return columnsHeaders
}

function determineCardContainersClass(statuses) {
    let columnsClasses = [];
    for (let status of statuses) {
        columnsClasses.push('card-container' + status.id)
    }
    return columnsClasses
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

function dropOnlyOnEmpty(ev, cellId) {
    let content = document.getElementById(cellId);
    if (content.innerText.trim() === '') {
        return dropCopy(ev)
    }
}