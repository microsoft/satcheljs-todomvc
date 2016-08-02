import { action } from 'satcheljs';
import Store from '../store/store';
import { FilterType } from '../store/schema';

let setFilter =
    function setFilter(filter: FilterType) {
        Store.filter = filter;
    };

export default action("setFilter")(setFilter);
