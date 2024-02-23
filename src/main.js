import { createApp } from 'vue';
import App from './App.vue';
import HomeRoute from './components/HomeRoute.vue';
import AboutRoute from './components/AboutRoute.vue';
import NotFound from './components/NotFound.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', component: HomeRoute },
  { path: '/about', component: AboutRoute },
  { path: '/:pathMatch(.*)', component: NotFound }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');