import {dataHandler} from "./data_handler.js";
import {dom} from "./dom.js";
import {addListenerButtonModal} from "./modal_login.js";
import {main} from "./test.js";

// This function is to initialize the application
function init() {
    main();

    // init data
    // dataHandler.init();
    setTimeout(function (){
        dataHandler.init()
    }, 40000);
    setTimeout(function (){
        dom.loadBoards()
    }, 40000)

    // loads the boards to the screen
    ;
    // addListenerButtonModal("register-button", "registration");
    // addListenerButtonModal("login-button", "login");
}

init();
