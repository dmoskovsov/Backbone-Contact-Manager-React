'use strict';
var React = require('react'),
    ContactView = require('./contact.js'),
    mui = require('material-ui'),
    _ = require('underscore'),
    Input = mui.Input;

var ContactsView = React.createClass({
    getInitialState: function () {
        return {contacts: this.props.contacts.models, searchString: ''};
    },
    filterContacts: function () {
        this.setState({contacts: this.state.contacts, searchString: event.target.value});
    },
    render: function () {
        var contacts = this.getFilteredComponents().map(function (contact) {
            return <ContactView key={contact.id}
                contact={contact}/>
        }, this);

        return <div>
            <div className='search-container'>
                <input type="text"
                    className='search-input'
                    name="filterInput"
                    onChange={this.filterContacts}/>
            </div>

            <ul className="row">
                    {contacts}
            </ul>
        </div>
    },
    getFilteredComponents: function () {
        var searchString = this.state.searchString.toLowerCase();
        return _.filter(this.props.contacts.models, function (contact) {
            var name = contact.attributes.name.toLowerCase();
            var lastName = contact.attributes.lastName.toLowerCase();
            return (name.toLowerCase().indexOf(searchString) !== -1 || lastName.indexOf(searchString) !== -1);
        });
    }
});
module.exports = ContactsView;
