import { action } from 'satcheljs';
import getStore from '../store/store';

let toggleEditItem =
    function toggleEditItem(id: string) {
        if (getStore().editItemId != id && id) {
            let items = getStore().items.filter(item => item.id == id);
            getStore().editItemId = id;
            getStore().editItemText = items[0].text;
        } else {
            getStore().editItemId = null;
        }
    };

export default action("toggleEditItem")(toggleEditItem);
