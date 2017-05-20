import { boundActionCreator } from 'satcheljs';

export default boundActionCreator('LocalAddItemAction', (id: string, text: string) => ({
    type: 'LocalAddItemAction',
    id: id,
    text: text,
    completed: false
}));
