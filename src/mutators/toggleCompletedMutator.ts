import { mutator } from 'satcheljs';
import toggleCompleted from '../actions/toggleCompleted';
import getStore from '../store/store';

export default mutator(toggleCompleted, (actionMessage) => {
    let items = getStore().items.filter(item => item.id == actionMessage.id);
    items[0].completed = !items[0].completed;

    getStore().itemsLeft = getStore().itemsLeft + (items[0].completed ? -1 : 1);
});
