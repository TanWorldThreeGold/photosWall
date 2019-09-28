// let path = require('path')
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

// module.exports = {
//   chainWebpack: config => {
//     config.resolve.alias
//       .set('img', resolve('src/assets/img'))
//     config.module
//       .rule('images')
//         .use('url-loader')
//           .loader('url-loader')
//           .tap(options => Object.assign(options, {}))
//   }
// }

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'img': '@/assets/img',
        'components': '@/components',
        'views': '@/views'
      }
    }
  },
}