[![npm](https://img.shields.io/npm/v/google-play-url-builder.svg)](https://www.npmjs.com/package/google-play-url-builder)
[![Build Status](https://travis-ci.org/mxl/google-play-url-builder.svg?branch=master)](https://travis-ci.org/mxl/google-play-url-builder)
[![David](https://img.shields.io/david/mxl/google-play-url-builder.svg)](https://david-dm.org/mxl/google-play-url-builder)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# google-play-url-builder

Build Google Play Store URL for Android application with optional Google Analytics UTM parameters.
See https://developers.google.com/analytics/devguides/collection/android/v4/campaigns#google-play-url-builder.

## Install

```bash
$ npm install --save google-play-url-builder
```

## Usage

```js
const googlePlayUrlBuilder = require('google-play-url-builder');

// https://play.google.com/store/apps/details?id=com.example.app
const url = googlePlayUrlBuilder('com.example.app');

// https://play.google.com/store/apps/details?id=com.example.app&referrer=utm_source%3Dgoogle%26utm_medium%3Dbanner%26utm_term%3Drunning%252Bshoes%26utm_content%3Dwow%26utm_campaign%3Djustdoit
const urlWithUtm = googlePlayUrlBuilder('com.example.app', {
  source: 'google',
  medium: 'banner',
  term: 'running+shoes',
  content: 'wow',
  campaign: 'justdoit'
});
```

## License

See the [LICENSE](https://github.com/mxl/google-play-url-builder/blob/master/LICENSE) file for details.