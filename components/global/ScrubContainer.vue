<template>
  <div class="scrub-container" ref="target">
    <slot />
  </div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    setTimeout(() => {
      this.animate();
    }, 1000);
  },
  updated() {
    this.animate();
  },
  methods: {
    animate() {
      const animationTarget = this.$refs.target;

      gsap.to(
        animationTarget,
        {
          scrollTrigger: {
            trigger: animationTarget,
            toggleActions: 'play none none none',
            start: 'top 90%',
            end: 'top 30%',
            scrub: 0.5,
          },
          opacity: 1,
          ease: 'power3.easeInOut',
          duration: 0.4,
        });
    },
  }
}
</script>

<style lang="scss">
.scrub-container {
  opacity: 0;
}
</style>