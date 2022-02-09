import { createRouter, createWebHistory } from 'vue-router';
import routes from './app'

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;