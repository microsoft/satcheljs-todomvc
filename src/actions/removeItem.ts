import { boundActionCreator } from 'satcheljs';

export default boundActionCreator('RemoveItemAction', (id: string) => ({
    id: id
}));
