import { createRouter, createWebHistory } from "vue-router";

const ArticleFeed = () => import("../views/articles/ArticleFeed.vue");
const CreateArticle = () => import("../views/articles/CreateArticle.vue");
const TheArticle = () => import("../views/articles/TheArticle");

const routes = [
  { path: "/", redirect: "/articles" },
  { path: "/articles", component: ArticleFeed },
  { path: "/articles/:id", component: TheArticle, props: true },
  { path: "/create-article", component: CreateArticle },
  { path: "/:notFound(.*)", component: () => import("../views/NotFound.vue") },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
