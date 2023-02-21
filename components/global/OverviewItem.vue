<template>
  <div ref="target">
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
        animationTarget.querySelectorAll('p, li'),
        {
          scrollTrigger: {
            trigger: animationTarget,
            toggleActions: 'restart none none reset',
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
          },
          opacity: 1,
          ease: 'power3.easeInOut',
          duration: 0.6,
          stagger: 0.1,
        });
    }
  }
}
</script>

<style lang="scss">
.overview {
  &__heading-group {
    opacity: 0;
  }

  &__column {
    p, li {
      opacity: 0;
    }
  }
}
</style>