import { boundActionCreator } from 'satcheljs';

export default boundActionCreator('ToggleCompletedAction', (id: string) => ({
    id: id
}));
