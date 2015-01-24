/*global define*/
'use strict';
define([
    'react',
    'backbone',
    'jquery',
    'underscore',
    'jsx!views/contacts',
    'views/contactForm',
    'models/contact',
    'collections/contacts'
], function (React, Backbone, $, _, ContactsView, ContactForm, ContactModel, ContactsCollection) {
    var contacts = new ContactsCollection(getContacts().contacts);

    var Router = Backbone.Router.extend({
        initialize: function () {
            Backbone.history.start();
        },
        routes: {
            '': 'showContacts',
            'contacts': 'showContacts',
            'contacts/new': 'newContact',
            'contacts/edit/:id': 'editContact'
        },
        showContacts: function () {
            React.render(ContactsView({contacts: contacts}), document.getElementById('main-container'));
        },
        newContact: function () {
            var newContactForm = new ContactForm({
                model: new ContactModel()
            });

            newContactForm.on('form:submitted', function (attrs) {
                attrs.id = contacts.isEmpty() ? 1 : (_.max(contacts.pluck('id')) + 1);
                contacts.add(attrs);
                Router.navigate('contacts', true);
            });

            $('.main-container').html(newContactForm.render().$el);
        },
        editContact: function (id) {
            var contact = contacts.get(id),
                editContactForm;

            if (contact) {
                editContactForm = new ContactForm({
                    model: contact
                });

                editContactForm.on('form:submitted', function (attrs) {
                    contact.set(attrs);
                    Router.navigate('contacts', true);
                });

                $('.main-container').html(editContactForm.render().$el);
            } else {
                Router.navigate('contacts', true);
            }
        }
    });
    return Router;

    function getContacts() {
        return {
            contacts: [
                {
                    id: 1,
                    name: 'Terrence S. Hatfield',
                    tel: '651-603-1723',
                    email: 'TerrenceSHatfield@rhyta.com'
                },
                {
                    id: 2,
                    name: 'Chris M. Manning',
                    tel: '513-307-5859',
                    email: 'ChrisMManning@dayrep.com'
                },
                {
                    id: 3,
                    name: 'Ricky M. Digiacomo',
                    tel: '918-774-0199',
                    email: 'RickyMDigiacomo@teleworm.us'
                },
                {
                    id: 4,
                    name: 'Michael K. Bayne',
                    tel: '702-989-5145',
                    email: 'MichaelKBayne@rhyta.com'
                },
                {
                    id: 5,
                    name: 'John I. Wilson',
                    tel: '318-292-6700',
                    email: 'JohnIWilson@dayrep.com'
                },
                {
                    id: 6,
                    name: 'Rodolfo P. Robinett',
                    tel: '803-557-9815',
                    email: 'RodolfoPRobinett@jourrapide.com'
                }
            ]
        };
    }
});
