import * as React from 'react';
import { observer } from 'mobx-react';
import store from '../../store/store';
import addItem from '../../actions/addItem';
import updateTextboxValue from '../../actions/updateTextboxValue';

interface NewTaskInputProps {
    textboxValue?: string;
}

@observer
export default class NewTaskInput extends React.Component<NewTaskInputProps, {}> {
    private textbox: HTMLInputElement;

    onKeyPress = (e) => {
        if (e.key == "Enter") {
            addItem(this.textbox.value);
        }

        return true;
    }

    onChange = () => {
        // Update the store every time the textbox value changes
        updateTextboxValue(this.textbox.value);
    }

    render() {
        let textboxValue = store.textboxValue;

        return (
            <input
                ref={ref => this.textbox = ref}
                className="new-todo"
                placeholder="What needs to be done?"
                value={textboxValue}
                autoFocus={true}
                onChange={this.onChange}
                onKeyPress={this.onKeyPress} />
        )
    }
}
