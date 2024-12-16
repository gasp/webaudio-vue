import { createWebHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'
import MediaEents from './components/MediaEvents.vue'
import AudioContext from './components/AudioContext.vue'
import Oscillator from './components/Oscillator.vue'
import OscillatorStartTime from './components/OscillatorStartTime.vue'
import Theremin from './components/Theremin.vue'
import RandomSynth from './components/RandomSynth.vue'
import Gain from './components/Gain.vue'
import LowFrequencyOscillator from './components/LowFrequencyOscillator.vue'
import SampleRate from './components/SampleRate.vue'
import Buffer from './components/Buffer.vue'
import DecodeAudio from './components/DecodeAudio.vue'
import Effects from './components/Effects.vue'
import Microphone from './components/Microphone.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/media', component: MediaEents },
  { path: '/audio-context', component: AudioContext },
  { path: '/oscillator', component: Oscillator },
  { path: '/oscillator-start-time', component: OscillatorStartTime },
  { path: '/theremin', component: Theremin },
  { path: '/random-synth', component: RandomSynth },
  { path: '/gain', component: Gain },
  { path: '/lfo', component: LowFrequencyOscillator },
  { path: '/sample-rate', component: SampleRate },
  { path: '/buffer', component: Buffer },
  { path: '/decode-audio', component: DecodeAudio },
  { path: '/microphone', component: Microphone },
  { path: '/effects', component: Effects },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
