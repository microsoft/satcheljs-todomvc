import { action } from 'satcheljs';
import Store from '../store/store';

let updateItem =
    function updateItem(id: string, text: string) {
        let items = Store.items.filter(item => item.id == id);
        if (items.length == 1) {
            let item = items[0];
            item.text = text;
        }
    };

export default action("updateItem")(updateItem);
