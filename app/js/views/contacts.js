/*global define*/
'use strict';
define(['react', 'jsx!views/contact'], function (React, ContactView) {
    var ContactsView = React.createClass({
        getInitialState: function () {
            return {contacts: this.props.contacts.models};
        },
        removeContact: function (contactId) {
            this.props.contacts.get(contactId).destroy();
            this.setState({contacts: this.props.contacts.models});
        },
        render: function () {
            var contacts = this.state.contacts.map(function (contact) {
                return <ContactView remove={this.removeContact.bind(this, contact.id)}
                    key={contact.id}
                    contact={contact}/>;
            }, this);

            return <div>
                <h2 className="page-header text-center">List of contacts</h2>
                <p className= "text-center">
                    <a href="#contacts/new"
                        className="btn btn-lg btn-outline">Add Contact</a>
                </p>
                <ul className="media-list row contacts-container">
                    {contacts}
                </ul>
            </div>
        }
    });
    return ContactsView;
});
