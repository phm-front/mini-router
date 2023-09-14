import { ref } from 'vue';
import RouterLink from './components/RouterLink.js';
import RouterView from './components/RouterView.js';
export function createRouter(options) {
  const router = {
    ...options,
    current: ref(window.location.hash.slice(1) || '/'),
    install(app) {
      // 注册全局组件 RouterLink 和 RouterView
      app.component('RouterLink', RouterLink)
      app.component('RouterView', RouterView)
      // 存储router实例
      app.config.globalProperties.$router = this
    }
  }
  window.addEventListener('hashchange', () => {
    router.current.value = window.location.hash.slice(1)
  })
  return router
}