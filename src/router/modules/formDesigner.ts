const IFrame = () => import("@/layout/frameView.vue");

export default {
  path: "/formDesigner",
  redirect: "/formDesigner/index",
  meta: {
    icon: "terminalWindowLine",
    title: "表单设计器（外链）",
    rank: 12
  },
  children: [
    {
      path: "/formDesigner/index",
      name: "FormDesigner",
      component: IFrame,
      meta: {
        title: "表单设计器（外链）",
        frameSrc:
          "http://120.92.142.115:81/vform3/"
      }
    }
  ]
} as RouteConfigsTable;
