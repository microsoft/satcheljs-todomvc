import { action } from 'satcheljs';
import Store from '../store/store';

let updateEditItemValue =
    function updateEditItemValue(text: string) {
        Store.editItemText = text;
    };

export default action("updateEditItemValue")(updateEditItemValue);
