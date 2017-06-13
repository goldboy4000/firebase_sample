define(['fb', 'EventManager', 'underscore', 'text!../../templates/menu_template.html'], function(fb, eventManager, _, htmlStr)
{
    /**
     *
     * @constructor
     */
    var Menu = function(container)
    {
        this.container = document.querySelector(container);

        this.tmpl = _.template(htmlStr);

        this.init();
    };

    Menu.prototype =
        {
            /**
             *
             */
            init: function ()
            {
                this.setupHandlers().subscribeHandlers();
                this.render();
            },

            /**
             *
             * @returns {Menu}
             */
            setupHandlers: function ()
            {
                this.container.addEventListener('click', this.clickHandler.bind(this));
                this.userStateChangeHandler = this.userStateChange.bind(this);

                return this;
            },

            /**
             *
             */
            subscribeHandlers: function ()
            {
                eventManager.subscribe('user_state_change', this.userStateChangeHandler);
            },

            /**
             *
             * @param e
             */
            clickHandler: function (e)
            {
                if (e.target.id ==='sign-in')
                {
                    fb.signIn();
                }

                if (e.target.id ==='sign-out')
                {
                    fb.signOut();
                }
            },

            /**
             *
             * @param userData
             */
            userStateChange: function (userData)
            {
                this.render();
            },

            /**
             *
             */
            render: function ()
            {
                this.container.innerHTML = this.tmpl({user: fb.getUserIsAuth()});
            }

        };

    return Menu;

});