/*global define*/
'use strict';
define(['react', 'underscore'
], function (React, _) {
    var ContactView = React.createClass({
        getInitialState: function () {
            return {contact: _.clone(this.props.contact.attributes)};
        },
        render: function () {
            return <div>
                <li className="media col-md-6 col-lg-4">
                    <div className="thumbnail">
                        <img className="media-object"
                            src={'app/img/faces/' + this.state.contact.avatar}/>
                    </div>
                    <div className="media-heading">
                        <h3>
                        { this.state.contact.name }
                            <small>
                                <a href={'#contacts/edit/' + this.state.contact.id }>
                                    <span className="glyphicon glyphicon-pencil"></span>
                                </a>
                                <div onClick={this.props.remove}
                                    className="glyphicon glyphicon-trash"></div>
                            </small>
                        </h3>
                    </div>
                    <div className="media-body">
                        <dl>
                            <dt>Phone Number:</dt>
                            <dd>{ this.state.contact.tel }</dd>
                            <dt>Email:</dt>
                            <dd>{ this.state.contact.email }</dd>
                        </dl>
                    </div>
                    <hr/>
                </li>
            </div>
        }
    });

    return ContactView;
});
