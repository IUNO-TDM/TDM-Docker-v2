var self = {};

self.HOST_SETTINGS = {
    MARKETPLACE_CORE: {
        PROTOCOL: 'http',
        HOST: 'core',
        PORT: 3002
    },
    OAUTH_SERVER: {
        PROTOCOL: 'http',
        HOST: 'auth',
        PORT: 3006
    },
};

// ---- CONFIGURATION EXPORT ----
self.OAUTH_CREDENTIALS = {
    CLIENT_ID: 'adb4c297-5f53-4332-88ff-07398ee44b6e',
    CLIENT_SECRET: 'IsSecret'
};

self.LOG_LEVEL = 'debug';

module.exports = self;