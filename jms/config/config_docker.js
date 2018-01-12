
var self = {
};
self.LOG_LEVEL = 'debug';

// ---- CONFIGURATION EXPORT ----
self.HOST_SETTINGS = {
    MARKETPLACE_CORE: {
        PROTOCOL:'http',
        HOST: 'core',
        PORT: 3002
    },
    OAUTH_SERVER: {
        PROTOCOL:'http',
        HOST: 'auth',
        PORT: 3006
    }
};
self.OAUTH_CREDENTIALS = {
    CLIENT_ID: 'adb4c297-45bd-437e-ac90-9179eea41747',
    CLIENT_SECRET: 'IsSecret'
};

module.exports = self;