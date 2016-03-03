/**
 * Redirect to set username if required
 */

Router.configure({
    onBeforeAction: function() {
        if (Meteor.isClient && Meteor.userId() && !Meteor.user().username)
            this.redirect('/setUsername');
        return this.next();
    }
});



/**
 * Check if user is logged in
 */

var checkUserLoggedIn = function() {
    if (Meteor.isClient && Meteor.userId()) {
        // get current route even with params
        Router.go(Iron.Location.get().path)
    } else {
        this.render('loginRequired')
    }
    this.next()
};
Router.onBeforeAction(checkUserLoggedIn, {except: WSL.publicRoutes });
