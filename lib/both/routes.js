/**
 * Profile
 */

Router.route('/profile', {
    name: 'profile.show',
    template: 'showProfile',
    waitOn: function() {
        return [
            subs.subscribe('user'),
            subs.subscribe('images')
        ];
    },
    data: function () {
        return Meteor.user();
    },
    fastRender: true
});


/**
 * Profile edit
 */

Router.route('/profile/edit', {
    name: 'profile.edit',
    template: 'profileEdit',
    waitOn: function() {
        return [
            subs.subscribe('user'),
            subs.subscribe('images')
        ];
    },
    data: function () {
        return Meteor.user();
    },
    fastRender: true
});

/**
 * setUsername
 */

Router.route('/setUsername', {
    name: 'setUsername',
    template: 'setUsername',
    onBeforeAction: function () {
        if (Meteor.userId() && Meteor.user().username) {
            this.redirect('/dashboard');
        }
        this.next();
    }
});

/**
 * Account
 */

Router.route('/account', {
    name: 'account',
    template: 'account'
});

/**
 * Useraccounts Iron-routing
 */

/**
 * Login
 */
AccountsTemplates.configureRoute('signIn', {
    name: 'login',
    path: '/login',
    template: 'login',
    redirect: '/dashboard'
});

/**
 * SignUp
 */

AccountsTemplates.configureRoute('signUp', {
    name: 'signup',
    path: '/signup',
    template: 'signup',
    redirect: '/dashboard'
});

/**
 * Logout
 */

Router.route('/logout', function () {
    Meteor.logout();
    this.redirect('home');
});

