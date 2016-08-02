import * as React from 'react';
import {observer} from 'mobx-react';
import Store from '../store/store';
import addItem from '../actions/addItem';
import updateTextboxValue from '../actions/updateTextboxValue';

@observer
export default class Header extends React.Component<any, any> {
    private textbox: HTMLInputElement;

    onKeyPress: React.KeyboardEventHandler = (e) => {
        if (e.key == "Enter") {
            addItem(this.textbox.value);
        }
        return true;
    }

    onChange = () => {
        // for ephemeral UI state changes, it is okay to use a function
        updateTextboxValue(this.textbox.value);
    }

    render() {
        let {textboxValue} = Store;

        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    ref={ctrl => this.textbox = ctrl}
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={textboxValue}
                    autoFocus={true}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress} />
            </header>
        )
    }
}
