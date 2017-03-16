import * as React from 'react';
import { reactive } from 'satcheljs-react';
import store from '../../store/store';

interface ItemsLeftCountProps {
    itemsLeft?: number;
}

export default reactive({
    itemsLeft: () => store.itemsLeft
})(
function ItemsLeftCount(props: ItemsLeftCountProps) {
    return (
        <span className="todo-count">{props.itemsLeft} Left</span>
    );
});
