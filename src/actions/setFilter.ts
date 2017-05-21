import { boundActionCreator } from 'satcheljs';
import { FilterType } from '../store/schema';

export default boundActionCreator('SetFilter', (filter: FilterType) => ({
    filter: filter
}));
