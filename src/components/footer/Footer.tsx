import * as React from 'react';
import {observer} from 'mobx-react';
import removeAllCompleted from '../../actions/removeAllCompleted';
import {FilterType} from '../../store/schema';
import ItemsLeftCount from './ItemsLeftCount';
import FilterButton from './FilterButton';

@observer
export default class Footer extends React.Component<any, any> {
    onClearCompleted = () => {
        removeAllCompleted();
    }

    render() {
        return (
            <footer className="footer">
                <ItemsLeftCount />
                <ul className="filters">
                    <FilterButton filter={FilterType.All} text="All" />
                    <FilterButton filter={FilterType.Active} text="Active" />
                    <FilterButton filter={FilterType.Completed} text="Completed" />
                </ul>
                <button className="clear-completed" onClick={this.onClearCompleted}>Clear completed</button>
            </footer>
        );
    }
}
