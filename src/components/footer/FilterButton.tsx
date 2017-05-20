import * as React from 'react';
import { observer } from 'mobx-react';
import { FilterType } from '../../store/schema';
import getStore from '../../store/store';
import setFilter from '../../actions/setFilter';

interface FilterButtonProps {
    filter: FilterType;
    text: string;
}

export default observer(
function FilterButton(props: FilterButtonProps) {
    let currentFilter = getStore().filter;
    return (
        <li>
            <a
                href="#"
                onClick={() => setFilter(props.filter)}
                className={currentFilter == props.filter ? "selected" : ""}
            >
                {props.text}
            </a>
        </li>
    );
});
