const path = require('path');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  /**
   * webpack配置,see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
   **/
  // noParse: [/xx\.min\.js$/],
  chainWebpack: (config) => {
    // 设置svg
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.uses.clear()
    // 添加要替换的 loader
    svgRule.use('svg-sprite-loader').loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  // plugins: [
  //   //忽略moment下的/locale目录，再手动import locale内部我们需要使用到的语言包
  //   new webpack.IgnorePlugin(/\.\/local/, /moment/)

  // ],
  configureWebpack: (config) => {
    config.resolve = { // 配置解析别名
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, './src'),
        'public': path.resolve(__dirname, './public'),
        'components': path.resolve(__dirname, './src/components'),
        'common': path.resolve(__dirname, './src/common'),
        'api': path.resolve(__dirname, './src/api'),
        'views': path.resolve(__dirname, './src/views'),
        'data': path.resolve(__dirname, './src/data'),
        'utils': path.resolve(__dirname, './src/utils'),
        'vue': 'vue/dist/vue.js'
      }
    }
  },
  productionSourceMap: false,
  css: {
    extract: false,
    // css预设器配置项
    // loaderOptions: {
    //     scss: {
    //         prependData: `@import "~@/assets/styles/index.scss";`
    //     }
    // },
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  /**
   *  PWA 插件相关配置,see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
   */
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: false, // 编译完成是否打开网页
    host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 8080, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: null, // 设置代理
    overlay: { // 全屏模式下是否显示脚本错误DRFC
      warnings: true,
      errors: true
    },

    before: app => {
    }
  },
  /**
   * 第三方插件配置
   */
  pluginOptions: {}
}