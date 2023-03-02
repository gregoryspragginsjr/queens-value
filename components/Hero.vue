<template>
  <div class="hero">
    <div class="hero__inner grid">
      <div class="hero__main">
        <a href="https://www.queens.edu/" target="_blank">
          <SvgLogo class="hero__logo" />
          <span class="sr-only">Link to Queens.edu</span>
        </a>
        <h1 class="hero__heading">
          <span class="hero__line hero__line1" ref="line1"><span class="hero__queens"><span class="hero__q">Q</span>ueens</span></span> 
          <span class="hero__line hero__line2" ref="line2"><span class="hero__is-worth-it">is <span class="hero__worth"><span class="hero__w">W</span>orth</span> <span class="hero__it">It</span></span></span> 
          <span class="hero__line hero__line3" ref="line3"><span class="hero__and">and So Are</span> <span class="hero__you">You</span></span> 
        </h1>
      </div>
    </div>
    <div class="hero__inner grid">
      <div class="hero__secondary">
        <p><strong>W</strong>e know how special it is to have earned a spot on your list. And if you're reading this, you've probably got some big questions right about now. Good news is: we've got answers.</p>
        <p>Read on to find out why we're worth it, and how our admissions process is personalized and tailored to meet your individual needs.</p>
      </div>
      <SvgRiseRoyals class="hero__rise-royals" />
    </div>
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
      const animationTarget = this.$refs.line1;
      const animationTarget2 = this.$refs.line2;
      const animationTarget3 = this.$refs.line3;

      gsap.to(
        animationTarget,
        {
          scrollTrigger: {
            trigger: animationTarget,
            toggleActions: 'play none none none',
            start: 'top 2%',
            end: 'bottom 2%',
            scrub: 1,
          },
          x: '-200px',
          ease: 'power3.easeInOut',
          duration: 2,
        }
      );

      gsap.to(
        animationTarget2,
        {
          scrollTrigger: {
            trigger: animationTarget2,
            toggleActions: 'play none none none',
            start: 'top 2%',
            end: 'bottom 2%',
            scrub: 1,
          },
          x: '400px',
          ease: 'power3.easeInOut',
          duration: 2,
        }
      );

      gsap.to(
        animationTarget3,
        {
          scrollTrigger: {
            trigger: animationTarget3,
            toggleActions: 'play none none none',
            start: 'top 2%',
            end: 'bottom 2%',
            scrub: 1,
          },
          x: '-400px',
          ease: 'power3.easeInOut',
          duration: 2,
        }
      );
    }
  }
}
</script>

<style lang="scss">
.hero {
  padding: 28px 0 34px;
  background-image:
    linear-gradient(180deg, rgba(0, 32, 91, 0) 67.71%, $navy 100%),
    url('~/assets/images/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  @include breakpoint(medium) {
    padding: 28px 0 180px;
  }

  &__inner {
    display: block;
    position: relative;

    @include breakpoint(medium) {
      display: grid;
    }
  }

  &__inner + &__inner {
    margin-top: 80px;

    @include breakpoint(medium) {
      margin-top: 100px;
    }

    @include breakpoint(large) {
      margin-top: 0;
    }
  }

  &__main {
    position: relative;
    grid-column: span 12 / span 12;
  }

  &__secondary {
    position: relative;
    grid-column: span 12 / span 12;

    @include breakpoint(medium) {
      grid-column: span 8 / span 8;
    }

    @include breakpoint(large) {
      grid-column: span 5 / span 5;
    }

    p {
      @extend .paragraph-style-2;

      color: $white;
    }
  }

  &__logo {
    position: absolute;
    right: 0;
    width: 132px;
    fill: $white;

    @include breakpoint(medium) {
      width: 188px;
    }
  }

  &__heading {
    font-family: $font-primary;
    font-size: rem-calc(80px);
    font-weight: 1000;
    line-height: calc(110 / 98);
    text-transform: uppercase;
    color: $neon;
    padding-top: 80px;

    @include breakpoint(medium) {
      font-size: rem-calc(140px);
      line-height: calc(120 / 140);
      padding-top: 40px;
    }

    @include breakpoint(large) {
      font-size: rem-calc(160px);
      line-height: calc(144 / 160);
      padding-top: 0;
    }
  }

  &__line {
    display: block;

    @include breakpoint(medium) {
      display: flex;
      align-items: baseline;
    }
  }

  &__line1 {
    padding-left: 30px;

    @include breakpoint(medium) {
      padding-left: 0;
    }
  }

  &__line2 {
    justify-content: space-between;
    animation-delay: 0.4s;

    @include breakpoint(large) {
      justify-content: flex-end;
    }
  }

  &__line3 {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    margin-top: 30px;

    @include breakpoint(medium) {
      margin-top: 120px;
    }
  }

  &__queens,
  &__is-worth-it,
  &__and,
  &__you {
    display: block;
    animation-name: floating;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  &__is-worth-it {
    @include breakpoint(medium) {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      width: 100%;
    }
  
    @include breakpoint(large) {
      display: block;
      width: auto;
    }
  }

  &__worth {
    @include breakpoint(large) {
      margin: 0 80px;
    }
  }

  &__q {
    font-family: 'dolcetto', serif;
  }

  &__w {
    font-family: 'ofform', serif;
    font-size: rem-calc(100px);

    @include breakpoint(medium) {
      font-size: rem-calc(180px);
    }

    @include breakpoint(large) {
      font-size: rem-calc(206px);
    }
  }

  &__it {
    margin-left: 80px;

    @include breakpoint(medium) {
      margin-left: 0;
    }
  }

  &__and {
    font-size: rem-calc(34px);
    animation-delay: 0.8s;

    @include breakpoint(medium) {
      font-size: rem-calc(56px);
    }
  }

  &__you {
    animation-delay: 1.4s;
  }

  &__rise-royals {
    display: block;
    grid-column: span 12 / span 12;
    width: 68px;
    fill: $neon;
    margin-top: 80px;
    margin-right: 0;
    margin-left: auto;

    @include breakpoint(medium) {
      position: absolute;
      right: 20px;
      bottom: 0;
      width: 85px;
      margin-top: 0;
    }
  }
}

@keyframes floating {
  0% { transform: translateY(0px); }
  50%  { transform: translateY(15px); }
  100%   { transform: translateY(-0px); }   
}
</style>