import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Lobby from "@/views/Lobby.vue";
import About from "@/views/About.vue";
import Market from '@/views/Market.vue'
const routes : RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    // redirect: '/Home',
    component: Home,
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: Lobby
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/market',
    name: 'Market',
    component: Market
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 登入...
// router.beforeEach(async (to, from, next) => {});

export default router;
