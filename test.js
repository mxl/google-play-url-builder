const
  assert = require('assert'),
  googlePlayUrlBuilder = require('./dist/index').default,
  id = 'com.example.app';

describe('Google Play URL builder', function () {
  it('fails without utm_source', function () {
    assert.throws(() => googlePlayUrlBuilder(id, {}), Error, 'utm.source must be set');
  });

  it('builds url', function () {
    assert.equal(googlePlayUrlBuilder(id, {
      source: 'google',
      medium: 'banner',
      term: 'running+shoes',
      content: 'wow',
      campaign: 'justdoit'
    }), 'https://play.google.com/store/apps/details?id=com.example.app&referrer=utm_source%3Dgoogle%26utm_medium%3Dbanner%26utm_term%3Drunning%252Bshoes%26utm_content%3Dwow%26utm_campaign%3Djustdoit');
  });
});