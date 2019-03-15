import {dataHandler} from "./data_handler.js";
import {dom} from "./dom.js";
import {addListenerButtonModal} from "./modal_login.js";

// This function is to initialize the application
function init() {
    // init data
    dataHandler.init();
    // loads the boards to the screen
    dom.loadBoards();
    dom.loadAllCards();
    addListenerButtonModal("register-button", "registration");
    addListenerButtonModal("login-button", "login");
}

init();
