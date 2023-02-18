import { defineTheme } from '@koishijs/vitepress/client'
import home from './layouts/home/index.vue'
import Layout from './layout.vue'
import './index.scss'

export default defineTheme({
  layouts: {
    home,
  },
  Layout,
})
