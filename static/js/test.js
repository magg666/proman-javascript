export {main}

function main(){
    let boardContainer = document.getElementById('boards');
    let entryHtml1 = `
    <div id="entry-one">
        <h1>DUMNIE PREZENTUJEMY</h1><br>
        <h1>Wspaniały program do organizowania swojego czasu</h1><br>
        <h1>Stworzony przez Olgę, Magdę, Kaliego i Kacpra</h1><br>
    </div>`;

    boardContainer.insertAdjacentHTML('afterbegin', entryHtml1);



    setTimeout(function (){
      let entryOne = document.getElementById('entry-one');
      entryOne.remove();
      boardContainer.insertAdjacentHTML('afterbegin', entryHtml2);
    }, 10000);

    let entryHtml2 = `
    <div id="entry-two">
        <h1>WIELE WSPANIAŁYCH FUNKCJONALNOŚCI!</h1><br>
        <h1>OSZAŁAMIAJĄCY DESIGN!</h1><br>
        <h1>I NIEZBYT DROGO!</h1><br>
        <h1>PRZED WAMI....</h1><br>
    </div>`;




    setTimeout(function () {
        let entryTwo = document.getElementById('entry-two');
        entryTwo.remove();
        boardContainer.insertAdjacentHTML('afterbegin', entryHtml3);
    }, 22000);

    let entryHtml3 = `<div id="entry-three">
        <h1>PRO-MAN</h1><br>
    </div>`;


    setTimeout(function () {
        let entryThree = document.getElementById('entry-three');
        entryThree.remove()
    }, 30000);


    setTimeout(function () {
        $('#btn0').trigger("click")
    },42000);

    setTimeout(function () {
        $('#btn1').trigger("click")
    },44000);


    setTimeout(function () {
        $('#btn1').trigger("click")
    },46000);











}