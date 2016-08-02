import { action } from 'satcheljs';
import Store from '../store/store';

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

let addItem =
    function addItem(text: string) {
        Store.items.push({
            id: guid(),
            text: text,
            completed: false
        });

        Store.textboxValue = '';
        Store.itemsLeft = Store.itemsLeft + 1;
    };

export default action("addItem")(addItem);
