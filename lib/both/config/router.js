/**
 * Check if user is logged in
 */
var checkUserLoggedIn = function() {
    if(Meteor.user()) {
        Router.go('dashboard');
    } else {
        this.render('loginRequired');
 //       return this.next();
    }
};

Router.onBeforeAction(checkUserLoggedIn, {except: WSL.publicRoutes });
