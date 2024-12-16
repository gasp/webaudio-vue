import { createWebHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'
import MediaEents from './components/MediaEvents.vue'
import AudioContext from './components/AudioContext.vue'
import Oscillator from './components/Oscillator.vue'
import OscillatorStartTime from './components/OscillatorStartTime.vue'
import Theremin from './components/Theremin.vue'
import RandomSynth from './components/RandomSynth.vue'
import Gain from './components/Gain.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/media', component: MediaEents },
  { path: '/audio-context', component: AudioContext },
  { path: '/oscillator', component: Oscillator },
  { path: '/oscillator-start-time', component: OscillatorStartTime },
  { path: '/theremin', component: Theremin },
  { path: '/random-synth', component: RandomSynth },
  { path: '/gain', component: Gain },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
