/*global define*/
'use strict';
define(['react', 'underscore', 'jsx!views/contact'], function (React, _, ContactView) {
    var ContactsView = React.createClass({
        removeContact: function (contactId) {
            var contact = this.props.contacts.get(contactId);
            this.props.contacts.remove(contact);
            this.setProps({'contacts': this.props.contacts});
        },
        render: function () {

            var contacts = this.props.contacts.models.map(function (contact) {

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
