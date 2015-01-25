'use strict';
var Backbone = require('backbone'),
    ContactModel = require('../models/contact.js'),
    BackboneLocalStorage = require('backbone.localstorage');

var ContactsCollection = Backbone.Collection.extend({
    model: ContactModel,
    localStorage: new BackboneLocalStorage('contact-manager-storage')
});

module.exports = ContactsCollection;
