import { mutator } from 'satcheljs';
import updateItem from '../actions/updateItem';
import getStore from '../store/store';

export default mutator(updateItem, (actionMessage) => {
    let items = getStore().items.filter(item => item.id == actionMessage.id);
    if (items.length == 1) {
        let item = items[0];
        item.text = actionMessage.text;
    }
});
