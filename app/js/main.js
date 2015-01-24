'use strict';
requirejs.config({
    'paths': {
        'jquery': '../../vendor/jquery/dist/jquery',
        'underscore': '../../vendor/underscore/underscore',
        'backbone': '../../vendor/backbone/backbone',
        "react": '../../vendor/react/react',
        "jsx": "../../vendor/jsx-requirejs-plugin/js/jsx",
        "JSXTransformer": "../../vendor/react/JSXTransformer",
        "text": "../../vendor/requirejs-text/text"
    },
    'shim': {
        'underscore': {
            'exports': '_'
        },
        'backbone': {
            'deps': ['jquery', 'underscore'],
            'exports': 'Backbone'
        }
    }
});

require([
    'router'
], function (Router) {
    new Router();
});
