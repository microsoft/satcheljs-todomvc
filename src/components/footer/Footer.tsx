import * as React from 'react';
import {observer} from 'mobx-react';
import Store from '../../store/store';
import removeAllCompleted from '../../actions/removeAllCompleted';
import setFilter from '../../actions/setFilter';
import {FilterType} from '../../store/schema';
import ItemsLeftCount from './ItemsLeftCount';

@observer
export default class Footer extends React.Component<any, any> {
    onClearCompleted = () => {
        removeAllCompleted();
    }

    onSetFilter = (filter: FilterType) => {
        setFilter(filter);
    }

    render() {
        let {filter} = Store;

        return (
            <footer className="footer">
                <ItemsLeftCount />
                <ul className="filters">
                    <li><a href="#" onClick={() => this.onSetFilter(FilterType.All)} className={filter == FilterType.All ? "selected" : ""}>All</a></li>
                    <li><a href="#" onClick={() => this.onSetFilter(FilterType.Active)} className={filter == FilterType.Active ? "selected" : ""}>Active</a></li>
                    <li><a href="#" onClick={() => this.onSetFilter(FilterType.Completed)} className={filter == FilterType.Completed ? "selected" : ""}>Completed</a></li>
                </ul>
                <button className="clear-completed" onClick={this.onClearCompleted}>Clear completed</button>
            </footer>
        );
    }
}
