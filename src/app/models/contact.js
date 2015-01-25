'use strict';
var Backbone = require('backbone'),
    _ = require('underscore');

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
module.exports = ContactModel;

