import * as React from 'react';
import {observer} from 'mobx-react';
import store from '../store/store';
import addItem from '../actions/addItem';
import updateTextboxValue from '../actions/updateTextboxValue';

@observer
export default class Header extends React.Component<{}, {}> {
    private textbox: HTMLInputElement;

    onKeyPress = (e) => {
        if (e.key == "Enter") {
            addItem(this.textbox.value);
        }

        return true;
    }

    onChange = () => {
        // Update the store every time the textbox value changes.
        updateTextboxValue(this.textbox.value);
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    ref={ref => this.textbox = ref}
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={store.textboxValue}
                    autoFocus={true}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress} />
            </header>
        )
    }
}
