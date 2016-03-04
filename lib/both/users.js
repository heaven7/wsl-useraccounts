/**
 * WSL Users namespace
 * @namespace Users
 * @type {Meteor.Collection}
 */

Users = Meteor.users

/**
 * Initialize API-Key if needed
 */

if(Meteor.isClient && Meteor.userId()) {
    let handle = Meteor.subscribe('APIKey')
    Tracker.autorun(() => {
        if(handle.ready())
            Meteor.call( "initApiKey", Meteor.userId())

    })
}