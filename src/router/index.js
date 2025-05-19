import { createRouter, createWebHistory } from 'vue-router';
import JokeView from '@/views/JokeView.vue';
import HomeView from '@/views/HomeView.vue';
import AdviceView from '@/views/AdviceView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/joke',
        name: 'joke',
        component: JokeView,
      },
      {
        path: '/advice',
        name: 'advice',
        component: AdviceView,
      }
    ],
  });
  
  export default router;