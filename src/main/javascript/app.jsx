/**
* @author hasan
* Created at 12.03.2016.
*/
// require('bootswatch/flatly/bootstrap.css');
require('bootstrap/dist/css/bootstrap.min.css');
require('./app.scss');

import React from 'react';
import DOM from 'react-dom';
import TelRehberi from './components/TelRehberi.jsx';

DOM.render(
    <TelRehberi />,
    document.getElementById('app')
);