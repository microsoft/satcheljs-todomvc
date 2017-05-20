import { boundActionCreator } from 'satcheljs';

export default boundActionCreator('LocalAddItemAction', (id: string, text: string) => ({
    id: id,
    text: text,
    completed: false
}));
