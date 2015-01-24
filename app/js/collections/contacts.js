/*global define */
'use strict';
define([
    'backbone',
    'models/contact'
], function (Backbone, ContactModel) {
    var ContactsCollection = Backbone.Collection.extend({
        model: ContactModel
    });
    return ContactsCollection;
});
