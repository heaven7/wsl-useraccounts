Meteor.methods({
    validUserName: function(username) {
        check(username, String);
        return !!Meteor.users.findOne({username: username});
    }
});