import { boundActionCreator } from 'satcheljs';
export default boundActionCreator('UpdateEditItemValueAction', (text: string) => ({
    text: text
}));
