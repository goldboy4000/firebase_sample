/**
 *
 */
require.config({
    config: {
        fb: {
            apiKey: "AIzaSyBZ_kXlSr6SBQunnAbjJIJ38MudCd6J88A",
            authDomain: "blabla-37a1b.firebaseapp.com",
            databaseURL: "https://blabla-37a1b.firebaseio.com",
            projectId: "blabla-37a1b",
            storageBucket: "blabla-37a1b.appspot.com",
            messagingSenderId: "617078208126"
        }
    },

    baseUrl: 'js/app',

    paths:{
        app: 'main',
        firebase: 'https://www.gstatic.com/firebasejs/4.1.2/firebase',
        underscore: '../libs/underscore',
        text: '../libs/text'
    },

    shim: {
        'firebase': {
            exports: 'firebase'
        }
    }
});

/**
 *
 */
require(['app'], function (app)
{
    app.init();
});