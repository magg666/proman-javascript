let newBoardModal = document.querySelector('#newBoardModal');
let newBoardBtn = document.querySelector('#newBoardBtn');
let modalCloseButton = document.querySelector('#modalCloseButton');

newBoardBtn.addEventListener('click', openModal);
modalCloseButton.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
	newBoardModal.style.display = "block";
}

function closeModal() {
	newBoardModal.style.display = "none";
}

function outsideClick(e) {
	if (e.target === newBoardModal) {
		newBoardModal.style.display = "none";
	}
}


// multiplying boards

function showAllBoards(data) {
	let boards = data.boards;

	for (board of boards) {
		createBoard()
	}
}