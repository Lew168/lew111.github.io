import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Article from '../views/Article.vue'
import Content from '../views/content.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/article'
  },
  {
    path: '/article',
    name: 'article',
    component: Article
  },
  {
    path: '/content/:id',
    name: 'content',
    component: Content
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
