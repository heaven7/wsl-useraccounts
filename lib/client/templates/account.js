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
                sAlert.error('Usernamen gibt es schon, bitte einen anderen wählen.');
        });
    }

});
