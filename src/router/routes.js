const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "sedan", component: () => import("pages/SedanPage.vue") },
      { path: "pickup", component: () => import("pages/PickupPage.vue") },
      { path: "hatchback", component: () => import("pages/HatchbackPage.vue") },
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
