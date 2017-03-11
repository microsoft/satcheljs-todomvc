import * as React from 'react';
import { observer } from 'mobx-react';
import { reactive } from 'satcheljs-react';
import store from '../store/store';
import addItem from '../actions/addItem';
import updateTextboxValue from '../actions/updateTextboxValue';

interface HeaderProps {
    textboxValue?: string;
}

@reactive({
    textboxValue: () => store.textboxValue,
})
export default class Header extends React.Component<HeaderProps, {}> {
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
                    value={this.props.textboxValue}
                    autoFocus={true}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress} />
            </header>
        )
    }
}
