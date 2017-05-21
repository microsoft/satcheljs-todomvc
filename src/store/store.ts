import {createStore, registerMutators} from 'satcheljs';
import {StateTree, FilterType} from './schema';

import localAddItemMutator from '../mutators/localAddItemMutator';
import removeItemMutator from '../mutators/removeItemMutator';
import removeAllCompletedMutator from '../mutators/removeAllCompletedMutator';
import setFilterMutator from '../mutators/setFilterMutator';
import toggleAllCompletedMutator from '../mutators/toggleAllCompletedMutator';
import toggleCompletedMutator from '../mutators/toggleCompletedMutator';
import toggleEditItemMutator from '../mutators/toggleEditItemMutator';
import updateEditItemValueMutator from '../mutators/updateEditItemValueMutator';
import updateItemMutator from '../mutators/updateItemMutator';
import updateTextboxValueMutator from '../mutators/updateTextboxValueMutator';


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
    setFilterMutator,
    toggleAllCompletedMutator,
    toggleCompletedMutator,
    toggleEditItemMutator,
    updateEditItemValueMutator,
    updateItemMutator,
    updateTextboxValueMutator
);

export default () => Store;
