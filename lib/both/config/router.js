/**
 * Check if user is logged in
 */
var checkUserLoggedIn = function() {
    this.next();
    if(Meteor.user()) {
        // get current route even with params
        Router.go(Iron.Location.get().path);
    } else {
        this.render('loginRequired');
    }
};
Router.onBeforeAction(checkUserLoggedIn, {except: WSL.publicRoutes });
