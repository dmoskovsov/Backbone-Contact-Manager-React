/*global define*/
'use strict';
define(['react', 'underscore'
], function (React, _) {
    var ContactFormView = React.createClass({
        getInitialState: function () {
            return {contact: _.clone(this.props.contact.attributes)};
        },
        edit: function () {
            this.props.contact.set('name', this.state.contact.name);
            this.props.contact.set('tel', this.state.contact.tel);
            this.props.contact.set('email', this.state.contact.email);
        }
        , create: function () {
            var contact = this.state.contact;
            contact.id = this.getNextId();
            this.props.contacts.add(contact);
        },
        handleChange: function (field, event) {
            var nextState = this.state.contact;
            nextState[field] = event.target.value;
            this.setState({contact: nextState});
        },
        render: function () {
            return <div>
                <h2 className="page-header text-center">
                {this.props.type === 'edit' ? 'Edit' : 'Create'} Contact</h2>
                <form role="form"
                    action="#contacts"
                    className="form-horizontal contract-form" >
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Full name:</label>
                        <div className="col-sm-6">
                            <input type="text"
                                className="form-control contact-name-input"
                                onChange={this.handleChange.bind(this, 'name')}
                                value={ this.state.contact.name }/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Email address:</label>

                        <div className="col-sm-6">
                            <input type="email"
                                className="form-control contact-email-input"
                                onChange={this.handleChange.bind(this, 'email')}
                                value={ this.state.contact.email }/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Telephone number:</label>

                        <div className="col-sm-6">
                            <input type="tel"
                                className="form-control contact-tel-input"
                                onChange={this.handleChange.bind(this, 'tel')}
                                value={ this.state.contact.tel }/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-4 col-sm-3">
                            <button onClick={this.props.type === 'edit' ? this.edit : this.create}
                                className="btn btn-outline btn-lg btn-block">Submit
                            </button>
                        </div>
                        <div className="col-sm-3">
                            <a href="#contacts"
                                className="btn btn-outline btn-lg btn-block">Cancel</a>
                        </div>
                    </div>
                </form>
            </div>
        },
        getNextId: function () {
            return this.props.contacts.isEmpty() ? 1 : (_.max(this.props.contacts.pluck('id')) + 1);
        }
    });
    return ContactFormView;
});
