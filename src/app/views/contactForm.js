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
        this.refs.lastNameInput.setValue(nextState.contact.lastName);
        this.refs.phoneInput.setValue(nextState.contact.tel);
        this.refs.emailInput.setValue(nextState.contact.email);
        this.refs.noteInput.setValue(nextState.contact.note);
    },
    edit: function () {
        this.props.contact.set('name', this.state.contact.name);
        this.props.contact.set('lastName', this.state.contact.lastName);
        this.props.contact.set('tel', this.state.contact.tel);
        this.props.contact.set('email', this.state.contact.email);
        this.props.contact.set('note', this.state.contact.note);
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
        return <div className='contract-form row'>
            <div className="col-md-6">

                <Input type="text"
                    ref="nameInput"
                    name="nameInput"
                    defaultValue={ this.state.contact.name }
                    value={ this.state.contact.name }
                    onChange={this.handleChange.bind(this, 'name')}
                    placeholder="First Name"/>

                <Input type="text"
                    ref="lastNameInput"
                    name="lastNameInput"
                    defaultValue={ this.state.contact.lastName }
                    value={ this.state.contact.lastName }
                    onChange={this.handleChange.bind(this, 'lastName')}
                    placeholder="Last Name"/>

                <Input type="email"
                    ref="emailInput"
                    name="emailInput"
                    onChange={this.handleChange.bind(this, 'email')}
                    value={ this.state.contact.email }
                    defaultValue={ this.state.contact.email }
                    placeholder="Email"/>

                <Input multiline={true}
                    ref="phoneInput"
                    name="phoneInput"
                    rows={7}
                    type="text"
                    value={ this.state.contact.tel }
                    defaultValue={ this.state.contact.tel }
                    onChange={this.handleChange.bind(this, 'tel')}
                    placeholder="Phone numbers"
                    description="List of phone numbers" />
            </div>
            <div className="col-md-6 contact-form-right-item">
                <img width="150px"
                    height="150px"
                    className='contact-image-big center-block'
                    src={'/faces/' + this.state.contact.avatar}/>

                <div className="center-block edit-button-container">
                    <RaisedButton label="Cancel"
                        linkButton={true}
                        href="#contacts"/>

                    <RaisedButton label="Delete"
                        linkButton={true}
                        href={'#contacts/delete/' + this.state.contact.id }/>

                    <RaisedButton label={this.state.type === 'edit' ? "Update" : "Create" }
                        linkButton={true}
                        href="#contacts"
                        onClick={this.state.type === 'edit' ? this.edit : this.create}
                        primary={true} />
                </div>

                <Input multiline={true}
                    ref="noteInput"
                    name="noteInput"
                    rows={9}
                    type="text"
                    value={ this.state.contact.note }
                    defaultValue={ this.state.contact.note }
                    onChange={this.handleChange.bind(this, 'note')}
                    placeholder="Notes"
                    description="Related notes" />

            </div>
        </div>
    },
    getNextId: function () {
        return this.props.contacts.isEmpty() ? 1 : (_.max(this.props.contacts.pluck('id')) + 1);
    }
});
module.exports = ContactFormView;
