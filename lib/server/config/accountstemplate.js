// useraccounts routes

/*
AccountsTemplates.configureRoute('signIn', {
    name: 'sign-in',
    path: '/sign-in',
    template: 'sign-in',
    redirect: '/sign-in'
});

AccountsTemplates.configureRoute('signUp', {
    name: 'sign-up',
    path: '/sign-up',
    template: 'signup',
    redirect: '/sign-up'
});
*/

//AccountsTemplates.configureRoute('signIn');
//AccountsTemplates.configureRoute('signUp');
//AccountsTemplates.configureRoute('forgotPwd');

AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: false,
    showPlaceholders: true,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
//    privacyUrl: 'privacy',
//    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/home',
    redirectTimeout: 4000,

    // Hooks
//    onLogoutHook: wslLogoutFunc,
//    onSubmitHook: wslSubmitFunc,
//    preSignUpHook: wslPreSubmitFunc,

    // Texts
    texts: {
        button: {
            signUp: "Register Now!"
        },
        socialSignUp: "Register",
        socialIcons: {
            "meteor-developer": "fa fa-rocket"
        },
        title: {
            forgotPwd: "Recover Your Password"
        },
    },
});
