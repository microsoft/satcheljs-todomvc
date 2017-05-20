import getStore from '../store/store';
import { mutator } from 'satcheljs';
import localAddItem from '../actions/localAddItem';

export default mutator(localAddItem, (actionMessage) => {
    getStore().items.push({
        id: actionMessage.id,
        text: actionMessage.text,
        completed: actionMessage.completed
    });

    getStore().textboxValue = '';
    getStore().itemsLeft = getStore().itemsLeft + 1;
});