'use strict';
var Backbone = require('backbone'),
    _ = require('underscore');

var ContactModel = Backbone.Model.extend({
    defaults: {
        name: '',
        lastName: '',
        tel: '',
        email: '',
        avatar: '',
        note: ''
    },
    initialize: function () {
        this.set('avatar', _.random(1, 15) + '.jpg');
    }
});
module.exports = ContactModel;

