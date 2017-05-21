import { mutator } from 'satcheljs';
import updateTextboxValue from '../actions/updateTextboxValue';
import getStore from '../store/store';

export default mutator(updateTextboxValue, (actionMessage) => {
    getStore().textboxValue = actionMessage.text;
});
