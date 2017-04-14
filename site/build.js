/* eslint-disable no-console */
const site = require('./package.json');
const createIndex = require('./buildtools/createIndex');
const copyFiles = require('./buildtools/copyFiles');
const copyDocs = require('./buildtools/copyDocs');

const PUBLIC_URL = process.env.PUBLIC_URL || site.homepage;

const FILES_TO_COPY = [
  ['public/otplib.png', 'dist', 'public'],
  ['public/favicon.ico', 'dist', 'public'],
  ['public/style.css', 'dist/css', 'public'],
  ['public/app.js', 'dist/js', 'public'],
  ['node_modules/bulma/css/bulma.css', 'dist/css', 'node_modules/bulma/css'],
  ['node_modules/qrcode/build/qrcode.min.js', 'dist/js', 'node_modules/qrcode/build'],
  ['node_modules/highlight.js/lib/highlight.js', 'dist/js', 'node_modules/highlight.js/lib'],
  ['node_modules/highlight.js/styles/atom-one-dark.css', 'dist/css', 'node_modules/highlight.js/styles']
];

const targets = (process.env.BUILD_PKG || '').split(',');

if (targets.indexOf('index') > -1) {
  createIndex(PUBLIC_URL);
}

if (targets.indexOf('copy') > -1) {
  copyFiles(FILES_TO_COPY);
}

if (targets.indexOf('docs') > -1) {
  copyDocs();
}
