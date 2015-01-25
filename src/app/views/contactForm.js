'use strict';
var React = require('react'),
    _ = require('underscore'),
    mui = require('material-ui'),
    Input = mui.Input,
    RaisedButton = mui.RaisedButton;

var ContactFormView = React.createClass({
    getInitialState: function () {
        return {contact: _.clone(this.props.contact.attributes), type: this.props.type};
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({contact: _.clone(nextProps.contact.attributes), type: nextProps.type});
    },
    componentWillUpdate: function (nextProps, nextState) {//binding is not working with Input
        this.refs.nameInput.setValue(nextState.contact.name);
        this.refs.phoneInput.setValue(nextState.contact.tel);
        this.refs.emailInput.setValue(nextState.contact.email);
    },
    edit: function () {
        this.props.contact.set('name', this.state.contact.name);
        this.props.contact.set('tel', this.state.contact.tel);
        this.props.contact.set('email', this.state.contact.email);
        this.props.contact.save();
    }
    , create: function () {
        var contact = this.state.contact;
        contact.id = this.getNextId();
        var savedContact = this.props.contacts.add(contact);
        savedContact.save();
    },
    handleChange: function (field, event) {
        var nextState = this.state.contact;
        nextState[field] = event.target.value;
        this.setState({contact: nextState});
    },
    render: function () {
        return <div className='contract-form'>
            <Input type="text"
                ref="nameInput"
                name="nameInput"
                defaultValue={ this.state.contact.name }
                value={ this.state.contact.name }
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
                description="Full name"/>

            <Input type="email"
                ref="emailInput"
                name="emailInput"
                onChange={this.handleChange.bind(this, 'email')}
                value={ this.state.contact.email }
                defaultValue={ this.state.contact.email }
                placeholder="Email"
                description="Primary email"/>

            <Input multiline={true}
                ref="phoneInput"
                name="phoneInput"
                rows={5}
                type="text"
                value={ this.state.contact.tel }
                defaultValue={ this.state.contact.tel }
                onChange={this.handleChange.bind(this, 'tel')}
                placeholder="Phone numbers"
                description="List of phone numbers" />

            <div className="form-group">
                <div className="col-sm-3">
                    <RaisedButton label="Cancel"
                        linkButton={true}
                        href="#contacts"/>
                </div>
                <div className="col-sm-3">
                    <RaisedButton label={this.state.type === 'edit' ? "Update" : "Create" }
                        linkButton={true}
                        href="#contacts"
                        onClick={this.state.type === 'edit' ? this.edit : this.create}
                        primary={true} />
                </div>
            </div>
        </div>
    },
    getNextId: function () {
        return this.props.contacts.isEmpty() ? 1 : (_.max(this.props.contacts.pluck('id')) + 1);
    }
});
module.exports = ContactFormView;
