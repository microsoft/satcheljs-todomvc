import * as React from 'react';
import NewTaskInput from './NewTaskInput';

export default function Header() {
    return (
        <header className="header">
            <h1>todos</h1>
            <NewTaskInput />
        </header>
    );
}
