import { action } from 'satcheljs';
import Store from '../store/store';

let toggleAllCompleted =
    function toggleAllCompleted() {
        // is all completed
        let itemsLeft = Store.items.reduce<number>((prev, curr) => {
            return curr.completed ? prev : prev + 1;
        }, 0);

        Store.items.forEach(item => item.completed = itemsLeft > 0 ? true : false );

        Store.itemsLeft = itemsLeft > 0 ? 0 : Store.items.length;
    };

export default action("toggleAllCompleted")(toggleAllCompleted);
