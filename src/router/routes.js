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
      {
        path: "/aluno",
        name: "Aluno Page Render",
        component: { render: () => h(RouterView) },
        children: [
          {
            path: "",
            name: "Aluno Page",
            component: () => import("src/pages/AlunoPage.vue"),
            meta: { pageTitle: "Aluno" },
          },
          {
            path: "questionario",
            name: "Questionario Page",
            component: () => import("src/pages/QuestionarioPage.vue"),
            meta: { pageTitle: "Questionario" },
          },
        ],
      },
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
