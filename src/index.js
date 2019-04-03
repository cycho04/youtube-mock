import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from './serviceWorker';


import App from './components/App';

unregister();
ReactDOM.render(<App />, document.getElementById('root'));

