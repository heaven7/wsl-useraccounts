/**
 * Redirect to set username if required
 */

Router.configure({
    onBeforeAction: function() {
        if (Meteor.userId() && !Meteor.user().username)
            this.redirect('/setUsername');
        this.next();
    }
});



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
