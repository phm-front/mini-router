import { createRouter } from './router/index.js';
import About from './components/About.vue';
import Home from './components/Home.vue';

export default createRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ]
});
