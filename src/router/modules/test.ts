export default {
  path: "/test",
  redirect: "/test/twTreeTest",
  meta: {
    icon: "homeFilled",
    title: "演示模块",
    showLink: true
  },
  children: [
    {
      path: "/test/twTreeTest",
      name: "TwTreeTest",
      component: () => import("@/views/test/index.vue"),
      meta: {
        title: "树形结构测试"
      }
    },
    {
      path: "/test/twBackBoxTest",
      name: "TwBackBoxTest",
      component: () => import("@/views/test/twBackBox/index.vue"),
      meta: {
        title: "公共背景测试"
      }
    },
    {
      path: "/test/twUploadTest",
      name: "TwUploadTest",
      component: () => import("@/views/test/twUpload/index.vue"),
      meta: {
        title: "上传组件测试",
        showLink: false
      }
    },
    {
      path: "/test/twDialogTest",
      name: "TwDialogTest",
      component: () => import("@/views/test/twDialogTest/index.vue"),
      meta: {
        title: "弹出框测试"
      }
    }
  ]
};
