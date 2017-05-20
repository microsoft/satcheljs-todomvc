import { action } from 'satcheljs';
import getStore from '../store/store';

let toggleCompleted =
    function toggleCompleted(id: string) {
        let items = getStore().items.filter(item => item.id == id);
        items[0].completed = !items[0].completed;

        getStore().itemsLeft = getStore().itemsLeft + (items[0].completed ? -1 : 1);
    };

export default action("toggleCompleted")(toggleCompleted);
