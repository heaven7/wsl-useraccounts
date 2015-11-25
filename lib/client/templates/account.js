Template.setUserName.helpers({
   uesr: function() {
       return Meteor.user();
   }
});

Template.setUserName.events({
    'keyup input[name="username"]': function(event) {
        username = $(event.currentTarget).val();
        Meteor.call('validUserName', username, function(err, res) {
            if(res)
                sAlert.error('Usernamen gibt es schon, bitte einen anderen wählen.');
        });
    }

});
