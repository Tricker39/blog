import { defineConfig } from 'vitepress';

export default defineConfig({
  base: `/blog/`,
  lang: 'zh',
  lastUpdated: true,

  cleanUrls: 'without-subfolders',

  markdown: {
    theme: { light: 'vitesse-light', dark: 'vitesse-dark' },
    lineNumbers: true,
    headers: {
      level: [0, 0],
    },
  },

  themeConfig: {
    outline: [2, 3],
    outlineTitle: '本页目录',
    lastUpdatedText: '上次修改时间',
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '语言切换',
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
        },
      },
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Tricker39/programming-knowledge',
      },
    ],
  },
});
