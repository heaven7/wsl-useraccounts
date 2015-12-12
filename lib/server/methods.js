Meteor.methods({
    validUserName: function(username) {
        check(username, String);
        return !!Meteor.users.findOne({username: username});
    },
    addUserToRoles: function(userId, roles, group) {
        roles.forEach(function(role) {
            Roles.addUsersToRoles(userId, role, group);
        });
    }
});