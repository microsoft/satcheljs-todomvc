import { boundActionCreator } from 'satcheljs';

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

let addItem = boundActionCreator('AddItemAction', (text: string) => ({
    id: guid(),
    text: text,
    completed: false
}));

export default addItem;
