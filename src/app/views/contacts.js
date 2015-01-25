'use strict';
var React = require('react'),
    ContactView = require('./contact.js');

var ContactsView = React.createClass({
    getInitialState: function () {
        return {contacts: this.props.contacts.models};
    },
    render: function () {
        var contacts = this.state.contacts.map(function (contact) {
            return <ContactView key={contact.id}
                    contact={contact}/>;
        }, this);

        return <div>
            <ul className="media-list row">
                    {contacts}
            </ul>
        </div>
    }
});
module.exports = ContactsView;
