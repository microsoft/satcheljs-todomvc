import * as React from 'react';
import { reactive } from 'satcheljs-react';
import { FilterType } from '../../store/schema';
import store from '../../store/store';
import setFilter from '../../actions/setFilter';

interface FilterButtonProps {
    filter: FilterType;
    text: string;
    currentFilter?: FilterType;
}

export default reactive({
    currentFilter: () => store.filter
})(
function FilterButton(props: FilterButtonProps) {
    return (
        <li>
            <a
                href="#"
                onClick={() => setFilter(props.filter)}
                className={props.currentFilter == props.filter ? "selected" : ""}
            >
                {props.text}
            </a>
        </li>
    );
});
