import { action } from 'satcheljs';
import Store from '../store/store';

let toggleCompleted =
    function toggleCompleted(id: string) {
        let items = Store.items.filter(item => item.id == id);
        items[0].completed = !items[0].completed;

        Store.itemsLeft = Store.itemsLeft + (items[0].completed ? -1 : 1);
    };

export default action("toggleCompleted")(toggleCompleted);
