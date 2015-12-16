Users.allow({
    update: function(userId, doc, fieldNames, modifier) {
        if(userId == Meteor.userId()) {
            return true;
        } else {
            return false;
        }
    }
});
