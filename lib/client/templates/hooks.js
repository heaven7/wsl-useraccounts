AutoForm.hooks({
    setUsername: {
        onSubmit: function(insert, doc) {
        },
        onError: function(insert, error, template) {
        },
        onSuccess: function(insert, doc) {
            return console.log(insert, doc);
        }
    }
});