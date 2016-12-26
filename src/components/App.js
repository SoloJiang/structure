'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Lazyman from '../action/Lazyman';
Lazyman("solo").sleepFirst("5").eat("dinner");
var App = React.createClass({
    render: function() {
        return (
            <div>
            </div>
        );
    }
});

//最终渲染
ReactDom.render((
    <App />
), document.getElementById('app'));
