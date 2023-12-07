import * as VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: () => import("./pages/Home.vue"),
  },
  {
    path: "/acerca-de",
    name: "Acerca de",
    component: () => import("./pages/About.vue"),
  },
  {
    path: "/estadisticas",
    name: "estudiantes",
    component: () => import("./pages/TablasEstadisticas.vue"),
  },
  {
    path: "/Generos",
    name: "genero",
    component: () => import("./pages/TablaGeneros.vue"),
  },
  {
    path: "/Generacion",  
    name: "generacion",
    component: () => import("./pages/TablaGeneracion.vue"),
  },
  {
    path: "/Edad",  
    name: "edad",
    component: () => import("./pages/TablaEdad.vue"),
  },
  {
    path: "/Estudiante/:numero",
    name: "StudentData",
    component: () => import("./pages/StudentData.vue"),
    props: true, //Se indica que se recibiran props
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

export default router;
