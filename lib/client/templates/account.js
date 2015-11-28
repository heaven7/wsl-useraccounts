Template.setUsername.helpers({
   user: function() {
       return Meteor.user();
   }
});

Template.setUsername.events({
    'keyup input[name="username"]': function(event) {
        var username = $(event.currentTarget).val();
        Meteor.call('validUserName', username, function(err, res) {
            if(res)
                wAlert.error(i18n.t('username_already_exists'));
        });
    }

});
