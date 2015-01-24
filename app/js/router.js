/*global define*/
'use strict';
define([
    'backbone'
], function (Backbone) {
    var Router = Backbone.Router.extend({
        routes: {
            '': 'showContacts',
            'contacts': 'showContacts',
            'contacts/new': 'newContact',
            'contacts/edit/:id': 'editContact'
        }
    });
    return new Router();
});
