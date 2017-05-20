import { action } from 'satcheljs';
import getStore from '../store/store';

let updateEditItemValue =
    function updateEditItemValue(text: string) {
        getStore().editItemText = text;
    };

export default action("updateEditItemValue")(updateEditItemValue);
