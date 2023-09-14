import { defineComponent, getCurrentInstance, h } from 'vue';
export default defineComponent({
  name: 'RouterView',
  setup() {
    // 获取router实例
    const {
      proxy: { $router },
    } = getCurrentInstance();

    return () => {
      let component;
      // 获取当前路由对应的组件
      // $router.current.value操作必须放在render函数内以收集函数更新依赖
      const route = $router.routes.find(
        (route) => route.path === $router.current.value
      );
      if (route) {
        component = route.component;
      } else {
        component = null;
      }
      return h(component);
    };
  },
});
