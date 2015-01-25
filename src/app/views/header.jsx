'use strict';
var React = require('react'),
    mui = require('material-ui'),
    Icon = mui.Icon,
    LeftNav = mui.LeftNav,
    ToolbarGroup = mui.ToolbarGroup,
    MenuItem = mui.MenuItem,
    RaisedButton = mui.RaisedButton,
    Toolbar = mui.Toolbar;

var menuItems = [
    {type: MenuItem.Types.SUBHEADER, text: 'Resources'},
    {type: MenuItem.Types.LINK, payload: 'https://github.com/callemall/material-ui', text: 'React'},
    {type: MenuItem.Types.LINK, payload: 'http://backbonejs.org/', text: 'Backone'},
    {type: MenuItem.Types.LINK, payload: 'http://requirejs.org/', text: 'Require'},
    {type: MenuItem.Types.LINK, payload: 'http://browserify.org/', text: 'Browserify'},
    {type: MenuItem.Types.LINK, payload: 'https://github.com/andreypopp/reactify', text: 'Reactify'},
    {type: MenuItem.Types.LINK, payload: 'http://gulpjs.com/', text: 'Gulp'},
    {type: MenuItem.Types.LINK, payload: 'https://github.com/dmoskovsov/Backbone-Contact-Manager-React', text: 'Source code'}
];
var HeaderView = React.createClass({
    showLeftNavClick: function () {
        this.refs.leftNav.toggle();
    },
    render: function () {
        return <div>
            <Toolbar>
                <ToolbarGroup key={0} float="left">
                    <Icon icon="navigation-menu"
                        onTouchTap={this.showLeftNavClick}/>
                    <RaisedButton label="All Contacts" disabled={true} />
                </ToolbarGroup>
                <ToolbarGroup key={1} float="right">
                    <RaisedButton href="#contacts/new"
                        linkButton={true}
                        label="Add Contact"
                        primary={true} />
                </ToolbarGroup>
            </Toolbar>
            <LeftNav docked={false}
                ref="leftNav"
                menuItems={menuItems} />
        </div>
    }
});
module.exports = HeaderView;
