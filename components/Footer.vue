<template>
  <div class="footer">
    <div class="footer__inner grid">
      <div class="footer__main">
        <h2 class="footer__heading"><span class="footer__r">R</span>each Out <span class="footer__t">T</span>oday</h2>
        <p class="footer__paragraph paragraph-style-1 text-light">You don’t need to be perfect for a school when there’s already a school that’s perfect for you</p>
      </div>
    </div>
    <div class="footer__inner grid">
      <a class="footer__cta" href="" target="_blank">Contact Financial Aid</a>
      <a class="footer__cta" href="" target="_blank">Contact Admissions Counseling</a>
    </div>
    <div class="footer__inner grid">
      <div class="footer__links">
        <div class="footer__group">
          <a href="https://www.queens.edu/" target="_blank">
            <SvgLogo2 class="footer__logo" />
          </a>
          <ul class="footer__main-nav">
            <li><a href="/" target="_blank">Apply</a></li>
            <li><a href="/" target="_blank">Visit</a></li>
            <li><a href="/" target="_blank">Insta</a></li>
          </ul>
        </div>
        <ul class="footer__utility-nav">
          <li><a href="/" target="_blank">Copyright</a></li>
          <li><a href="/" target="_blank">Privacy Policy</a></li>
          <li><a href="https://www.queens.edu/" target="_blank">Queens.edu</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  padding: 80px 0;
  background-color: $navy;

  &__inner + &__inner {
    margin-top: 80px;
  }

  &__main {
    grid-column: span 12 / span 12;

    text-align: center;
  }

  &__heading {
    font-family: $font-primary;
    font-size: rem-calc(80px);
    font-weight: 1000;
    line-height: calc(110 / 98);
    text-transform: uppercase;
    color: $neon;
    margin: 0 auto;


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

  &__heading + &__paragraph {
    margin-top: 20px;
  }

  &__r {
    font-family: 'dolcetto', serif;
  }

  &__t {
    font-family: 'ofform', serif;
    font-size: rem-calc(100px);

    @include breakpoint(medium) {
      font-size: rem-calc(180px);
    }

    @include breakpoint(large) {
      font-size: rem-calc(206px);
    }
  }

  &__paragraph {
    max-width: 580px;
    margin: 0 auto;
  }

  &__cta {
    font-family: $font-primary;
    font-weight: 1000;
    font-size: rem-calc(40px);
    line-height: 100%;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    color: $neon;
    padding: 20px;
    border: 2px solid;
    border-radius: 100px;
    grid-column: span 12 / span 12;
    transition: $transition-default;

    @include breakpoint(large) {
      grid-column: span 6 / span 6;
    }

    &:hover {
      background-color: $gold;
    }
  }

  &__cta + &__cta {
    margin-top: 20px;

    @include breakpoint(large) {
      margin-top: 0;
    }
  }

  &__links {
    grid-column: span 12 / span 12;

    @include breakpoint(large) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__group {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include breakpoint(medium) {
      flex-direction: row;
      justify-content: space-between;
    }

    @include breakpoint(large) {
      justify-content: flex-start;
    }
  }

  &__group + &__utility-nav {
    margin-top: 64px;

    @include breakpoint(large) {
      margin-top: 0;
    }
  }

  &__logo {
    width: 240px;
    fill: $white;
    transition: $transition-default;

    @include breakpoint(medium) {
      width: 158px;
    }

    &:hover {
      fill: $neon;
    }
  }

  &__main-nav {
    display: flex;
    margin-top: 64px;

    @include breakpoint(medium) {
      margin-top: 0;
      margin-left: 64px;
    }

    li + li {
      margin-left: 32px;
    }

    a {
      @include heading-style-2();

      color: $white;
      text-decoration: none;
      transition: $transition-default;

      &:hover {
        color: $neon;
      }
    }
  }

  &__utility-nav {
    display: flex;
    justify-content: space-between;

    @include breakpoint(medium) {
      justify-content: flex-end;
    }

    @include breakpoint(large) {
      justify-content: flex-start;
    }

    li + li {
      margin-left: 36px;
    }

    a {
      font-family: $font-tertiary;
      font-size: rem-calc(18px);
      font-weight: 400;
      line-height: 120%;
      color: $white;
      text-decoration: none;
      transition: $transition-default;

      &:hover {
        color: $neon;
      }
    }
  }
}
</style>