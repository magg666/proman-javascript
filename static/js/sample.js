function createCard() {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const cardTitle = document.createElement('h4');
    cardTitle.classList.add('card-title');
    cardTitle.addEventListener('mouseout', function () {
                     cardTitle.contentEditable = 'false';
                     let text = JSON.parse(window.localStorage.getItem('proman-data'));
                     cardTitle.textContent = text.cards[0].title;
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
    return card
}

const cardContainer = document.getElementById('test');
cardContainer.appendChild(createCard());



function createBoard() {

    const boardContainer = document.createElement('div');
    boardContainer.classList.add('board-container', 'container');

    const boardRow = document.createElement('div');
    boardRow.classList.add('board-row', 'row');

    const boardButtonDeleteContainer = document.createElement('div');
    boardButtonDeleteContainer.classList.add('col-1');

    const boardButtonArchiveContainer = document.createElement('div');
    boardButtonArchiveContainer.classList.add('col-1');

    const boardDeleteButton = document.createElement('button');
    boardDeleteButton.classList.add('btn', 'btn-sm');
    boardDeleteButton.setAttribute('title', 'DELETE BOARD');
    boardDeleteButton.insertAdjacentHTML('afterbegin', '<i class="far fa-trash-alt"></i>');

    const boardArchiveButton = document.createElement('button');
    boardArchiveButton.classList.add('btn', 'btn-sm');
    boardArchiveButton.setAttribute('title', 'ARCHIVE BOARD');
    boardArchiveButton.insertAdjacentHTML('afterbegin', '<i class="far fa-file-archive"></i>');

    const boardTitleContainer = document.createElement('div');
    boardTitleContainer.classList.add('board-title-container', 'col-7');

    const boardTitle = document.createElement('h3');
    boardTitle.classList.add('board-title');

    const boardCarouselContainer = document.createElement('div');
    boardCarouselContainer.classList.add('carousel-btn-container', 'col-2');

    const boardCarouselButton = document.createElement('button');
    boardCarouselButton.classList.add('collapse-button');
    boardCarouselButton.setAttribute('type', 'button');
    boardCarouselButton.setAttribute('data-toggle', 'collapse');
    // add data target z id colapse cotainera - dla każdej tablicy inny
    // add aria-controls = idColapsa
    boardCarouselButton.setAttribute('data-target', '#boardCollapse');
    boardCarouselButton.setAttribute('aria-controls', 'boardCollapse');
    boardCarouselButton.setAttribute('aria-expanded', 'false');



}