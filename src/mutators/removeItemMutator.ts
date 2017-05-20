import { mutator } from 'satcheljs';
import remoteItem from '../actions/removeItem';
import getStore from '../store/store';

export default mutator(remoteItem, (actionMessage) => {
    let index = 0;
    let found = -1;
    let items = getStore().items;
    for (var item of items) {
        if (item.id == actionMessage.id) {
            found = index;
            break;
        }

        index++;
    }

    items.splice(index, 1);

    getStore().itemsLeft = Math.max(0, getStore().itemsLeft - 1);
});

