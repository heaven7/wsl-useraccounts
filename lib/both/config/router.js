/**
 * Check if user is logged in
 */
var checkUserLoggedIn = function() {
    if(Meteor.user()) {
        Router.go(Router.current().route.path(this));
    } else {
        this.render('loginRequired');
    }
    this.next();
};
Router.onBeforeAction(checkUserLoggedIn, {except: WSL.publicRoutes });
