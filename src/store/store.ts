import {createStore} from 'satcheljs';
import {StateTree, FilterType} from './schema';
import '../mutators/addItemMutator';
import '../mutators/removeAllCompletedMutator';

var Store = createStore<StateTree>("todomvc", {
    items: [],
    textboxValue: '',
    itemsLeft: 0,
    filter: FilterType.All,
    editItemId: null,
    editItemText: ''
});

export default () => Store;
