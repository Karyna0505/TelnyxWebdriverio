const { config } = require('./wdio.conf');

const firefoxConfig = {
    ...config,
    // services:  [['firefox-profile', { firefox: 'latest' }]], // https://chromedriver.chromium.org/
    //services: ['firefox-profile'],

    capabilities: [
        {
            maxInstances: 1,
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: ['--window-size=1280,1024'],
            },
        },
    ],
};

exports.config = firefoxConfig;
