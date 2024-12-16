<script setup lang="ts">
let context: null | AudioContext = null

const rec = () => {
  context = new AudioContext()

  //set up the different audio nodes we will use for the app
  const analyser = context.createAnalyser()
  const distortion = context.createWaveShaper()
  const biquadFilter = context.createBiquadFilter()
  // const convolver = context.createConvolver()


  navigator.mediaDevices
    .getUserMedia({ audio: true, video: false })
    .then(stream => {
      if (!context) return

      const source = context.createMediaStreamSource(stream)
      source.connect(analyser)
      analyser.connect(distortion)
      distortion.connect(biquadFilter)
      biquadFilter.connect(context.destination)
      // convolver.connect(context.destination)
      // gainNode.connect(context.destination)

      // Manipulate the Biquad filter

      biquadFilter.type = 'lowshelf'
      biquadFilter.frequency.setValueAtTime(1000, context.currentTime)
      biquadFilter.gain.setValueAtTime(25, context.currentTime)

      // biquadFilter.connect(context.destination)
    })
}

</script>

<template>
  <button @click="rec">Record (and play with effects)</button>
</template>

<style scoped></style>