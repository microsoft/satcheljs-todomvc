import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { registerOrchestrators } from 'satcheljs';
import App from './components/App';
import addItemOrchestrator from './orchestrators/addItemOrchestrator';

export default function bootstrap(targetElement: Element) {
    // Register orchestrators
    registerOrchestrators(addItemOrchestrator);

    // Render the app
    ReactDOM.render(<App />, targetElement);
}
