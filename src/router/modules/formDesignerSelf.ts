export default {
  path: "/formDesignerSelf",
  redirect: "/formDesignerSelf/index",
  meta: {
    icon: "terminalWindowLine",
    title: "表单设计器（内嵌）",
    showLink: true,
    rank: 13
  },
  children: [
    {
      path: "/formDesignerSelf/index",
      name: "FormDesignerSelf",
      component: () => import("@/views/test/formDesigner/index.vue"),
      meta: {
        title: "表单设计器（内嵌）"
      }
    }
  ]
} as RouteConfigsTable;

