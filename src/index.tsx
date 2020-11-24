// react libraries
import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
// components
import App from './App';
// styles
import './index.scss';

const rootNode = document.getElementById('root');

render(<App />, rootNode);

serviceWorker.register();
