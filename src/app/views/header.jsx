'use strict';
var React = require('react'),
    mui = require('material-ui'),
    ToolbarGroup = mui.ToolbarGroup,
    RaisedButton = mui.RaisedButton,
    FlatButton = mui.RaisedButton,
    Toolbar = mui.Toolbar;

var HeaderView = React.createClass({
    render: function () {
        return <Toolbar>
            <ToolbarGroup key={0} float="left">
                <FlatButton disabled={true}
                    label="Contacts"/>
            </ToolbarGroup>
            <ToolbarGroup key={1} float="right">
                <RaisedButton href="#contacts/new"
                    linkButton={true}
                    label="Add Contact"
                    primary={true} />
            </ToolbarGroup>
        </Toolbar>
    }
});
module.exports = HeaderView;
