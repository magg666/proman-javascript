import {dataHandler} from "./data_handler.js";
import {dom} from "./dom.js";
import {showModal} from "./modal.js";

// This function is to initialize the application
function init() {
    // init data
    dataHandler.init();
    // loads the boards to the screen
    dom.loadBoards();
   showModal();
}

init();
