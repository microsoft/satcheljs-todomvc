import {mutator} from 'satcheljs';
import getItems from '../store/selectors/getItems';
import removeAllCompleted from '../actions/removeAllCompleted';

export default mutator(removeAllCompleted, () => {
    let index = 0;
    let items = getItems();
    let numberOfSplicedItems = 0;

    if (items.length > 0) {
        let item = items[0];

        while (item != null) {
            if (item.completed) {
                items.splice(index, 1);
                numberOfSplicedItems++;
            } else {
                index++;
            }

            item = items[index];
        }
    }
});