import { boundActionCreator } from 'satcheljs';
export default boundActionCreator('UpdateTextboxValueAction', (text:string) => ({
    text: text
}));
