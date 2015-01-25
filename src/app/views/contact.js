'use strict';
var React = require('react'),
    mui = require('material-ui'),
    IconButton = mui.IconButton,
    _ = require('underscore');

var ContactView = React.createClass({
    getInitialState: function () {
        return {contact: _.clone(this.props.contact.attributes)};
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({contact: _.clone(nextProps.contact.attributes)});
    },
    render: function () {
        return <a href={'#contacts/edit/' + this.state.contact.id }>
            <div className="contact-column">
                <img width="48px"
                    height="48px"
                    className='contact-image'
                    src={'/faces/' + this.state.contact.avatar}/>

                <h4 className="contact-name">{ this.state.contact.name }</h4>

                <IconButton onClick={this.props.remove}
                    tooltip='delete'
                    className='delete-icon'
                    icon="action-highlight-remove"></IconButton>
            </div>
        </a>
    }
});
module.exports = ContactView;
