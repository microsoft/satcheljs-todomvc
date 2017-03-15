import * as React from 'react';
import NewTaskInput from './NewTaskInput';

export default class Header extends React.Component<{}, {}> {
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <NewTaskInput />
            </header>
        )
    }
}
