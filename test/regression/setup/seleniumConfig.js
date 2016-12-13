const os = require('os');

const config = {
  version: '3.0.1',
  baseURL: 'https://selenium-release.storage.googleapis.com',
};

config.chrome = {
  version: '2.25',
  arch: process.arch,
  baseURL: 'https://chromedriver.storage.googleapis.com',
};

config.firefox = {
  version: '0.11.1',
  arch: process.arch,
  baseURL: 'https://github.com/mozilla/geckodriver/releases/download',
};

if (os.platform() === 'win32') {
  config.ie = {
    version: '2.53.1',
    arch: process.arch,
    baseURL: 'https://selenium-release.storage.googleapis.com',
  };
}

module.exports = config;