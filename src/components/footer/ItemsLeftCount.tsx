import * as React from 'react';
import { observer } from 'mobx-react';
import store from '../../store/store';

interface ItemsLeftCountProps {
    itemsLeft?: number;
}

export default observer(
function ItemsLeftCount(props: ItemsLeftCountProps) {
    let itemsLeft = store.itemsLeft;
    return (
        <span className="todo-count">{itemsLeft} Left</span>
    );
});
