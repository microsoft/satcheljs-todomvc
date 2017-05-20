import * as React from 'react';
import { observer } from 'mobx-react';
import getStore from '../../store/store';

interface ItemsLeftCountProps {
    itemsLeft?: number;
}

export default observer(
function ItemsLeftCount(props: ItemsLeftCountProps) {
    let itemsLeft = getStore().itemsLeft;
    return (
        <span className="todo-count">{itemsLeft} Left</span>
    );
});
