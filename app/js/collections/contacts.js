/*global define */
'use strict';
define([
    'backbone',
    'models/contact',
    'backboneLocalstorage'
], function (Backbone, ContactModel, BackboneLocalStorage) {
    var ContactsCollection = Backbone.Collection.extend({
        model: ContactModel,
        localStorage: new BackboneLocalStorage('contact-manager-storage')
    });
    return ContactsCollection;
});
