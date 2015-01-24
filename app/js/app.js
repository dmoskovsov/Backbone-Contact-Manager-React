/*global define*/
'use strict';
define([
    'jquery',
    'underscore',
    'router',
    'views/contacts',
    'views/contactForm',
    'models/contact',
    'collections/contacts'
], function ($, _, Router, ContactsView, ContactForm, ContactModel, ContactsCollection) {

    var ContactManager = {

        start: function (data) {
            var contacts = new ContactsCollection(data.contacts);

            Router.on('route:home', navigateToContactsPage);

            Router.on('route:showContacts', function () {
                var contactsView = new ContactsView({
                    collection: contacts
                });
                $('.main-container').html(contactsView.render().$el);
            });

            Router.on('route:newContact', function () {
                var newContactForm = new ContactForm({
                    model: new ContactModel()
                });

                newContactForm.on('form:submitted', function (attrs) {
                    attrs.id = contacts.isEmpty() ? 1 : (_.max(contacts.pluck('id')) + 1);
                    contacts.add(attrs);
                    Router.navigate('contacts', true);
                });

                $('.main-container').html(newContactForm.render().$el);
            });

            Router.on('route:editContact', function (id) {
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
            });

            function navigateToContactsPage() {
                Router.navigate('contacts', {
                    trigger: true,
                    replace: true
                });
            }

            navigateToContactsPage();
        }
    };
    return ContactManager;
});
