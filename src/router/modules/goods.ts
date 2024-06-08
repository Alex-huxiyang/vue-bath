const { VITE_HIDE_HOME } = import.meta.env;

export default {
  path: "/goods",
  name: "Goods",
  meta: {
    icon: "ep:coffee",
    title: "商品",
    rank: 0
  },
  children: [
    {
      path: "/goods",
      name: "Goods",
      component: () => import("@/views/goods/index.vue"),
      meta: {
        title: "商品",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
