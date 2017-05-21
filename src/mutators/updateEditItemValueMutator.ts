import { mutator } from 'satcheljs';
import updateEditItemValue from '../actions/updateEditItemValue';
import getStore from '../store/store';

export default mutator(updateEditItemValue, (actionMessage) => {
    getStore().editItemText = actionMessage.text;
});
