Meteor.publishComposite('user', {
    find: function() {
        return Meteor.users.find({
            _id: this.userId
        });
    },
    children: [
        {
            find: function(user) {
                var _id, ref;
                _id = ((ref = user.profile) != null ? ref.picture : void 0) || null;
                return Images.find({
                    _id: _id
                });
            }
        }
    ]

});

/**
 * Publishing Roles
 */

Meteor.publish(null, function (){
    return Meteor.roles.find({})
})