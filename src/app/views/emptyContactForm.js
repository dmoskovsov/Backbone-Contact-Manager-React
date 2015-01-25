'use strict';
var React = require('react');

var EmptyContactFormView = React.createClass({
    render: function () {
        return <div className='empty-page'>
            <h2>Select contact to get started</h2>
        </div>
    }
});
module.exports = EmptyContactFormView;
