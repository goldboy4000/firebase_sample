define(['fb', 'Menu'], function (fb, Menu) {

    return {
        init: function () {
            console.log('init!');

            fb.init();

            new Menu('#menu_container');
        }
    }

});