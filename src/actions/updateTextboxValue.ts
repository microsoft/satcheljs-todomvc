import { action } from 'satcheljs';
import Store from '../store/store';

let updateTextboxValue =
    function updateTextboxValue(text: string) {
        Store.textboxValue = text;
    };

export default action("updateTextboxValue")(updateTextboxValue);
