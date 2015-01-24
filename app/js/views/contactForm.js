/*global define*/
'use strict';
define(['react', 'underscore'
], function (React, _) {
    var ContactFormView = React.createClass({
        getInitialState: function () {
            return {contact: _.clone(this.props.contact.attributes)};
        },
        render: function () {
            return <div>
                <h2 className="page-header text-center">Contact</h2>
                <form role="form"
                    className = "form-horizontal contract-form" >
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Full name:</label>
                        <div className="col-sm-6">
                            <input type="text"
                                className="form-control contact-name-input"
                                value={ this.state.contact.name }/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Email address:</label>

                        <div className="col-sm-6">
                            <input type="email"
                                className="form-control contact-email-input"
                                value={ this.state.contact.email }/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-4 control-label">Telephone number:</label>

                        <div className="col-sm-6">
                            <input type="tel"
                                className="form-control contact-tel-input"
                                value={ this.state.contact.tel }/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-4 col-sm-3">
                            <button type="submit"
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
        }
    });
    return ContactFormView;
});
