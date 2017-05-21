import { boundActionCreator } from 'satcheljs';

export default boundActionCreator('UpdateItemAction', (id: string, text: string) => ({
    id: id,
    text: text
}));
