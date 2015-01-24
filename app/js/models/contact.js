/*global define */
'use strict';
define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var ContactModel = Backbone.Model.extend({
        defaults: {
            name: null,
            tel: null,
            email: null,
            avatar: null
        },

        initialize: function () {
            this.set('avatar', _.random(1, 15) + '.jpg');
        }
    });
    return ContactModel;
});
