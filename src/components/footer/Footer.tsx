import * as React from 'react';
import removeAllCompleted from '../../actions/removeAllCompleted';
import { FilterType } from '../../store/schema';
import ItemsLeftCount from './ItemsLeftCount';
import FilterButton from './FilterButton';

export default function Footer() {
    return (
        <footer className="footer">
            <ItemsLeftCount />
            <ul className="filters">
                <FilterButton filter={FilterType.All} text="All" />
                <FilterButton filter={FilterType.Active} text="Active" />
                <FilterButton filter={FilterType.Completed} text="Completed" />
            </ul>
            <button className="clear-completed" onClick={removeAllCompleted}>Clear completed</button>
        </footer>
    );
}
