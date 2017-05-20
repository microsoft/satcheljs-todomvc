import { action } from 'satcheljs';
import getStore from '../store/store';
import { FilterType } from '../store/schema';

let setFilter =
    function setFilter(filter: FilterType) {
        getStore().filter = filter;
    };

export default action("setFilter")(setFilter);
