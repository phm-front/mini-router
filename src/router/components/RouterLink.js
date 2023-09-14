import { defineComponent, unref, h } from 'vue';
export default defineComponent({
  name: 'RouterLink',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup(props, { slots }) {
    return () => h('a', { href: `#${unref(props.to)}` }, slots.default())
  }
})