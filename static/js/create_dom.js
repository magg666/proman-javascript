export {createBoard, determineColumnsHeaders, changeLabelOfCollapseButton, determineCardContainersClass, addListenersToElementsTable}


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
    <button class="board-collapse-button" type="button" data-toggle="collapse" aria-expanded="true" data-target="#collapse${board.id}" aria-controls="collapse${board.id}">HIDE</button></div>    
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
    let deleteButton = document.getElementById('btn-delete'+board.id);
    deleteButton.addEventListener('click', function () {
        console.log(deleteButton);
    });


}


// function createBoard(boardsContainer, columnHeaders, columnClasses) {
//     // const boardsContainer = document.querySelector('#boards');
//
//     const board = document.createElement('div');
//     board.setAttribute('class', 'board-container container');
//
//     const rowDiv = document.createElement('div');
//     rowDiv.setAttribute('class', 'row');
//
//     const deleteButtonContainer = document.createElement('div');
//     deleteButtonContainer.setAttribute('class', 'delete-button-container col-2');
//
//     const deleteButton = document.createElement('button');
//     deleteButton.appendChild(document.createTextNode('DELETE'));
//
//     const archiveOrRestoreButtonContainer = document.createElement('div');
//     archiveOrRestoreButtonContainer.setAttribute('class', 'archive-or-restore-board-button-container col-2');
//
//     const archiveOrRestoreButton = document.createElement('button');
//     archiveOrRestoreButton.appendChild(document.createTextNode('ARCHIVE'));
//
//     const boardTitleDiv = document.createElement('div');
//     boardTitleDiv.setAttribute('class', 'title col-6 text-center');
//
//     const titleHeader = document.createElement('h3');
//     titleHeader.appendChild(document.createTextNode('BOARD TITLE'));
//     boardTitleDiv.appendChild(titleHeader);
//
//     const rolledButtonContainer = document.createElement('div');
//     rolledButtonContainer.setAttribute('class', 'carousel-button-container col-2');
//
//     const rolledButton = document.createElement('button');
//     rolledButton.classList.add('board-collapse-button');
//     rolledButton.setAttribute('type', 'button');
//     rolledButton.setAttribute('data-toggle', 'collapse');
// // rolledButton.setAttribute('data-target','#collapseExample');
//     rolledButton.setAttribute('aria-expanded', 'false');
// // rolledButton.setAttribute('aria-controls','collapseExample');
//     rolledButton.appendChild(document.createTextNode('SHOW'));
//     rolledButtonContainer.appendChild(rolledButton);
//
//     const boardCollapseContainer = document.createElement('div');
// // boardCollapseContainer.setAttribute('id','collapseExample');
//     boardCollapseContainer.classList.add('collapse', 'board-collapse-container');
//
//     const rowInButtonContainer = document.createElement('div');
//     rowInButtonContainer.setAttribute('class', 'row');
//
//     const newCardButtonContainer = document.createElement('div');
//     newCardButtonContainer.setAttribute('class', 'add-new-card-button-container col-6');
//
//     const newCardButton = document.createElement('button');
//     newCardButton.classList.add('new-card-button');
//     newCardButton.appendChild(document.createTextNode('ADD NEW CARD'));
//     newCardButtonContainer.appendChild(newCardButton);
//
//     const shareButtonContainer = document.createElement('div');
//     shareButtonContainer.setAttribute('class', 'make-board-private-or-public-button-container col-6');
//
//     const shareButton = document.createElement('button');
//     shareButton.appendChild(document.createTextNode('SHARE/UNSHARE'));
//     shareButtonContainer.appendChild(shareButton);
//
//     const rowWithColumnHeaders = document.createElement('div');
//     rowWithColumnHeaders.setAttribute('class', 'row');
//
// // let columnHeaders = ['NEW','IN PROGRESS','TESTING','DONE'];
//
//
//     for (let i = 0; i < columnHeaders.length; i++) {
//         let columnDiv = document.createElement('div');
//         columnDiv.setAttribute('class', 'status col-3');
//         columnDiv.appendChild(document.createTextNode(columnHeaders[i]));
//         rowWithColumnHeaders.appendChild(columnDiv);
//     }
//
//
//     const rowWithCardDivs = document.createElement('div');
//     rowWithCardDivs.setAttribute('class', 'row');
//
//     for (let i = 0; i < columnHeaders.length; i++) {
//         let cardDiv = document.createElement('div');
//         cardDiv.setAttribute('class', 'for-cards col-3');
//         cardDiv.classList.add(columnClasses[i]);
//         rowWithCardDivs.appendChild(cardDiv);
//     }
//
//     rowInButtonContainer.appendChild(newCardButtonContainer);
//     rowInButtonContainer.appendChild(shareButtonContainer);
//     boardCollapseContainer.appendChild(rowInButtonContainer);
//     boardCollapseContainer.appendChild(rowWithColumnHeaders);
//     boardCollapseContainer.appendChild(rowWithCardDivs);
//
//     archiveOrRestoreButtonContainer.appendChild(archiveOrRestoreButton);
//     deleteButtonContainer.appendChild(deleteButton);
//     rowDiv.appendChild(deleteButtonContainer);
//     rowDiv.appendChild(archiveOrRestoreButtonContainer);
//     rowDiv.appendChild(boardTitleDiv);
//     rowDiv.appendChild(rolledButtonContainer);
//     board.appendChild(rowDiv);
//
//     board.appendChild(boardCollapseContainer);
//     boardsContainer.appendChild(board);

//  const boardsContainer = document.querySelector('#boards');
//  let boardString = '';
//
//  boardString += `
//  <div class="board-container container">
//     <div class="row">
//         <div class="delete-button-container col-1">
//             <button class="btn btn-sm">DELETE</button>
//         </div>
//         <div class="archive-or-restore-board-button-container col-1">
//             <button class="btn">ARCHIVE</button>
//         </div>
//         <div class="title col-7">
//             <h3>BOARD TITLE</h3>
//         </div>
//         <div class="carousel-button-container col-2">
//             <button type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false"
//                     aria-controls="collapseExample">ROZWIŃ
//             </button>
//         </div>
//     </div>
//
//     <div class="collapse" id="collapseExample">
//         <div class="row">
//             <div class="add-new-card-button-container col-6">
//                 <button>ADD NEW CARD</button>
//             </div>
//             <div class="make-board-private-or-public-button-container col-6">
//                 <button>SHARE/UNSHARE</button>
//             </div>
//         </div>
//         <div class="row">
//
//             <div class="status col-3">NEW</div>
//             <div class="status col-3">IN PROGRESS</div>
//             <div class="status col-3">TESTING</div>
//             <div class="status col-3">DONE</div>
//
//         </div>
//         <div class="row">
//             <div class="for-cards col-3"></div>
//             <div class="for-cards col-3"></div>
//             <div class="for-cards col-3"></div>
//             <div class="for-cards col-3"></div>
//         </div>
//     </div>
// </div>
//  `;
//
//  boardsContainer.insertAdjacentHTML('beforeend', boardString);
// }

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


function changeLabelOfCollapseButton(collapseButton) {
    setTimeout(function () {
        collapseButton.classList.contains('collapsed') ? collapseButton.textContent = 'SHOW' : collapseButton.textContent = 'HIDE'
    }, 200)
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