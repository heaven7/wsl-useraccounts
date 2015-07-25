
Package.describe({
    name: 'heaven7:wsl-useraccounts',
    version: '0.0.1',
    summary: 'Auth wrapper package with useraccounts',
    git: 'https://github.com/heaven7/wsl-useraccounts.git',
    documentation: 'README.md'
});

both = ['client','server'];

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');

    var packages = [
        'heaven7:wsl-core',
        'accounts-ui',
        'accounts-base',
        'accounts-password',
        'accounts-twitter',
        'accounts-facebook',
        'useraccounts:unstyled@1.9.1'
    ];

    api.use(packages, ['server', 'client']);
    api.imply(packages);

    api.addFiles([
        'lib/both/config/accountstemplate.js',
        'lib/both/routes.js',
        'lib/both/schemas.js',
        'lib/both/users.js'
    ], both);

    api.addFiles([
        'lib/client/templates/account.html',
        'lib/client/templates/profile.html'
    ], 'client');

    api.export('Users');

});
