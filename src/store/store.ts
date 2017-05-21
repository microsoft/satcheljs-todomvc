import {createStore, registerMutators} from 'satcheljs';
import {StateTree, FilterType} from './schema';

import localAddItemMutator from '../mutators/localAddItemMutator';
import removeItemMutator from '../mutators/removeItemMutator';
import removeAllCompletedMutator from '../mutators/removeAllCompletedMutator';
import setFilterMutator from '../mutators/setFilterMutator';

var Store = createStore<StateTree>("todomvc", {
    items: [],
    textboxValue: '',
    itemsLeft: 0,
    filter: FilterType.All,
    editItemId: null,
    editItemText: ''
});

registerMutators(
    localAddItemMutator, 
    removeAllCompletedMutator,
    removeItemMutator,
    setFilterMutator);

export default () => Store;
