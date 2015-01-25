'use strict';
var React = require('react'),
    Backbone = require('backbone'),
    ContactsView = require('./views/contacts.js'),
    ContactFormView = require('./views/contactForm.js'),
    EmptyContactFormView = require('./views/emptyContactForm.js'),
    ContactModel = require('./models/contact.js'),
    ContactsCollection = require('./collections/contacts');

var Router = Backbone.Router.extend({
    initialize: function () {
        this.contacts = new ContactsCollection();
        this.contacts.fetch();
        Backbone.history.start();
    },
    routes: {
        '': 'showContacts',
        'contacts': 'showContacts',
        'contacts/new': 'newContact',
        'contacts/edit/:id': 'editContact',
        'contacts/delete/:id': 'deleteContact'
    },
    showContacts: function () {
        React.render(<ContactsView contacts={this.contacts}/>, document.getElementById('contact-list'));
        React.render(<EmptyContactFormView />, document.getElementById('contact-detail'));
    },
    newContact: function () {
        React.render(<ContactFormView contacts={this.contacts}
            contact={new ContactModel()}
            type={'create'}/>, document.getElementById('contact-detail'));
    },
    editContact: function (id) {
        var contact = this.contacts.get(id);
        if (contact) {
            React.render(<ContactsView contacts={this.contacts}/>, document.getElementById('contact-list'));
            React.render(<ContactFormView contact={contact}
                type={'edit'}/>, document.getElementById('contact-detail'));
            return;
        }
        this.navigate('contacts', true);
    },
    deleteContact: function (id) {
        var contact = this.contacts.get(id);
        if (contact) {
            contact.destroy();
        }
        this.navigate('contacts', true);
    }
});

module.exports = Router;

