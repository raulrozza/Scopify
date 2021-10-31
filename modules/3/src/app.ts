import { add, edit, list, remove } from './projects';
import { getExitConfirmation, getMenuOption, printBreak } from './view';

const OPTIONS = {
    LIST: 0,
    CREATE: 1,
    EDIT: 2,
    DELETE: 3,
};

function exitApp() {
    const confirmExit = getExitConfirmation();
    if (confirmExit) process.exit();
}

function executeOption(option: number) {
    switch (option) {
        case OPTIONS.LIST:
            list();
            break;
        case OPTIONS.CREATE:
            add();
            break;
        case OPTIONS.EDIT:
            edit();
            break;
        case OPTIONS.DELETE:
            remove();
            break;
        default:
            exitApp();
    }

    printBreak();
}

export function loop() {
    const option = getMenuOption();
    executeOption(option);
}
