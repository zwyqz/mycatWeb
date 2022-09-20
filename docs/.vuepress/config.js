const path = require('path')
const webpack = require('webpack')
const { slugify } = require('./utils')

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './scss/_entry.scss')]
    })
}

module.exports = {
  dest: './dist',
  port: '8081',
  assetsPublicPath: '/',
  title: '上海云业网络科技有限公司',
  markdown: {
    // anchor: { slugify }
  },
  themeConfig: {
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text:'文档',
        link: 'https://www.yuque.com/books/share/6606b3b6-3365-4187-94c4-e51116894695'
      },
      {
        text:'公开编辑文档(提问+提交资料)',
        link: 'https://www.yuque.com/ccazhw/ml3nkf/xg1shb'
      },
      {
        text:'使用mycat 1.6',
        link: 'http://www.mycat.org.cn/mycat1.html'
      },
      {
        text: '下载',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/MyCATApache/Mycat2'
          },
          {
            text: '文件下载服务',
            link: 'http://dl.mycat.org.cn/2.0/'
          }
        ]
      },
      {
        text:'联系我们',
        link: '/about/'
      },
    ],
    sidebar: {
      '/about/': [
        {
          title: '官方社区',
          collapsable: false,
        }
      ],
    }
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type =>
      addStyleResource(config.module.rule('scss').oneOf(type))
    )

    config.resolve.alias.set('@', path.resolve(__dirname, './'))
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          VUE_ENV: JSON.stringify(process.env.VUE_ENV)
        }
      }),
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ]
  }
}
