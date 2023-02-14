const {config} = require ("./wdio.conf");
const path = require("path");

const chromeConfig = {
    ...config,
    services: [['chromedriver', { chrome: 'latest' }]], // https://chromedriver.chromium.org/
    //services: ['selenium-standalone'],
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--window-size=1920,1080'],
            },
        },
    ],
    path: '/',
};

exports.config = chromeConfig;