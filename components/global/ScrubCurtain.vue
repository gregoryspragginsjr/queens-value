<template>
  <div class="scrub-curtain">
    <div class="scrub-curtain__curtain" ref="target" />
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
            start: 'top 80%',
            end: 'top 30%',
            scrub: 0.5,
          },
          width: 0,
          ease: 'power3.easeInOut',
          duration: 0.4,
        });
    },
  }
}
</script>

<style lang="scss">
.scrub-curtain {
  position: relative;

  &__curtain {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>