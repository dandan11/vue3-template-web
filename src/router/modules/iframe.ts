const IFrame = () => import("@/layout/frameView.vue");

export default {
  path: "/iframe",
  meta: {
    icon: "monitor",
    title: "外部页面",
    rank: 14
  },
  children: [
    {
      path: "/external",
      name: "https://yiming_chang.gitee.io/pure-admin-doc",
      meta: {
        title: "框架文档（外链）"
      }
    },
    {
      path: "/iframe/ep",
      name: "https://element-plus.org/zh-CN/",
      meta: {
        title: "Element Plus 文档"
      }
    },
    {
      path: "/iframe/vue3",
      name: "https://cn.vuejs.org/",
      meta: {
        title: "Vue3 文档"
      }
    },
    {
      path: "/iframe/vite",
      name: "https://cn.vitejs.dev/",
      meta: {
        title: "Vite 文档"
      }
    },
    {
      path: "/iframe/pinia",
      name: "https://pinia.vuejs.org/zh/index.html",
      meta: {
        title: "Pinia 文档"
      }
    },
    {
      path: "/iframe/tailwindcss",
      name: "https://tailwindcss.com/docs/installation",
      meta: {
        title: "Tailwindcss 文档"
      }
    }
  ]
};