import {mutator} from 'satcheljs';
import setFilter from '../actions/setFilter';
import getStore from '../store/store';

export default mutator(setFilter, (actionMessage) => {
    getStore().filter = actionMessage.filter;
});
