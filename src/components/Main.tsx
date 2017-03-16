import * as React from 'react';
import Store from '../store/store';
import {observer} from 'mobx-react';
import toggleCompleted from '../actions/toggleCompleted';
import removeItem from '../actions/removeItem';
import toggleAllCompleted from '../actions/toggleAllCompleted';
import toggleEditItem from '../actions/toggleEditItem';
import updateEditItemValue from '../actions/updateEditItemValue';
import updateItem from '../actions/updateItem';
import {FilterType} from '../store/schema';

@observer
export default class Main extends React.Component<any, any> {
    componentDidUpdate() {
        if (Store.editItemId) {
            let inputElement = this.refs["edit_" + Store.editItemId] as HTMLInputElement;
            inputElement.focus();
        }
    }

    onToggleCompleted(id: string) {
        toggleCompleted(id);
    }

    onDestroy(id: string) {
        removeItem(id);
    }

    onToggleAllCompleted() {
        toggleAllCompleted();
    }

    onToggleEdit = (id: string) => {
        toggleEditItem(id);
    }

    onEditEnd = (id: string) => {
        let inputElement = this.refs["edit_" + id] as HTMLInputElement;
        toggleEditItem(null);
        updateItem(id, inputElement.value);
    }

    onChange = (id: string) => {
        let inputElement = this.refs["edit_" + id] as HTMLInputElement;
        updateEditItemValue(inputElement.value);
    }

    render() {
        let {items, itemsLeft, filter, editItemId, editItemText} = Store;

        return (
            <section className="main">
                <input className="toggle-all" type="checkbox" onChange={this.onToggleAllCompleted} checked={itemsLeft == 0}/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {items && items.map(item => {
                        if ((item.completed && filter == FilterType.Completed) ||
                                (!item.completed && filter == FilterType.Active) ||
                                filter == FilterType.All) {
                            return (
                                <li ref={item.id} key={item.id} className={
                                        (item.completed ? "completed" : "") +
                                        (item.id == editItemId ? " editing" : "")
                                    }>
                                    <div className="view">
                                        <input className="toggle" type="checkbox" checked={item.completed} onClick={(e) => this.onToggleCompleted(item.id)} />
                                        <label onDoubleClick={(e) => this.onToggleEdit(item.id)}>{item.text}</label>
                                        <button className="destroy" onClick={(e) => this.onDestroy(item.id)}></button>
                                    </div>
                                    <input
                                        className="edit"
                                        type="text"
                                        ref={"edit_" + item.id}
                                        value={editItemText}
                                        onChange={(e) => this.onChange(item.id)}
                                        onBlur={(e) => this.onEditEnd(item.id)}
                                        onKeyUp={(e) => { if (e.key == "Enter") this.onEditEnd(item.id); }} />
                                </li>
                            );
                        } else {
                            return null;
                        }}
                    )}
                </ul>
            </section>
        );
    }
}