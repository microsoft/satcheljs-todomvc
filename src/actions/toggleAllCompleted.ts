import { action } from 'satcheljs';
import getStore from '../store/store';

let toggleAllCompleted =
    function toggleAllCompleted() {
        // is all completed
        let itemsLeft = getStore().items.reduce<number>((prev, curr) => {
            return curr.completed ? prev : prev + 1;
        }, 0);

        getStore().items.forEach(item => item.completed = itemsLeft > 0 ? true : false );

        getStore().itemsLeft = itemsLeft > 0 ? 0 : getStore().items.length;
    };

export default action("toggleAllCompleted")(toggleAllCompleted);
