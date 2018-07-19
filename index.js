function queryString(params) {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}

function prefixKeys(o, prefix) {
  const r = {};
  Object.keys(o).forEach(k => {
    r[prefix + k] = o[k];
  });
  return r;
}

module.exports = function (id, utm = null) {
  const params = {
    id: id
  };
  if (utm) {
    if (!utm.source) {
      throw new Error('utm.source must be set');
    }
    params.referrer = queryString(prefixKeys(utm, 'utm_'));
  }
  return 'https://play.google.com/store/apps/details?' + queryString(params);
};
