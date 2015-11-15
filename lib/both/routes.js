/**
 * Profile
 */

Router.route('/profile', {
    name: 'profile',
    template: 'profile'
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

