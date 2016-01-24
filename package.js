
Package.describe({
    name: 'heaven7:wsl-useraccounts',
    version: '0.0.3',
    summary: 'Auth wrapper package with useraccounts',
    git: 'https://github.com/heaven7/wsl-useraccounts.git',
    documentation: 'README.md'
});

var both = ['client','server'],
    packages = [
    'heaven7:wsl-core@0.0.3_1',
    'heaven7:wsl-theme-base@0.0.3',
    'heaven7:wsl-files@0.0.3',
    'accounts-ui',
    'accounts-base',
    'accounts-password',
    'accounts-twitter',
    'accounts-facebook',
    'useraccounts:core@1.12.4',
    'useraccounts:iron-routing@1.12.4',
    'useraccounts:semantic-ui@1.12.4',
    'softwarerero:accounts-t9n@1.1.6',
    'utilities:avatar@0.9.2'
];

Package.onUse(function(api) {
    api.versionsFrom('1.2');
    api.use(packages, both);
    api.imply(packages);

    api.addFiles([
        'lib/client/templates/account.html',
        'lib/client/templates/account.js',
        'lib/client/templates/profile.html',
        'lib/client/templates/profile.js',
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
        'lib/server/allow.js',
        'lib/server/publish.js'
    ], 'server');
    api.export('Users');
});
