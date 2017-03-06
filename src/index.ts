import bootstrap from './bootstrap';

// This gets executed because this file is specified as the entry point for the
// app in webpack.config.js.
bootstrap(document.querySelector(".todoapp"));
