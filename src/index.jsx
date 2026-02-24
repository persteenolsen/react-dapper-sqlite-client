import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';

import { App } from './app';

import './styles.less';

// 24-02-2026 - Disable fake backend by commenting out the next line
//import { configureFakeBackend } from './_helpers';
// configureFakeBackend();

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);