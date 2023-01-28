import { defineConfig } from '@koishijs/vitepress'

const makeLink = (text: string, link: string) => ({ text, link })

export default async () => defineConfig({
  title: 'DiffSVC-docs',

  head: [
      ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#5546a3' }],
  ],

  themeConfig: {
    indexName: 'docs',
    nav: [{
      text: '基础环境安装与建设',
      link: '/1/',
      activeMatch: '^/1/',
    }, {
      text: '数据集处理与制作',
      link: '/2/',
      activeMatch: '^/2/',
    },
    //  {
    //   text: '数据预处理',
    //   link: '/3/',
    //   activeMatch: '^/3/',
    // }, {
    //   text: '数据训练',
    //   link: '/4/',
    //   activeMatch: '^/4/',
    // }, {
    //   text: '炼丹小技巧~',
    //   link: '/5/',
    //   activeMatch: '^/5/',
    // }
  ],

    sidebar: {
      '/1/': [{
        items: [
          makeLink('基础环境安装与建设', '/1/index.md'),
          makeLink('Anconda 安装与换源', '/1/1.md'),
          makeLink('DiffSVC 推理和预处理环境', '/1/2.md'),
          makeLink('疑难解答', '/1/2-out.md'),
        ],
      }],
      '/2/': [{
        items: [
          makeLink('数据集处理与制作', '/2/index.md'),
        ],
      }],
      // '/3/': [{
      //   items: [
      //     makeLink('数据预处理', '/3/index.md'),
      //     makeLink('在本地进行预处理', '/3/1 .md'),
      //   ],
      // }],
      // '/4/': [{
      //   items: [
      //     makeLink('开始训练', '/4/index.md'),
      //     makeLink('在 九天 · 毕昇 训练', '/4/1 .md'),
      //   ],
      // }],
      // '/5/': [{
      //   items: [
      //     makeLink('炼丹小技巧', '/5/index.md'),
      //     makeLink('如何判断过拟合', '/5/1 .md'),
      //     makeLink('Mel 图该怎么看', '/5/2.md'),
      //   ],
      // }],


    },

    socialLinks: {
      qq: 'https://jq.qq.com/?_wv=1027&k=N0wZJ5RK',
    },
  },
  base: "/"
})
// <svg class="Zi Zi--QQ Login-socialIcon" fill="#50c8fd" viewBox="0 0 24 24" width="40" height="40"><path d="M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474c0 .665.17 1.025.281 1.025.114 0 .902-.484 1.748-2.072 0 0-.18 2.197 1.904 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.239.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.111 0 .283-.36.283-1.025 0-2.514-2.166-6.954-2.166-6.954V9.325C18.29 3.364 14.268 2 12.003 2z" fill-rule="evenodd"></path></svg>
