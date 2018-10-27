
<template>
<main id="app" class="chart">
  <figure class="chart__content">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -25 440 125">
      <path class="chart__path" :d="`M${path}`"
        fill="none" stroke="rgba(255, 255, 255, 0.3)"
        stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      
      <text v-for="([ x, y ]) in path" :x="x - 10" :y="y - 7.5"
        font-size="11" font-weight="200" fill="currentColor">
        {{ 100 - (y | 0) + '%' }}
      </text>
    </svg>
    
    <figcaption class="chart__caption">
      <h1 class="chart__title">SVG path animation</h1>
      <h2 class="chart__subtitle">with VueJS &amp; TweenLite</h2>
    </figcaption>
  </figure>
  
  <button class="modal__open" @click="modal = true">About this pen</button>
  
  <transition name="modal">
    <section v-if="modal" class="modal" @click="modal = false">
      <article class="modal__content" @click.stop>
        <h4 class="modal__title">For the full tutorial</h4>
        <h4 class="modal__title">that goes with this pen</h4>

        <h5 class="modal__link" @click="modal = false">
          <a href="https://snipcart.com/blog/vuejs-transitions-animations" target="_blank">
            Creating Vue.js Transitions &amp; Animations
          </a>
        </h5>

        <button class="modal__close" @click="modal = false">&times;</button>
      </article>
    </section>
  </transition>
</main>

</template>
<script>
new Vue({
  el: '#app',
  data() {
    return {
      modal: false,
      points: { a: -1, b: -1, c: -1, d: -1, e: -1 }
    }
  },
  
  computed: {
    path() {
      return Object.keys(this.points)
        .filter(key => ~'abcde'.indexOf(key))
        .map((key, i) => [i * 100, 100 - this.points[key]])
    }
  },
  
  methods: {
    setPoint(key) {
      let duration = this.random(3, 5)
      let destination = this.random(0, 100)
      this.animatePoint({ key, duration, destination })
    },
    
    animatePoint({ key, duration, destination }) {
      TweenLite.to(this.points, duration, {
				[key]: destination,
				ease: Sine.easeInOut,
				onComplete: this.setPoint,
				onCompleteParams: [key]
			})
    },
    
    random(min, max) {
			return ((Math.random() * (max - min)) + min).toFixed(2)
		}
  },
  
  mounted() {
    Object.keys(this.points).forEach(this.setPoint)
  }
})
</script>