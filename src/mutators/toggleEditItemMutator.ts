import { mutator } from 'satcheljs';
import toggleEditItem from '../actions/toggleEditItem';
import getStore from '../store/store';

export default mutator(toggleEditItem, (actionMessage) => {
    let { id } = actionMessage;

    if (getStore().editItemId != id && id) {
        let items = getStore().items.filter(item => item.id == id);
        getStore().editItemId = id;
        getStore().editItemText = items[0].text;
    } else {
        getStore().editItemId = null;
    }
});

