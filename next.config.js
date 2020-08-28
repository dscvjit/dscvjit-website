const withImages = require('next-images');
module.exports = withImages({
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: 'AIzaSyAX1VFk_jUxlDaMFzUAVXY3CpKXEh2zGxA',
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: 'dscvjit-web.firebaseapp.com',
    NEXT_PUBLIC_FIREBASE_DATABASE_URL: 'https://dscvjit-web.firebaseio.com',
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: 'dscvjit-web',
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: 'dscvjit-web.appspot.com',
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: '372430943665',
    NEXT_PUBLIC_FIREBASE_APP_ID: '1:372430943665:web:4ccc0ce33b8667e55a7990',
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: 'G-3THR371Z6L',
    NEXT_PUBLIC_TRACKING_CODE: 'UA-168037084-1'
  },
  webpack(config, options) {
    return config;
  }
});
