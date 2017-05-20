import { action } from 'satcheljs';
import getStore from '../store/store';

let updateTextboxValue =
    function updateTextboxValue(text: string) {
        getStore().textboxValue = text;
    };

export default action("updateTextboxValue")(updateTextboxValue);
