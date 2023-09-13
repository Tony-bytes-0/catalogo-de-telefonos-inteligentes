const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/IndexPage.vue") },
      { path: "Motorola", component: () => import("pages/Motorola.vue") },
      { path: "Redmi", component: () => import("pages/Redmi.vue") },
      { path: "/Iphone", component: () => import("pages/Iphone.vue") },
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
