
Package.describe({
    name: 'heaven7:wsl-useraccounts',
    version: '0.0.2',
    summary: 'Auth wrapper package with useraccounts',
    git: 'https://github.com/heaven7/wsl-useraccounts.git',
    documentation: 'README.md'
});

both = ['client','server'];

Package.onUse(function(api) {
    api.versionsFrom('1.2');

    var packages = [
        'heaven7:wsl-core@0.0.2',
        'accounts-ui',
        'accounts-base',
        'accounts-password',
        'accounts-twitter',
        'accounts-facebook',
        'useraccounts:core@1.12.4',
        'useraccounts:iron-routing@1.12.4',
        'useraccounts:semantic-ui@1.12.4',
        'softwarerero:accounts-t9n@1.1.4'
    ];

    api.use(packages, ['server', 'client']);
    api.imply(packages);

    api.addFiles([
        'lib/client/templates/account.html',
        'lib/client/templates/account.js',
        'lib/client/templates/profile.html',
        'lib/client/templates/login.html',
        'lib/client/templates/loginRequired.html',
        'lib/client/templates/signup.html',
        'lib/client/templates/logout.html',
        'lib/client/templates/hooks.js'
    ], 'client');

    api.addFiles([
        'lib/both/config/accountsTemplate.js',
        'lib/both/config/router.js',
        'lib/both/routes.js',
        'lib/both/schemas.js',
        'lib/both/users.js'
    ], both);

    api.addFiles([
        'lib/server/methods.js',
        'lib/server/allow.js'
    ], 'server');
    api.export('Users');
});
