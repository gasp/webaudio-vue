import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'
import MediaEents from './components/MediaEvents.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/media', component: MediaEents },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
