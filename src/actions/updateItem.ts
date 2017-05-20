import { action } from 'satcheljs';
import getStore from '../store/store';

let updateItem =
    function updateItem(id: string, text: string) {
        let items = getStore().items.filter(item => item.id == id);
        if (items.length == 1) {
            let item = items[0];
            item.text = text;
        }
    };

export default action("updateItem")(updateItem);
