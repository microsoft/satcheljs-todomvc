import { boundActionCreator } from 'satcheljs';
export default boundActionCreator('ToggleEditItemAction', (id: string) => ({
    id: id
}));
