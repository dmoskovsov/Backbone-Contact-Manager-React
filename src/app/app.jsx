(function () {
    var React = require('react'),
        injectTapEventPlugin = require("react-tap-event-plugin"),
        $ = require('jquery/dist/jquery'),
        Backbone = require('backbone'),
        Router = require('./router.jsx'),
        Header = require('./views/header.jsx');

    Backbone.$ = $;
    window.React = React;
    new Router();
    injectTapEventPlugin();
    React.render(<Header/>, document.getElementById('header'));
})();
