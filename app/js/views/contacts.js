/*global define*/
'use strict';
//define([
//    'jquery',
//    'underscore',
//    'backbone',
//    'views/contact'
//], function ($, _, Backbone, ContactView) {
define(['react',
        'underscore',
        'jsx!views/contact'],
    function (React, _, ContactView) {
        var ContactsView = React.createClass({
            //getInitialState: function () {
            //var updateState = function () {
            //    this.setState({cats: _.clone(this.props.cats.models)});
            //};
            //
            //this.props.cats.on('reset', updateState, this);
            //this.props.cats.on('add', updateState, this);
            //this.props.cats.on('remove', updateState, this);
            //
            //return {cats: _.clone(this.props.cats.models)};
            //},
            //AddCat: function () {
            //var cat = 'cat' + (this.props.cats.length + 1);
            //if (this.props.cats.length <= 60) {
            //    this.props.cats.push({cat: cat});
            //}
            //},
            render: function () {
                var contacts = _.map(this.props.contacts.models, function (contact) {
                    return <ContactView contact={contact} />
                });

                return <div>
                    <h2 className="page-header text-center">List of contacts</h2>
                    <p className= "text-center">
                        <a href="#contacts/new"
                            className="btn btn-lg btn-outline">Add Contact</a>
                    </p>
                    <ul class="media-list row contacts-container">
                        {contacts}
                    </ul>
                </div>

            }
        });

        return ContactsView;
        //    var ContactsView = Backbone.View.extend({
        //    template: _.template('<h2 class="page-header text-center">List of contacts</h2><p class="text-center"><a href="#contacts/new"class="btn btn-lg btn-outline">Add Contact</a></p><ul class="media-list row contacts-container"></ul>'),
        //
        //    renderOne: function (contact) {
        //        var itemView = new ContactView({model: contact});
        //        this.$('.contacts-container').append(itemView.render().$el);
        //    },
        //
        //    render: function () {
        //        var html = this.template();
        //        this.$el.html(html);
        //
        //        this.collection.each(this.renderOne, this);
        //
        //        return this;
        //    }
        //});
        //return ContactsView;
    });
