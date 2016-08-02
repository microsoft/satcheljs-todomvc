import { action } from 'satcheljs';
import Store from '../store/store';

let removeAllCompleted =
    function removeAllCompleted() {
        let index = 0;
        let items = Store.items;
        let numberOfSplicedItems = 0;

        if (items.length > 0) {
            let item = items[0];

            while (item != null) {
                if (item.completed) {
                    items.splice(index, 1);
                    numberOfSplicedItems++;
                } else {
                    index++;
                }

                item = items[index];
            }
        }
    };

export default action("removeAllCompleted")(removeAllCompleted);
