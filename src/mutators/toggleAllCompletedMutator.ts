import { mutator } from 'satcheljs';
import toggleAllCompleted from '../actions/toggleAllCompleted';
import getStore from '../store/store';

export default mutator(toggleAllCompleted, (actionMessage) => {
    // is all completed
    let itemsLeft = getStore().items.reduce<number>((prev, curr) => {
        return curr.completed ? prev : prev + 1;
    }, 0);

    getStore().items.forEach(item => item.completed = itemsLeft > 0 ? true : false );

    getStore().itemsLeft = itemsLeft > 0 ? 0 : getStore().items.length;
});
