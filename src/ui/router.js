import { createRouter, createWebHistory } from "vue-router";

/**Pages */
import Home from "@/ui/pages/home/Home.vue";
import Game from "@/ui/pages/game/Game.vue";

const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: false
      }
    },
    {
      name: "Game",
      path: "/game",
      component: Game,
      meta: {
        requiresAuth: true
      }
    }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(async (to, from, next) => {
    next();
});

export {
    router
} 
