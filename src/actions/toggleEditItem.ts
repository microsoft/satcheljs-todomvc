import { action } from 'satcheljs';
import Store from '../store/store';

let toggleEditItem =
    function toggleEditItem(id: string) {
        if (Store.editItemId != id && id) {
            let items = Store.items.filter(item => item.id == id);
            Store.editItemId = id;
            Store.editItemText = items[0].text;
        } else {
            Store.editItemId = null;
        }
    };

export default action("toggleEditItem")(toggleEditItem);
