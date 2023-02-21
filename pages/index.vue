<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <Hero />
      <BaseModule
        v-for="(item, index) in components"
        :moduleData="item"
      />
      <Footer />
    </div>
  </div>
</template>

<script>
import page from '~/assets/data/index.yml';
// import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";


// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default {
  data() {
    return {
      components: page.components,
    };
  },
  mounted() {
    // this.smoother = ScrollSmoother.create({
    //   wrapper: '#smooth-wrapper',
    //   content: '#smooth-content'
    // });
  },
}
</script>