import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { applyMiddleware } from 'satcheljs';
import App from './components/App';
import { trace } from 'satcheljs-trace';

let regex = new RegExp("[\\?&]devtools=");
let url = window.location.href.toLowerCase();
if (regex.exec(url)) {
    applyMiddleware(require<any>('satcheljs-react-devtools').default, trace);
}

ReactDOM.render(<App />, document.querySelector(".todoapp"));
