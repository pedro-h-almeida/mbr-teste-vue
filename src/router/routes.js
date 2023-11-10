import { h } from "vue";
import { RouterView } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Main Page",
        component: () => import("src/pages/MainPage.vue"),
        meta: { pageTitle: "Página Inicial" },
      },
      // {
      //   path: "/market-share",
      //   name: "Market Share Render",
      //   component: { render: () => h(RouterView) },
      //   children: [
      //     {
      //       path: "",
      //       name: "Market Share List",
      //       component: () =>
      //         import("src/pages/MarketShare/MarketShareList.vue"),
      //       meta: { pageTitle: "Market Share" },
      //     },
      //     {
      //       path: "form",
      //       name: "Market Share Form",
      //       component: () =>
      //         import("src/pages/MarketShare/MarketShareForm.vue"),
      //       meta: { pageTitle: "Market Share", showBackButton: true },
      //     },
      //   ],
      // },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
