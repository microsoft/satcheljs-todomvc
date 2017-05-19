import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

export default function bootstrap(targetElement: Element) {
    // Render the app
    ReactDOM.render(<App />, targetElement);
}
