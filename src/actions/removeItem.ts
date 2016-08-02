import { action } from 'satcheljs';
import Store from '../store/store';

let removeItem =
    function removeItem(id: string) {
        let index = 0;
        let found = -1;
        let items = Store.items;
        for (var item of items) {
            if (item.id == id) {
                found = index;
                break;
            }

            index++;
        }

        items.splice(index, 1);

        Store.itemsLeft = Math.max(0, Store.itemsLeft - 1);
    };

export default action("removeItem")(removeItem);
