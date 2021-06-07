const withPWA = require('next-pwa');

module.exports = withPWA({
  //other next config
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    register:true,
    sw:'/sw.js'
  },
});
