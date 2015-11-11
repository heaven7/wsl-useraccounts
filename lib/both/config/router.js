/**
 * Check if user is logged in
 */
var checkUserLoggedIn = function() {
    this.next();
    if(Meteor.user()) {
        Router.go(Router.current().route.path(this));
    } else {
        this.render('loginRequired');
    }
};
Router.onBeforeAction(checkUserLoggedIn, {except: WSL.publicRoutes });
