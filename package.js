
Package.describe({
  name: 'heaven7:wsl-useraccounts',
  version: '0.0.1',
  summary: 'Auth wrapper package with useraccounts',
  git: 'https://github.com/heaven7/wsl-useraccounts.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('wsl-useraccounts.js');

  api.use([
    'useraccounts:unstyled@1.8.1',
    'accounts-password'
    ], ['server', 'client'])
});
