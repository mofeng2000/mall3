module.exports = {
  configureWebpack: {
    resolve: {
      // extension:[],配置后缀名
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'views': '@/views',
        'network': '@/network',

      }

    }
  }
}
